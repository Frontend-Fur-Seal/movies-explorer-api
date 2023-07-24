const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const ConflictingRequestError = require('../errors/ConflictingRequestError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const ErrorHandler = require('../errors/ErrorHandler');
const {
  validationSignin,
  validationSignup,
  validationCreateCard,
  validateCardId,
  validationUpgradeUser,
} = require('../middlewares/celebrateValidation');

module.exports = {
  validationSignin,
  validationSignup,
  validationCreateCard,
  validateCardId,
  validationUpgradeUser,
  ErrorHandler,
  BadRequestError,
  NotFoundError,
  ForbiddenError,
  ConflictingRequestError,
  UnauthorizedError,
};
