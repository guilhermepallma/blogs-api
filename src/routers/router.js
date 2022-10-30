const express = require('express');
const categorieRouter = require('./categorie.router');
const loginRouter = require('./login.router');
const userRouter = require('./user.router');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/user', userRouter);
routers.use('/categories', categorieRouter);

module.exports = routers; 