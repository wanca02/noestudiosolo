var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',function (err){ /* Conexion a la DB (test) */
    if (err) throw err;

    console.log("Conectado");
});

var GatoSchema = mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Edad: Number
});
var Gato = mongoose.model('Gato', GatoSchema);

var CuchoGato = new Gato({
    Nombre: "Cucho",
    Apellido: "Zapatilla",
    Edad: 22
});
 
CuchoGato.save(function(err) {
    if (err) throw err;
     
    console.log('Gato Guardado exitosamente');

});

