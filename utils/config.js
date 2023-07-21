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
  celebrate,
  Joi,
  winston,
  expressWinston,
};
