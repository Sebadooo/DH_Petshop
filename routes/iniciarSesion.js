var express = require('express');
var router = express.Router();

/* Ir a formulario para inicar sesion. */
router.get('/', function(req, res, next) {
    res.render('iniciarSesion', { title: 'Express' });
});

module.exports = router;