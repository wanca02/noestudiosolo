var Anuncio = require('./Anuncio');

//GET - Return all tvshows in the DB
exports.findAnuncios = function(req, res) {
	Anuncio.find(function(err, anuncios) {
    if(err) res.send(500, err.message);

    console.log('GET /anuncio')
		res.status(200).jsonp(anuncios);
	});
};