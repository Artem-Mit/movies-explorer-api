const Movie = require('../models/movie');

const {
  MOVIE_DOES_NOT_EXIST,
  VALIDATION_ERROR_MESSAGE,
  FORBIDDEN_ERROR_MESSAGE,
} = require('../utils/constatnts');
const NotFoundError = require('../errors/notFoundError');
const ValidationError = require('../errors/validationError');
const ForbiddenError = require('../errors/forbiddenError');

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find({ owner: req.user._id });
    if (movies.length === 0) {
      throw new NotFoundError(MOVIE_DOES_NOT_EXIST);
    }
    res.send(movies);
  } catch (err) {
    next(err);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const movie = { ...req.body, owner: req.user._id };
    const createdMovie = await Movie.create(movie);
    res.send(createdMovie);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new ValidationError(VALIDATION_ERROR_MESSAGE));
      return;
    }
    next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const deletedMovie = await Movie.findById(req.params.movieId);
    if (deletedMovie === null) {
      throw new NotFoundError(MOVIE_DOES_NOT_EXIST);
    }
    const owner = deletedMovie.owner.toString();
    if (owner !== req.user._id) {
      throw new ForbiddenError(FORBIDDEN_ERROR_MESSAGE);
    }
    deletedMovie.deleteOne({ _id: deletedMovie._id });
    res.send(deletedMovie);
  } catch (err) {
    if (err.name === 'CastError') {
      next(new ValidationError(VALIDATION_ERROR_MESSAGE));
      return;
    }
    next(err);
  }
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
