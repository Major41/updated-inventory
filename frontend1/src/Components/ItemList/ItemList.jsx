import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API from '../../API/Api';
const ItemList = () => {
  const [items, setItems] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const role = storedUser?.role;
  const fetchItems = async () => {
    try {
      const response = await API.get('/api/items/');
     
      setItems(response.data);
    } catch (error) {
      console.error(
        'Error fetching items:',
        error.message,
        error.response?.data
      );
    }
  }

  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/items/${id}`);
      alert('Item deleted successfully');
      fetchItems(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-6 bg-gray-50 text-gray-900 shadow-md rounded-lg w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Item List
      </h2>

      {/* Table Container */}
          {role === 'admin' && (
            <Link to='/staff/addItem' className="bg-green-600 py-1 text-white  text-right mb-4 font-semibold rounded-md  px-3">
              Add Item
            </Link>
          )}
      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item) => (
                <tr
                  key={item._id}
                  className="hover:bg-gray-100 transition duration-200 ease-in-out"
                >
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4 text-center">
                    {role === 'admin' && (
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
