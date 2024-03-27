const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Task_Board', 'abbas', 'root@123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
