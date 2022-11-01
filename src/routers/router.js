const express = require('express');
const categorieRouter = require('./categorie.router');
const loginRouter = require('./login.router');
const postRouter = require('./post.router');
const userRouter = require('./user.router');

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/user', userRouter);
routers.use('/categories', categorieRouter);
routers.use('/post', postRouter);

module.exports = routers; 