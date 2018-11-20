var Anuncio = require('./Anuncio');

//GET - Return all tvshows in the DB
exports.findAnuncios = function(req, res) {
	Anuncio.find(function(err, anuncios) {
    if(err) res.send(500, err.message);

    console.log('GET /anuncio')
		res.status(200).jsonp(anuncios);
	});
};
//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Anuncio.findById(req.params._id, function(err, anuncios) {
    if(err) return res.send(500, err.message);

    console.log('GET /anuncio/' + req.params._id);
		res.status(200).jsonp(anuncios);
	});
};

//POST - Insert a new TVShow in the DB
exports.addAnuncio = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var anuncio = new Anuncio({
		//cambiar
		title:    req.body.title,
		year: 	  req.body.year,
		country:  req.body.country,
		poster:   req.body.poster,
		seasons:  req.body.seasons,
		genre:    req.body.genre,
		summary:  req.body.summary
	});

	anuncio.save(function(err, anuncios) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(anuncios);
	});
};

//PUT - Update a register already exists
exports.updateAnuncio = function(req, res) {
	Tecnica.findById(req.params._id, function(err, anuncios) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		anuncio.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(anuncios);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteAnuncio = function(req, res) {
	Anuncio.findById(req.params._id, function(err, anuncios) {
		anuncios.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
