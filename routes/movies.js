const { celebrate, Joi } = require("celebrate");
const router = require("express").Router();

const {
  createMovie,
  deleteMovie,
  getMovies,
} = require("../controllers/movies");

router.get("/", getMovies);
router.post("/", celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(/^https?:\/\//i),
    trailerLink: Joi.string().required().regex(/^https?:\/\//i),
    thumbnail: Joi.string().required().regex(/^https?:\/\//i),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovie);
router.delete("/:movieId", deleteMovie);

module.exports = router;
