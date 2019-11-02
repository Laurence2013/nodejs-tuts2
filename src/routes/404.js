const express       = require('express');
const path          = require('path');
const pageNotFound  = require('../controllers/error.js');

const router = express.Router();

router.get('*', pageNotFound.get404);

module.exports = router;
