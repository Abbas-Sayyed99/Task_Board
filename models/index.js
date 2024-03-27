const Sequelize = require('sequelize');

const {sequelize} = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.User = require('./user')(sequelize, Sequelize);
db.List = require('./list')(sequelize, Sequelize);
db.Task = require('./task')(sequelize, Sequelize);

// Associations
db.User.hasMany(db.List);
db.List.belongsTo(db.User);
db.List.hasMany(db.Task);
db.Task.belongsTo(db.List);

module.exports = db;
