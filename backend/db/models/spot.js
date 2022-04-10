'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    locationName: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  });

  Spot.associate = function (models) {
    Spot.belongsTo(models.User, { foreignKey: 'userId' });
    Spot.hasMany(models.Image, {
      foreignKey: 'spotId',
      hooks: true,
      onDelete: 'cascade'
    });
    Spot.hasMany(models.Review, {
      foreignKey: 'spotId',
      hooks: true,
      onDelete: 'cascade'
    })
  }

  return Spot;
};
