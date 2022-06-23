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


    //WHY DONT THIS WORK
function deleteReview(req,res) {
      console.log(req.params)
    review.findByIdAndDelete(req.params.id) 
        
    res.redirect(`/details/${req.body.base64}`)
}

function updateReview(req,res) { //Event handler function(?)
    review.findByIdAndUpdate(req.params.id, req.body)

    }
