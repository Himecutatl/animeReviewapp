const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const reviewContentSchema = new Schema ({
//   review: String,
// })

const reviewSchema = new Schema({
  // _id: String,
  mal_id: String,
  review: String,
  rating: {type: Number, min: 1, max: 5, default: 5},
  base64: String
  // user_id: String
}, 
  
);

//EDIT SCHEMA T0 MATCH PARAMETERS IN API 
// const animeSchema = new Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   synposis: {
//       type: String,
//   },
//   image_url: {
//     type: String
//   },
//   reviews: [reviewSchema]
// }, {
//   timestamps: true
// });

module.exports = mongoose.model('review', reviewSchema, 'review');