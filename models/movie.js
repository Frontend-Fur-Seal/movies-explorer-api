const {
  mongoose,
  isURL,
} = require('../config');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  duration: {
    type: Number,
    require: true,
  },
  year: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
    validate: [{ validator: (value) => isURL(value) }],
  },
  trailerLink: {
    type: String,
    require: true,
    validate: [{ validator: (value) => isURL(value) }],
  },
  thumbnail: {
    type: String,
    require: true,
    validate: [{ validator: (value) => isURL(value) }],
  },
  owner: {
    type: String,
  },
  movieId: {
    type: String,
  },
  nameRU: {
    type: String,
    require: true,
  },
  nameEN: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
