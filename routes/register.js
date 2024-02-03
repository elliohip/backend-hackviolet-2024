var express = require('express');
var router = express.Router();
const registerController = require('../controllers/register_controller');

router.post('/signup', registerController);

module.exports = router;