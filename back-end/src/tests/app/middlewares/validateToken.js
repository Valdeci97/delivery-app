const verifyToken = require("../verifyToken");

const validateToken = (req, res, next) => {
  const token = verifyToken(req.headers.authorization);
  if (token.message) return res.status(401).json({ message: token.message });
  next();
};

module.exports = validateToken;
