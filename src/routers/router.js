const express = require('express');
const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const routerValidateToken = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use(routerValidateToken);
routers.use('/user', userRouter);

module.exports = routers; 