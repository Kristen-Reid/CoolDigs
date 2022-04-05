'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: DataTypes.STRING,
    state: DataTypes.STRING,
    locationName: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  });

  Spot.associate = function (models) {
    // associations can be defined here
  }

  return Spot;
};
