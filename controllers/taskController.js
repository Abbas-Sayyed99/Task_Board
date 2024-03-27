const db = require('../models');

exports.moveTaskToList = async (req, res) => {
    try {
        const { taskId, listId } = req.params;
        const task = await db.Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.listId = listId;
        await task.save();

        res.status(200).json({ message: 'Task moved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.completeTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const task = await db.Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.completed = true;
        await task.save();

        await db.Task.destroy({
            where: {
                id: taskId,
                completed: true
            }
        });

        res.status(200).json({ message: 'Task completed and removed from list successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
