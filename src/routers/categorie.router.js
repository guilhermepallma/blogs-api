const express = require('express');
const { categorieController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const categorieRouter = express.Router();

categorieRouter.post('/', authMiddleware.routerValidateToken,
categorieController.createNewCategorie);

categorieRouter.get('/', authMiddleware.routerValidateToken, 
categorieController.getAllCategorie);

module.exports = categorieRouter; 