const express = require('express');

const app = express();

app.use('/users',(req,res,next) => {
  console.log('Hello 2');
  res.send('<h2>Hello world 2</h2>');
});

app.use('/',(req,res,next) => {
  console.log('Hello 1');
  res.send('<h2>Hello world 1</h2>');
});

app.listen(3000);

