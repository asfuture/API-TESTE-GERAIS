const express = require('express');
const router = express.Router();
const fornecedoresController = require('../controllers/fornecedoresController');

 router.get('/', fornecedoresController.getFornecedores);
 router.post('/', fornecedoresController.createFornecedor);

router.get('/:id', fornecedoresController.getFornecedorById);
router.put('/:id', fornecedoresController.updateFornecedor);
router.delete('/:id', fornecedoresController.deleteFornecedor);

module.exports = router;
