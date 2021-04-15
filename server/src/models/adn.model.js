
const { Schema, model } = require('mongoose');


//Modelo de la base de datos
const adnSchema = new Schema({
    dna:{type: [], require:true },
    resultado:{type: String, require:true },
},{
    timestamps: true,
    versionKey:false,
}
);


module.exports = model('ADN', adnSchema);

