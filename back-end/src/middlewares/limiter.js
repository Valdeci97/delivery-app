const { rateLimit } = require('express-rate-limit');

const TWENTY_FOUR_HOURS_IN_MS = 24 * 60 * 60 * 1000;
const MAX_REQUESTS = 100;
const MESSAGE = `You have exceeded ${MAX_REQUESTS} requests in 24 hours`;

module.exports = rateLimit({
  windowMs: TWENTY_FOUR_HOURS_IN_MS,
  max: MAX_REQUESTS,
  message: MESSAGE,
  standardHeaders: true,
  legacyHeaders: false,
});
