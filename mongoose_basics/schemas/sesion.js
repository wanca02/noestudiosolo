var mongoose = require('mongoose');


var SesionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Tecnica_empleada:{tecnica:{type:String,
                    ref:"tecnica"    
                    },
                    fase_activa:{type:Number
                    }
    },
    fecha_creacion:{type: Date,
                    default: Date.now  
    },
    grupos:{type:[mongoose.Schema.Types.ObjectId], 
            ref: 'grupos'
    },
    foros:{type:[mongoose.Schema.Types.ObjectId],
           ref: 'foro'
    },
    estado:{type: String
    },
    /*documentos:{type: Array        
    },*/
    disciplina_estudio:{type: String
    },
    horarios: [
        { fecha:{type: Date   
                    },        
          lugar:{type: String
         }
        }
    ],
    tipo:{type: String
    },
    etiquetas:[
        { nombre:{type:String
            },
          descripcion:{type:String
          },  
          tipo:{type:String
          }
    }]
});


var sesion = mongoose.model('sesion',SesionSchema);

module.exports = sesion;