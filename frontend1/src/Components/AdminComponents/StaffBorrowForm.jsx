import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
import API from '../../API/Api';

const StaffBorrowForm = () => {
  const { user } = useAuth();
  const [equipmentName, setEquipmentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]); // Store available items
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available items
    const fetchItems = async () => {
      try {
        const response = await API.get('/api/items/');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error.message);
      }
    };
    fetchItems();

    // Set return date (2 weeks from today)
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(twoWeeksLater.getDate() + 14);
    setReturnDate(twoWeeksLater.toISOString().split('T')[0]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Find selected equipment
    const selectedItem = items.find(
      (item) => item.name.toLowerCase() === equipmentName.toLowerCase()
    );

    if (!selectedItem) {
      alert('Equipment not found');
      setLoading(false);
      return;
    }

    if (quantity > selectedItem.quantity) {
      alert(`Only ${selectedItem.quantity} items available.`);
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

      // Update item quantity locally
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.name.toLowerCase() === equipmentName.toLowerCase()
            ? { ...item, quantity: item.quantity - quantity }
            : item
        )
      );

      navigate('/staff/borrowed');
    } catch (error) {
      console.error('Error borrowing item:', error);
      alert('Failed to borrow item');
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Assign Student Equipment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Equipment Name */}
          <div>
            <label className="block font-semibold text-gray-700">
              Equipment Name
            </label>
            <input
              type="text"
              value={equipmentName}
              onChange={(e) => setEquipmentName(e.target.value)}
              required
              className="w-full p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-semibold text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              min="1"
              className="w-full p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* User Name (Read-only) */}
          <div>
            <label className="block font-semibold text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="w-full p-2 border rounded-lg bg-gray-200 text-gray-600"
            />
          </div>

          {/* User Email (Read-only) */}
          <div>
            <label className="block font-semibold text-gray-700">
              Student Email
            </label>
            <input
              type="email"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-lg bg-gray-200 text-gray-600"
            />
          </div>

          {/* Return Date (Auto-filled, Read-only) */}
          <div>
            <label className="block font-semibold text-gray-700">
              Return Date
            </label>
            <input
              type="date"
              value={returnDate}
              readOnly
              className="w-full p-2 border rounded-lg bg-gray-200 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !equipmentName || quantity < 1}
            className={`w-full p-2 rounded-lg text-white font-semibold transition 
              ${
                loading || !equipmentName || quantity < 1
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
          >
            {loading ? 'Submitting...' : 'Borrow'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StaffBorrowForm;
