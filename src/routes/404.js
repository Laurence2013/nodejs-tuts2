const express = require('express');
const path    = require('path');
const rootdir = require('../utils/path');

const router = express.Router();

router.get('*',(req,res,next) => {
  res.render('404', {pageTitle: '404 - Page Not Found'});
});

module.exports = router;
