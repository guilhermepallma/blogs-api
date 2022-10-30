const express = require('express');
const { userController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/', userController.createNewUser);
userRouter.get('/', authMiddleware.routerValidateToken, userController.getAllUser);
userRouter.get('/:id', authMiddleware.routerValidateToken, userController.getById);

module.exports = userRouter; 