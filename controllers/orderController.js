const Order = require('../models/orderModel');
const Product = require('../models/productModel');

const createOrder = async (req, res) => {
  const { products } = req.body;
  if (!products || products.length === 0) return res.status(400).json({ message: 'No products' });

  let total = 0;
  for (const item of products) {
    const p = await Product.findById(item.product);
    total += p.price * item.quantity;
  }

  const order = await Order.create({ user: req.user._id, products, total });
  res.status(201).json(order);
};

module.exports = { createOrder };
