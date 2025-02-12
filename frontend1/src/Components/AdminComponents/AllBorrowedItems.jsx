import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext/AuthContext';
import ApproveRequest from './ApproveRequest';
import API from '../../API/Api';

const AllBorrowedItems = () => {
  const { user } = useAuth();
  const [borrowedItems, setBorrowedItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBorrowedItems = async () => {
 
      if (!user.email) return; // Avoid making request if email is not available yet

      try {
        const response = await API.get(
          '/api/borrows'
        );
        setBorrowedItems(response.data);
       
    
      } catch (err) {
        setError(
          err.response
            ? err.response.data.message
            : 'Error fetching borrowed items'
        );
      }
    };

    fetchBorrowedItems();
  }, []); // Run this effect when user.email changes

  

  return (
    <div className="w-[90%] mx-auto px-4 py-8 overflow-hidden ">
      <h1 className="text-3xl font-semibold mb-6">Borrowed Equipment</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {!error && borrowedItems.length === 0 && (
        <p className="text-gray-500">Loading...</p>
      )}
      {!error && borrowedItems.length > 0 && (
        <div className="overflow-x-auto shadow-xl rounded-lg">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Equipment
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Student Email
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Return Date
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Quantity
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Approve
                </th>
              </tr>
            </thead>
            <tbody>
              {borrowedItems.map((borrow) => (
                <tr key={borrow._id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {borrow.equipmentName}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {borrow.studentEmail}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(borrow.returnDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {borrow.quantity}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-white ${
                        borrow.status === 'returned'
                          ? 'bg-green-500'
                          : borrow.status === 'approved'
                          ? 'bg-blue-500'
                          : 'bg-yellow-500'
                      }`}
                    >
                      {borrow.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    {/* Display the approve button only if the status is not already approved */}
                    {borrow.status !== 'approved' ? (
                      <ApproveRequest borrowId={borrow._id} />
                    ) : (
                      <span className='cursor-pointer'>Approved</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllBorrowedItems;
