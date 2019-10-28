const express     = require('express');
const bodyParser  = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');
const pNotFound   = require('./routes/404');
const path        = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(pNotFound);

app.listen(3000);

