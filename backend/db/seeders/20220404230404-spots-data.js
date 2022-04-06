'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
        title: 'Hilltop Hangout - Tents & Hammocks',
        city: 'Chelsea',
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
      },
      {
        title: 'Tent Only - Organic Farm Ann Arbor',
        city: 'Dexter',
        state: 'Michigan',
        locationName: 'Nature and Nature Farm',
        price: 59,
        description: `Pitch your tent in our woods or fields on our 130 acre organic heirloom vegetable seed farm. Plenty of space for great hiking opportunities and privacy. 12 minutes or less from downtown Ann Arbor.

IF YOU WANT TO CAMP WITH, IN, ON, OR NEAR YOUR VEHICLE YOU MUST USE OUR RV LISTING. "RV/Vehicle - Organic Farm Ann Arbor".

Occasionally, if requested in advance and if we have time, farm produce is for sale and sometimes farm-to-table lunches can be arranged in advance for a suggested donation of $15+.  The most likely days for a farm lunch would be on Thursdays or Fridays, usually around 12:30 or 1 pm.  Please request a farm lunch before arriving and we'll see if we can accommodate you. We also sell fruit trees, vegetable seeds, and certified organic produce. We are an organic farm so it's very important to practice proper sanitation and not to leave your waste here on our land (no foxholes - do not bury your waste, pack it out!).  Additionally, there is a truck stop just 1/2 mile away with showers and bathrooms. We have bundles of firewood for sale for $10 or for larger quantities it's $25/quarter face cord or $100/facecord.

We often have educational events at the farm and need to use some of our campsites for them.  We will do our best to accommodate your specific site preference, but we reserve the right to change your site # without advance notice.

WHEN BOOKING OR ASKING ABOUT A RESERVATION, PLEASE BE SPECIFIC ABOUT YOUR ARRIVAL TIME.  IF YOU DON'T ARRIVE WITHIN 45 MINUTES OF OUR MUTUALLY AGREED UPON ARRIVAL TIME OR IF YOU DON'T SPECIFY A TIME WHEN YOU BOOK YOUR RESERVATION IT MAY BE CANCELLED WITH NO REFUND. NO EXCEPTIONS!

IF YOU OR ANYONE IN YOUR PARTY IS UNVACCINATED FOR COVID-19 PLEASE INFORM US UPON ARRIVAL AND PLEASE KEEP AWAY FROM OUR DOG.

Please keep in mind that we are a working farm not a campground with formal grounds.  We offer hipcamp spaces in addition to the many other things we do on and off the farm and we are very busy people so please understand that we may not always be available for tours, meals, produce sales, or special requests.

Site 1 is our main site.  It's in the woods, has firewood for sale, plenty of space for tents, has a table and some benches and feels secluded.  It's relatively close to the portapotty.  Sometimes this site is closed for special events without advance notice.

Site 2 is another main site, but less developed.  It's far enough from campsite 1 to be it's own campsite, but close enough to be it's satellite.  It has firewood for sale.  At your request, we can provide a table and chairs.  It's relatively close to the portapotty.  Sometimes this site is closed for special events without advance notice.

Site 3 is on the west side of edge of the woods overlooking a hay field to the west. It's far enough from campsite 1 to be it's own campsite, but close enough to be it's satellite.  It's a great spot if you want to have a sunset view, but don't want the early morning sun.  It has firewood for sale.  At your request, we can provide a table and chairs.  Sometimes this site is closed for special events without advance notice.

Site 4 is in the woods between sites 1 and 2 and is seldom used.  It's far enough from campsite 1 to be it's own campsite, but also close enough to be it's satellite.  It has firewood for sale. At your request, we can provide a table and chairs.  Sometimes this site is closed for special events without advance notice.

Site 5 is a 5-10 minute hike from the farmstead and is on the edge of a field and faces east with morning sun and has shade in the afternoon and evening.  It has firewood for sale.  At your request, we can provide a table and chairs..  It is a 10 minute walk to the portapotty so plan to pack your waste out or go for an early morning run. Sometimes this site is closed for special events without advance notice.

Site 6 is a secluded site in the Northwest corner of a field and at the top of a hill.  A 10-15 minute hike from the farmstead, it sits at the top of a hill with a beautiful view to the South.  You will likely hear coyotes at night and get a great view of the stars here.  Firewood from site 9 can be carried to this site.  At your request, we can provide a table and chairs.  It is a 10 minute walk to the portapotty so plan to pack your waste out or go for an early morning run.

Site 7 is a seldom used and secluded site on the north side of a field and at the top of a hill. A 10-15 minute hike from the farmstead, it sits atop a hill with a beautiful view to the South.  You will likely hear coyotes at night and get a great view of the stars here.  Firewood from site 9 can be carried to this site.  At your request, we can provide a table and chairs.  It is a 10 minute walk to the portapotty so plan to pack your waste out or go for an early morning run.

Site 8 is a seldom used and secluded site on the north side of a field and at the top of a hill.  A 10-15 minute hike from the farmstead, it sits atop a hill with a beautiful view to the South.  You will likely hear coyotes at night and get a great view of the stars here.  Firewood from site 9 can be carried to this site.  At your request, we can provide a table and chairs.  It is a 10 minute walk to the portapotty so plan to pack your waste out or go for an early morning run.

Site 9 is a favorite for being a secluded site.  A 10-15 minute hike from the farmstead, it sits at the top of a hill with a beautiful view to the South.  You will likely hear coyotes at night and get a great view of the stars here.  It has firewood for sale.  At your request, we can provide a table and chairs..  It is a 10 minute walk to the portapotty so plan to pack your waste out or go for an early morning run.

***We have additional space for general dispersed camping so please send us a message if these sites are full and we will try to accommodate you if we can

RV sites 1  and 2 are close to the farmstead.  Use our RV listing to book these sites.  It has 2, 20 amp electric outlets and non-potable water for washing.  These sites have a great view of the sunset over a hay field.  It has firewood for sale. At your request, we can provide a table and chairs. This site is very close to the portapotty. `,
        userId: 1
      },
      {
        title: 'Songdog Meadows',
        city: 'Angola',
        state: 'Indiana',
        locationName: 'Songdog Meadows',
        price: 20,
        description: `Hang your hammock or pitch a tent just outside our 3/4 acre pond. There are two basins with a channel and a peaceful tree filled grass area between. The pond is in the corner of the 10 acre lot where we live at the end of a dirt road with only a small amount of traffic. The camp site is walk in on mowed pathways, with the driveway and parking area less than 200 yards away. There is a security light so you will never be in complete darkness. A stone fire pit and picnic table sit just off shore of the swimming area of the pond. There are several wide mowed pathways surrounded by prairie grasses, shaded by large trees. The area can easily handle several tents, hammocks and small RVs. The area is rural farm land with a handful of houses on the short dirt road. But this property is surrounded by wood lots and open fields. Two neighbors houses are visible but separated by trees. Our house is visible from the pond and camping area.`,
        userId: 1
      },
      {
        title: 'Camp Wild & Free',
        city: 'Gaines',
        state: 'Michigan',
        locationName: 'Be Wild and Free',
        price: 20,
        description: `This is a 76 acre "farm" that has been allowed to rest for the last 20 some years, surrounded by large agricultural fields. There are areas of pasture, woods, and wetlands. This is a very rustic piece of property, with no amenities. Just a chance to get away for some fresh air.`,
        userId: 1
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
