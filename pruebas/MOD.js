var mongoose = require('mongoose');

var usuario = require('./schemas/usuario');
var grupos = require('./schemas/Grupo');
var tecnica = require('./schemas/tecnica');
var sesion = require('./schemas/sesion');
var publicacion = require('./schemas/publicacion')
mongoose.connect('mongodb://localhost/2', function (err) {
 
   
});