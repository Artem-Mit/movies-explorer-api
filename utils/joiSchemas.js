const { celebrate, Joi } = require('celebrate');

const movieChecker = celebrate({
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
});

const movieIdChecker = celebrate({
  params: {
    movieId: Joi.string().hex(),
  },
});

const singInChecker = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const signUpChecker = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const userUpdateChecker = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports = {
  movieChecker,
  movieIdChecker,
  singInChecker,
  signUpChecker,
  userUpdateChecker,
};
