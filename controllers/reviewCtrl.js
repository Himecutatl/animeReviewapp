const Media = require('../models/media')

module.exports = {
    create,
    deleteReview
}

function create(req, res) {
    Media.findById(req.params.id, function (err, media) {
        media.reviews.push(req.body);
  
        media.save(function (err) {
          if (err) {
            console.log(err);
          }
          res.redirect(`/media/${media._id}`);
        });
      }
    );
  }

  function deleteReview(req,res) {
    Media.findById(req.params.mediaId, function(err, media) {

        media.reviews.id(req.params.reviewId).remove()
        media.reviews.id(req.params.reviewId).content = req.body.content
        media.reviews.id(req.params.reviewId).rating = req.body.rating

        media.save(function(err){
            if (err) console.log(err)
        })
    })
    res.redirect(`/media/${req.params.mediaId}`)
}