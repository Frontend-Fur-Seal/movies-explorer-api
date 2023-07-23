const routes = require('../routes/index');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const ConflictingRequestError = require('../errors/ConflictingRequestError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const ErrorHandler = require('../errors/ErrorHandler');

const checkUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const userRouter = require('../routes/users');
const movieRouter = require('../routes/movies');
const auth = require('../middlewares/auth');
const { login, createUser, logout } = require('../controllers/users');
const { validationSignin, validationSignup } = require('../middlewares/celebrateValidation');
const { requestLogger, errorLogger } = require('../middlewares/logger');

const {
  PORT,
  MONGO_URL,
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
  routes,
  requestLogger,
  errorLogger,
  userRouter,
  movieRouter,
  auth,
  login,
  createUser,
  logout,
  validationSignin,
  validationSignup,
  ErrorHandler,
  BadRequestError,
  NotFoundError,
  ForbiddenError,
  ConflictingRequestError,
  UnauthorizedError,
  checkUrl,
  PORT,
  MONGO_URL,
  NODE_ENV,
  JWT_SECRET,
};
