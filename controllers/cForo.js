var Foro = require('./foro');

//GET - Return all tvshows in the DB
exports.findForo = function(req, res) {
	Foro.find(function(err, foros) {
    if(err) res.send(500, err.message);

    console.log('GET /foro')
		res.status(200).jsonp(foros);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Foro.findById(req.params._id, function(err, foros) {
    if(err) return res.send(500, err.message);

    console.log('GET /foro/' + req.params._id);
		res.status(200).jsonp(foros);
	});
};

//POST - Insert a new TVShow in the DB
exports.addForo = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var foro = new Foro({
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

	foro.save(function(err, foros) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(foros);
	});
};

//PUT - Update a register already exists
exports.updateForo = function(req, res) {
	Foro.findById(req.params._id, function(err, foros) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		foros.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(foros);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteForo = function(req, res) {
	Foro.findById(req.params._id, function(err, foros) {
		foros.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
