'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    await queryInterface.bulkInsert(options, [
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
      },
      {
        title: 'Five Pointes West',
        city: 'Charter Township',
        state: 'MI',
        locationName: 'Five Pointes West Highland',
        price: 40,
        description: `Twenty acres of rolling, open land, perfect for star gazing, with community fire pit and pavilion just steps away. Indoor restrooms for your convenience. Inquire about our fabulous event or hospitality packages!`,
        userId: 5
      },
      {
        title: 'Camping on our Organic Farm',
        city: 'Lakeport State Park',
        state: 'MI',
        locationName: 'Camping on our Organic Farm',
        price: 30,
        description: `We have a working, organic farm with a lot of animals, however, we also do crops as well. This particular farm is 138 acres with 8 acres of woods. We have working dogs, sheep, cattle, horses, a few ducks, chickens, a couple goats, a mini horse and outdoor cats on our farm. We have some super great animals. Most of which are very friendly.

You never know what will be available to see on the farm when you visit. We are expecting a foal (baby horse) this summer (2021) and are already planning for another foal next summer as well. We often have puppies as well and sometimes we have to bottle feed lambs. There's never a dull moment.

Our farm is unique in the way of having a very positive VIBE to it. The energy is awesome! It's really a space of tranquility and healing if you allow yourself to go there.

After hosting with air b+b for a little over a year now, we decided to give this a try as well. We love hosting people and having them come to the farm and enjoy our way of life. It also helps to have a supplemental income as having and running a small family farm isn't very sustainable. Typically there's off the farm jobs to help pay for the farm life. It's a crazy equation. Small family farms are far and few between. Support your local farmer if possible! It is greatly appreciated!

CAMPING (Glamping)

We are going to start out by offering four camp spaces on our farm. These are actually located in the yard area which surrounds the house which is fenced on all three sides which house animals and then the gravel road out front. It's very spacious with plenty of room to enjoy separate space.

However, as of right now we are starting out with one large fire pit which is shared by all campers. If needed, we can add another one, but we first want to see how this is going to go. We will have pre cut fire wood here for purchase. We also have a hand made shitter house, I mean composting toilet. lol This will be available for the use of all the campers. It's great, it's free of unpleasant smell and free of flies!

We'd like to offer the opportunity for glamping rather than a rustic style of camping. With that being said, we offer a shared refrigerator as well as outdoor plugs for cell phone charging or anything else that's in need of a simple charge.`,
        userId: 3
      },
      {
        title: `Grace's Blueberry Orchard Camping`,
        city: 'De Witt',
        state: 'MI',
        locationName: `Grace's Blueberry Orchard Camping`,
        price: 28,
        description: `Located just outside of Michigan's capital, Grace Blueberry Orchard provides a nice option for people looking for a country feel in the city. There are a variety of parks nearby as well as rivers, lakes, and trails that are easily accessible from this location. Grace Orchard is home to a family of fake farmers who share the property with a flock of hens and a rooster. In the summer months when the blueberries are in season, campers are welcome to enjoy the wild fruits throughout the property. Camp sites are available with good privacy. The many trees on the property allow for hammocking options as well.`,
        userId: 4
      },
      {
        title: `Life Adventures - Saranac MI`,
        city: `Saranac`,
        state: 'MI',
        locationName: `Life Adventures `,
        price: 20,
        description: `Forest sites, cabins, and open areas, some electric locations. FULL RESTROOMS with shower!  Fire pits,  Picnic shelter. Weddings and party venue, 2 EV chargers.  This is NOT a clothing optional camp.

If you want to reserve the whole camp for an event such as a wedding, please search using "google sites life adventures camp"  $500 base fee

Sites

1 Edge of woods behind picnic shelter, 15amp within 75', Tent or camper up to 20'

2 Woods near restrooms, 15amp, Tent or small trailer

3 Near site 1 and 2.  15amp within 50', Tent or Small trailer

4 (Pines) deeper in woods.  water and 15amp, Tent or small trailer

5 Open area near woods, 15amp within 100', any size trailer

6 Small cabin 8x10 Fridge, hotplate, twin bed, table, chairs, electricity

7 Medium cabin 10x12 Queen bed, hotplate, fridge, electricity, water

8 (Deep Woods) is more remote in woods about 100' from water and electric.  No trailers

Cabins add $20/night via booking options.

A few trails are on site,. 2 rivers nearby, and the NCT I can shuttle to and from (4 miles). Ionia Recreation are has miles of mountain bike and hiking trails.`,
        userId: 2
      },
      {
        title: `Eagle's Nest`,
        city: 'Eagle',
        state: 'MI',
        locationName: `Eagle's Nest`,
        price: 30,
        description: `You can pitch your tent in a wooded area just a short walk from the house, but is very private.

You can build a campfire and relax knowing all firewood is furnished.

 With a river close by you could turn your stay into a river trip adventure.`,
        userId: 1
      },
      {
        title: `Carlandia CannaCamp`,
        city: `Manchester`,
        state: `MI`,
        locationName: `Carlandia CannaCamp`,
        price: 25,
        description: `Nearly 42.0 acres of Rolling hills, organic alfalfa fields, Herb garden, and trails! See hawks, sandhill cranes, 20+ songbirds, deer and maybe fox, bald eagle, osprey, or coyote! Minutes to waterfowl preserve, lake life, antiquing, mountain or road bicycling, kayak lakes and streams, disc golf onsite... Lots to do!`,
        userId: 6
      },
      {
        title: `Camping with Nature`,
        city: `Marine City`,
        state: `MI`,
        locationName: `Dancing Meadows Homestead `,
        price: 20,
        description: `Beautiful secluded area under the 17 foot circumference oaks and maple stands. Learn the history of the great rock in the woods along with the history of the homestead. Organic practices on the farm have brought back butterflies, dragonflies, birds, fox, deer and many other wonderful creatures. The homestead is a working farm with produce, chickens, turkeys, guinea fowl, ducks, goats and pigs watch all the farm activity from your campsite. The camping area is large enough for several tents while being secluded from life on the farm. Wonderful area to explore the 22 acres of woods or come visit the working 18 acres of organic farm land. Looking for both the quiet and some fun, we are located approximately two miles from the St. Clair river offering great restaurants, beaches, and shopping.`,
        userId: 1
      },
      {
        title: `Beautiful Treehouse Under The Stars`,
        city: `Holly`,
        state: `MI`,
        locationName: `Gorgeous Treehouse & Campsite`,
        price: 85,
        description: `OUTDOOR SHOWER/SINK CLOSED UNTIL MAY 15TH! Conveniently located just off I-75 (one mile away from Michigan Renaissance Festival), our beautiful treehouse comfortably accommodates two people. Additional guests (up to four total) will need to bring their own tents to setup camp in a designated area next to the treehouse. Inside the treehouse is an air conditioning window unit, ceiling fan, luxury queen-size bed, fine pressed linens and down comforter. Coffee and tea station, 55” TV, Blu-ray player, movies, recliner, radio, fire pit with four chairs, tiki torches, beautiful party lights at night, cooler with ice and bottled water. Outdoor outhouse #1 only. Shared bathroom in main house. Outdoor rainfall shower just behind the main house past the flowerbeds on your left. It is a three minute walk to the outdoor shower. 400 ft away from the treehouse.`,
        userId: 4
      },
      {
        title: `Mystic Hill`,
        city: `Superior Charter Township`,
        state: `MI`,
        locationName: `Lyanna's Land`,
        price: 20,
        description: `Set up your tent on the spacious property, enjoy sitting next to the large bonfire pit, and wake up to the beautiful sounds of nature. There is plenty of sight seeing on the gorgeous wetlands. The Lefurge nature center is just across the street which offers hiking and photo taking opportunities. It is ten minutes from historic depot town Ypsilanti, the Matthai Botanical Gardens, and EMU's football stadium.`,
        userId: 3
      },
      {
        title: `Five Pointes West`,
        city: `Highland Charter Township`,
        state: `MI`,
        locationName: `Five Pointes West `,
        price: 40,
        description: `Twenty acres of rolling, open land, perfect for star gazing, with community fire pit and pavilion just steps away. Indoor restrooms for your convenience. Inquire about our fabulous event or hospitality packages!`,
        userId: 4
      },
      {
        title: `EarthColors Farm`,
        city: `Manchester`,
        state: `MI`,
        locationName: `EarthColors Farm`,
        price: 25,
        description: `Pitch your tent next to our farm's conservation area.  Great views, bird watching, frog concerts at night.  Pick your veggies and gather eggs for meals (charges will apply depending on quantity). Watkins Lake State Park and County Preserve close by for hiking.`,
        userId: 1
      },
      {
        title: `Spiritual Woods Heavenly Garden`,
        city: `Ortonville`,
        state: `MI`,
        locationName: `Spiritual Woods Heavenly Garden`,
        price: 55,
        description: `Wonderful wildflower herb and vegetable garden. Your welcome to take and use for your cooking. If you want campfire set up for you extra $10. Or extra $10 fot breakfast! We live close to the Renaissance Festival in Holly-a perfect opportunity to camp near the festival if you want to spend two or three days (labor day) on the weekend at the festival . Our house has huge picture windows all around it! Quiet, secluded, oak, pine, maple, wildlife and wetlands! Swimming, great hiking or fishing nearby at Holly Recreation Area. The neighbor has 40 acres. Next to lots of state park land surrounding us with trailheads and Mile and a half walk to a cute little pond in the woods where you can swing over the pond in the woods . Beautiful dirt roads to stroll or bike on.

We can also give you a reiki meditation experience . Or performance on my harp. No obligation.`,
        userId: 5
      },
      {
        title: `Lake Shawood Camping, Novi, Mi.`,
        city: `Novi`,
        state: `MI`,
        locationName: `Beautiful Lake Shawood`,
        price: 30,
        description: `Beautiful camping experience on our little slice of heaven. Pitch your tent and bring your family and children to our exquisitely beautiful site. The property sits on Shawood Lake, a non-motorized private water-front site. There’s plenty of room to park your car, pitch a tent, enjoy a campfire and the beauty of all types of birds (swans, geese, ospreys, and the occasional bald eagle), and animal life. The sunsets in this area are breathtaking.

Take a short 30-second walk and enjoy Pavilion Shore Park, a family-oriented park with a playground, swimming, fishing pier, and waterfront seating of Walled Lake. You’ll also find public restrooms which are open until 10 pm through the summer and a restaurant across the street.

Down the street (about a 7-minute walk) is Lakeshore Park, an 11-acre park with volleyball, swimming, bike, and hiking trails (more than 10 miles of mountain biking and multi-purpose trails), horseshoe pits, BBQ’s, picnic shelters, and play structures.`,
        userId: 6
      },
      {
        title: `Sage Campground Campsite #1`,
        city: `Perry`,
        state: `MI`,
        locationName: `Krystal’s Land`,
        price: 30,
        description: `We have a large overgrown wooded area to hike through and a large area of cut grass for playing catch, football & frisbee. There is a fire pit, water and 50amp hookup. ATVs can be driven on the property and through the woods. There is a large fenced in area for dogs. Dog park! ❤️ Biking down to the Vermillion Creek is fun! There are Mud Boggers events nearby. Shaftsburg has a convenience store or a short trip into Perry and you’ll find many stores from junkin’ to swan creek candles, dollar stores and a grocery store. Shaftsburg and Perry also have parks. In Perry you’ll find the Michigan famous King Kone Ice Cream place shaped like a giant ice cream cone. Lots of fast food places and local diners in Perry. Firewood available for purchase on site. Golf course nearby! ⛳️

There is no water available during freezing temperatures.`,
        userId: 4
      },
      {
        title: `Bell Tent Camp on the lake!`,
        city: `Milford Charter Township`,
        state: `MI`,
        locationName: `Bell Tent Camp on the lake!`,
        price: 75,
        description: `A Unique Glamping Experience awaits you! Explore the great outdoors in a stylish comfortable 300 sqft belle tent on 626 acres of lakes, beaches, ponds and trails on the sites at Camp Dearborn near Kensington Metro Park in Milford Mi

Kayak, Bike or hike miles of trails including nearby Kensington Metro Park. Experience bustling nightlife, weekly farmers market, free concerts, plenty of shopping, eateries, creameries, art galleries, gift shops and breweries in nearby Downtown Milford!  Add on one of our " Unique Glamping Experiences"

"Scavenger Hunt Adventurer"!  Our families gift to you for choosing Unique Vacation Retreats for your Special Glamping Experience!  Just download the mobile app, use the bonus code your host provides in your welcome packet and follow the instructions!

Have a great time exploring and keep a close eye out for hidden treasures while experiencing the area with fun and family friendly adventurers while seeing interesting sights & landmarks on your "Scavenger Hunt Adventurer"!  With use your smart phone you'll access your Special Agent who will provide clues & maps that help you solve the mystery of your choice! Great fun, educational and team building mysteries for all ages!

Make sure to "high five" and support our local merchants and enjoy all the treasures and memories that Milford Michigan has to offer!

*Bike, Kayak & Canoe Rentals are available locally.`,
        userId: 3
      },
      {
        title: `Doriath Springs`,
        city: `Hersey`,
        state: `MI`,
        locationName: `Doriath Springs`,
        price: 30,
        description: `Doriath Springs feels magical!

We are a small 5+ acre family homestead dedicated to environmental sustainability and peace path revolution. Easy arrival by the Muskegon River, the Pere Marquette Bike Trail, or highway M-10.

Space for tents along the river in the sun or by the creek in the forest. Rustic outhouse. Pets are welcome as long as they are kept with their families and well socialized to get along with other animals on the land.

Please plan to leave no trace.`,
        userId: 3
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    await queryInterface.bulkDelete(options);
  }
};
