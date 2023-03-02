const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

const loginRouter = require('../routes/login');
const registerRouter = require('../routes/register');
const productsRouter = require('../routes/products');
const adminRouter = require('../routes/admin');
const salesRouter = require('../routes/sales');
const { orderRouter, sellerOrderRouter } = require('../routes/orders');
const sellerRouter = require('../routes/seller');
const errorMidleware = require('../middlewares/error');
const limiter = require('../middlewares/limiter');
const swaggerDocument = require('../utils/swagger/swagger.json');

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(limiter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer/products', productsRouter);
app.use('/admin/manage', adminRouter);
app.use('/sales', salesRouter);
app.use('/customer/orders', orderRouter);
app.use('/seller/orders', sellerOrderRouter);
app.use('/seller', sellerRouter);
app.use(express.static('public'));
app.use(errorMidleware);

module.exports = app;
