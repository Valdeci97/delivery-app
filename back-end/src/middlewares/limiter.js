const { rateLimit } = require('express-rate-limit');

const ONE_SECOND_IN_MS = 1000;
const MAX_REQUESTS = 50;
const MESSAGE = `You have exceeded ${MAX_REQUESTS} requests per second`;

module.exports = rateLimit({
  windowMs: ONE_SECOND_IN_MS,
  max: MAX_REQUESTS,
  message: MESSAGE,
  standardHeaders: true,
  legacyHeaders: false,
});
