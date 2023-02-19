var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
let landing = require('../controllers/landing/index');

/* GET home page. */
router.get('/', index.index);
router.get('/landing/', landing.landing_index);
router.post('/landing', landing.post_landing_index);

module.exports = router;
