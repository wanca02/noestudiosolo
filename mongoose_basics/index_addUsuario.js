var mongoose = require('mongoose');

var usuario_datos_cuenta = require('./usuario/Datos_cuenta');

mongoose.connect('mongodb://localhost/noestudiosolo', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   
   var NuevoUsuario = new usuario_datos_cuenta({
    _id: new mongoose.Types.ObjectId(),
    Datos_cuenta:{usuario: 'mpedemonte',
                  clave: '1234qwer',
                  correo: 'mpedemonte2017@alu.uct.cl',
                  nivel_permisos: 'usuario'
                },
    Datos_personales:{nombre: 'Marco Pedemonte',
                      fecha_nacimiento: "<1994-01-06>",
                      pais:"Chile",
                      residencia:"Temuco",
                      genero: "Masculino",
                      nivel_educativo:"Universidad",
                      carrera:"Informatica",
                      rol: "Estudiante",
                      disciplina:"progra"
                    },
    Computo:{nsesiones_terminadas: 5,
             nactividades_terminadas: 3,
             nsesiones_no_terminadas: 2,
             nactividades_no_terminadas:1
            }
    });
    
    NuevoUsuario.save(function(err) {
        if (err) throw err;
     
        console.log('usuario successfully saved.');
    });
});

