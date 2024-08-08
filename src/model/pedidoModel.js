const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: Number, required: true },
    endereco: { type: String, required: true },
    mensagem: { type: String, required: true },
    
});

module.exports = mongoose.model('pedidos', pedidoSchema);

