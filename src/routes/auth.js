const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/loginn', authController.login);

module.exports = router