'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
        title: 'Hilltop Hangout - Tents & Hammocks',
        state: 'Michigan',
        locationName: 'Long Haul Flower Farm',
        price: 48,
        description: `-------- Adventure Awaits --------

HIKERS, TRAIL RUNNERS, & NATURE ENTHUSIASTS:

It's a short walk to amazing remote natural area for wildlife viewing, a quarter mile to the middle of 38 mile Pinckney-Waterloo trail system that connects the two huge recreation areas with abundant hiking and nature viewing.

MOUNTAIN BICYCLISTS:

We are 1 mile from the very popular mountain biking DTE Energy Foundation Trail. We are 6 miles north of downtown Chelsea, MI with the majority of the route including the B2B multi-use trail system.

PADDLERS & HORSE ENTHUSIASTS:

We sit smack-dab in the middle of both the Waterloo and Pinckney Recreation Areas, which offer some amazing spots to paddle, swim, and ride horses, among many other activities.

MOTORCYCLISTS:

We're along North Territorial Road, a popular scenic motorcycling route, and only 10 minutes from a golf course. Our neighbors are few and secluded. And we have a couple wonderfully friendly dogs.

DISC GOLFERS:

We are a ten minute drive to Hudson Mills Metropark, which boasts two amazing 24 hole courses. Additionally, we’re 25 minutes from Independence Lake County Park, the local favorite with 18 holes. Lastly, about 30 minute drive will get you to Bandemer, a chill course near the Huron River in Ann Arbor.

 -------- Words of Caution --------

POISONOUS PLANTS AND BUGS! We do have lots of poison ivy, stinging nettle, ticks, horse flies, and mosquitos. The hiking nearby isn’t always a mowed trail, so come prepared with long pants, tall socks and hiking boots if you want to explore the preserve.  We’re glad to show you what to look for if you’re unfamiliar, they are all easy to avoid with the right precautions.

Please use Hipcamp messages to contact us about camping, not facebook. To inquire about camping availability, make a request so we can review and approve.`,
       userId: 1
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
