const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 45 * 60 * 1000, // 45 minutes
  max: 500, // Limit each IP to 100 requests per `window` (here, per 45 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

module.exports = { limiter };
