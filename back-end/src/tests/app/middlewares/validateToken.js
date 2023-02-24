const verifyToken = require("../verifyToken");

const validateToken = (req, res, next) => {
  const token = verifyToken(req.headers.authorization);
  if (token.message) return res.status(401).json({ message: token.message });
  if (token.role !== 'seller') return res.status(403).json({ message: 'Access denied' });
  next();
};

module.exports = validateToken;
