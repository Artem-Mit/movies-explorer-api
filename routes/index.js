const router = require("express").Router();
const authRoutes = require("./authRoutes");
const auth = require("../middlewares/auth");
const usersRouter = require("./usersRoutes");
const moviesRouter = require("./moviesRoutes");
const NotFoundError = require("../errors/notFoundError");
const { PAGE_NOT_FOUND } = require("../utils/constatnts");

router.use("", authRoutes);
router.use(auth);
router.use("/users", usersRouter);
router.use("/movies", moviesRouter);
router.use("*", (req, res, next) => {
  next(new NotFoundError(PAGE_NOT_FOUND));
});

module.exports = router;
