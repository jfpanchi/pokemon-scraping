const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonesSchema = new Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    tipo: String,
    evolucion:[],
    altura: Number,
    peso: Number,
    image: String
});

module.exports= mongoose.model('Pokemones',PokemonesSchema);