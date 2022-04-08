'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [{
      image: 'https://t4.ftcdn.net/jpg/02/16/03/69/360_F_216036942_jQXSp24vd67pmujlr8xkZSDJZbyQyNwX.jpg',
      spotId: 1
    },
      {
        image: 'https://www.orlandosentinel.com/resizer/sx2GKkK6C3Imyccs49rEwlYTrsc=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/C3ODJE2NKVCJ3H365K7ALVPNVU.jpg',
        spotId: 2
      },
      {
        image: 'https://www.reserveamerica.com/webphotos/racms/articles/images/83d8d662-7519-4830-9a25-5c01a7760720_image2_2019-bucket-list.jpg',
        spotId: 3
      },
      {
        image: 'https://d2umhuunwbec1r.cloudfront.net/gallery/0004/0010/C255EEDF6B144294AC9D6CC6A4AECD6F/medium.jpg',
        spotId: 4
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
