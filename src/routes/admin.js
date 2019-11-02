const express       = require('express');
const path          = require('path');
const getProducts   = require('../controllers/products.js');

const router    = express.Router();

router.get('/add-product', getProducts.getAddProducts);
router.post('/add-product',getProducts.postAddProducts);

module.exports = router;
