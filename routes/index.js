const { router } = require('../utils/config');

const {
  NotFoundError,
  userRouter,
  movieRouter,
  auth,
} = require('../utils/constants');

router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);

router.use('/*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
