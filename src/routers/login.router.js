const express = require('express');
const { authController } = require('../controllers');

const loginRouter = express.Router();

loginRouter.post('/', authController.authLogin);

module.exports = loginRouter; 