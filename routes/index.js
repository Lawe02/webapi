var express = require('express');
var router = express.Router();

var home_controller = require('../controller/homeController');

router.get('/', home_controller.index);
router.get('/data', home_controller.data);

module.exports = router;