
const Anime = require('../models/anime')

module.exports = {
    index,
    show
}

function index(req, res) {
    Anime.find({}, function(err, anime) {
      res.render('anime.ejs', { title: 'All Anime', anime });
    });
  }
  
  function show(req, res) {
    Anime.findById(req.params.id, function(err, anime) {
      res.render('anime/:id', { title: 'Anime Detail', anime });
    });
  }