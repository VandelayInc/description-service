const db = jest.genMockFromModule('../model.js');
const Promise = require('bluebird');

function __getMockDescriptionAsync() {
  return new Promise((resolve, reject) => {
    resolve(
      {
        "_id": "5a8f538bc5170fb98f9bb285",
        "user": {
          "user": {
            "first_name": "Sara",
            "has_profile_pic": true,
            "id": 8638224,
            "languages": [],
            "thumbnail_url": "https://a0.muscache.com/im/users/8638224/profile_pic/1378336598/original.jpg?aki_policy=profile_small",
            "_id": "5a8f538bc5170fb98f9bb282"
          }
        },
        "city": "San Francisco",
        "country": "United States",
        "id": 2736358,
        "name": "Garden Retreat steps from Haight St",
        "scrim_color": ["#443120"],
        "user_id": 8638224,
        "address": "San Francisco, CA, United States",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 2,
        "cancellation_policy": "flexible",
        "check_in_time": 14,
        "check_in_time_end": "NOT_SELECTED",
        "check_in_time_ends_at": null,
        "check_in_time_start": "14",
        "check_out_time": 12,
        "country_code": "US",
        "hosts": [{
          "first_name": "Sara",
          "has_profile_pic": true,
          "id": 8638224,
          "languages": [],
          "thumbnail_url": "https://a0.muscache.com/im/users/8638224/profile_pic/1378336598/original.jpg?aki_policy=profile_small",
          "_id": "5a8f538bc5170fb98f9bb283"
        }],
        "market": "San Francisco",
        "max_nights": 1125,
        "min_nights": 2,
        "neighborhood": "Haight-Ashbury",
        "person_capacity": 3,
        "primary_host": {
          "first_name": "Sara",
          "has_profile_pic": true,
          "id": 8638224,
          "languages": [],
          "thumbnail_url": "https://a0.muscache.com/im/users/8638224/profile_pic/1378336598/original.jpg?aki_policy=profile_small",
          "_id": "5a8f538bc5170fb98f9bb284"
        },
        "property_type": "House",
        "reviews_count": 211,
        "room_type": "Entire home/apt",
        "room_type_category": "entire_home",
        "scrim_colors": ["#443120", "#473527", "#483726", "#42382F", "#191410", "#2C1D18", "#412B1C", "#624C3D", "#473728", "#27250C", "#362E1A", "#1D1D1B"],
        "state": "CA",
        "zipcode": "94117",
        "bed_type": "Real Bed",
        "bed_type_category": "real_bed",
        "access": "Your own entrance means you can come and go as you wish and enter the apartment through new french doors from the garden. There is a mini fridge, Nespresso coffee maker, toaster oven and goodies awaiting you in the breakfast bar area. Free wifi, cable, and maps of the area as well. Laundry is  available upon request conveniently located just outside the door inside the apartment.",
        "amenities": ["TV", "Cable TV", "Wifi", "Pets live on this property", "Indoor fireplace", "Heating", "Family/kid friendly", "Washer", "Dryer", "Smoke detector", "Carbon monoxide detector", "Essentials", "Hangers", "Hair dryer", "Iron", "Laptop friendly workspace", "Private living room", "Private entrance", "Bathtub", "Hot water", "Coffee maker", "Refrigerator", "Dishes and silverware", "Oven", "Garden or backyard", "Hot water kettle"],
        "amenities_ids": [1, 2, 4, 17, 27, 30, 31, 33, 34, 35, 36, 40, 44, 45, 46, 47, 56, 57, 61, 77, 90, 91, 93, 95, 101, 137],
        "cancel_policy": 3,
        "cancel_policy_short_str": "Flexible",
        "cleaning_fee_native": 75,
        "currency_symbol_right": null,
        "description": "One bedroom sanctuary with a beautiful garden view and cozy fireplace. Comes with it's own entrance just steps from bus lines, train and all that Haight Street has to offer. Complete privacy with a separate bedroom, bathroom, and  breakfast bar.\n\nIf you want to be within walking distance to Golden Gate Park, Haight St, Buena Vista Park, and Cole Valley, this is the spot. Full size bed in the bedroom with 400 thread count sheets and a pull-out twin in the living room. Just installed fireplace and large screen tv makes hanging out fun in the comfortable  living room. Bathroom has a shower within the tub and white fluffy towels.\n\nYour own entrance means you can come and go as you wish and enter the apartment through new french doors from the garden. There is a mini fridge, Nespresso coffee maker, toaster oven and goodies awaiting you in the breakfast bar area. Free wifi, cable, and maps of the area as well. Laundry is  available upon request conveniently located just outside the door inside the apartment.\n\nI live upstairs and will meet you upon arrival then be available as much as you need or not.  I've been exploring the neighborhood and take long walks with my dog so there's not much I haven't seen!\n\nYou will hear from many that this is the  best neighborhood in SF. I chose this area for the many  Victorian homes, the ease of mass transit, the walkability, and the abundance of parks,restaurants, and nightlife nearby.\nAs a recent transplant to this area I can tell you that the stores, coffee shops, restaurants, and pubs are great here. I forget I have a car most of the time! Street parking is easy except for Wednesday 8-10 due to street cleaning.\n\nEverything is a walk away or jump on the many bus lines that are at the corner. In minutes you can be at the Ferry Building, Marina, Presidio, Castro, UCSF Medical building, Market Street and Union Square. The N-Judah line also stops in nearby Cole Valley. I walk most places - post office, grocery store, pharmacy, bank, hardware, and clothing stores. The Magnolia Brew Pub is a block away with all their own draft beers. The number of walking distance hang-outs is amazing - Zam Zam is a fun martini bar, Sparrow is my new favorite farm to table restaurant and Club Deluxe offers pizza and live music every night! Plus Golden Gate Park is a walk away which means you can walk to all the museums and gardens there. I have books, maps and all the info you'll need to navigate your trip here.\n\nI live upstairs and will be available for any questions - my friendly Australian Shepherd, Boo,  may come downstairs to say hello in the backyard.\nI have  registered with the city of San Francisco and my license is #STR- (Phone number hidden by Airbnb)",
        "description_locale": "en",
        "experiences_offered": "none",
        "extra_user_info": null,
        "extras_price_native": 75,
        "guests_included": 2,
        "house_rules": "I'm OK with pets and the unit opens up to the backyard which makes it easy but my dog is out there so your pet must get along!",
        "interaction": "I live upstairs and will meet you upon arrival then be available as much as you need or not.  I've been exploring the neighborhood and take long walks with my dog so there's not much I haven't seen!",
        "is_location_exact": true,
        "jurisdiction_names": ["SAN FRANCISCO"],
        "jurisdiction_rollout_names": ["SAN FRANCISCO"],
        "language": "en",
        "listing_cleaning_fee_native": 75,
        "listing_monthly_price_native": 3750,
        "listing_price_for_extra_person_native": 50,
        "listing_security_deposit_native": 250,
        "listing_weekend_price_native": null,
        "listing_weekly_price_native": 1200,
        "locale": "en",
        "localized_check_in_time_window": "Anytime after 2PM",
        "localized_check_out_time": "12PM (noon)",
        "localized_city": "San Francisco",
        "notes": "I live upstairs and will be available for any questions - my friendly Australian Shepherd, Boo,  may come downstairs to say hello in the backyard.\nI have  registered with the city of San Francisco and my license is #STR- (Phone number hidden by Airbnb)",
        "price_for_extra_person_native": 50,
        "property_type_id": 2,
        "public_address": "San Francisco, CA, United States",
        "space": "If you want to be within walking distance to Golden Gate Park, Haight St, Buena Vista Park, and Cole Valley, this is the spot. Full size bed in the bedroom with 400 thread count sheets and a pull-out twin in the living room. Just installed fireplace and large screen tv makes hanging out fun in the comfortable  living room. Bathroom has a shower within the tub and white fluffy towels.",
        "square_feet": null,
        "star_rating": 5,
        "summary": "One bedroom sanctuary with a beautiful garden view and cozy fireplace. Comes with it's own entrance just steps from bus lines, train and all that Haight Street has to offer. Complete privacy with a separate bedroom, bathroom, and  breakfast bar.",
        "time_zone_name": "America/Los_Angeles",
        "additional_house_rules": "I'm OK with pets and the unit opens up to the backyard which makes it easy but my dog is out there so your pet must get along!",
        "in_building": false,
        "in_toto_area": false,
        "toto_opt_in": null,
        "wireless_info": null
      }
    )
  });
}

function findOne(roomId) {
  return __getMockDescriptionAsync();
}

module.exports.findOne = findOne;
