const express = require('express');
const { userController } = require('../controllers');

const userRouter = express.Router();

userRouter.post('/', userController.createNewUser);

module.exports = userRouter; 