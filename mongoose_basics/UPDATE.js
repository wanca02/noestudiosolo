var mongoose = require('mongoose');

var usuario = require('./usuario');

mongoose.connect('mongodb://localhost/usuario', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   
   usuario.update(
    { _id: "5bd865fe8e2b4a0fdc9e6cc6" },
    { $set:
       {
        Datos_cuenta:{
            usuario: 'asdasd',
            clave: '1234qwer',
            correo: 'mpedemonte2017@alu.uct.cl',
            nivel_permisos: 'usuario'
            },
        Datos_personales:{
            nombre: 'Marco Pedemonte',
            fecha_nacimiento: "<1994-01-06>",
            pais:"Chile",
            residencia:"Temuco",
            genero: "Masculino",
            nivel_educativo:"Universidad",
            carrera:"Informatica",
            rol: "Estudiante",
            disciplina:"progra"
            },
    Computo:{
        nsesiones_terminadas: 5,
        nactividades_terminadas: 3,
        nsesiones_no_terminadas: 2,
        nactividades_no_terminadas:1
        }
    }
    }
 )
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })
});