const {
  mongoose,
  BadRequestError,
  NotFoundError,
  ForbiddenError,
} = require('../config');

const Movie = require('../models/movie');

const getMovies = (req, res, next) => {
  Movie.find({}).sort({ createdAt: -1 })
    // .populate('owner')
    .then((movie) => res.send({ movie }))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const newMovieData = req.body;
  newMovieData.owner = req.user._id;
  Movie.create(newMovieData)
    // .then((newMovie) => newMovie.populate('owner'))
    .then((movie) => res.send({ data: movie }))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequestError('Введены некорректные данные'));
      } else {
        next(err);
      }
    });
};

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .orFail(() => next(new NotFoundError('Такого фильма нет в базе')))
    .then((movie) => {
      if (movie.owner.toString() !== req.user._id) {
        next(new ForbiddenError('Недостаточно прав'));
        return;
      }
      movie.deleteOne()
        .then((delMovie) => {
          res.send(delMovie);
        })
        .catch((err) => next(err));
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        next(new BadRequestError('Введены некорректные данные'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
