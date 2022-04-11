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
      },
      {
        image: 'https://media.timeout.com/images/105658195/image.jpg',
        spotId: 5
      },
      {
        image: 'https://hipcamp-res.cloudinary.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1624308851/campground-photos/h43b8vvapg5kxrwtul3r.jpg',
        spotId: 6
      },
      {
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/car-camping-1644011358.jpeg',
        spotId: 7
      },
      {
        image: 'https://fwp.mt.gov/binaries/content/gallery/mtfwpproject/fwpimageset/smallhero/camping_small_hero.jpg/camping_small_hero.jpg/mtfwpproject%3AHeroSmall',
        spotId: 8
      },
      {
        image: 'https://ktvz.b-cdn.net/2020/05/Night-camping-Prineville-Reservoir-State-Park.jpg',
        spotId: 9
      },
      {
        image: 'https://www.nps.gov/orgs/1050/images/JoshuaTree_nightskytent.jpg?maxwidth=1200&autorotate=false',
        spotId: 10
      },
      {
        image: 'https://www.visitthunderbay.com/en/outdoor-adventure/resources/Camping-Night-photo.jpg',
        spotId: 11
      },
      {
        image: 'https://www.booksurfcamps.com/static/files/images/se/tj/jt/eh/content.jpg',
        spotId: 12
      },
      {
        image: 'https://elements-video-cover-images-0.imgix.net/files/196801874/preview_image.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=a15154cdb8ab9a37eaa3d59f177318c5',
        spotId: 13
      },
      {
        image: 'https://http2.mlstatic.com/D_NQ_NP_989784-MLA44094681712_112020-O.jpg',
        spotId: 14
      },
      {
        image: 'https://img.hipcamp.com/images/f_auto,q_auto/v1454362056/journal/sag5fmptjsq8uwhung5m/sag5fmptjsq8uwhung5m.jpg',
        spotId: 15
      },
      {
        image: 'https://images.squarespace-cdn.com/content/v1/603439257f4b9a6cf2cf0ec7/1615928918173-WXKFVGPUE480FC4DOZP9/guide-to-everglades-camping.jpg',
        spotId: 16
      },
      {
        image: 'https://blog-assets.thedyrt.com/uploads/2017/10/dark-sky.jpg',
        spotId: 17
      },
      {
        image: 'https://img.haarets.co.il/img/1.7214574/3040260106.jpg?precrop=1419,1419,x67,y48&width=1200&height=1200',
        spotId: 18
      },
      {
        image: 'https://c4.wallpaperflare.com/wallpaper/193/487/615/tent-camping-milky-way-reflection-wallpaper-preview.jpg',
        spotId: 19
      },
      {
        image: 'https://p0.pxfuel.com/preview/68/207/765/tent-month-night-camping.jpg',
        spotId: 20
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
