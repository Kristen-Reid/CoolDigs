'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      spotId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Spots'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    }, options);
    // await queryInterface.addColumn(options, 'image', {
    //   type: Sequelize.STRING(255),
    //   allowNull: false,
    // });
    // await queryInterface.addColumn(options, 'spotId', {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: { model: 'Spots'}
    // });
    // await queryInterface.addColumn(options, 'createdAt', {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.fn('now')
    // });
    // await queryInterface.addColumn(options, 'updatedAt', {
    //   type: Sequelize.STRING(50),
    //   allowNull: false,
    //   defaultValue: Sequelize.fn('now')
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Images', options);
    // await queryInterface.removeColumn(options, 'image');
    // await queryInterface.removeColumn(options, 'spotId');
    // await queryInterface.removeColumn(options, 'createdAt');
    // await queryInterface.removeColumn(options, 'updatedAt');
  }
};
