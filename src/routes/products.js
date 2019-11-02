const express     = require('express');
const products    = require('../controllers/products.js');

const router      = express.Router();

router.get('/products', products.getProducts);

module.export = router;
