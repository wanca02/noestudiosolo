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
		_id:        req.body._id,
        mensaje:    req.body.mensaje,
        titulo:     req.body.titulo,
        autor:      req.body.autor,
        para:       req.body.para,
        tipo:       req.body.tipo,
        estado:    req.body.estado
	});

	anuncio.save(function(err, anuncios) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(anuncios);
	});
};

//PUT - Update a register already exists
exports.updateAnuncio = function(req, res) {
	Tecnica.findById(req.params._id, function(err, anuncios) {
		anuncios._id:        req.body._id,
        anuncios.mensaje:    req.body.mensaje,
        anuncios.titulo:     req.body.titulo,
        anuncios.autor:      req.body.autor,
        anuncios.para:       req.body.para,
        anuncios.tipo:       req.body.tipo,
        anuncios.estado:    req.body.estado

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
