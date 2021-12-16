const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainCtlr');

/* GET home page. */
router.get('/', mainController.home);

router.get('/search', mainController.search);

module.exports = router;