const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/productsCtlr');

/* GET ALL PRODUCTS (GET)*/
router.get('/products', productsCtrl.index);

/* CREATE A PRODUCT (GET/POST)*/
router.get('/prodCreate', productsCtrl.create);
router.post('/prodCreate', productsCtrl.store);

/* PRODUCT DETAIL (GET)*/
router.get('/detail/:id', productsCtrl.detail);

/* GET EDIT PRODUCT (GET/PUT)*/
router.get('/edit/:id', productsCtrl.edit);
router.put('/edit/:id', productsCtrl.update);

/* GET DELETE PRODUCT (DELETE)*/
router.delete('/delete/:id', productsCtrl.destroy);


module.exports = router;