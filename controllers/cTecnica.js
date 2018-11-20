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
		tecnicas._id:                        req.body._id,
        tecnicas.nombre:                     req.body.nombre,
        tecnicas.descripcion:                req.body.descripcion,
        tecnicas.instrucciones:              req.body.instrucciones,
        tecnicas.nrecom_participantes:       req.body.nrecom_participantes,
        tecnicas.nrecom_integrantes:         req.body.nrecom_integrantes,
        tecnicas.nrecom_grupos:              req.body.nrecom_grupos,
        tecnicas.habilidades_desarrolladas:  req.body.habilidades_desarrolladas,
        tecnicas.modalidades:                req.body.modalidades,
        tecnicas.tutor:                      req.body.tutor,
        tecnicas.complejidad:                req.body.complejidad,
        tecnicas.etiquetas:                  req.body.etiquetas

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
