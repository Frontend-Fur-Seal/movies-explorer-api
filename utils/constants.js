const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const ConflictingRequestError = require('../errors/ConflictingRequestError');
const UnauthorizedError = require('../errors/UnauthorizedError');
const ErrorHandler = require('../errors/ErrorHandler');

const checkUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const {
  PORT,
  MONGO_URL,
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
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
