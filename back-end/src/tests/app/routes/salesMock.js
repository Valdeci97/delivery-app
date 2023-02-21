const { Router } = require('express');
const getUser = require('../middlewares/getUser');
const { saleMiddleware, saleProductsMiddleware } = require('../../../middlewares/sale');
const { createSale } = require('../../../controllers/sales');

const salesRouter = Router();

salesRouter.post('/', getUser, saleMiddleware, saleProductsMiddleware, createSale);

module.exports = salesRouter;
