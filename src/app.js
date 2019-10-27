const express = require('express');

const app = express();

app.use('/',(req,res,next) => {
  console.log('In the middleware 3');
  next();
});

app.use('/add-product',(req,res,next) => {
  console.log('In the middleware 1');
  res.send('<h1>Hello from Add Product page</h1>');
});

app.use('/',(req,res,next) => {
  console.log('In the middleware 2');
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);

