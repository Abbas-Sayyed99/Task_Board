const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.put('/:taskId/move/:listId', taskController.moveTaskToList);
router.put('/:taskId/complete', taskController.completeTask);

module.exports = router;
