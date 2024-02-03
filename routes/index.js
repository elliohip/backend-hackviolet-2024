var express = require('express');
var router = express.Router();
var api_router = require('./api.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api', api_router);
module.exports = router;