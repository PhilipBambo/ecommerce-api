const Product = require('../models/productModel');

// Get all products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Add new product (admin only)
const addProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const product = await Product.create({ name, description, price, stock });
  res.status(201).json(product);
};

module.exports = { getProducts, addProduct };
