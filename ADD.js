var mongoose = require('mongoose');

var usuario = require('./schemas/usuario');
var grupos = require('./schemas/Grupo');
var tecnica = require('./schemas/tecnica');
var sesion = require('./schemas/sesion');

mongoose.connect('mongodb://localhost/1', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');

   var NuevoUsuario = new usuario({
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
            },
    puntos_actividad: 25,
    valoracion_plataforma: 4
    });
    
    NuevoUsuario.save(function(err) {
        if (err) throw err;
     
        console.log('usuario successfully saved.');
    });
    var NuevaTecnica = new tecnica({
        _id: new mongoose.Types.ObjectId(),
        nombre:"tecnica1",
        descripcion:"descripcion1",
        instrucciones:"instrucciones1",
        nrecom_participantes:4,
        nrecom_integrantes:3,
        nrecom_grupos:5,
        habilidades_desarrolladas:["expresión oral", "trabajo en equipo"],
        modalidades:["investigacion", "debate", "foro"],
        tutor: true,
        complejidad:"intermedio"     
    });

    NuevaTecnica.save(function(err) {
        if (err) throw err;
     
        console.log('tecnica successfully saved.');
    

        var NuevaSesion = new sesion({
            _id: new mongoose.Types.ObjectId(),
            Tecnica_empleada:{ tecnica: NuevaTecnica.nombre,
                                fase_activa:5
                            },  
            estado:"inicial",
            disciplina_estudio:"Programacion",
            horarios: [{ 
                fecha:"<2018-11-01>"  ,        
                lugar: "Universidad"
            }],
            tipo:"principiantes"     
        });

        NuevaSesion.save(function(err) {
            if (err) throw err;
     
            console.log('sesion successfully saved.');
            
            var NuevoGrupo = new grupos({
                _id: new mongoose.Types.ObjectId(),
                sesion:NuevaSesion._id,
                tipo:"repaso",
                privado:false
            });
            NuevoGrupo.save(function(err) {
                if (err) throw err;
         
                console.log('grupo successfully saved.');
            });
        });
    });
});

