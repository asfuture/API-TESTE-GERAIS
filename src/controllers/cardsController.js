const Card = require('../model/cardModel');


exports.getCard = async (req, res) => {
    console.log("Recebida solicitação para obter Cards");
    try {
        const card = await Card.find();
        console.log("Cards encontrados:", card);
        res.status(200).json(card);
    } catch (err) {
        console.error("Erro ao obter Card:", err);
        res.status(500).json({ message: err.message });
    }
};

exports.createCard = async (req, res) => {
    console.log("Recebida solicitação para criar um novo Card");
    const card = new Card(req.body);
    try {
        const novoCard = await card.save();
        console.log("Fornecedor criado:", novoCard);
        res.status(201).json(novoCard);
    } catch (err) {
        console.error("Erro ao criar card:", err);
        res.status(400).json({ message: err.message });
    }
};

exports.getCardById = async (req, res) => {
    console.log(`Recebida solicitação para obter card com ID ${req.params.id}`);
    try {
        const card = await Card.findById(req.params.id);
        if (card == null) {
            return res.status(404).json({ message: 'Card não encontrado' });
        }
        res.status(200).json(card);
    } catch (err) {
        console.error("Erro ao obter card:", err);
        res.status(500).json({ message: err.message });
    }
};


// Ajuste modelo
exports.updateCard = async (req, res) => {
    console.log(`Recebida solicitação para atualizar card com ID ${req.params.id}`);
    try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            return res.status(404).json({ message: 'Card não encontrado' });
        }

        // Atualizar campos conforme necessário
        if (req.body.titulo != null) {
            card.titulo = req.body.titulo;
        }
        if (req.body.descricao != null) {
            card.descricao = req.body.descricao;
        }
        if (req.body.link != null) {
            card.link = req.body.link;
        }
        if (req.body.whatsapp != null) {
            card.whatsapp = req.body.whatsapp;
        }
        if (req.body.imagem != null) {
            card.imagem = req.body.imagem;
        }

        const cardAtualizado = await card.save();
        console.log("Card atualizado:", cardAtualizado);
        res.status(200).json(cardAtualizado);
    } catch (err) {
        console.error("Erro ao atualizar card:", err);
        res.status(400).json({ message: err.message });
    }
};

exports.deleteCard = async (req, res) => {
    console.log(`Recebida solicitação para excluir card com ID ${req.params.id}`);
    try {
        const card = await Card.findByIdAndDelete(req.params.id);
        if (!card) {
            console.log('Card não encontrado');
            return res.status(404).json({ message: 'Card não encontrado' });
        }
        console.log(`Card com ID ${req.params.id} excluído com sucesso`);
        res.status(200).json({ message: 'Card excluído com sucesso' });
    } catch (err) {
        console.error('Erro ao excluir card:', err);
        res.status(500).json({ message: err.message });
    }
};

