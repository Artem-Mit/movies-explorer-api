const router = require('express').Router();
const { movieChecker, movieIdChecker } = require('../utils/joiSchemas');
const {
  createMovie,
  deleteMovie,
  getMovies,
} = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', movieChecker, createMovie);
router.delete('/:movieId', movieIdChecker, deleteMovie);

module.exports = router;
