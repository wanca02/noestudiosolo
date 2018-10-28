var mongoose = require('mongoose');


var UsuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    puntos_actividad:{type: Number
    },
    valoracion_plataforma:{type: Number        
    }
    
});


var Usuario = mongoose.model('Usuario',UsuarioSchema);

module.exports = Usuario;