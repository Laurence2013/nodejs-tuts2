const Product = require('../../models/product.js');

exports.getProducts = (req,res,next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', { prods: products, pageTitle: 'Shop', path: '/', activeShop: true, productCSS: true });
  });
}
