const express = require('express');
const { userController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/', userController.createNewUser);
userRouter.get('/', authMiddleware.routerValidateToken, userController.getAllUser);

module.exports = userRouter; 