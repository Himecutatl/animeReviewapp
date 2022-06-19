const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

//EDIT SCHEMA T0 MATCH PARAMETERS IN API 
const animeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  synposis: {
      type: String,
  },
  image_url: {
    type: String
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Anime', animeSchema);