const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars'); // for handlebars

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// for pug
// app.set('view engine', 'pug');
// app.set('views', 'views');

// for handlebars
// app.engine('handlebars', expressHbs());

// app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'handlebars'})); // for handlebars layouts
// app.set('view engine', 'handlebars');
// app.set('views', 'views');

//for ejs

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { docTitle: 'Page Not Found' });
});

app.listen(3000);

