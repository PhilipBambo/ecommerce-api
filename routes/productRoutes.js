const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getProducts);
router.post('/', protect, addProduct);

module.exports = router;
