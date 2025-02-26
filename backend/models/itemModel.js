const mongoose = require('mongoose');

// Define the Schema for the Item
const itemSchema = new mongoose.Schema(
  {
    lab: {
      type: String,
      required: true,
      enum: ['LabA', 'LabB'], // Only LabA or LabB
    },
    location: {
      type: String,
      required: true,
      enum: [
        'CabinetA',
        'CabinetB',
        'Trolley',
        'Components', // LabA locations
        'Tool Storage1',
        'Tool Storage1B',
        'Tool Storage2',
        'Tool Storage2B', // LabB locations
      ],
    },
    section: {
      type: String,
      enum: [
        '3D Printing',
        'Electronics',
        'Control Systems',
        'Robots and Peripherals',
        'Pneumatics1',
        'Grippers2', 
        'Power Sources',
        'Cameras',
        'Staff1',
        'Staff2', 
      ],
      required: function () {
        // Section is required only for CabinetA and CabinetB
        return this.location === 'CabinetA' || this.location === 'CabinetB';
      },
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'DEMO',
        'LEVERS',
        'ROBOTICS',
        'RELAYS',
        'SENSORS',
        'MOTORS',
        'CIRCUITS',
        'ACTUATORS',
        'GRIPPERS',
      ],
    },
    adminUser: {
      type: String,
      required: true,
      trim: true, // Assuming admin's name or ID
    },
  },
  { timestamps: true }
); // Automatically add createdAt and updatedAt

// Create the model from the schema
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
