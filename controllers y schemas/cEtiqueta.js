var Etiqueta = require('./etiqueta');


//GET - Return all tvshows in the DB
exports.findEtiqueta = function(req, res) {
	Etiqueta.find(function(err, etiqueta) {
    if(err) res.send(500, err.message);

    console.log('GET /etiqueta')
		res.status(200).jsonp(etiqueta);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Etiqueta.findById(req.params._id, function(err, etiqueta) {
    if(err) return res.send(500, err.message);

    console.log('GET /etiqueta/' + req.params._id);
		res.status(200).jsonp(etiqueta);
	});
};

//POST - Insert a new TVShow in the DB
exports.addEtiqueta = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var etiqueta = new Etiqueta({
		_id:                        new mongoose.Types.ObjectId(),
        nombre:                     req.body.nombre,
        descripcion:                req.body.descripcion,
        tipo:                       req.body.tipo
	});
	etiqueta.save(function(err, etiqueta) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(etiqueta);
	});
};

//PUT - Update a register already exists
exports.updateEtiqueta = function(req, res) {
	Etiqueta.findById(req.params._id, function(err, etiqueta) {
        etiqueta.nombre=                     req.body.nombre,
        etiqueta.descripcion=                req.body.descripcion,
        etiqueta.tipo=                       req.body.tipo

		etiqueta.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(etiqueta);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteEtiqueta = function(req, res) {
	Etiqueta.findById(req.params._id, function(err, etiqueta) {
		etiqueta.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).send("borrado");
		})
	});
};
