var mongoose = require('mongoose');


var GrupoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    participantes:[
        {
            usuario: {type:mongoose.Schema.Types.ObjectId,
                     ref:"usuario"},
            rol: String,
            fecha_ingreso: {type:Date , default: Date.now},
            progreso_tecnica: String
        }
    ],
    sesion:{ type:mongoose.Schema.Types.ObjectId,
        ref:"sesion"
    },
    tipo:{type: String
    },
    privado:{type: Boolean
    }
    
});


var Grupo = mongoose.model('Grupo',GrupoSchema);

module.exports = Grupo;