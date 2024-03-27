const db = require('../models');

exports.createList = async (req, res) => {
  try {
    const { title } = req.body;
    const newList = await db.List.create({ title, UserId: req.user.id }); 
    res.status(201).json(newList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
