const verifyToken = require('../verifyToken');

const getUser = (req, res, next) => {
  const token = verifyToken(req.headers.authorization);
  if (token.message) return res.status(401).json({ message: token.message });
  req.body = { ...req.body, userId: token.id };
  next();
};

module.exports = getUser;
