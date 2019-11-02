const express   = require('express');
const shop      = require('../controllers/shop/index.js');

const router    = express.Router();

router.get('/', shop.getProducts);

module.exports = router;
