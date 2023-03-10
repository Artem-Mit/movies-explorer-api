const jwt = require('jsonwebtoken');
const { AUTH_REQUIRED_MESSAGE } = require('../utils/constatnts');
const AuthError = require('../errors/authError');
const { JWT_SECRET } = require('../utils/config');

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new AuthError(AUTH_REQUIRED_MESSAGE);
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(err);
  }
  req.user = payload;
  next();
};

module.exports = auth;
