const express       = require('express');
const path          = require('path');
const getProducts   = require('../../controllers/admin/products.js');

const router    = express.Router();

router.get('/admin/add-product', getProducts.getAddProducts);
router.post('/admin/add-product',getProducts.postAddProducts);

module.exports = router;
