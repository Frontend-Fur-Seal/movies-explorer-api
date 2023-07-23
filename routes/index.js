const { router } = require('../utils/config');

const {
  NotFoundError,
  userRouter,
  movieRouter,
  auth,
  login,
  createUser,
  logout,
  validationSignin,
  validationSignup,
} = require('../utils/constants');

router.post('/signin', validationSignin, login);
router.post('/signup', validationSignup, createUser);
router.get('/signout', auth, logout);

router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);

router.use('/*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
