const { Router } = require('express');
const getEmailFromToken = require('../middlewares/getEmailFromToken');
const orderController = require('../../../controllers/sales');
const validateToken = require('../middlewares/validateToken');

const sellerOrderRouter = Router();

sellerOrderRouter.get('/', getEmailFromToken, orderController.getSellerOrders);
sellerOrderRouter.get('/:id', getEmailFromToken, orderController.getsellerOrdersById);
sellerOrderRouter.patch('/start/:id', validateToken, orderController.startingOrder);
sellerOrderRouter.patch('/leave/:id', validateToken, orderController.leavingForDelivery);
sellerOrderRouter.patch('/delivered/:id', validateToken, orderController.orderDelivered);

module.exports = sellerOrderRouter;
