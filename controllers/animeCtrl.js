
const { default: axios } = require('axios');
const anime = require('../models/anime');
const Anime = require('../models/anime')

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
    console.log('This is Kareems test')
    console.log(animeData)
  }).catch(function (error) {
    console.error(error);
  });
  }
  
  function show(req, res) { //req.params.base64 is how to get data 
      
      let decodedString = Buffer.from(req.params.base64, 'base64').toString('utf-8')

      let anime = JSON.parse(decodedString);

      res.render('anime.ejs', { anime: anime  });
  };