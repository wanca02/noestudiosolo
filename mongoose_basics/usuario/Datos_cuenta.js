var mongoose = require('mongoose');
 

var Datos_cuentaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Datos_cuenta:{usuario:{type: String,
                            required: true    
                            },
                  clave:{type: String,
                  required: true        
                            },
                  nombre:{type: String
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
         grupos:{type:Array
        },
         puntos_actividad:{ type:Number
         },
         valoracion_plataforma:{type:Number
        }
});


 
var datos_cuenta = mongoose.model('Datos_cuenta', Datos_cuentaSchema);

module.exports = datos_cuenta;
