const Media = require('../models/media')

module.exports = {
    index,
    show
}

function index(req, res) {
    Movie.find({}, function(err, media) {
      res.render('media/index', { title: 'All Media', media });
    });
  }
  
  function show(req, res) {
    Media.findById(req.params.id, function(err, movie) {
      res.render('media/show', { title: 'Media Detail', media });
    });
  }