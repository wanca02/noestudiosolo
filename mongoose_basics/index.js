var mongoose = require('mongoose');

var alumno = require('./alumno');
mongoose.connect('mongodb://localhost/prueba', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   
   var MarcoAlumno = new alumno({
    _id: new mongoose.Types.ObjectId(),
    name: {
        firstName: 'Marco',
        lastName: 'Pedemonte'
    },
    Correo: 'mpedemonte2017@alu.uct.cl',
    facebook: 'https://www.facebook.com/facefalso/'
    });

    MarcoAlumno.save(function(err) {
        if (err) throw err;
     
        console.log('alumno successfully saved.');
    });
});

