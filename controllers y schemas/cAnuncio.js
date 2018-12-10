var Anuncio = require('./Anuncio');

//GET - Return all tvshows in the DB
exports.findAnuncios = function(req, res) {
	Anuncio.find(function(err, anuncio) {
    if(err) res.send(500, err.message);

    console.log('GET /anuncio')
		res.status(200).jsonp(anuncio);
	});
};
//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Anuncio.findById(req.params._id, function(err, anuncio) {
    if(err) return res.send(500, err.message);

    console.log('GET /anuncio/' + req.params._id);
		res.status(200).jsonp(anuncio);
	});
};

//POST - Insert a new TVShow in the DB
exports.addAnuncio = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var anuncio = new Anuncio({
		_id:        new mongoose.Types.ObjectId(),
        mensaje:    req.body.mensaje,
        titulo:     req.body.titulo,
        autor:      req.body.autor,
        para:       req.body.para,
        tipo:       req.body.tipo,
        estado:    req.body.estado
	});

	anuncio.save(function(err, anuncio) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(anuncio);
	});
};

//PUT - Update a register already exists
exports.updateAnuncio = function(req, res) {
	Anuncio.findById(req.params._id, function(err, anuncio) {
        anuncio.mensaje=    req.body.mensaje,
        anuncio.titulo=     req.body.titulo,
        anuncio.autor=      req.body.autor,
        anuncio.para=       req.body.para,
        anuncio.tipo=       req.body.tipo,
        anuncio.estado=    req.body.estado

		anuncio.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(anuncio);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteAnuncio = function(req, res) {
	Anuncio.findById(req.params._id, function(err, anuncio) {
		anuncio.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).send("borrado");
		})
	});
};
