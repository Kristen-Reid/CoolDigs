'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
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
    ], {});
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2']}
    }, {});
  }
};
