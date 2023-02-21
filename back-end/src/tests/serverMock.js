const express = require('express');
const cors = require('cors');

const loginRouter = require('../routes/login');
const registerRouter = require('../routes/register');
const productsRouter = require('../routes/products');
const adminRouter = require('./app/routes/adminMock');
const salesRouter = require('./app/routes/salesMock');
const orderRouter = require('./app/routes/ordersMock');
const sellerOrderRouter = require('./app/routes/sellerOrderMock');
const sellerRouter = require('../routes/seller');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/costumer/products', productsRouter);
app.use('/admin/manage', adminRouter);
app.use('/sales', salesRouter);
app.use('/customer/orders', orderRouter);
app.use('/seller/orders', sellerOrderRouter);
app.use('/seller', sellerRouter);
app.use(errorMiddleware);

module.exports = app;
