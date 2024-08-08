const Fornecedor = require('../model/fornecedoresModel');


exports.getFornecedores = async (req, res) => {
    console.log("Recebida solicitação para obter fornecedores");
    try {
        const fornecedores = await Fornecedor.find();
        console.log("Fornecedores encontrados:", fornecedores);
        res.status(200).json(fornecedores);
    } catch (err) {
        console.error("Erro ao obter fornecedores:", err);
        res.status(500).json({ message: err.message });
    }
};

exports.createFornecedor = async (req, res) => {
    console.log("Recebida solicitação para criar um novo fornecedor");
    const fornecedor = new Fornecedor(req.body);
    try {
        const novoFornecedor = await fornecedor.save();
        console.log("Fornecedor criado:", novoFornecedor);
        res.status(201).json(novoFornecedor);
    } catch (err) {
        console.error("Erro ao criar fornecedor:", err);
        res.status(400).json({ message: err.message });
    }
};

exports.getFornecedorById = async (req, res) => {
    console.log(`Recebida solicitação para obter fornecedor com ID ${req.params.id}`);
    try {
        const fornecedor = await Fornecedor.findById(req.params.id);
        if (fornecedor == null) {
            return res.status(404).json({ message: 'Fornecedor não encontrado' });
        }
        res.status(200).json(fornecedor);
    } catch (err) {
        console.error("Erro ao obter fornecedor:", err);
        res.status(500).json({ message: err.message });
    }
};

exports.updateFornecedor = async (req, res) => {
    console.log(`Recebida solicitação para atualizar fornecedor com ID ${req.params.id}`);
    try {
        const fornecedor = await Fornecedor.findById(req.params.id);
        if (fornecedor == null) {
            return res.status(404).json({ message: 'Fornecedor não encontrado' });
        }

        // Atualizar campos conforme necessário
        if (req.body.nome != null) {
            fornecedor.nome = req.body.nome;
        }
        if (req.body.logo != null) {
            fornecedor.logo = req.body.logo;
        }
        // Adicione mais campos conforme necessário

        const fornecedorAtualizado = await fornecedor.save();
        console.log("Fornecedor atualizado:", fornecedorAtualizado);
        res.status(200).json(fornecedorAtualizado);
    } catch (err) {
        console.error("Erro ao atualizar fornecedor:", err);
        res.status(400).json({ message: err.message });
    }
};

exports.deleteFornecedor = async (req, res) => {
    console.log(`Recebida solicitação para excluir fornecedor com ID ${req.params.id}`);
    try {
        const fornecedor = await Fornecedor.findByIdAndDelete(req.params.id);
        if (!fornecedor) {
            console.log('Fornecedor não encontrado');
            return res.status(404).json({ message: 'Fornecedor não encontrado' });
        }
        console.log(`Fornecedor com ID ${req.params.id} excluído com sucesso`);
        res.status(200).json({ message: 'Fornecedor excluído com sucesso' });
    } catch (err) {
        console.error('Erro ao excluir fornecedor:', err);
        res.status(500).json({ message: err.message });
    }
};

