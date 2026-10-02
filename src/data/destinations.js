const destinations = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    country: "India",
    state: "Uttar Pradesh",
    continent: "North India",

    description:
      "The iconic white-marble monument of Agra, celebrated for its architecture, gardens and timeless history.",

    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85",

    tags: ["Heritage", "Monument", "Architecture"],

    coordinates: {
      latitude: 27.1751,
      longitude: 78.0421,
    },

    bestTime: "October to March",

    places: [
      {
        name: "Taj Mahal",
        description:
          "India's most iconic monument and a masterpiece of Mughal architecture.",
        category: "Heritage",
        image:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Agra Fort",
        description:
          "A historic red sandstone fort with impressive Mughal architecture.",
        category: "History",
        image:
          "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Mehtab Bagh",
        description:
          "A peaceful garden offering beautiful views towards the Taj Mahal.",
        category: "Garden",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "jaipur",
    name: "Jaipur",
    country: "India",
    state: "Rajasthan",
    continent: "North India",

    description:
      "The Pink City of Rajasthan, known for magnificent palaces, forts, colourful markets and royal heritage.",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",

    tags: ["Heritage", "Palaces", "Culture"],

    coordinates: {
      latitude: 26.9124,
      longitude: 75.7873,
    },

    bestTime: "October to March",

    places: [
      {
        name: "Hawa Mahal",
        description:
          "Jaipur's famous Palace of Winds with its distinctive honeycomb facade.",
        category: "Architecture",
        image:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Amber Fort",
        description:
          "A magnificent hilltop fort showcasing Rajput and Mughal architecture.",
        category: "Fort",
        image:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "City Palace",
        description:
          "A grand royal complex combining courtyards, museums and traditional architecture.",
        category: "Palace",
        image:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "varanasi",
    name: "Varanasi",
    country: "India",
    state: "Uttar Pradesh",
    continent: "North India",

    description:
      "An ancient city on the banks of the Ganges, known for its ghats, temples, spiritual traditions and vibrant streets.",

    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=85",

    tags: ["Spiritual", "Culture", "Ganges"],

    coordinates: {
      latitude: 25.3176,
      longitude: 82.9739,
    },

    bestTime: "October to March",

    places: [
      {
        name: "Dashashwamedh Ghat",
        description:
          "One of the most famous ghats on the Ganges, especially known for its evening Ganga Aarti.",
        category: "Spiritual",
        image:
          "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Kashi Vishwanath Temple",
        description:
          "One of the most revered temples associated with Lord Shiva.",
        category: "Temple",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Assi Ghat",
        description:
          "A popular riverside ghat known for sunrise views and cultural experiences.",
        category: "Culture",
        image:
          "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    state: "Kerala",
    continent: "South India",

    description:
      "A lush southern destination famous for tranquil backwaters, tropical landscapes, beaches and traditional culture.",

    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",

    tags: ["Nature", "Backwaters", "Beach"],

    coordinates: {
      latitude: 9.4981,
      longitude: 76.3388,
    },

    bestTime: "October to March",

    places: [
      {
        name: "Alleppey Backwaters",
        description:
          "A network of peaceful waterways best explored by traditional houseboat.",
        category: "Nature",
        image:
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Munnar",
        description:
          "A scenic hill destination surrounded by tea plantations and misty mountains.",
        category: "Mountains",
        image:
          "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Varkala",
        description:
          "A coastal destination known for dramatic cliffs, beaches and sunsets.",
        category: "Beach",
        image:
          "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "goa",
    name: "Goa",
    country: "India",
    state: "Goa",
    continent: "West India",

    description:
      "A coastal destination known for beaches, Portuguese heritage, seafood, relaxed landscapes and vibrant nightlife.",

    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85",

    tags: ["Beach", "Food", "Culture"],

    coordinates: {
      latitude: 15.2993,
      longitude: 74.124,
    },

    bestTime: "November to February",

    places: [
      {
        name: "Baga Beach",
        description:
          "A lively beach destination known for water activities and restaurants.",
        category: "Beach",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Basilica of Bom Jesus",
        description:
          "A historic church and important example of Goa's Portuguese heritage.",
        category: "Heritage",
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Fort Aguada",
        description:
          "A historic Portuguese fort overlooking the Arabian Sea.",
        category: "Fort",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    state: "Ladakh",
    continent: "North India",

    description:
      "A high-altitude Himalayan region known for dramatic mountains, monasteries, clear lakes and unforgettable landscapes.",

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",

    tags: ["Mountains", "Adventure", "Nature"],

    coordinates: {
      latitude: 34.1526,
      longitude: 77.5771,
    },

    bestTime: "May to September",

    places: [
      {
        name: "Pangong Lake",
        description:
          "A spectacular high-altitude lake famous for its changing shades of blue.",
        category: "Nature",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Nubra Valley",
        description:
          "A dramatic valley surrounded by mountains and high-altitude landscapes.",
        category: "Adventure",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Thiksey Monastery",
        description:
          "A striking Buddhist monastery overlooking the Indus Valley.",
        category: "Culture",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "hampi",
    name: "Hampi",
    country: "India",
    state: "Karnataka",
    continent: "South India",

    description:
      "An extraordinary archaeological landscape filled with ancient temples, ruins, boulders and remnants of the Vijayanagara Empire.",

    image:
      "https://images.unsplash.com/photo-1600100397608-f0101b7a1f27?auto=format&fit=crop&w=1600&q=85",

    tags: ["Heritage", "Ruins", "History"],

    coordinates: {
      latitude: 15.335,
      longitude: 76.46,
    },

    bestTime: "October to February",

    places: [
      {
        name: "Virupaksha Temple",
        description:
          "One of Hampi's most important and enduring temple complexes.",
        category: "Temple",
        image:
          "https://images.unsplash.com/photo-1600100397608-f0101b7a1f27?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Vijaya Vittala Temple",
        description:
          "A magnificent temple complex famous for its stone architecture and iconic chariot.",
        category: "Heritage",
        image:
          "https://images.unsplash.com/photo-1600100397608-f0101b7a1f27?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Hampi Bazaar",
        description:
          "A historic street reflecting the commercial life of the ancient city.",
        category: "History",
        image:
          "https://images.unsplash.com/photo-1600100397608-f0101b7a1f27?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "mysore",
    name: "Mysore",
    country: "India",
    state: "Karnataka",
    continent: "South India",

    description:
      "A royal Karnataka city known for magnificent palaces, traditional markets, art, culture and cuisine.",

    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85",

    tags: ["Palace", "Culture", "History"],

    coordinates: {
      latitude: 12.2958,
      longitude: 76.6394,
    },

    bestTime: "October to February",

    places: [
      {
        name: "Mysore Palace",
        description:
          "A spectacular royal palace and one of Karnataka's best-known landmarks.",
        category: "Palace",
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Chamundi Hill",
        description:
          "A prominent hill overlooking Mysore and home to the Chamundeshwari Temple.",
        category: "Temple",
        image:
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "jaisalmer",
    name: "Jaisalmer",
    country: "India",
    state: "Rajasthan",
    continent: "West India",

    description:
      "The Golden City of Rajasthan, famous for its sandstone fort, desert landscapes, havelis and camel safaris.",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",

    tags: ["Desert", "Fort", "Heritage"],

    coordinates: {
      latitude: 26.9157,
      longitude: 70.9083,
    },

    bestTime: "October to February",

    places: [
      {
        name: "Jaisalmer Fort",
        description:
          "A living sandstone fort rising dramatically from the Thar Desert.",
        category: "Fort",
        image:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Sam Sand Dunes",
        description:
          "A popular desert landscape for sunsets, camel rides and cultural experiences.",
        category: "Desert",
        image:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "rishikesh",
    name: "Rishikesh",
    country: "India",
    state: "Uttarakhand",
    continent: "North India",

    description:
      "A Himalayan riverside destination known for yoga, spirituality, temples, bridges and adventure activities.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85",

    tags: ["Spiritual", "Adventure", "Nature"],

    coordinates: {
      latitude: 30.0869,
      longitude: 78.2676,
    },

    bestTime: "February to May",

    places: [
      {
        name: "Laxman Jhula",
        description:
          "A famous suspension bridge overlooking the Ganges and surrounding hills.",
        category: "Landmark",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Triveni Ghat",
        description:
          "A riverside ghat known for its evening Ganga Aarti.",
        category: "Spiritual",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "darjeeling",
    name: "Darjeeling",
    country: "India",
    state: "West Bengal",
    continent: "East India",

    description:
      "A beautiful Himalayan hill town known for tea gardens, mountain views, colonial heritage and the Himalayan railway.",

    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85",

    tags: ["Mountains", "Tea", "Nature"],

    coordinates: {
      latitude: 27.041,
      longitude: 88.2663,
    },

    bestTime: "March to May",

    places: [
      {
        name: "Tiger Hill",
        description:
          "A famous viewpoint for sunrise over the Himalayan peaks.",
        category: "Nature",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Darjeeling Himalayan Railway",
        description:
          "A historic mountain railway winding through the Himalayan landscape.",
        category: "Heritage",
        image:
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },

  {
    id: "andaman",
    name: "Andaman Islands",
    country: "India",
    state: "Andaman and Nicobar Islands",
    continent: "East India",

    description:
      "A tropical island destination known for clear waters, coral reefs, beaches, marine life and historic sites.",

    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85",

    tags: ["Beach", "Nature", "Adventure"],

    coordinates: {
      latitude: 11.7401,
      longitude: 92.6586,
    },

    bestTime: "October to May",

    places: [
      {
        name: "Radhanagar Beach",
        description:
          "A spectacular beach known for its clear water and tropical scenery.",
        category: "Beach",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      },
      {
        name: "Cellular Jail",
        description:
          "A historic site in Port Blair connected with India's freedom struggle.",
        category: "History",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      },
    ],
  },
];

export default destinations;