const { router, NotFoundError } = require('../config');

const auth = require('../middlewares/auth');

const userRouter = require('./users');
const movieRouter = require('./movies');

router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);

router.use('/*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
