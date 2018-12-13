var Etiqueta = require('./etiqueta');


//GET - Return all tvshows in the DB
exports.findEtiquetas = function(req, res) {
	Etiqueta.find(function(err, Etiquetas) {
    if(err) res.send(500, err.message);

    console.log('GET /Etiqueta')
		res.status(200).jsonp(Etiqueta);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Etiqueta.findById(req.params._id, function(err, Etiquetas) {
    if(err) return res.send(500, err.message);

    console.log('GET /Etiqueta/' + req.params._id);
		res.status(200).jsonp(Etiqueta);
	});
};

//POST - Insert a new TVShow in the DB
exports.addEtiqueta = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var Etiqueta = new Etiqueta({
		_id:                        new mongoose.Types.ObjectId(),
        nombre:                     req.body.nombre,
        descripcion:                req.body.descripcion,
        tipo:                       req.body.tipo
	});
	Etiqueta.save(function(err, Etiqueta) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(Etiqueta);
	});
};

//PUT - Update a register already exists
exports.updateEtiqueta = function(req, res) {
	Etiqueta.findById(req.params._id, function(err, Etiqueta) {
        Etiqueta.nombre=                     req.body.nombre,
        Etiqueta.descripcion=                req.body.descripcion,
        Etiqueta.tipo=                       req.body.tipo

		Etiqueta.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(Etiqueta);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteEtiqueta = function(req, res) {
	Etiqueta.findById(req.params._id, function(err, Etiqueta) {
		Etiqueta.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).send("borrado");
		})
	});
};
