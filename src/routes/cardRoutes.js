const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');

 router.get('/', cardsController.getCard);
 router.post('/', cardsController.createCard);

router.get('/:id', cardsController.getCardById);
router.put('/:id', cardsController.updateCard);
router.delete('/:id', cardsController.deleteCard);

module.exports = router;
