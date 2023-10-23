const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const resultSchema = new Schema({
    nombre:{ type: String, required: true },
    evaluacion: { type: String, required: true },
    letras: { type: String, required: true },
    resultado: { type: String, required: true },
});

module.exports = resultSchema;