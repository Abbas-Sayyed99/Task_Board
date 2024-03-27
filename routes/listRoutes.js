const express = require('express');
const { List } = require('../models');
const listController = require('../controllers/listController');

const router = express.Router();

// Create a new list
router.post('/', listController.createList);

module.exports = router;
