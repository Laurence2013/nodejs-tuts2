const express       = require('express');
const pageNotFound  = require('../controllers/error.js');

const router = express.Router();

router.get('*', pageNotFound.get404);

module.exports = router;
