var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
  
mongoose.connect('mongodb://localhost/base123', function(err, res) {
      if(err) throw err;
      console.log('Connected to Database');
});    

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//var tecnica = require('./schemas/tecnica');
var tecnicaCtrl = require('./controllers/cTecnica');
var anuncioCtrl = require('./controllers/cAnuncio');
var foroCtrl = require('./controllers/cForo');
var grupoCtrl = require('./controllers/cGrupo');
var sesionCtrl = require('./controllers/cSesion');
var usuarioCtrl = require('./controllers/cUsuario');

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

// API routes tecnica
var tecnica = express.Router();

tecnica.route('/tecnica')
  .get(tecnicaCtrl.findTecnicas)

app.use('/', tecnica);

// API routes anuncio
var anuncio = express.Router();

anuncio.route('/anuncio')
  .get(anuncioCtrl.findAnuncios)

app.use('/', anuncio);

// API routes foro
var foro = express.Router();

foro.route('/foro')
  .get(foroCtrl.findForo)

app.use('/', foro);

// API routes grupo
var grupo = express.Router();

grupo.route('/grupo')
  .get(grupoCtrl.findGrupos)

app.use('/', grupo);

// API routes sesion de estudio
var sesion = express.Router();

sesion.route('/sesion_de_estudio')
  .get(sesionCtrl.findSesion_de_estudio)

app.use('/', sesion);

// API routes usuario
var usuario = express.Router();

usuario.route('/usuario')
  .get(usuarioCtrl.findUsuario)

app.use('/', usuario);


app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
