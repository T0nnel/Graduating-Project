const express = require('express');
const Product = require('../models/project');
const router = express.Router();

// Add a new product
router.post('/addproducts', async (req, res) => {
  const { description, location, harvestTime, price, contact } = req.body;

  const newProduct = new Product({ description, location, harvestTime, price, contact });
  
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;


