
const Anime = require('../models/anime')

module.exports = {
    index,
    show
}
//SOMETHING NOT DEFINED CORRECTLY?
function index(req, res) {
    Anime.find({}, function(err, anime) {
      res.render('views/anime.ejs', { title: 'All Anime', anime });
    });
  }
  
  function show(req, res) {
    Anime.findById(req.params.id, function(err, anime) {
      res.render('anime/:id', { title: 'Anime Detail', anime });
    });
  }