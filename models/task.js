module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  Task.associate = (models) => {
    Task.belongsTo(models.List, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Task;
};
