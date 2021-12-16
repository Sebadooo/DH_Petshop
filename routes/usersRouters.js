var express = require('express');
var router = express.Router();

/* Ir a crear cuenta */
router.get('/', function(req, res, next) {
    res.render('crearCuenta', { title: 'Express' });
});

/* Ir a inicar sesion */
router.get('/', function(req, res, next) {
    res.render('iniciarSesion', { title: 'Express' });
});

/* GET users listing */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* Ir a carrito */
router.get('/', function(req, res, next) {
    res.render('carrito', { title: 'Express' });
});

module.exports = router;