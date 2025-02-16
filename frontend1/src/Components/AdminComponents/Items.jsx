import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext/AuthContext';
import API from '../../API/Api';
import { Link } from 'react-router-dom';
const ItemList = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth();

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

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Equipments</h2>
      <Link
        to="/staff/addItem"
        className="bg-green-600 py-1 text-white  text-right mb-4 font-semibold rounded-md  px-3"
      >
        Add Item
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] mx-auto -ml-4 md:ml-0">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item._id}
              className="bg-white border-t-2 border-blue-300 border-l-2 rounded-xl w-full shadow-lg py-2 flex flex-col items-center mx-6"
            >
              <div className="flex items-center justify-between px-5 gap-18 pb-1 border-b w-full">
                <p className="font-semibold"> {item.lab} </p>
                <p className="font-semibold"> {item.location} </p>
              </div>

              <div className="mt-10 w-full px-4 ">
                <h2 className="mb-2 font-semibold text-3xl"> {item.name} </h2>
                <h2 className="mb-2 font-bold text-blue-400">
                  {' '}
                  {item.section}{' '}
                </h2>

                <div>
                  <p>Total Quantity: {item.quantity} </p>
                  <p>Current Quantity: {item.quantity} </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ItemList;
