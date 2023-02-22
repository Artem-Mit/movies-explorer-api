const { JsonWebTokenError } = require('jsonwebtoken');
const {
  DEFAULT_ERROR,
  DEFAULT_ERROR_MESSAGE,
  ALREADY_EXIST_CODE,
  ALREADY_EXIST_MESSAGE,
  AUTH_ERROR_CODE,
  AUTH_REQUIRED_MESSAGE,
} = require('../utils/constatnts');

const errorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    res.status(ALREADY_EXIST_CODE).send({ message: ALREADY_EXIST_MESSAGE });
    return;
  }
  if (err instanceof JsonWebTokenError) {
    res.status(AUTH_ERROR_CODE).send({ message: AUTH_REQUIRED_MESSAGE });
    return;
  }
  if (!err.statusCode) {
    res.status(DEFAULT_ERROR).send({ message: DEFAULT_ERROR_MESSAGE });
  } else {
    res.status(err.statusCode).send({ message: err.message });
  }
  next();
};

module.exports = errorHandler;
