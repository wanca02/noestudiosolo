var mongoose = require('mongoose');

var usuario_datos_cuenta = require('./datos_cuenta');
mongoose.connect('mongodb://localhost/noestudiosolo', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   
   var NuevoUsuario = new usuario_datos_cuenta({
    _id: new mongoose.Types.ObjectId(),
    usuario: 'mpedemonte',
    clave: '1234qwer',
    nombre: 'Marco Pedemonte',
    correo: 'mpedemonte2017@alu.uct.cl',
    nivel_permisos: 'usuario',
    });

    NuevoUsuario.save(function(err) {
        if (err) throw err;
     
        console.log('usuario successfully saved.');
    });
});

