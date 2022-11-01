const express = require('express');
const { postController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const postRouter = express.Router();

postRouter.get('/', authMiddleware.routerValidateToken, postController.getPost);

module.exports = postRouter; 