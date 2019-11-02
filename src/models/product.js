const fs        = require('fs');
const path      = require('path');
const filename  = require('../utils/path.js');

const getPath = path.join(filename, 'data', 'products.json');

const getProductsFromFile = (cb) => {
  fs.readFile(getPath, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
}

module.exports = class Product {
  
  constructor(title){
    this.title = title;
  }
  save(){
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(getPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb){
    getProductsFromFile(cb);
  }
}
