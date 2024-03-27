const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const List = sequelize.define('List', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Associate lists with users
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = List;
