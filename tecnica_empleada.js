var mongoose = require('mongoose');


var Tecnica_empleadasSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tecnica:{type: String   
    },
    fase_activa:{type: String        
    }
});


var tecnica_empleada = mongoose.model('tecnica_empleada',Tecnica_empleadasSchema);

module.exports = tecnica_empleada;