import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API from '../../API/Api';

const ItemForm = () => {
  const [lab, setLab] = useState('');
  const [location, setLocation] = useState('');
  const [section, setSection] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [adminUser, setAdminUser] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const locationOptions = {
    LabA: ['CabinetA', 'CabinetB', 'Trolley', 'Components'],
    LabB: [
      'Tool Storage1',
      'Tool Storage1B',
      'Tool Storage2',
      'Tool Storage2B',
    ],
  };

  const sectionOptions = {
    CabinetA: [
      '3D Printing',
      'Electronics',
      'Control Systems',
      'Robots and Peripherals',
      'Pneumatics1',
      'Grippers2',
    ],
    CabinetB: ['Power Sources', 'Cameras', 'Staff1', 'Staff2'],
  };

  const categoryOptions = [
    'DEMO',
    'LEVERS',
    'ROBOTICS',
    'RELAYS',
    'SENSORS',
    'MOTORS',
    'CIRCUITS',
    'ACTUATORS',
    'GRIPPERS',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Loading state
    setLoading(true);

    // Prepare the data to send
    // const formData = {
    //   lab,
    //   location,
    //   section,
    //   name,
    //   description,
    //   quantity: parseInt(quantity, 10), // Ensure quantity is a number
    //   category,
    //   adminUser,
    // };

    try {
      // Make the API request using Axios
      const response = await API.post('/api/items/add', {
        lab,
        location,
        section,
        name,
        description,
        quantity: parseInt(quantity, 10), // Ensure quantity is a number
        category,
        adminUser,
      });

      // Handle the response
      if (response.status === 200 || response.status === 201) {
        toast.success('Item added successfully!');
        // Reset the form fields
        setLab('');
        setLocation('');
        setSection('');
        setName('');
        setDescription('');
        setQuantity('');
        setCategory('');
        setAdminUser('');
      }
      navigate('/Staff/')
    } catch (error) {
      console.log(
        'Error connecting to the API:',
        error.response?.data || error.message
      );
      toast.error('An error occurred while adding the item.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl text-black mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Add Item</h2>

        <div className="space-y-2">
          <label htmlFor="lab" className="block text-gray-600 font-medium">
            Choose Lab
          </label>
          <select
            id="lab"
            value={lab}
            onChange={(e) => setLab(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Lab</option>
            <option value="LabA">LabA</option>
            <option value="LabB">LabB</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="block text-gray-600 font-medium">
            Choose Location
          </label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Location</option>
            {locationOptions[lab]?.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {(location === 'CabinetA' || location === 'CabinetB') && (
          <div className="space-y-2">
            <label
              htmlFor="section"
              className="block text-gray-600 font-medium"
            >
              Choose Section
            </label>
            <select
              id="section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Section</option>
              {sectionOptions[location]?.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="category" className="block text-gray-600 font-medium">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Category</option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-600 font-medium">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="block text-gray-600 font-medium"
          >
            Item Description
          </label>
          <textarea
            id="description"
            placeholder="Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            rows={4}
            required
          ></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="quantity" className="block text-gray-600 font-medium">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-600 font-medium">
            Admin Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Admin Name"
            value={adminUser}
            onChange={(e) => setAdminUser(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full ${
            loading
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-500 hover:bg-indigo-600'
          } text-white font-medium py-2 rounded-md transition`}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Item'}
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
