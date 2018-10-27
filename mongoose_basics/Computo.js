var mongoose = require('mongoose');
 

var ComputoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nsesiones_terminadas:{ type: Number    
    },
    nactividades_terminadas:{ type: Number
    },
    nsesiones_no_terminadas:{ type: Number
    },
    nactividades_no_terminadas:{ type: Number
    }
});


 
var computo = mongoose.model('Computo', ComputoSchema);

module.exports = computo;
