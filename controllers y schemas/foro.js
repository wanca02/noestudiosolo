var mongoose = require('mongoose');

    var subpostsSchema = new mongoose.Schema({
         _id: mongoose.Schema.Types.ObjectId,
         nombre:{type:String
         },
         contenido:{type:String
         },
         tipo:{type:String
         },
        votos:[{usuario:{type:String
               },
               voto:{type:Number
              }
            }],
        citas:[{_id: mongoose.Schema.Types.ObjectId,
                autor:{type:String
                },
                titulo:{type:String
                },
                fecha:{type:Date
                }
        }],
        autor:{type:[mongoose.Schema.Types.ObjectId],
                ref: 'usuario'
              },
        fecha_creacion:{type:Date,
                        default:Date.now
                    },
        aprobado:{type:Boolean
        }
  });

  subpostsSchema.add({subposts:[subpostsSchema]});

  var postsSchema = mongoose.Schema({_id: mongoose.Schema.Types.ObjectId,
    nombre:{type:String
    },
    contenido:{type:String
    },
    tipo:{type:String
    },
    votos:[{usuario:{type:mongoose.Schema.Types.ObjectId,
                    ref:"usuario"
            },
            voto:{type:Number
            }
        }],
    subposts:[subpostsSchema],
    citas:[{_id: mongoose.Schema.Types.ObjectId,
        autor:{type:String
        },
        titulo:{type:String
        },
        fecha:{type:Date
        }
    }],
    autor:{type:mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
      },
    fecha_creacion:{type:Date,
                default:Date.now
            },
    aprobado:{type:Boolean
    },
    etiquetas:[
        {type:String
            }],
    estado:{type:String
    }
});

var ForoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{type: String   
    },
    descripcion:{type: String        
    },
    posts:[postsSchema],
    autor:{type:mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
      },
    moderadores:{type:[mongoose.Schema.Types.ObjectId],
        ref: 'usuario'
      },
      fecha_creacion:{type:Date,
                     default:Date.now
      },
      suscritos:{type:[mongoose.Schema.Types.ObjectId],
        ref: 'usuario'
      },
      etiquetas:[{type:String       
      }]
});


var Foro = mongoose.model('Foro',ForoSchema,"Foro");

module.exports = Foro;