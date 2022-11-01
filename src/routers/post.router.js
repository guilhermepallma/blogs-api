const express = require('express');
const { postController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const postRouter = express.Router();

postRouter.get('/', authMiddleware.routerValidateToken, postController.getAllPost);
postRouter.get('/:id', authMiddleware.routerValidateToken, postController.getPostById);

module.exports = postRouter; 