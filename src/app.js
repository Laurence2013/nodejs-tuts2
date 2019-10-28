const express     = require('express');
const bodyParser  = require('body-parser');
const adminData   = require('./routes/admin');
const shopRoutes  = require('./routes/shop');
const pNotFound   = require('./routes/404');
const path        = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(pNotFound);

app.listen(3000);

