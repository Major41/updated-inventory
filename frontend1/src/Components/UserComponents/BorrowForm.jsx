import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
import API from '../../API/Api';
const BorrowForm = () => {
  const { user } = useAuth();
  const [equipmentName, setEquipmentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]); // Store available items
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await API.get('/api/items/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error.message);
      }
    };
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate email
    if (studentEmail !== user?.email) {
      alert('Please use your own email');
      setLoading(false);
      return;
    }

    // Find the selected equipment
    const selectedItem = items.find(item => item.name.toLowerCase() === equipmentName.toLowerCase());

    if (!selectedItem) {
      alert('Equipment not found');
      setLoading(false);
      return;
    }

    if (quantity > selectedItem.quantity) {
      alert(`Only ${selectedItem.quantity} items available. Cannot borrow more.`);
      setLoading(false);
      return;
    }

    try {
      await API.post(
        '/api/borrow',
        {
          studentName,
          equipmentName,
          studentEmail,
          returnDate,
          quantity,
        },
        { withCredentials: true }
      );

      // Update item quantity locally after a successful request
      setItems(prevItems =>
        prevItems.map(item =>
          item.name.toLowerCase() === equipmentName.toLowerCase()
            ? { ...item, quantity: item.quantity - quantity }
            : item
        )
      );

      navigate('/Student/borrowed');
    } catch (error) {
      console.error('Error borrowing item:', error);
      alert('Failed to borrow item');
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Borrow Equipment</h2>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-5">
          <div>
            <label className="block font-semibold">Equipment Name</label>
            <input
              type="text"
              value={equipmentName}
              onChange={(e) => setEquipmentName(e.target.value)}
              required
              className="w-full p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <label className="block font-semibold">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold">Your Name</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold">Your Email</label>
            <input
              type="email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold">Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
          >
            {loading ? 'Submitting...' : 'Borrow'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BorrowForm;
