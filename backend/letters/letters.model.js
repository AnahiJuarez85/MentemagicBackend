const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const letraSchema = new Schema({
    letra:{ type: String, required: true },
    imagenLetra: { type: String, required: true },
    audioLetra: { type: String, required: true },
    imagen1: { type: String, required: true },
    audioImagen1: { type: String, required: true },
    imagen2: { type: String, required: true },
    audioImagen2: { type: String, required: true },
    imagen3:{ type: String, required: true },
    audioImagen3: { type: String, required: true }
});
const pruebaSchema = new Schema({
    letra1: { type: String, required: true },
    letra2: { type: String, required: true },
    letra3: { type: String, required: true },
    letra4: { type: String, required: true },
    letra5: { type: String, required: true }

    
});
module.exports = letraSchema;