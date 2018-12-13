var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
  
mongoose.connect('mongodb://localhost/base1', function(err, res) {
      if(err) throw err;
      console.log('Connected to Database');
});    

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var tecnicaCtrl = require('./controllers y schemas/cTecnica');
var anuncioCtrl = require('./controllers y schemas/cAnuncio');
var foroCtrl = require('./controllers y schemas/cForo');
var grupoCtrl = require('./controllers y schemas/cGrupo');
var sesionCtrl = require('./controllers y schemas/cSesion');
var usuarioCtrl = require('./controllers y schemas/cUsuario');
var etiquetaCtrl = require('./controllers y schemas/cEtiqueta');

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

// API routes tecnica
var tecnica = express.Router();

tecnica.route('/tecnica')
  .get(tecnicaCtrl.findTecnicas)
  .post(tecnicaCtrl.addTecnica);

tecnica.route('/tecnica/:_id')
  .get(tecnicaCtrl.findById)
  .put(tecnicaCtrl.updateTecnica)
  .delete(tecnicaCtrl.deleteTecnica);

app.use('/', tecnica);

// API routes anuncio
var anuncio = express.Router();

anuncio.route('/anuncio')
  .get(anuncioCtrl.findAnuncios)
  .post(anuncioCtrl.addAnuncio);

anuncio.route('/anuncio/:_id')
  .get(anuncioCtrl.findById)
  .put(anuncioCtrl.updateAnuncio)
  .delete(anuncioCtrl.deleteAnuncio);

app.use('/', anuncio);

// API routes foro
var foro = express.Router();

foro.route('/foro')
  .get(foroCtrl.findForo)
  .post(foroCtrl.addForo);

foro.route('/foro/:_id')
  .get(foroCtrl.findById)
  .put(foroCtrl.updateForo)
  .delete(foroCtrl.deleteForo);
app.use('/', foro);

// API routes grupo
var grupo = express.Router();

grupo.route('/grupo')
  .get(grupoCtrl.findGrupos)
  .post(grupoCtrl.addGrupo);

grupo.route('/grupo/:_id')
  .get(grupoCtrl.findById)
  .put(grupoCtrl.updateGrupo)
  .delete(grupoCtrl.deleteGrupo);

app.use('/', grupo);

// API routes sesion de estudio
var sesion = express.Router();

sesion.route('/sesion_de_estudio')
  .get(sesionCtrl.findSesion_de_estudio)
  .post(sesionCtrl.addSesion_de_estudio);

  sesion.route('/sesion_de_estudio/:_id')
    .get(sesionCtrl.findById)
    .put(sesionCtrl.updateSesion_de_estudio)
    .delete(sesionCtrl.deleteSesion_de_estudio);
  
app.use('/', sesion);

// API routes usuario
var usuario = express.Router();

usuario.route('/usuario')
  .get(usuarioCtrl.findUsuario)
  .post(usuarioCtrl.addUsuario);

usuario.route('/usuario/:_id')
  .get(usuarioCtrl.findById)
  .put(usuarioCtrl.updateUsuario)
  .delete(usuarioCtrl.deleteUsuario);

app.use('/', usuario);

// API routes etiqueta
var etiqueta = express.Router();

etiqueta.route('/etiqueta')
  .get(etiquetaCtrl.findEtiqueta)
  .post(etiquetaCtrl.addEtiqueta);

  etiqueta.route('/etiqueta/:_id')
  .get(etiquetaCtrl.findById)
  .put(etiquetaCtrl.updateEtiqueta)
  .delete(etiquetaCtrl.deleteEtiqueta);

app.use('/', etiqueta);


app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
