const router = require('express').Router();
const { userUpdateChecker } = require('../utils/joiSchemas');

const {
  getMe,
  updateMe,
} = require('../controllers/users');

router.get('/me', getMe);
router.patch('/me', userUpdateChecker, updateMe);

module.exports = router;
