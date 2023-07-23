/* eslint-disable no-console */
require('dotenv').config();
const routes = require('./routes');

const {
  cors,
  express,
  mongoose,
  cookieParser,
  errors,
} = require('./utils/config');

const {
  requestLogger,
  errorLogger,
  // NotFoundError,
  ErrorHandler,
  PORT,
  MONGO_URL,
} = require('./utils/constants');

mongoose.connect(`${MONGO_URL}/bitfilmsdb`)
  .then(() => {
    console.log('connected to db');
  }).catch((err) => {
    console.log(err.message);
  });

const app = express();

/*
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
*/

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.options('*', cors());

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);

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
