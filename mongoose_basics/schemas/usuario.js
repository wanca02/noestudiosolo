var mongoose = require('mongoose');
 

var Datos_usuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Datos_cuenta:{usuario:{type: String,
                            required: true    
                            },
                  clave:{type: String,
                  required: true        
                            },
                  correo: {type: String
                         },
                fecha_registro: {type: Date,
                                default: Date.now
                        },
                nivel_permisos:{type: String
                        },
                ultimo_ingreso:{type: Date,
                        default: Date.now
                    },
                estado_cuenta:{type: String
                        }
                },
    Datos_personales:{nombre:{type: String,
                      required: true    
                    },
                      fecha_nacimiento:{type: Date        
                    },
                     pais:{type: String
                    },
                    residencia: {type: String
                    },
                    genero: {type: String
                    },
                    nivel_educativo: {type: String
                    },
                    carrera: {type: String
                    },
                    rol: {type: String
                    },
                    disciplina: {type: String
                    }
                },
        Computo:{nsesiones_terminadas:{ type: Number    
                    },
                    nactividades_terminadas:{ type: Number
                    },
                    nsesiones_no_terminadas:{ type: Number
                    },
                    nactividades_no_terminadas:{ type: Number
                    }
                },
        Faltas_conducta:{razon:{ type: String
                                },
                        ingresado_por:{ type: String
                        },
                        estado:{ type: String
                        }
        },
         grupos:{type:[mongoose.Schema.Types.ObjectId], 
                ref: 'grupos'
        },
         puntos_actividad:{ type:Number
         },
         valoracion_plataforma:{type:Number
        }
});


 
var usuario = mongoose.model('usuario', Datos_usuarioSchema);

module.exports = usuario;
