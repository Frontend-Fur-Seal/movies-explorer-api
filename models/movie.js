const {
  mongoose,
  isURL,
} = require('../utils/config');

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
    ref: 'user',
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
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
