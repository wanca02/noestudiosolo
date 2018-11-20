var mongoose = require('mongoose');

var usuario = require('./schemas/usuario');
var grupos = require('./schemas/Grupo');
var tecnica = require('./schemas/tecnica');
var sesion = require('./schemas/sesion');
var anuncio = require('./schemas/Anuncio');
var foro = require('./schemas/foro');

mongoose.connect('mongodb://localhost/base123', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');

   var NuevoUsuario = new usuario({
    _id: new mongoose.Types.ObjectId(),
    Datos_cuenta:{usuario: 'apoynton1',
                  clave: '1234qwer',
                  nombre: 'Augustin',
                  correo: 'apoynton1@opensource.org',
                  nivel_permisos: 'tutor',
                  estado_cuenta: 'activa'
                },
    Datos_personales:{nombre: 'Augustin Poynton',
                      fecha_nacimiento: "<1999-07-26>",
                      pais:"Indonesia",
                      residencia:"4 Claremont Way",
                      genero: "Male",
                      nivel_educativo:"media",
                      carrera:"Pedagogia en matematicas",
                      rol: "profesor",
                      disciplina:"Pedagogia"
                    },
    Computo:{nsesiones_terminadas: 9,
             nactividades_terminadas: 42,
             nsesiones_no_terminadas: 14,
             nactividades_no_terminadas:236
            },
    /*Faltas_conducta:[{razon:"no participa",
                      ingresado_por:NuevoUsuario._id,
                      estado: "En espera"
                    }],*/
    /*grupos:[NuevoGrupo_id],*/
    puntos_actividad: 233,
    valoracion_plataforma: 20
    });
    
    NuevoUsuario.save(function(err) {
        if (err) throw err;
     
        console.log('usuario successfully saved.');
    });
    var NuevaTecnica = new tecnica({
        _id: new mongoose.Types.ObjectId(),
        nombre:"Bitacoras",
        descripcion:"descripcion de la tecnica",
        instrucciones:"Dato reservado en caso de necesitarlo",
        nrecom_participantes:10,
        nrecom_integrantes:3,
        nrecom_grupos:3,
        habilidades_desarrolladas:["expresión oral", "trabajo en equipo"],
        modalidades:["presencial"],
        tutor: false,
        complejidad:"Medio",
        etiquetas:["Ingenieria","Expresion oral","Pedagogia en matematicas", "Ingenieria civil en informatica", "Programacion I"]     
    });

    NuevaTecnica.save(function(err) {
        if (err) throw err;
     
        console.log('tecnica successfully saved.');
    
    });
    var NuevaSesion = new sesion({
            _id: new mongoose.Types.ObjectId(),
            Tecnica_empleada:{ tecnica: NuevaTecnica.nombre,
                                fase_activa:3
                            },
            /*grupos:[{ id_grupo:NuevoGrupo._id
                    }],*/
            estado:"Terminada",
            /*foros:[NuevoForo._id],*/
            documentos:["Especificado por si se le da algun uso"],
            disciplina_estudio:"Ingenieria",
            horarios: [{ 
                fecha:"<1994-01-14>"  ,        
                lugar: "Sala 04"
            }],
            tipo:"Presencial",
            etiquetas:["Etiqueta1","Etiqueta2"]     
        });

        NuevaSesion.save(function(err) {
            if (err) throw err;
     
            console.log('sesion successfully saved.');
        });
            
        var NuevoGrupo = new grupos({
            _id: new mongoose.Types.ObjectId(),
            participantes:[{usuario:NuevoUsuario._id,
                            rol:"participante",
                            progreso_tecnica:"progreso ejemplo"            
            }],
            sesion:NuevaSesion._id,
            rol:"normal",
            tipo:"reservado",
            privado:false
            });
            NuevoGrupo.save(function(err) {
                if (err) throw err;
         
                console.log('grupo successfully saved.');
            });

            var NuevoAnuncio = new anuncio({
                _id: new mongoose.Types.ObjectId(),
                mensaje: "hola",
                titulo:"mensaje prueba",
                autor:NuevoUsuario._id,
                para:[NuevoUsuario._id],
                tipo:"tipo de mensaje",
                estado:"estado"
            });
            NuevoAnuncio.save(function(err) {
                if (err) throw err;
                console.log('anuncio successfully saved.');
            });

            var NuevoForo = new foro({
                _id: new mongoose.Types.ObjectId(),
                nombre:"Foro 1",
                descripcion: "Descripcion foro IPSUM LOREM",
                posts:[{_id: new mongoose.Types.ObjectId(),
                        nombre:"Nombre del post",
                        contenido:"Esta es mi pregunta",
                        tipo:"Pregunta",
                        votos:[{usuario:NuevoUsuario._id,
                                voto:-1}],
                        subposts:[{_id: new mongoose.Types.ObjectId(),
                                   nombre:"Nombre del subpost",
                                   contenido:"Mi respuesta",
                                   tipo: "Respuesta",
                                   subposts:[{_id: new mongoose.Types.ObjectId(),
                                              nombre:"Nombre del subspots1",
                                              contenido: "Interesante",
                                              tipo:"Comentario",
                                              votos:[{usuario:NuevoUsuario._id,
                                                voto:-1}],
                                              citas:[{_id: new mongoose.Types.ObjectId(),
                                                      autor:NuevoUsuario.Datos_personales.nombre,
                                                      titulo:"Upside Down",
                                                      fecha:"<1997-12-01>"
                                                },{_id: new mongoose.Types.ObjectId(),
                                                    autor:NuevoUsuario.Datos_personales.nombre,
                                                    titulo:"titulo 2",
                                                    fecha:"<1999-12-01>"}],
                                             autor:NuevoUsuario._id,
                                             aprobado: true
                                            }],
                                    votos:[{usuario:NuevoUsuario._id,
                                           voto:-1}],
                                    citas:[{_id: new mongoose.Types.ObjectId(),
                                            autor:NuevoUsuario.Datos_personales.nombre,
                                            titulo:"Upside Down",
                                            fecha:"<1997-12-01>"
                                            }],
                                            autor:NuevoUsuario._id,
                                            aprobado: true     
                                    }],
                            citas:[{_id: new mongoose.Types.ObjectId(),
                                   autor:NuevoUsuario.Datos_personales.nombre,
                                   titulo:"Upside Down",
                                   fecha:"<1997-12-01>"
                                    }],
                            autor:NuevoUsuario._id,
                            aprobado: true,
                            etiquetas:["etiqueta1"],
                            estado:"Cerrado"    
                            }],
                    autor:NuevoUsuario._id,
                    moderadores:[NuevoUsuario._id],
                    suscritos:[NuevoUsuario._id],
                    etiquetas:["etiqueta1","etiqueta2"]
            });
            NuevoForo.save(function(err) {
                if (err) throw err;
                console.log('foro successfully saved.');
            });
          
});

