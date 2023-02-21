const verifyToken = require('../verifyToken');

const getEmailFromToken = (req, res, next) => {
  const token = verifyToken(req.headers.authorization);
  if (token.message) return res.status(401).json({ message: token.message });
  req.body = { email: token.email };
  next();
}

module.exports = getEmailFromToken;
