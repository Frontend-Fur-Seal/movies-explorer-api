const { router } = require('../config');

const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
