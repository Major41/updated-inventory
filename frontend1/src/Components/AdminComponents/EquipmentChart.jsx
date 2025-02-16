import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EquipmentChart = () => {
  // Dummy data for equipment categories and quantities
  const data = {
    labels: ['DEMO', 'LEVERS', 'ROBOTICS', 'RELAYS', 'SENSORS', 'MOTORS', 'CIRCUITS', 'ACTUATORS', 'GRIPPERS'],
    datasets: [
      {
        label: 'Total Equipment',
        data: [120, 150, 100, 180, 130, 170, 160, 190, 140], // Dummy quantities for total equipment
        backgroundColor: 'blue', // Color for total equipment
        borderColor: 'blue', // Border color
        borderWidth: 1,
      },
      {
        label: 'Approved Equipment',
        data: [100, 120, 80, 150, 110, 140, 130, 170, 120], // Dummy quantities for approved equipment
        backgroundColor: 'skyblue', // Color for approved equipment
        borderColor: 'skyblue', // Border color
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Equipment by Category',
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Quantity',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="">
    <div className="w-[90%] mx-auto bg-white p-6 shadow-md rounded-lg my-5">
      <h2 className="text-xl font-bold mb-4 text-center">Equipment Categories Chart</h2>
      <Bar data={data} options={options} />
    </div>
  
    </div>
  );
};

export default EquipmentChart;
