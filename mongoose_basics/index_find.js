var mongoose = require('mongoose');

var usuario_datos_cuenta = require('./datos_cuenta');
mongoose.connect('mongodb://localhost/noestudiosolo', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
 
    usuario_datos_cuenta.find({
        usuario: "mpedemonte"
    }).exec(function(err, books) {
        if (err) throw err;
         
        console.log(books);
    });
});