const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

const mediaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
      type: String,
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  cast: [String],
  ongoing: { type: Boolean, default: false },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Media', mediaSchema);