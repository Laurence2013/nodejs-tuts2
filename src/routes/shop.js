const express   = require('express');
const path      = require('path');
const shop      = require('../controllers/products.js');

const router    = express.Router();

router.get('/', shop.getProducts);

module.exports = router;
