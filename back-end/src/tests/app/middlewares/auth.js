const verifyToken = require('../verifyToken');

const authMiddleware = (req, res, next) => {
  const verify = verifyToken(req.headers.authorization);
  if (verify.message) return res.status(401).json({ message: verify.message });
  if (verify.role !== 'administrator') {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
}

module.exports = authMiddleware;
