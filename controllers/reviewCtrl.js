const review = require('../models/anime')


module.exports = {
    create,
    deleteReview,
    updateReview
}

function create(req, res) { 
    //console.log('create was hit')
    review.create(req.body, function (err, ar) { 
        //console.log(err,ar)
        res.redirect(`/details/${req.params.mal_id}`)
        //console.log(req.body)
      })
    };


function deleteReview(req,res) {
      console.log(req.params)  //req.params is the mal_id/object id
    review.findByIdAndDelete(req.params.mal_id, function(err,review) {
        res.redirect(`/details/${req.body.base64}`)
        // res.redirect(`/details/${req.body.base64}`)

    }) 
        
}

function updateReview(req,res) { //Event handler function(?)
    console.log('Update function is being hit')
    review.findByIdAndUpdate(req.params.mal_id, req.body, (err,review) => {
        if (err) {
            res.status(400).json(err)
            return
        }
    res.redirect(`/details/${req.body.base64}`)
    })   
}
//the params are referencing the Mal_ID but unsure how to reference object id, would it have to do with my routes?