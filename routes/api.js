var users_router = require('./api/users.js');
var express = require('express');
var router = express.Router();

router.use('/users', users_router);

module.exports = router;
