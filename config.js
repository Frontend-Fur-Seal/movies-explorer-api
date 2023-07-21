const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { celebrate, Joi } = require('celebrate');
const winston = require('winston');
const expressWinston = require('express-winston');
const isURL = require('validator/lib/isURL');
const isEmail = require('validator/lib/isEmail');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const router = require('express').Router();

const BadRequestError = require('./errors/BadRequestError');
const NotFoundError = require('./errors/NotFoundError');
const ForbiddenError = require('./errors/ForbiddenError');
const ConflictingRequestError = require('./errors/ConflictingRequestError');
const UnauthorizedError = require('./errors/UnauthorizedError');
const ErrorHandler = require('./errors/ErrorHandler');

const checkUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const {
  PORT,
  MONGO_URL,
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
  cors,
  express,
  mongoose,
  bcrypt,
  jwt,
  isURL,
  router,
  isEmail,
  cookieParser,
  errors,
  ErrorHandler,
  BadRequestError,
  NotFoundError,
  ForbiddenError,
  ConflictingRequestError,
  UnauthorizedError,
  celebrate,
  Joi,
  winston,
  expressWinston,
  checkUrl,
  PORT,
  MONGO_URL,
  NODE_ENV,
  JWT_SECRET,
};
