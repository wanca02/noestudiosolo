var Foro = require('./foro');

//GET - Return all tvshows in the DB
exports.findForo = function(req, res) {
	Foro.find(function(err, foro) {
    if(err) res.send(500, err.message);

    console.log('GET /foro')
		res.status(200).jsonp(foro);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Foro.findById(req.params._id, function(err, foro) {
    if(err) return res.send(500, err.message);

    console.log('GET /foro/' + req.params._id);
		res.status(200).jsonp(foro);
	});
};

//POST - Insert a new TVShow in the DB
exports.addForo = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var foro = new Foro({
        _id: new mongoose.Types.ObjectId(),
        nombre:					req.body.nombre,
        descripcion:			req.body.descripcion,
    	posts:					req.body.posts,
        autor:					req.body.autor,
        moderadores:			req.body.moderadores,
        suscritos:				req.body.suscritos,
        etiquetas:				req.body.etiquetas
	});

	foro.save(function(err, foro) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(foro);
	});
};

//PUT - Update a register already exists
exports.updateForo = function(req, res) {
	Foro.findById(req.params._id, function(err, foro) {
		
		foro.nombre=				req.body.nombre,
        foro.descripcion=			req.body.descripcion,
    	foro.posts=					req.body.posts,
        foro.autor=					req.body.autor,
		foro.moderadores=			req.body.moderadores,
        foro.suscritos=				req.body.suscritos,
		foro.etiquetas=				req.body.etiquetas
		
		foro.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(foro);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteForo = function(req, res) {
	Foro.findById(req.params._id, function(err, foro) {
		foro.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).send("Borrado");
		})
	});
};
