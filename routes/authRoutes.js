const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { singInChecker, signUpChecker } = require('../utils/joiSchemas');

router.post('/signin', singInChecker, login);

router.post('/signup', signUpChecker, createUser);

module.exports = router;
