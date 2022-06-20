const Anime = require('../models/anime')

module.exports = {
    create,
    deleteReview,
    //edit function
}

function create(req, res) { 
    console.log('in create')
    Anime.findById(req.params.id, function (err, anime) { 
        console.log('inFindById');
        anime.reviews.push(req.body);
        console.log('after push');
        anime.save(function (err) {
          if (err) {
            console.log(err);
          }
          res.redirect('/details/:base64');
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
    }) //Redo route
    res.redirect(`/anime/${req.params.animeId}`)
}

function updateReview(req,res) { //Event handler function(?)
    Anime.findByIdAndUpdate(req.params.animeId, req.body)

    }
