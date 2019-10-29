const express     = require('express');
const bodyParser  = require('body-parser');
const adminData   = require('./routes/admin');
const shopRoutes  = require('./routes/shop');
const pNotFound   = require('./routes/404');
const path        = require('path');
const xhndlbars   = require('express-handlebars');

const app = express();

app.engine('handlebars', xhndlbars());
app.set('view engine', 'pug');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(pNotFound);

app.listen(3000);

