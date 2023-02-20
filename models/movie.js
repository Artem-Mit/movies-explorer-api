const mongoose = require("mongoose");

const urlExpression = /^(https?:\/\/)(www.?)?[\d\S]+#?$/i;

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    requred: true,
  },
  director: {
    type: String,
    requred: true,
  },
  duration: {
    type: Number,
    requred: true,
  },
  year: {
    type: String,
    requred: true,
  },
  description: {
    type: String,
    requred: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => urlExpression.exec(v),
      message: (props) => `${props.value} is not a valid link !`,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => urlExpression.exec(v),
      message: (props) => `${props.value} is not a valid link !`,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => urlExpression.exec(v),
      message: (props) => `${props.value} is not a valid link !`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movie", movieSchema);
