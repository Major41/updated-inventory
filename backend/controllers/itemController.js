const Item = require('../models/itemModel');

// CREATE a new item
const createItem = async (req, res) => {
  try {
    const {
      lab,
      location,
      section,
      name,
      description,
      quantity,
      category,
      adminUser,
    } = req.body;


    // Validate if required fields are present
    if (
      !lab ||
      !location ||
      !name ||
      !description ||
      !quantity ||
      !category ||
      !adminUser
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if section is required for cabinetA
    if ((location === 'cabinetA' || location === 'cabinetB') && !section) {
      return res.status(400).json({
        message: 'Section is required for items in cabinetA',
      });
    }

    // Create a new item object
    const newItem = new Item({
      lab,
      location,
      section,
      name,
      description,
      quantity,
      category,
      adminUser,
    });



    // Save the new item to the database
    await newItem.save();

    res.status(201).json({ message: 'Item added successfully', item: newItem });
    console.log('Item added');
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// READ all items (Admin access)
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();

    if (!items.length) {
      return res.status(404).json({ message: 'No items found' });
    }

    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// READ a single item by ID
const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// UPDATE an item by ID
const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      lab,
      location,
      section,
      name,
      description,
      quantity,
      category,
      adminUser,
    } = req.body;

    // Validate if required fields are present
    if (
      !lab ||
      !location ||
      !name ||
      !description ||
      !quantity ||
      !category ||
      !adminUser
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Find and update the item by ID
    const updatedItem = await Item.findByIdAndUpdate(
      id,
      {
        lab,
        location,
        section,
        name,
        description,
        quantity,
        category,
        adminUser,
      },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res
      .status(200)
      .json({ message: 'Item updated successfully', item: updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE an item by ID
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the item by ID
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// SEARCH items by category (optional)
const searchItemsByCategory = async (req, res) => {
  try {
    const { category } = req.query;

    if (!category) {
      return res
        .status(400)
        .json({ message: 'Category is required for search' });
    }

    const items = await Item.find({ category });

    if (!items.length) {
      return res
        .status(404)
        .json({ message: `No items found for category ${category}` });
    }

    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  searchItemsByCategory,
  deleteItem,
  getAllItems,
  getItemById,
  updateItem,
  createItem,
};
