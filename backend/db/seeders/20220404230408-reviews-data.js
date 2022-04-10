'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        title: 'Beautiful hilltop oasis!',
        content: 'This is a great place! We were looking for a campsite pretty close to Ann Arbor for the weekend with another family and I’m so glad we decided to give Hipcamp and this site a try. Plenty of space for two tents, possible to drive up for easy unloading, beautiful hilltop views, picnic table, a fire pit and dry firewood, nice people, chickens and two friendly goats. Campsite bathroom is a basic composting toilet in an old barn - not the highlight but fine and no problem. The campsite connects to a mile-long loop through a nature preserve that is beautiful! Easy walk with dogs and gorgeous little pond. We heard coyotes, saw geese and herons, saw deer. Really neat spot in pretty secluded area. Hosts were super friendly and even brought us hot coffee on a rainy morning. Thanks, Kat and Doug!',
        userId: 1,
        spotId: 1
      },
      {
        title: 'Just wonderful!',
        content: `This is a magical place! Between the lovely goats and chickens and the rustic lush setting relaxation is guaranteed. Although I didn't meet the host Kat, I did meet her friend Anna who was filling in and she was hospitable, friendly and not intrusive in the least.Perfect! This spot is great if you don't want to leave camp because you can hike the grounds around the site which are gorgeous grassland and trees. The goldenrod really had the bees buzzing! If you do want to leave, there is plenty to do very close by with small town fun and Ann Arbor a short drive away. There are also plenty of opportunities for hiking, biking and water fun. Even the compostable toilet was much less yucky than the traditional outhouse at a camp ground. The only thing that would make this place better would be a trash and recycling receptacle but even that was easy with lots of trash and recycling available in Chelsea. We will be back often.`,
        userId: 1,
        spotId: 1
      },
      {
        title: 'Hilltop hangout',
        content: 'A great hilltop spot for hammocks! We enjoyed the quaint local town (Chelsea) and the peaceful setting for a nice weekend. The mosquitoes were pretty intense in late August so 100% deet or bug clothing is recommended. The breakfast provided by the hosts was phenomenal and well worth the booking.',
        userId: 2,
        spotId: 1
      },
      {
        content: `This is a nice local place to grab a site year round. So far, I have only winter camped there, but want to see it when the leaves are on the trees. Michael is a fantastic host! While you're there, grab some of Michael's organic seeds. My daughter swears by them.`,
        userId: 1,
        spotId: 2
      },
      {
        title: 'Great farm stay!',
        content: `Great stay on Michael's land! Michael is welcoming and helpful. We would stay again for sure!`,
        userId: 1,
        spotId: 2
      },
      {
        content: 'Awesome place to camp.',
        userId: 2,
        spotId: 2
      },
      {
        title: 'Peaceful',
        content: 'Beautiful property. I stayed on the hill because the ground was pretty wet. I would love to return when the weather is warmer. But this was convenient to I-80 on which I am driving cross-country.',
        userId: 1,
        spotId: 3
      },
      {
        title: 'Chilly and fun',
        content: 'We camped for a few rainy/stormy March days, and we had a great time! The property is very quiet and surrounded by farms. The pond was pretty - probably even more so in the spring or summer. It was easy to find, and we appreciated the gravel driveway to park in. Only issue was the weather, but we knew what we were getting into there. Highly recommend Cahoots Coffee in Angola, too.',
        userId: 1,
        spotId: 3
      },
      {
        content: 'I loved this spot. It was so peaceful and lovely camping near the pond on the edge of the woods. I was fortunate to have a beautiful sunset too. I didn’t have the chance to meet Beth, but I had a lovely experience nonetheless and would definitely recommend this spot as a tranquil place to camp.',
        userId: 2,
        spotId: 3
      },
      {
        title: 'Secluded stay close to metrodetroit',
        content: 'The wide open views were amazing! Great for star viewing! We came after a week of rain, so we stayed near the front, where there was a firepit and 2 picnic tables. It was great to explore the property and see all the wildlife it attracted. Lots of birds and waterfowl and even a few deer. It was a great option for us as a close getaway for some weekend camping!',
        userId: 1,
        spotId: 4
      },
      {
        content: 'A true wellspring for our state. Thank you for sharing it with the public and keeping it affordable. This was my second time at Wild and Free, the added fire ring amenity was very helpful. Beth is a great steward of her land with a great hands off approach that I truly appreciate. In late summer early fall, Skeeters are still pretty crucial for the day, but they give up their ghost for a serene tranquil night. Thank you for sharing Beth!!!!',
        userId: 1,
        spotId: 4
      },
      {
        content: 'What a beautiful space! Lots of room to explore, super dog friendly and private!',
        userId: 2,
        spotId: 4
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
