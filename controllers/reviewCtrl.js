const Anime = require('../models/anime')

module.exports = {
    create,
    deleteReview,
    //edit function
}

function create(req, res) {
    Anime.findById(req.params.id, function (err, anime) {
        anime.reviews.push(req.body);
  
        anime.save(function (err) {
          if (err) {
            console.log(err);
          }
          res.redirect(`/anime/${anime._id}`);
        });
      }
    );
  }

  function deleteReview(req,res) {
    Anime.findById(req.params.animeId, function(err, anime) {

        anime.reviews.id(req.params.reviewId).remove()
        anime.reviews.id(req.params.reviewId).content = req.body.content
        anime.reviews.id(req.params.reviewId).rating = req.body.rating

        anime.save(function(err){
            if (err) console.log(err)
        })
    })
    res.redirect(`/anime/${req.params.animeId}`)
}

function updateReview(req,res) {
    Anime.findByIdAndUpdate(req.params.animeId, req.body)

    }
