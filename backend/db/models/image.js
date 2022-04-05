'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    images: DataTypes.STRING,
    spotsId: DataTypes.INTEGER
  });

  Image.associate = function (models) {
    // associations can be defined here
  }

  return Image;
};
