var mongoose = require('mongoose');


var GrupoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    participantes:{type: Array
    },
    tipo:{type: String
    },
    privado:{type: Boolean
    }
    
});


var Grupo = mongoose.model('grupo',GrupoSchema);

module.exports = Grupo;