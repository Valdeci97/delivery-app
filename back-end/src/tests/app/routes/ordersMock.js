const { Router } = require('express');
const getEmailFromToken = require('../middlewares/getEmailFromToken');
const orderController = require('../../../controllers/sales');

const orderRouter = Router();

orderRouter.get('/', getEmailFromToken, orderController.getUserOrders);
orderRouter.get('/:id', getEmailFromToken, orderController.getUserOrdersById);

module.exports = orderRouter;
