'use strict';

let options = {};
options.tableName = 'Spots'
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Spots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      locationName: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      price: {
        allowNull: false,
        type: Sequelize.NUMERIC(4, 0)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
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
    // await queryInterface.addColumn(options, 'title', {
    //   type: Sequelize.STRING(100),
    //   allowNull: false
    // });
    // await queryInterface.addColumn(options, 'city', {
    //   type: Sequelize.STRING(50),
    //   allowNull: false
    // });
    // await queryInterface.addColumn(options, 'state', {
    //   type: Sequelize.STRING(50),
    //   allowNull: false
    // });
    // await queryInterface.addColumn(options, 'locationName', {
    //   type: Sequelize.STRING(100),
    //   allowNull: false
    // });
    // await queryInterface.addColumn(options, 'price', {
    //   type: Sequelize.NUMERIC(4,0),
    //   allowNull: false
    // });
    // await queryInterface.addColumn(options, 'description', {
    //   type: Sequelize.TEXT,
    //   allowNull: false
    // });
    // await queryInterface.addColumn(options, 'userId', {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: { model: 'Users' }
    // });
    // await queryInterface.addColumn(options, 'createdAt', {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.fn('now')
    // });
    // await queryInterface.addColumn(options, 'updatedAt', {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   defaultValue: Sequelize.fn('now')
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Spots', options);
    // await queryInterface.removeColumn(options, 'title');
    // await queryInterface.removeColumn(options, 'city');
    // await queryInterface.removeColumn(options, 'state');
    // await queryInterface.removeColumn(options, 'locationName');
    // await queryInterface.removeColumn(options, 'price');
    // await queryInterface.removeColumn(options, 'description');
    // await queryInterface.removeColumn(options, 'userId');
    // await queryInterface.removeColumn(options, 'createdAt');
    // await queryInterface.removeColumn(options, 'updatedAt');
  }
};
