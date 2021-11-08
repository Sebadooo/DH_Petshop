var express = require('express');
var router = express.Router();

/* Ir a formulario para crear cuenta. */
router.get('/', function(req, res, next) {
    res.render('crearCuenta', { title: 'Express' });
});

module.exports = router;