'use strict';
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Users';
    await queryInterface.bulkInsert(options, [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'email@example.com',
        username: 'boobookitty',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'email2@example.com',
        username: 'krisr44',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        email: 'email3@example.com',
        username: 'garyk815',
        hashedPassword: bcrypt.hashSync('password6')
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    await queryInterface.bulkDelete(options);
  }
};
