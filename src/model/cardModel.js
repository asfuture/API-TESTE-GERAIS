const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    link: { type: String, required: true },
    whatsapp: { type: String, required: true },
    imagem: { type: String, required: true },
});

module.exports = mongoose.model('cards', cardSchema);
