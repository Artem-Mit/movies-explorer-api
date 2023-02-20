const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../utils/config");

const {
  USER_DOES_NOT_EXIST,
  WRONG_USER_ID,
  VALIDATION_ERROR_MESSAGE,
  WRONG_AUTH_DATA_MESSAGE,
} = require("../utils/constatnts");
const NotFoundError = require("../errors/notFoundError");
const ValidationError = require("../errors/validationError");
const AuthError = require("../errors/authError");

const getMe = async (req, res, next) => {
  try {
    const me = await User.findById(req.user._id);
    if (me === null) {
      throw new NotFoundError(USER_DOES_NOT_EXIST);
    }
    res.send(me);
  } catch (err) {
    if (err.name === "CastError") {
      next(new ValidationError(WRONG_USER_ID));
      return;
    }
    next(err);
  }
};

const updateMe = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name: req.body.name, email: req.body.email },
      { new: true, runValidators: true },
    );
    res.send(updatedUser);
  } catch (err) {
    if (err.name === "ValidationError") {
      next(new ValidationError(VALIDATION_ERROR_MESSAGE));
      return;
    }
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hash, name });
    const newUserData = newUser.toObject();
    delete newUserData.password;
    res.send({ newUser: newUserData });
  } catch (err) {
    if (err.name === "ValidationError") {
      next(new ValidationError(VALIDATION_ERROR_MESSAGE));
      return;
    }
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new AuthError(WRONG_AUTH_DATA_MESSAGE);
    }
    const comparedPass = await bcrypt.compare(password, user.password);
    if (!comparedPass) {
      throw new AuthError(WRONG_AUTH_DATA_MESSAGE);
    }
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("jwt", token, { maxAge: 3600000 * 24 * 7, httpOnly: true }).send({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getMe,
  updateMe,
  createUser,
  login,
};
