var mongoose = require('mongoose');


var HorariosSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fecha:{type: Date   
    },
    hora:{type: String        
    },
    lugar:{type: String
    }
});


var horarios = mongoose.model('horarios',HorariosSchema);

module.exports = horarios;