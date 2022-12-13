'use strict';

let options = {};
options.tableName = 'Reviews';
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      spotId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Spots' }
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
    await queryInterface.addColumn(options, 'title', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
    await queryInterface.addColumn(options, 'content', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
    await queryInterface.addColumn(options, 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    });
    await queryInterface.addColumn(options, 'spotId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'Spots' }
    });
    await queryInterface.addColumn(options, 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now')
    });
    await queryInterface.addColumn(options, 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now')
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews', options);
    await queryInterface.removeColumn(options, 'title');
    await queryInterface.removeColumn(options, 'content');
    await queryInterface.removeColumn(options, 'userId');
    await queryInterface.removeColumn(options, 'spotId');
  }
};
