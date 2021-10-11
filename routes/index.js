var express = require('express');
var router = express.Router();

var home_controller = require('../controller/HomeController');

router.get('/', home_controller.index);

module.exports = router;