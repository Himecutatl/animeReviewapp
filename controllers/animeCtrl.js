
const { default: axios } = require('axios');
const Anime = require('../models/anime')

const options = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/top/anime/1/upcoming',
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

function index(req, res) { //Try to mess with params
  axios.request(options).then(function (response) {
    res.render('index.ejs', { anime: response.data.top });
    console.log(response.data.top);
  }).catch(function (error) {
    console.error(error);
  });
  }
  
  function show(req, res) {
    Anime.findById(req.params.id, function(err, anime) {
      res.render('anime.ejs', { title: 'Anime Detail', anime });
    });
  }