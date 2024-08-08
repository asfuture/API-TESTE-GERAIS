const Pedido = require('../model/cardModel');


exports.getPedido = async (req, res) => {
    console.log("Recebida solicitação para obter pedidos");
    try {
        const pedido = await Pedido.find();
        console.log("Pedido encontrados:", pedido);
        res.status(200).json(pedido);
    } catch (err) {
        console.error("Erro ao obter pedido:", err);
        res.status(500).json({ message: err.message });
    }
};

exports.createPedido = async (req, res) => {
    console.log("Recebida solicitação para criar um novo Pedido");
    const card = new Card(req.body);
    try {
        const novoPedido = await Pedido.save();
        console.log("Pedido criado:", novoPedido);
        res.status(201).json(novoPedido);
    } catch (err) {
        console.error("Erro ao criar pedido:", err);
        res.status(400).json({ message: err.message });
    }
};

exports.getPedidoById = async (req, res) => {
    console.log(`Recebida solicitação para obter pedido com ID ${req.params.id}`);
    try {
        const pedido = await Pedido.findById(req.params.id);
        if (pedido == null) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        res.status(200).json(pedido);
    } catch (err) {
        console.error("Erro ao obter pedido:", err);
        res.status(500).json({ message: err.message });
    }
};


// Ajuste modelo
exports.updatePedido = async (req, res) => {
    console.log(`Recebida solicitação para atualizar pedido com ID ${req.params.id}`);
    try {
        const pedido = await Pedido.findById(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Card não encontrado' });
        }

        // Atualizar campos conforme necessário
        if (req.body.nome != null) {
            pedido.nome = req.body.nome;
        }
        if (req.body.telefone != null) {
            pedido.telefone = req.body.telefone;
        }
        if (req.body.endereco != null) {
            pedido.endereco = req.body.endereco;
        }
        if (req.body.mensagem != null) {
            pedido.mensagem = req.body.mensagem;
        }
        
        const pedidoAtualizado = await pedido.save();
        console.log("Pedido atualizado:", pedidoAtualizado);
        res.status(200).json(pedidoAtualizado);
    } catch (err) {
        console.error("Erro ao atualizar pedido:", err);
        res.status(400).json({ message: err.message });
    }
};

exports.deletePedido = async (req, res) => {
    console.log(`Recebida solicitação para excluir pedido com ID ${req.params.id}`);
    try {
        const pedido = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedido) {
            console.log('Pedido não encontrado');
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        console.log(`Pedido com ID ${req.params.id} excluído com sucesso`);
        res.status(200).json({ message: 'Pedido excluído com sucesso' });
    } catch (err) {
        console.error('Erro ao excluir pedido:', err);
        res.status(500).json({ message: err.message });
    }
};

