const path = require('path');

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("shop js", adminData.products);
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'My Shop', path: '/', hasProducts: products.length > 0, activeShop: true, productCSS: false});
});

module.exports = router;