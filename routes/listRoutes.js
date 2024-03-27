const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

router.post('/', listController.createList);
router.get('/', listController.getAllLists);
router.put('/:id', listController.updateList);
router.delete('/:id', listController.deleteList);

module.exports = router;
