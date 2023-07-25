/* eslint-disable no-console */
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const routes = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./security/limiter');

const {
  ErrorHandler,
} = require('./utils/constants');

const {
  PORT,
  MONGO_URL,
} = process.env;

mongoose.connect(`${MONGO_URL}/bitfilmsdb`)
  .then(() => {
    console.log('connected to db');
  }).catch((err) => {
    console.log(err.message);
  });

const app = express();

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.options('*', cors());

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);

app.use(helmet());
app.use(limiter);

app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(ErrorHandler);

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${PORT}`);
});
