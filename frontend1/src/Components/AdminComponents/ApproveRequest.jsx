import React from 'react';
import axios from 'axios';
import API from '../../API/Api';
// Approve borrow function that calls the backend to approve the request
const approveBorrow = async (borrowId) => {
  try {
    const response = await API.patch(
      `/api/approve/${borrowId}`
    );
    if (response.status === 200) {
      alert('Request approved');
      // Optionally, refresh the list or update state to reflect the change
    }
  } catch (error) {
    console.error('Error approving borrow request:', error);
    alert('Failed to approve request');
  }
};

const ApproveRequest = ({ borrowId }) => {
  return (
    <button
      onClick={() => approveBorrow(borrowId)} // Trigger the approveBorrow function on button click
      className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
    >
      Approve
    </button>
  );
};

export default ApproveRequest;
