var Tecnica = require('./tecnica');

//GET - Return all tvshows in the DB
exports.findTecnicas = function(req, res) {
	Tecnica.find(function(err, tecnicas) {
    if(err) res.send(500, err.message);

    console.log('GET /tecnica')
		res.status(200).jsonp(tecnicas);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Tecnica.findById(req.params._id, function(err, tecnicas) {
    if(err) return res.send(500, err.message);

    console.log('GET /tecnica/' + req.params._id);
		res.status(200).jsonp(tecnicas);
	});
};

//POST - Insert a new TVShow in the DB
exports.addTecnica = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var tecnica = new Tecnica({
		_id:                        req.body._id,
        nombre:                     req.body.nombre,
        descripcion:                req.body.descripcion,
        instrucciones:              req.body.instrucciones,
        nrecom_participantes:       req.body.nrecom_participantes,
        nrecom_integrantes:         req.body.nrecom_integrantes,
        nrecom_grupos:              req.body.nrecom_grupos,
        habilidades_desarrolladas:  req.body.habilidades_desarrolladas,
        modalidades:                req.body.modalidades,
        tutor:                      req.body.tutor,
        complejidad:                req.body.complejidad,
        etiquetas:                  req.body.etiquetas
	});

	tecnica.save(function(err, tecnicas) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(tecnicas);
	});
};

//PUT - Update a register already exists
exports.updateTecnica = function(req, res) {
	Tecnica.findById(req.params._id, function(err, tecnicas) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		tecnica.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(tecnicas);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTecnica = function(req, res) {
	Tecnica.findById(req.params._id, function(err, tecnicas) {
		tecnicas.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
