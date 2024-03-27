const db = require('../models');

exports.createList = async (req, res) => {
  try {
    const { name } = req.body;
    const newList = await db.List.create({
      name,
    });
    res.status(201).json({ message: 'List created successfully', list: newList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllLists = async (req, res) => {
  try {
    const lists = await db.List.findAll();
    res.status(200).json({ lists });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateList = async (req, res) => {
  try {
    const { listId } = req.params;
    const { name } = req.body;
    const list = await db.List.findByPk(listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    list.name = name;
    await list.save();

    res.status(200).json({ message: 'List updated successfully', list });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await db.List.findByPk(listId);
    if (!list) {
      return res.status(404).json({ message: 'List not found' });
    }

    await list.destroy();

    res.status(200).json({ message: 'List deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
