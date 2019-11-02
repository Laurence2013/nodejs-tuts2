const Product = require('../../models/product.js');

exports.getAddProducts = (req,res,next) => {
  res.render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduce: true });
}

exports.getProducts = (req,res,next) => {
  res.render('/products', {pageTitle: 'Products'});
}

exports.postAddProducts = (req,res,next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}
