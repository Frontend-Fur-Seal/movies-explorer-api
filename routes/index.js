const { router, NotFoundError } = require('../config');

const userRouter = require('./users');
const movieRouter = require('./movies');

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('/*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
