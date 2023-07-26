const router = require('express').Router();
const { validateCardId, validationCreateCard } = require('../utils/constants');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', validationCreateCard, createMovie);
router.delete('/:movieId', validateCardId, deleteMovie);

module.exports = router;
