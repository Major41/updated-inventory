import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../../API/Api';
const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students (users with role 'user') from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await API.get(
          '/api/users/getstudents'
        );
        setStudents(response.data.users);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="bg-gray-50 p-6 shadow-lg rounded-xl w-[90%] mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Students List
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Name
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Email
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Role
                </th>
                <th className="py-4 px-6 text-center text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student._id}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } hover:bg-blue-50 transition`}
                >
                  <td className="py-4 px-6 text-sm text-gray-700">
                    {student.name}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">
                    {student.email}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700 capitalize">
                    {student.role}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button className="text-blue-600 font-medium hover:underline">
                      View
                    </button>
                    <button className="text-red-600 font-medium ml-4 hover:underline">
                      Delete
                    </button>
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

export default StudentList;
