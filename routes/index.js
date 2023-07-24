const router = require('express').Router();
const { validationSignin, validationSignup } = require('../utils/constants');
const auth = require('../middlewares/auth');

const { login, createUser, logout } = require('../controllers/users');
const userRouter = require('./users');
const movieRouter = require('./movies');

const {
  NotFoundError,
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
