const review = require('../models/anime')


module.exports = {
    create,
    deleteReview,
    //edit function
}

function create(req, res) { 
    review.create(req.body, function (err, ar) { 
    //console.log(ar);
        //anime.reviews.push(req.body);
        //anime.save(function (err) {
        //   if (err) {
        //     console.log(err);
        //   }
          res.redirect(`/details/${req.params.mal_id}`);
        // });
        console.log(req.body)
      })
    };

  function deleteReview(req,res) {
    review.findById(req.params.mal_id, function(err, anime) {

        review.reviews.mal_id(req.params.mal_id).remove()
        review.reviews.mal_id(req.params.mal_id).content = req.body.review
        review.reviews.mal_id(req.params.mal_id).rating = req.body.rating

        review.save(function(err){
            if (err) console.log(err)
        })
    }) //Redo route
    res.redirect(`/details/${req.params.mal_id}`)
}

function updateReview(req,res) { //Event handler function(?)
    Anime.findByIdAndUpdate(req.params.animeId, req.body)

    }
