const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');
const adminController = require('../../../controllers/admin');
const {
  emailMiddleware,
  nameMiddleware,
  passwordMiddleware,
} = require('../../../middlewares/user');

const adminRouter = Router();

adminRouter.get('/', authMiddleware, adminController.getAllUsers);

adminRouter.post('/',
  authMiddleware,
  emailMiddleware,
  nameMiddleware,
  passwordMiddleware,
  adminController.register,
);

adminRouter.delete('/:id', authMiddleware, adminController.deleteUser);

module.exports = adminRouter;
