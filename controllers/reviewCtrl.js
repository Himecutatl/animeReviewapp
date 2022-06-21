const review = require('../models/anime')
const { default: axios } = require('axios');


const options = {
    method: 'GET',
    url: 'https://jikan1.p.rapidapi.com/top/anime/1/airing',
    headers: {
      'X-RapidAPI-Key': 'd1cdc717d3mshc064114f2aa93acp1c805ajsn0c9639b85718',
      'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
    }
  };
  
  
  const APIKey = "d1cdc717d3mshc064114f2aa93acp1c805ajsn0c9639b85718"
  



module.exports = {
    create,
    deleteReview,
    //edit function
}

function create(req, res) { 
    axios.request(options).then(function (response) {
    console.log(response.data.top.mal_id)
        review.create(req.body, function (err, ar) { 
    console.log(ar);
        //anime.reviews.push(req.body);
    console.log('after push');
        //anime.save(function (err) {
        //   if (err) {
        //     console.log(err);
        //   }
          res.redirect(`/details/${req.params.mal_id}`);
        // });
        
      })
    });
  }

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
