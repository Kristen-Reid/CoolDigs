'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
};

module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkInsert(options, [
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
      },
      {
        content: `Very nice place! Super nice host! Everything was set up beautifully! She helped with the fire starter and walked us through the whole venue! 10/10`,
        userId: 1,
        spotId: 5
      },
      {
        title: 'Great spot, very welcoming hosts!',
        content: `We had a wonderful stay here for one night on our way up north. Andrea was very accommodating and the spot was private, clean, and they even had a fire going for us when we arrived and a generator at the ready. We’d absolutely love to stay here the next time we’re in the area.`,
        userId: 1,
        spotId: 5
      },
      {
        content: `Big open spaces on a somewhat secluded farm. Very gracious hosting`,
        userId: 4,
        spotId: 6
      },
      {
        title: 'Farm visit fun!',
        content: `This farm was above and beyond what we expected for a farm visit overnight experience. Doreen was a wonderful host and gave us a full tour of her working farm. She allowed us to roam the farm and meet the animals and we even got to spend some time with the new puppies! They had horses, sheep, goats, chickens and some super friendly guardian dogs who loved to help show us around as well. She was very accommodating especially considering we made the reservation a day prior. She was very friendly and provided us with everything we needed for our farm visit. The animals are very friendly and it was great to spend time with them! Will definitely be returning in the warmer months!`,
        userId: 1,
        spotId: 6
      },
      {
        content: `Great place to being your family and spend the day/night camping and checking out their farm . The hospitality was 10/10.`,
        userId: 2,
        spotId: 6
      },
      {
        content: `A beautiful place to camp. Israel was a great host and I would definitely stay here again for sure.`,
        userId: 1,
        spotId: 7
      },
      {
        content: `Great place, very kind guests. Will be going back.`,
        userId: 2,
        spotId: 7
      },
      {
        title: `Peaceful stay with awesome hosts`,
        content: `Truly a perfect stay if you are passing through or in the area. We had the place all to ourselves and it was extremely quiet and relaxing. Beautiful piece of land to spend the night. Israel was such a great host and happily greeted us to show us our spot as well as gifted us some farm fresh eggs! Will definitely stay here again if we are in the area. This is what CoolCamp is all about!`,
        userId: 3,
        spotId: 7
      },
      {
        content: `Enjoyed my stay, peaceful and quiet.`,
        userId: 1,
        spotId: 8
      },
      {
        content: `Fantastic place to stay. There are cabins, open sites and secluded sites to choose from. Josh was very welcoming and helpful, showing the available sites and offering a tour and firewood. Jake the black lab was a delight to have as company. Would absolutely stay here again.`,
        userId: 5,
        spotId: 8
      },
      {
        content: `It was great, bathrooms were great`,
        userId: 6,
        spotId: 8
      },
      {
        content: `Jeffrey was very kind and accommodating. He even started a fire for us as it was cold and hitting dusk by the time we arrived to set up. The site is lovely, though we agree with other reviewers who mentioned that hearing traffic was a bit odd. There is plenty of room for multiple tents and really lovely in the fall. Thanks Jeffrey!`,
        userId: 2,
        spotId: 9
      },
      {
        title: `Wonderful experience!`,
        content: `Jeffery was a great host. He was friendly when we arrived and showed us everything we needed. I loved hearing his story about how he got into CoolDigs. He even made sure we had dry wood even though it had been raining the past couple of days.
The spot itself is phenomenal. We were able to camp, hammock, have a fire, all while feeling far enough away from the house and everything else. There is a private privy that he made that worked out perfectly.
We would definitely stay here again.`,
        userId: 5,
        spotId: 9
      },
      {
        title: `Charming & secluded`,
        content: `Jeffrey was very helpful and kind. The property is absolutely perfect for a spot to hide out in the woods. We loved our evening there and would absolutely recommend.`,
        userId: 3,
        spotId: 9
      },
      {
        content: `Can’t say enough good things about Carl and his property! We had a perfectly clear night and got to see tons of stars, even saw a few shooting stars! For being only 1.5 hours from Detroit this is the perfect getaway from the city. Carl the host is amazing! Super responsive and helpful. I will definitely be back again!`,
        userId: 5,
        spotId: 10
      },
      {
        content: `Carl was a wonderful host. He was very thoughtful and helpful. His property is beautiful -- loved the rolling hills and the solitude.`,
        userId: 1,
        spotId: 10
      },
      {
        content: `Amazing experience. Carl is the best! Beautiful setting and great conversation.`,
        userId: 1,
        spotId: 10
      },
      {
        content: `Martin was a delight. The land is lovely - a bit wet still this time of year but that’s to be expected. There are dry areas offered that work well. Right away I was offered a fire and got to chose the location for a freshly dug pit for the ring. The farm has chickens, turkeys, and at least one goat. I have decided to extend my stay a little bit.`,
        userId: 2,
        spotId: 11
      },
      {
        title: `Great host, private space.`,
        content: `I arrived late and Martin let me know that I could stay near the house since they had gotten a lot of rain recently and there was some standing water near the campsite. I didn’t want to risk it and it worked out just fine. Watch the location tag since I did knock on the wrong door initially.`,
        userId: 1,
        spotId: 11
      },
      {
        title: `Great land, amazing hosts`,
        content: `I arrived late and Martin let me know that I could stay near the house since they had gotten a lot of rain recently and there was some standing water near the campsite. I didn’t want to risk it and it worked out just fine. Watch the location tag since I did knock on the wrong door initially.`,
        userId: 3,
        spotId: 11
      },
      {
        title: `Perfect stay!`,
        content: `We thoroughly enjoyed staying in this Treehouse. Upon arrival we realized several little perks such as the roasting sticks by the fire pit, bug spray, hand sanitizer, cooler of bottled water and an extremely clean and fresh smelling Porta Potty!! We especially appreciated the host asking us if we needed assistance with getting the fire started due to the high winds. Absolutely no complaints and would def book these accommodations again!`,
        userId: 1,
        spotId: 12
      },
      {
        title: `Comfortable camping adventures`,
        content: `Ourstay at this little "Tree" House under the stars was amazing. My husband and I stayed two nights and wish we got to enjoy it for longer. We came to the area for the Renaissance Festival and this little place is within walking distance of it. Perfect. You can also sit out on the patio looking up at the stars, or light a bonfire and tiki torches and enjoy some roasted marshmellows. We hope to get the chance to stay again soon!`,
        userId: 2,
        spotId: 12
      },
      {
        title: `Great place in Holly`,
        content: `If you are reading this, you have already seen the pictures of this fun and unique place. Cheryl has created such a fun experience with her treehouse in Holly. She has thoughtful touches that will make your stay memorable and very comfortable. The campfire outside was great, as was the outside shower. Cheryl’s treehouse made for a great escape, especially for my wife who doesn’t like to camp. I cannot recommend enough.`,
        userId: 1,
        spotId: 12
      },
      {
        content: `This was a wonderful camping experience. Lyanna is an excellent host, who was considerate and our communication was very smooth. The site is private and easy to access. There was quality firewood for sale on site. I would definitely return for another stay. 5 stars.`,
        userId: 4,
        spotId: 13
      },
      {
        content: `Very quiet, other than the occasional siren from the police neighbors. The nature center across the street is a huge plus. Nice place to pitch a tent.`,
        userId: 1,
        spotId: 13
      },
      {
        content: `Very nice place! Super nice host! Everything was set up beautifully! She helped with the fire starter and walked us through the whole venue! 10/10`,
        userId: 1,
        spotId: 14
      },
      {
        title: `Great spot, very welcoming hosts!`,
        content: `We had a wonderful stay here for one night on our way up north. Andrea was very accommodating and the spot was private, clean, and they even had a fire going for us when we arrived and a generator at the ready. We’d absolutely love to stay here the next time we’re in the area.`,
        userId: 6,
        spotId: 14
      },
      {
        content: `A beautiful area, cozy and comfortable! The hosts are kind, gracious, understanding and easy to get along with. 10/10 recommend`,
        userId: 1,
        spotId: 15
      },
      {
        title: `Highly recommend.`,
        content: `Beautiful, well maintained, private camping on a lovely organic farm. Host Victoria was so kind and generous- offering us some picks from her lush garden.`,
        userId: 1,
        spotId: 15
      }, {
        content: `Such a lovely campsite and extremely gracious hosts! The portapotty is extremely clean, and had fake candles outside so you could find it easily in the dark. we were having trouble getting the fire started and they came over to help us without us even asking! very friendly and a beautiful spot to stay`,
        userId: 5,
        spotId: 15
      },
      {
        title: `Great experience!`,
        content: `My husband and two kids really enjoyed our stay there. Doris was very nice to us, showed us around, sang for us. It rained quite a bit, but we had a good time overall.`,
        userId: 1,
        spotId: 16
      },
      {
        title: `Above and beyond hospitality!`,
        content: `This was an awesome experience! Incredible site, friendly hosts, bathroom was private with direct access. And... they helped me change a flat tire. Above and beyond!`,
        userId: 2,
        spotId: 16
      },
      {
        content: `My friends and I spend one night at spiritual woods. Doris and Jim were very helpful, but they spent more time with us than we thought was appropriate. The site is great and has a lot of beautiful woods to explore. Recommend staying at the lower campsite if you want more privacy.`,
        userId: 2,
        spotId: 16
      },
      {
        title: `Great stay. definitely recommend.`,
        content: `Had a great stay here! Beautiful section with a lovely firepit. Terry was responsive and incredibly hospitable, even leaving a small bag of goodies for when we arrived. Would definitely do again and recommend to all.`,
        userId: 1,
        spotId: 17
      },
      {
        title: `Peaceful and perfect`,
        content: `I loved this spot - it reminded me of growing up in the urban country, where everyone owned a few acres, neighbors were spread out and camping in your yard was an adventure. The hosts - pet lovers and passionate campers - were so welcoming to us and our dogs and thought of everything for a relaxing stay, including a little sitting area under string lights. The electric and water hookups and the big fenced-in area for safe, off-leash doggie runs were an added bonus, as were the double rainbow and the whistles of distant trains. Exactly what we needed to wind down after a long trip.`,
        userId: 1,
        spotId: 18
      },
      {
        title: `Great place to stay`,
        content: `It was great! The campsite was peaceful with a nice fenced in area for the dogs. We will definitely be back again. MUCH better than the local public campgrounds!!`,
        userId: 2,
        spotId: 18
      },
      {
        title: `Amazing special memories`,
        content: `“ this was amazing place to enjoy special time with my girlfriend ⛺️with a star filled night and romantic evening bon fire 🔥 in nature…
        everything was top notch & the bed was luxurious & more comfortable then my own!
        Everything is very clean,sanitized and smell awesome
        Pattrice awesome hosts made sure we had everything we needed to enjoy!
        Fast respond by text or phone call
        Next day we enjoyed breakfast on the grill (fridge Field with everything we needs ) then kayaking & biking 🚴🏼‍♂️all day! We had a blast👍🎉
        My girlfriend was over the top with this special surprised venturer!
        Definitely were planning to make it Our anniversary at least twice a year,
        The only trouble We could not add another day it was booked until the end of the year`,
        userId: 1,
        spotId: 19
      },
      {
        title: `Awesome and cozy stay!`,
        content: `Very nice and cozy stay in the beautiful tent that Patrice provided! We had a good time and Patrice made sure that we had everything we needed beforehand and making sure we were all set for the trip. We highly recommend this spot and will definitely be back again!`,
        userId: 2,
        spotId: 19
      },
      {
        title: `Beautiful land`,
        content: `It was such a beautiful, serene place; I'm so happy I choose to spend my birthday here.`,
        userId: 2,
        spotId: 20
      },
      {
        content: `Sarahs property is absolutely beautiful and so relaxing. Everything was very clean. Sarah was super accommodating and so helpful. The kids cant wait to stay again!`,
        userId: 3,
        spotId: 20
      },
      {
        title: `Kids loved it!`,
        content: `It was a nice little spot and my kids loved it there we have only went camping with them one other time. We loved waking up on the river and hearing mother nature! There were a few snakes in the mornings we found a few everyday we were there, and there was leaches in the river. I wish we could have gotten more wood for the $15.00 we got 13 pieces and they were small pieces but we made due. It is a nice spot with the kids!`,
        userId: 4,
        spotId: 20
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options);
  }
};
