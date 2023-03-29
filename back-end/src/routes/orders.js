const { Router } = require('express');
const {
  getUserOrders,
  getSellerOrders,
  getUserOrdersById,
  getsellerOrdersById,
  startingOrder,
  leavingForDelivery,
  orderDelivered,
} = require('../controllers/sales');
const { getEmailFromToken, validateToken, validateDeliveredOrder } = require('../middlewares/user');

const orderRouter = Router();
const sellerOrderRouter = Router();

orderRouter.get('/', getEmailFromToken, getUserOrders);
orderRouter.get('/:id', getEmailFromToken, getUserOrdersById);
sellerOrderRouter.get('/', getEmailFromToken, getSellerOrders);
sellerOrderRouter.get('/:id', getEmailFromToken, getsellerOrdersById);
sellerOrderRouter.patch('/start/:id', validateToken, startingOrder);
sellerOrderRouter.patch('/leave/:id', validateToken, leavingForDelivery);
sellerOrderRouter.patch('/delivered/:id', validateDeliveredOrder, orderDelivered);

module.exports = { orderRouter, sellerOrderRouter };
