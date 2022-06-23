const review = require('../models/anime')


module.exports = {
    create,
    deleteReview,
    //edit function
}

function create(req, res) { 
    review.create(req.body, function (err, ar) { 
        console.log(err,ar)
        res.redirect(`/details/${req.params.mal_id}`)

        //console.log(req.body)
      })
    };


 
function deleteReview(req,res) {
      console.log(req.params)
    review.findByIdAndDelete(req.params.mal_id, function(err,review) {

        res.redirect(`/details/${req.body.base64}`)

    }) 
        
}

function updateReview(req,res) { //Event handler function(?)
    review.findByIdAndUpdate(req.params.mal_id, req.body)

    res.redirect(`/details/${req.body.base64}`)

    }
//the params are referencing the Mal_ID but unsure how to reference object id, would it have to do with ny routes?