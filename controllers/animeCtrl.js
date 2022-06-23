
const { default: axios } = require('axios');
const review = require('../models/anime')

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
    index,
    show
}

function index(req, res) { 

  axios.request(options).then(function (response) {

    let animeData = response.data.top;

    // let objectToString = JSON.stringify(animeData[0]);

    // let sampleObject = Buffer.from(objectToString).toString('base64');
    //   //USE THIS CODE AT DESTINATION
    // let decodeString = Buffer.from(sampleObject, 'base64').toString('utf-8')

    animeData.forEach(function (anime, i) {
      let objectToString = JSON.stringify(anime);

      let encodedString = Buffer.from(objectToString).toString('base64');
      animeData[i].base64 = encodedString;
    })
    res.render('index.ejs', { anime: animeData });
    //console.log(response.data.top);
   
    
  }).catch(function (error) {
    console.error(error);
  });
  }
  
  function show(req, res) { //req.params.base64 is how to get data 
      console.log(req.params)
      let decodedString = Buffer.from(req.params.base64, 'base64').toString('utf-8')

      let anime = JSON.parse(decodedString);
        //console.log(anime)
      review.find({}, function(err, reviews) { //Maybe apply mal_id to make it where only reviews tied to the mal Id appear
        //console.log(reviews)
      res.render('anime.ejs', { anime: anime, base64:req.params.base64, reviewList: reviews});
  })}

  //MAYBE FIND BY MAL_ID? ^
  //QUESTION TO ASK, WHEN I HAVE SHOW FUNCTION LIKE THIS, MY CREATE REVIEW FUNCTION STOPS