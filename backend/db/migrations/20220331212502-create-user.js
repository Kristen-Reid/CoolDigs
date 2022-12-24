'use strict';

let options = {};
options.tableName = 'Users';
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
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
    // await queryInterface.addColumn(options, 'username', {
    //   type: Sequelize.STRING(30),
    //   allowNull: false,
    // });
    // await queryInterface.addColumn(options, 'email', {
    //   type: Sequelize.STRING(256),
    //   allowNull: false,
    //   unique: true
    // });
    // await queryInterface.addColumn(options, 'hashedPassword', {
    //   type: Sequelize.STRING.BINARY,
    //   allowNull: false
    // });
    // await queryInterface.addColumn(options, 'createdAt', {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.fn('now')
    // });
    // await queryInterface.addColumn(options, 'updatedAt', {
    //   type: Sequelize.DATE,
    //   allowNull: false,
    //   defaultValue: Sequelize.fn('now')
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users', options);
    // await queryInterface.removeColumn(options, 'username');
    // await queryInterface.removeColumn(options, 'email');
    // await queryInterface.removeColumn(options, 'hashedPassword');
    // await queryInterface.removeColumn(options, 'createdAt');
    // await queryInterface.removeColumn(options, 'updatedAt');
  }
};
