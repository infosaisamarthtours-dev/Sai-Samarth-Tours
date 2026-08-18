import { Package } from '../types';

export const ALL_PACKAGES: Package[] = [
  // ================= PILGRIMAGE PACKAGES =================
  {
    id: 'shirdi-regular',
    title: 'Regular Shirdi Flight Package',
    category: 'pilgrimage',
    destination: 'Shirdi & Shani Shingnapur',
    duration: '1N/2D',
    price: '₹17,999/-',
    numericPrice: 17999,
    minPax: 2,
    featured: true,
    image: '/Priority-Packages-Regular Shirdi.png',
    description: 'Direct Flight Shirdi Yatra from Bangalore: 2x VIP Darshan at Sai Baba Samadhi Mandir, visit Dwarkamai, Chavadi, Gurusthan, Museum, and Shani Shingnapur temple with 3-star premium hotel accommodation.',
    highlights: [
      'Direct flight from Bangalore',
      '2x VIP Special Darshan Access',
      'Sai Baba Samadhi Temple',
      'Dwarkamai & Chavadi',
      'Shani Shingnapur Visit'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '2 Days Direct Flight Yatra',
    placesList: [
      { name: 'Shirdi (Sai Baba Samadhi Mandir - 2x VIP Darshan)' },
      { name: 'Shani Shingnapur (Lord Shani Temple)' },
      { name: 'Dwarkamai, Chavadi & Gurusthan' },
      { name: 'Sai Heritage Museum & Lendi Baug' }
    ],
    inclusions: [
      'Air fares (Both Onward & Return)',
      'Transfers and sightseeing\'s by A/c vehicle',
      '3-star Premium Accommodation on a Twin/Double sharing basis for 01 night',
      'MAPAI (Breakfast and Dinner)',
      'VIP Darshan in Shirdi Sai Baba temple (Two times)'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Mineral water, Coffee/Tea, Shopping',
      'Travel Insurance, Tips, Laundry, etc.',
      'Any medical or evacuation expenses, and expenses due to natural climate',
      'Any service not included in the inclusions or itinerary'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Shani Shingnapur – Shirdi',
        detail: 'Bangalore to Shirdi Departure (By Flight). On arrival at Shirdi airport, board the vehicle and proceed towards Shani Shingnapura (Shani temple). Later return to Shirdi, check-in to hotel, fresh up. In the evening visit Sai Mandir to have Sai Baba Samadhi Mandir Darshan (VIP Darshan), Gurusthan, Museum, Dwarakamai, and Chavadi. Return back to hotel, dinner and overnight stay at hotel in Shirdi.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Shirdi (2nd VIP Darshan) – Bangalore',
        detail: 'Morning after breakfast proceed to visit Sai Mandir for 2nd Sai Baba Samadhi Mandir Darshan (VIP Darshan). Return back to hotel and checkout with enroute lunch. Drop to Shirdi Airport for return flight to Bangalore with the blessings of Sai Baba.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Experience the bliss and divine aura of Sadguru Sai Baba with our specialized Regular Shirdi Flight Package from Bangalore. Enjoy direct flights, 2x VIP Darshan access at Samadhi Mandir, 3-star premium hotel stay, and visits to Shani Shingnapur, Dwarkamai, and Chavadi.',
      significance: 'Shirdi is the sacred land where Sai Baba spent over 60 years preaching love, compassion, and unity. Millions of devotees flock to Shirdi to seek his blessings at Samadhi Mandir.',
      bestTimeToVisit: 'Shirdi welcomes devotees year-round with comfortable weather throughout the year.',
      placesCovered: [
        'Sai Baba Samadhi Mandir (2x VIP Darshan)',
        'Shani Shingnapur Temple',
        'Dwarkamai Mosque',
        'Chavadi & Gurusthan',
        'Dixit Wada Museum'
      ],
      travelTips: [
        'Pre-arranged 2x VIP passes provided for fast & comfortable Darshan.',
        'Mobiles and electronics are prohibited inside the main Samadhi Mandir.',
        'Footwear counters are available at temple gate entrances.'
      ],
      whyChooseUs: [
        'Direct flights from Bangalore with seamless airport pick-up & drop',
        '2x VIP Special Darshan Passes for minimal waiting time',
        'Premium 3-star hotel stay close to Samadhi Mandir'
      ]
    },
    faqs: [
      {
        question: "How is 2x VIP Darshan arranged in Shirdi?",
        answer: "We pre-book 2 VIP Darshan slots (Day 1 Evening and Day 2 Morning) for you, ensuring short queues and comfortable Darshan at Samadhi Mandir."
      },
      {
        question: "Are direct flights included in the package?",
        answer: "Yes! Direct round-trip economy flights between Bangalore and Shirdi are included in the package."
      }
    ],
    coordinates: { x: 38, y: 55 }
  },
  {
    id: 'shirdi-3-jyothirlinga',
    title: 'Shirdi with 3 Jyothirlinga Tour Package',
    category: 'pilgrimage',
    destination: 'Maharashtra (Shirdi, Trimbakeshwar, Grishneshwar, Bhimashankar)',
    duration: '2N/3D',
    price: '₹23,999/-',
    numericPrice: 23999,
    minPax: 2,
    featured: true,
    image: '/Shirdi with 3 Jyothirlinga Priority Packages.png',
    description: 'Sacred Maharashtra Pilgrimage Yatra: Visit 3 revered Shiva Jyotirlingas (Bhimashankar, Trimbakeshwar & Ghrishneshwar), Shirdi Sai Baba VIP Darshan, Panchavati in Nashik, UNESCO Ellora Caves, Bhadra Maruti Temple, and Shani Shingnapur.',
    highlights: [
      'Trimbakeshwar Jyotirlinga (Three-Faced Trinity Shivlinga)',
      'Bhimashankar Jyotirlinga (6th Self-Emanated Jyotirlinga)',
      'Grishneshwar Jyotirlinga (Lord of Compassion Shrine)',
      'Shirdi Sai Baba VIP Special Darshan',
      'UNESCO World Heritage Ellora Caves & Shani Shingnapur'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '3 Days 3 Jyotirlingas Yatra',
    placesList: [
      { name: 'Bhimashankar Jyotirlinga' },
      { name: 'Shirdi (Sai Baba VIP Darshan)' },
      { name: 'Trimbakeshwar & Panchavati (Nashik)' },
      { name: 'Ghrishneshwar, Ellora Caves & Shani Shingnapur' }
    ],
    inclusions: [
      'To and from economy class air travel for Bangalore-to-Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
      'Baggage Allowance as per airline policy',
      'Tour Manager Services throughout the tour',
      'Entrance fees of all sightseeing places visited from inside',
      'All Meals (Breakfast, Lunch & Dinner)',
      'Transfers and sightseeing by A/C coach',
      'Accommodation on Twin/Double sharing basis for 02 nights in Shirdi',
      'Govt Tax of 5% over and above the Tour Cost mentioned'
    ],
    exclusions: [
      'Seat selection and meals not included in the flight journey',
      'Visa fees, Airport taxes, Govt taxes, Fuel Surcharges & new Govt tax applicability',
      'Up gradation in Airline class or hotel room category',
      'Cost of Air ticket deviation charges',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
      'Porterage, laundry, telephone, shopping, alcoholic beverages & personal food/drinks',
      'Individual medical, accident, hospitalization, or personal emergency costs',
      'Anything not explicitly mentioned in the Inclusions column'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Pune – Bhimashankar – Shirdi',
        detail: 'Bangalore to Pune departure. On arrival at Pune airport, board the vehicle and proceed towards Bhimashankar. On arrival at Bhimashankar, get a good darshan in famous Bhimashankar Jyotirlinga (the ancient Shiva temple home to the sixth self-emanated Jyotirlinga). Then proceed towards Shirdi. Dinner and overnight stay at hotel in Shirdi.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Shirdi – Nashik (Trimbakeshwar) – Shirdi',
        detail: 'Early in the morning (6am) move to Sai Mandir to have Sai Baba Darshan (VIP), Gurusthan, Museum, Dwarakamai and Chavadi. Return back to hotel, have breakfast and visit famous Trimbakeshwar Jyotirlinga (one of the 12 Jyotirlingas with three faces embodying Brahma, Vishnu, and Shiva). After lunch proceed towards Nashik, visit Panchavati (Sita Guha, Kalaram, Goraram temple & Triveni Sangama where Godavari unites with Varuni and Taruni). Return to Shirdi, dinner and overnight stay at Shirdi.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Shirdi – Ellora (Ghrishneshwar) – Shani Shingnapur – Pune Departure',
        detail: 'After breakfast, checkout and proceed to Ellora. Visit famous Ghrishneshwar Jyotirlinga (Lord of Compassion shrine in Shiva Purana) and UNESCO World Heritage Ellora Caves (rock-cut Hindu, Buddhist, and Jain monument complex). After lunch transfer to Bhadra Maruti Temple, after darshan visit Shani Shingnapur, then proceed to Pune airport for your return journey to Bangalore with the blessings of Sai Baba.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'The Shirdi with 3 Jyothirlinga tour is one of Maharashtra\'s most sacred spiritual circuits. Designed specifically for devotees seeking ultimate peace and blessings, this yatra covers the serene abode of Sadguru Sai Baba in Shirdi along with three venerable Jyothirlingas of Lord Shiva: Trimbakeshwar (Nashik), Grishneshwar (Ellora), and Bhimashankar (Sahyadri Mountains).',
      significance: 'Visiting three Jyothirlingas along with Shirdi Sai Baba brings immense spiritual merit. Trimbakeshwar represents the divine Trinity (Brahma, Vishnu, Maheshwara), Grishneshwar is the 12th and last Jyothirlinga symbolizing devotion and humility, while Bhimashankar is a revered seat of Lord Shiva in its natural mountain glory.',
      bestTimeToVisit: 'October to March is the ideal season when the weather across Maharashtra is pleasant and comfortable for temple visits and road journeys.',
      placesCovered: [
        'Bhimashankar Jyotirlinga',
        'Shirdi Sai Baba Samadhi Mandir & VIP Darshan',
        'Trimbakeshwar Jyotirlinga (Nashik)',
        'Panchavati (Sita Guha, Kalaram & Triveni Sangama)',
        'Ghrishneshwar Jyotirlinga & Ellora Caves',
        'Bhadra Maruti Temple & Shani Shingnapur'
      ],
      travelTips: [
        'Dress Code: Traditional modest attire is mandatory at all temples.',
        'Senior Citizens: Wheelchairs and assistance available for smooth Darshan.',
        'VIP Darshan Passes: Pre-booked VIP pass guidance provided for Shirdi Samadhi Mandir.'
      ],
      whyChooseUs: [
        'End-to-end AC vehicle transfers with experienced devotional drivers',
        'Sanitised, premium hotels close to temple complexes',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "How is Darshan arranged at Shirdi and the 3 Jyothirlingas?",
        answer: "We provide guidance and pre-booking support for VIP / Special Darshan tickets at Shirdi Sai Baba Temple to save waiting time."
      },
      {
        question: "Is this package suitable for senior citizens?",
        answer: "Yes, absolutely! Our Shirdi with 3 Jyothirlinga package is specially crafted with comfortable AC vehicles and hotels close to temple gates."
      },
      {
        question: "What type of accommodation and meals are included?",
        answer: "You will stay in handpicked, hygienic 3-star deluxe hotels with modern amenities. Pure vegetarian breakfast and dinner are included daily in your package."
      },
      {
        question: "Can we customize the itinerary to add Shanishingnapur or Ajanta?",
        answer: "Yes! All our tour packages are 100% customizable. You can easily add Shanishingnapur, Muktidham, Panchavati, or Ajanta Caves by mentioning your preference in the enquiry form or calling us."
      }
    ],
    coordinates: { x: 36, y: 58 }
  },
  {
    id: 'shirdi-2-jyothirlinga',
    title: 'Shirdi with 2 Jyothirlinga Tour Package',
    category: 'pilgrimage',
    destination: 'Maharashtra (Pune, Bhimashankar, Shirdi, Grishneshwar)',
    duration: '1N/2D',
    price: '₹20,999/-',
    numericPrice: 20999,
    minPax: 2,
    featured: true,
    image: '/Shirdi with 3 Jyothirlinga Priority Packages.png',
    description: 'Divine Maharashtra Pilgrimage Yatra (1N/2D): Visit 2 sacred Shiva Jyotirlingas (Bhimashankar & Ghrishneshwar), Shirdi Sai Baba VIP Darshan, UNESCO Ellora Caves, Bhadra Maruti Temple, and Shani Shingnapur.',
    highlights: [
      'Bhimashankar Jyotirlinga',
      'Grishneshwar Jyotirlinga',
      'Sai Baba Temple',
      'Ellora Caves'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '2 Days 2 Jyotirlingas Yatra',
    placesList: [
      { name: 'Bhimashankar Jyotirlinga' },
      { name: 'Shirdi (Sai Baba VIP Darshan)' },
      { name: 'Ghrishneshwar Jyotirlinga' },
      { name: 'Ellora Caves, Bhadra Maruti & Shani Shingnapur' }
    ],
    inclusions: [
      'To and from economy class air travel for \'Bangalore to Bangalore Tour\' guests as mentioned in the itinerary Airfare, Airport taxes and Visa Fees',
      'Baggage Allowance as per the airline policy',
      'Tour Manager Services throughout the tour',
      'Entrance fees of all sightseeing places to be visited from inside',
      'All Meals – Breakfast, Lunch, Dinner.',
      'Cost of internal airfare as mentioned in the itinerary',
      'Transfers and sightseeing\'s by A/C coach',
      'Accommodation on Twin/Double sharing basis for 01 night',
      'Govt Tax of 5% over and above the Tour Cost mentioned'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Visa fees, Airport taxes, Govt Taxes, Fuel Surcharges and any applicability of new taxes from Govt',
      'Any up gradation in Airline class or hotel room category',
      'Cost of Air ticket deviation charges',
      'Any Increase in the rate of exchange leading to an increase in all land arrangements which may come in to effect prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Any extra expense such as route change, Airline change, Date change, Accommodation facilities, etc incurred due to the unforeseen, unavoidable forced majeure circumstances during the tour',
      'Porterage, laundry, telephone charges, shopping, wines & alcoholic beverages, items of personal nature and food or drink which is not part of a set group menu',
      'Any extra cost incurred on behalf of an individual due to illness, accident, hospitalization, or any personal emergency',
      'Any services or activity charges other than those included in the group tour itinerary',
      'To and fro Air fare, Airport transfers, visa fees to Bangalore'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Day 1 | Bangalore- Pune-Bhimashankar',
        detail: 'Bangalore to Pune Departure, On arrival at Pune airport, have Board the vehicle and proceed towards Bhimashankar, On arrival at Bhimashankar, get a good darshan in famous Bhimashankar Jyotirlinga (Bhimshankar is not just a pilgrimage site but also a heavenly escape into nature\'s paradise. The ancient Shiva temple is home to the sixth Shivlinga among the 12 self-emanated Jyotirlingas of Mahadev) then proceed towards Shirdi, Dinner and overnight stay at hotel in Shirdi.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Day 2 | Shirdi-Ellora (Ghrishneshwar)-Pune',
        detail: 'Early in the morning (6am) move to Sai Mandir to have a Sai Baba Darshan (VIP), Gurusthan, Museum, Dwarakamai and Chawadi After breakfast, checkout and proceed to Ellora, Visit famous Ghrishneshwar Jyotirlinga, (This is one of the shrines dedicated to Lord Shiva that is referenced in the Shiva Purana. The word Ghrineshwara means "lord of compassion"). Then Visit Ellora caves, (Ellora is a UNESCO World Heritage Site., It is one of the largest rock-cut Hindu temple cave complexes in the world, featuring Buddhist and Jain monuments with art work dating from the period 600-1000 CE.) After Lunch transfer to Badra Maruti Temple after dharshan visit Shani Shingnapura then proceed to pune airport for your return journey to Bangalore with the blessings of Sai Baba.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'The Shirdi with 2 Jyothirlinga (1N/2D) tour offers a powerful compact spiritual pilgrimage covering Sadguru Sai Baba\'s abode in Shirdi along with 2 venerated Shiva Jyotirlingas: Bhimashankar (the 6th self-emanated shrine) and Grishneshwar (the 12th Jyotirlinga at Ellora). Enjoy seamless Bangalore-to-Pune flights, VIP Darshan, deluxe accommodation, and comfortable AC coach travel.',
      significance: 'Bhimashankar is situated amidst the lush Sahyadri hills, enshrining one of the most revered self-manifested Shiva lingams. Grishneshwar represents the Lord of Compassion and is adjacent to the UNESCO World Heritage Ellora Caves. Together with Sai Baba Samadhi Mandir and Shani Shingnapur, this 2-day tour offers complete spiritual fulfillment.',
      bestTimeToVisit: 'Year-round pilgrimage with pleasant weather especially between September and March.',
      placesCovered: [
        'Bhimashankar Jyotirlinga',
        'Shirdi Sai Baba Samadhi Mandir (VIP Darshan)',
        'Dwarkamai, Chavadi & Gurusthan',
        'Ghrishneshwar Jyotirlinga',
        'UNESCO World Heritage Ellora Caves',
        'Bhadra Maruti Temple & Shani Shingnapur'
      ],
      travelTips: [
        'Traditional modest attire is required for entering temple sanctums.',
        'Pre-booked VIP passes are arranged for Shirdi Samadhi Mandir.',
        'Comfortable walking footwear is recommended for temple visits.'
      ],
      whyChooseUs: [
        'Direct flight connectivity with Bangalore pick-up & drop',
        'VIP Darshan access for senior citizen comfort',
        'Pure vegetarian meals and dedicated tour manager'
      ]
    },
    faqs: [
      {
        question: "Which two Jyotirlingas are covered in this 1N/2D package?",
        answer: "This package covers Bhimashankar Jyotirlinga and Grishneshwar Jyotirlinga, along with Shirdi Sai Baba Samadhi Mandir (VIP Darshan), Ellora Caves, and Shani Shingnapur."
      },
      {
        question: "Are flight tickets and meals included in the price?",
        answer: "Yes, Bangalore-to-Bangalore flights, AC coach transfers, 1 night deluxe accommodation, and all vegetarian meals (Breakfast, Lunch, Dinner) are included."
      }
    ],
    coordinates: { x: 37, y: 57 }
  },
  {
    id: 'kholapur-pandarpur',
    title: 'Kolhapur & Pandharpur Tour Package',
    category: 'pilgrimage',
    destination: 'Maharashtra (Kolhapur, Pandharpur, Solapur, Tuljapur)',
    duration: '2N/3D',
    price: '₹23,999/-',
    numericPrice: 23999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1200&auto=format&fit=crop',
    description: 'Devotional Yatra to Shri Mahalakshmi (Ambabai) Temple in Kolhapur, Lord Vitthal-Rukmini Mandir & Chandrabhaga River in Pandharpur, Goddess Tulja Bhavani in Tuljapur, and Lord Siddheshwar in Solapur.',
    highlights: [
      'Goddess Mahalaxmi (Ambabai) Temple Darshan (Shakti Peeth, Kolhapur)',
      'Lord Vitthal & Rukmini Temple Darshan (Pandharpur)',
      'Holy Dip at Chandrabhaga River (Bhima River)',
      'Goddess Tulja Bhavani Temple Visit (Tuljapur)',
      'Shri Siddheshwar Temple & Solapur Fort'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '3 Days Sacred Shakti & Vitthal Yatra',
    placesList: [
      { name: 'Kolhapur (Mahalaxmi Ambabai Temple)' },
      { name: 'Pandharpur (Vitthal Rukmini Temple & Chandrabhaga)' },
      { name: 'Tuljapur (Tulja Bhavani Shakti Peeth)' },
      { name: 'Solapur (Siddheshwar Temple)' }
    ],
    inclusions: [
      'To and from economy class air travel for Bangalore-to-Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
      'Baggage Allowance as per airline policy',
      'Tour Manager Services throughout the tour',
      'Entrance fees of all sightseeing places visited from inside',
      'All Meals (Breakfast, Lunch & Dinner)',
      'Transfers and sightseeing by A/C coach',
      'Accommodation on Twin/Double sharing basis for 02 nights',
      'Govt Tax of 5% over and above the Tour Cost mentioned'
    ],
    exclusions: [
      'Visa fees, Airport taxes, Govt taxes, Fuel Surcharges & new Govt tax applicability',
      'Up gradation in Airline class or hotel room category',
      'Cost of Air ticket deviation charges',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
      'Porterage, laundry, telephone, shopping, alcoholic beverages & personal food/drinks',
      'Individual medical, accident, hospitalization, or personal emergency costs',
      'Anything not explicitly mentioned in the Inclusions column'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Goa / Belgaum / Pune – Kolhapur',
        detail: 'Arrival at airport / railway station and transfer to Kolhapur. Check in to hotel, fresh up and proceed to visit sacred Goddess Mahalaxmi (Ambabai) Temple (one of the premier Shakti Peeths). Explore local temple bazaar, dinner and overnight stay at hotel in Kolhapur.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Kolhapur – Pandharpur – Tuljapur – Solapur',
        detail: 'After breakfast, checkout and proceed to Pandharpur. Take holy dip in Chandrabhaga River and have divine Darshan of Lord Vitthal & Rukmini Temple. Later proceed to Tuljapur to visit sacred Goddess Tulja Bhavani Temple (Bhavani Mata Shakti Peeth). Transfer to Solapur, dinner and overnight stay at hotel in Solapur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Solapur – Siddheshwar Temple – Return Departure',
        detail: 'After breakfast, visit Shri Siddheshwar Temple & Solapur Fort. Checkout from hotel and proceed to airport / railway station for your return journey to Bangalore carrying divine blessings and sweet memories of the tour.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Experience ultimate devotional bliss with our Kolhapur & Pandharpur Pilgrimage Yatra. Visit the revered Shakti Peeth of Goddess Mahalaxmi in Kolhapur, the sacred seat of Lord Vitthal-Rukmini at Pandharpur on the banks of the Chandrabhaga River, and Goddess Tulja Bhavani in Tuljapur.',
      significance: 'Kolhapur Mahalaxmi is one of the premier Shakti Peeths where Goddess Lakshmi resides in her glorious form. Pandharpur is the spiritual heartland of Maharashtra dedicated to Lord Vitthal.',
      bestTimeToVisit: 'October to March is the best time for pleasant weather during temple visits and road travel.',
      placesCovered: ['Kolhapur Mahalaxmi Temple', 'Pandharpur Vitthal Rukmini Mandir', 'Chandrabhaga River Ghats', 'Tuljapur Tulja Bhavani Temple', 'Solapur Siddheshwar Temple'],
      travelTips: [
        'Traditional modest attire is required for temple entries.',
        'Keep slip-on footwear handy for temple visits.',
        'Senior citizen wheelchair assistance available.'
      ],
      whyChooseUs: [
        'Comfortable AC transfers with devotional drivers',
        'Hygienic deluxe hotel stays close to temples',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "How is Darshan arranged at Kolhapur Mahalaxmi & Pandharpur?",
        answer: "Our experienced drivers and tour guides assist you near temple counters for smooth, hassle-free Darshan at both Kolhapur Mahalaxmi and Pandharpur Vitthal Rukmini Mandir."
      },
      {
        question: "Are all meals included in the package?",
        answer: "Yes, pure vegetarian Breakfast, Lunch, and Dinner are fully included as per the itinerary."
      }
    ]
  },
  {
    id: 'puri-jagannath',
    title: 'Puri Jagannath & Konark Tour Package',
    category: 'pilgrimage',
    destination: 'Odisha (Puri, Konark, Bhubaneswar)',
    duration: '2N/3D',
    price: '₹30,999/-',
    numericPrice: 30999,
    minPax: 2,
    featured: true,
    image: '/Puri Jagannath  Priority Packages.png',
    description: 'Sacred Odisha Pilgrimage Yatra: Visit Lord Jagannath Temple in Puri, Sakshi Gopal Temple, UNESCO World Heritage Konark Sun Temple, Dhauli Peace Pagoda, Lingaraj Temple, Kala Bhoomi Odisha Crafts Museum, and Udayagiri Jain Caves.',
    highlights: [
      'Jagannath Temple Puri (Lord Jagannath Evening Darshan)',
      'Konark Sun Temple (UNESCO World Heritage Site)',
      'Lingaraj Temple (Dedicated to Hari Hara form of Shiva & Vishnu)',
      'Puri Beach & Boyanika / Utkalika Handloom Shopping',
      'Bhubaneswar Temples, Dhauli Peace Pagoda & Udayagiri Caves'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '3 Days Sacred Odisha Yatra',
    placesList: [
      { name: 'Puri (Jagannath Temple & Puri Beach)' },
      { name: 'Konark (Sun Temple UNESCO Site)' },
      { name: 'Bhubaneswar (Lingaraj Temple & Dhauli Pagoda)' },
      { name: 'Udayagiri Caves & Kala Bhoomi Museum' }
    ],
    inclusions: [
      'Airfares (Both Onward and Return)',
      'Transfers and Sightseeing by A/C Coach',
      '3-star Premium Accommodation on a Twin/Double sharing basis',
      'All Meals included (Breakfast, Lunch & Dinner)',
      'Packaged drinking water (1 ltr per person per day)',
      'Professional Tourist Guide'
    ],
    exclusions: [
      'Pooja charges if any',
      'Seat selection and meals are not included in the flight journey',
      'Mineral water, Coffee/Tea, Shopping',
      'Travel Insurance, Tips, Laundry, etc.',
      'Any medical or evacuation expenses, and expenses due to natural climate'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Bhubaneswar – Puri',
        detail: 'Tour begins with a warm welcome at Kempegowda International Airport, Bangalore. Flight journey to Bhubaneswar Airport. Upon arrival, board AC vehicle and have breakfast. Visit Sakshi Gopal (renowned Lord Krishna temple), then proceed towards Puri Jagannath Temple. Check in to hotel, have lunch. In the evening have divine Lord Jagannath Darshan. Return to hotel for dinner and overnight stay in Puri.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Puri – Konark – Bhubaneswar',
        detail: 'Day starts with delicious breakfast and visit to UNESCO World Heritage Konark Sun Temple. Proceed towards Dhauli Temple (Peace Pagoda). Enroute lunch, followed by shopping at Boyanika or Utkalika for authentic hand-woven Odisha Sarees and handlooms. Proceed to Bhubaneswar for dinner and overnight stay.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Bhubaneswar Sightseeing – Bangalore Departure',
        detail: 'After breakfast and checkout, visit Lingaraj Temple (dedicated to Hari Hara form of Shiva and Vishnu). Enroute lunch and proceed to Kala Bhoomi (Odisha Crafts Museum) and Udayagiri Jain Caves (18 rock-cut caves). Transfer to Bhubaneswar airport for return flight to Bangalore with the blessings of Lord Jagannath.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Embark on a divine journey to Puri Jagannath, one of the holy Char Dhams of India. Explore the architectural marvel of Konark Sun Temple (UNESCO World Heritage Site), sacred Lingaraj Temple in Bhubaneswar, Dhauli Peace Pagoda, and traditional Odisha handlooms.',
      significance: 'Puri Jagannath is a paramount pilgrimage shrine dedicated to Lord Jagannath (Vishnu/Krishna), along with brother Balabhadra and sister Subhadra.',
      bestTimeToVisit: 'October to March offers pleasant weather for temple visits and coastal tours.',
      placesCovered: [
        'Puri Jagannath Temple',
        'Sakshi Gopal Temple',
        'Konark Sun Temple',
        'Dhauli Peace Pagoda',
        'Lingaraj Temple',
        'Kala Bhoomi Crafts Museum',
        'Udayagiri Jain Caves'
      ],
      travelTips: [
        'Leather items and mobile phones are strictly prohibited inside Puri Jagannath Temple.',
        'Dress modestly for all temple visits.',
        'Guides assist in smooth queue management.'
      ],
      whyChooseUs: [
        'Direct flight transfers from Bangalore with airport assistance',
        'Handpicked 3-star premium hotel accommodation',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "What are the rules for entering Puri Jagannath Temple?",
        answer: "Only Indian Hindus are allowed inside the main temple. Leather items, belts, wallets, cameras, and mobiles are strictly not allowed inside."
      },
      {
        question: "Are flight tickets from Bangalore included?",
        answer: "Yes, onward and return economy airfares between Bangalore and Bhubaneswar are included."
      }
    ]
  },
  {
    id: 'kamakhya',
    title: 'Kamakhya Temple Tour Package',
    category: 'pilgrimage',
    destination: 'Assam (Guwahati)',
    duration: '1N/2D',
    price: '₹27,999/-',
    numericPrice: 27999,
    minPax: 2,
    featured: true,
    image: '/Kamakhya Priority Packages.png',
    description: 'Sacred Assam Shakti Peeth Yatra: Direct flight from Bangalore to Guwahati, visit famous Maa Kamakhya Temple (revered Shakti Peeth), Vasistha Temple, Balaji Temple, Umananda Temple on Peacock Island in Brahmaputra River, and Navagraha Temple.',
    highlights: [
      'Maa Kamakhya Temple Darshan (Revered Shakti Peeth)',
      'Umananda Temple (Peacock Island in Brahmaputra River)',
      'Vasistha Temple & Grand Balaji Temple Visit',
      'Navagraha Temple & Assam State Museum',
      'Direct Round-Trip Flights from Bangalore'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '2 Days Sacred Kamakhya Yatra',
    placesList: [
      { name: 'Guwahati (Maa Kamakhya Shakti Peeth)' },
      { name: 'Peacock Island (Umananda Temple & Brahmaputra)' },
      { name: 'Vasistha Ashram & Balaji Temple' },
      { name: 'Navagraha Temple & Assam State Museum' }
    ],
    inclusions: [
      'All Meals (Breakfast, Lunch & Dinner)',
      'Airfares (Both Onward and Return)',
      'Transfers and Sightseeing by A/C Coach',
      '3-star Accommodation on a Twin/Double sharing basis for 01 night',
      'Packaged drinking water (1 ltr per person per day)',
      'Professional Tourist Guide',
      'Entry tickets as per the itinerary'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Mineral water, Coffee/Tea, Shopping',
      'Travel Insurance, Tips, Laundry, etc.',
      'Any medical or evacuation expenses, and expenses due to natural climate',
      'Any service not included in the inclusions or itinerary',
      'Pooja charges if any'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Guwahati – Kamakhya Temple',
        detail: 'Bangalore International Airport to Guwahati airport by flight. Upon arrival in Guwahati, begin your journey by visiting the serene Vasistha Temple and the grand Balaji Temple. Enjoy lunch, then proceed to the famous Kamakhya Temple, one of the most revered Shakti Peethas. End the day with dinner and an overnight stay at the hotel in Guwahati.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Guwahati City Tour – Bangalore Departure',
        detail: 'After breakfast, check out from the hotel and visit the beautiful Umananda Temple, located on Peacock Island in the middle of the Brahmaputra River. Then visit Navagraha Temple followed by a visit to the historical Assam State Museum (if time permits). Post lunch, transfer to the Guwahati airport for your return flight to Bangalore.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Experience divine cosmic energy at Maa Kamakhya Temple in Guwahati, Assam. Situated on Nilachal Hill overlooking the mighty Brahmaputra River, this yatra includes visits to Umananda Shiva Temple on Peacock Island, Vasistha Temple, Balaji Temple, and Navagraha Temple with round-trip flights from Bangalore.',
      significance: 'Kamakhya Temple is the supreme center of Tantric Shakti worship and one of the oldest 51 Shakti Peethas where Goddess Sati\'s Yoni fell.',
      bestTimeToVisit: 'October to April is the best season for visiting Guwahati and Kamakhya Temple.',
      placesCovered: [
        'Maa Kamakhya Temple',
        'Umananda Temple (Peacock Island)',
        'Vasistha Temple',
        'Balaji Temple',
        'Navagraha Temple',
        'Assam State Museum'
      ],
      travelTips: [
        'Special VIP Pass / VIP pass entry counter assistance provided for fast Darshan.',
        'Comfortable footwear is recommended for walking up temple inclines.',
        'Ferries / motorboats operate between Guwahati bank and Peacock Island.'
      ],
      whyChooseUs: [
        'Direct flight transfers from Bangalore with airport assistance',
        'Hygienic 3-star hotel stay in Guwahati',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "How is Darshan arranged at Kamakhya Temple?",
        answer: "We provide guidance and priest assistance near temple counters for smooth Darshan at Kamakhya Temple."
      },
      {
        question: "How do we reach Umananda Temple?",
        answer: "Umananda Temple is located on Peacock Island in the Brahmaputra River. Motorized ferry boat transfers from Guwahati river bank are arranged."
      }
    ]
  },
  {
    id: 'kashi-ayodhya-prayagraj',
    title: 'Kashi with Ayodhya & Prayagraj Yatra',
    category: 'pilgrimage',
    destination: 'Uttar Pradesh (Varanasi, Prayagraj, Ayodhya)',
    duration: '4N/5D',
    price: '₹41,999/-',
    numericPrice: 41999,
    minPax: 2,
    featured: true,
    image: '/Kashi with Ayodhya & Prayagraj Priority Packages.png',
    description: 'Sacred Uttar Pradesh Tri-Tirth Yatra: Visit Kashi Vishwanath Corridor, Annapurna Temple, Vishalakshi Temple, Subah-e-Banaras & Evening Ganga Aarti boat ride in Varanasi, Sarnath Buddhist Heritage, Triveni Sangam holy dip & Hanuman Mandir in Prayagraj, and Shri Ram Janmabhoomi Mandir, Hanuman Garhi & Saryu River in Ayodhya.',
    highlights: [
      'Kashi Vishwanath Corridor & Evening Ganga Aarti Boat Ride',
      'Shri Ram Janmabhoomi Temple & Hanuman Garhi (Ayodhya)',
      'Triveni Sangam Holy Dip (Ganga, Yamuna & Saraswati, Prayagraj)',
      'Sarnath Buddhist Stupa & Archaeological Museum',
      'Direct Round-Trip Flights from Bangalore'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '5 Days Sacred Uttar Pradesh Tri-Tirth Yatra',
    placesList: [
      { name: 'Varanasi (Kashi Vishwanath Corridor & Ganga Aarti)' },
      { name: 'Sarnath (Dhamek Stupa & Buddha Temple)' },
      { name: 'Prayagraj (Triveni Sangam & Bade Hanuman Mandir)' },
      { name: 'Ayodhya (Shri Ram Janmabhoomi & Hanuman Garhi)' }
    ],
    inclusions: [
      'To and from economy class air travel for Bangalore-to-Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
      'Baggage Allowance as per airline policy',
      'Tour Manager Services throughout the tour',
      'Entrance fees of all sightseeing places visited from inside',
      'All Meals (Breakfast, Lunch & Dinner)',
      'Transfers and sightseeing by A/C coach',
      'Accommodation on Twin/Double sharing basis for 04 nights',
      'Private boat ride for Evening Ganga Aarti in Varanasi',
      'Govt Tax of 5% over and above the Tour Cost mentioned'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Visa fees, Airport taxes, Govt taxes, Fuel Surcharges & new Govt tax applicability',
      'Up gradation in Airline class or hotel room category',
      'Cost of Air ticket deviation charges',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
      'Porterage, laundry, telephone, shopping, alcoholic beverages & personal food/drinks',
      'Individual medical, accident, hospitalization, or personal emergency costs',
      'Anything not explicitly mentioned in the Inclusions column'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Varanasi (Arrival & Evening Ganga Aarti)',
        detail: 'Bangalore to Varanasi departure (by flight). Upon arrival at Varanasi Airport, meet our representative and transfer to hotel. Check-in and fresh up. In the evening, proceed to Dashashwamedh Ghat for a breathtaking private boat ride to witness the world-famous Evening Ganga Aarti. Dinner and overnight stay in Varanasi.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Kashi Vishwanath Darshan & Sarnath Excursion',
        detail: 'Early morning holy dip in River Ganga. Visit Kashi Vishwanath Temple Corridor, Maa Annapurna Temple, and Mata Vishalakshi Shakti Peeth. After breakfast, visit BHU Vishwanath Temple, Sankat Mochan Hanuman Temple, and Tulsi Manas Mandir. Post lunch, visit Sarnath (Dhamek Stupa, Chaukhandi Stupa & Deer Park where Lord Buddha preached his first sermon). Return to hotel for dinner and overnight stay in Varanasi.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Varanasi – Prayagraj (Triveni Sangam & Temples)',
        detail: 'After breakfast, checkout and proceed to Prayagraj (about 125 km). Visit the sacred Triveni Sangam (confluence of Rivers Ganga, Yamuna, and mythical Saraswati) for holy dip and boat ride. Visit Bade Hanuman Mandir (Leeta Hanuman), Anand Bhawan, and Alopi Devi Shakti Peeth. Dinner and overnight stay at hotel in Prayagraj.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Prayagraj – Ayodhya (Shri Ram Janmabhoomi)',
        detail: 'After breakfast, checkout and drive to Ayodhya (about 170 km). Check in to hotel and proceed to visit Hanuman Garhi Temple. Have divine Darshan of Shri Ram Lalla Virajman at the grand Shri Ram Janmabhoomi Mandir. Visit Kanak Bhawan, Dashrath Mahal, and attend the evening Saryu River Aarti at Ram Ki Paidi. Dinner and overnight stay at hotel in Ayodhya.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Ayodhya Sightseeing – Varanasi / Lucknow Airport Departure',
        detail: 'Morning walk along the peaceful Saryu Ghats. After breakfast and checkout, visit Lata Mangeshkar Chowk and local craft bazaars. Post lunch, transfer to Varanasi / Lucknow Airport for your return flight to Bangalore with divine blessings of Lord Shiva and Lord Rama.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Embark on the ultimate North Indian pilgrimage covering three holiest cities: Kashi (Varanasi), Prayagraj, and Ayodhya. Experience Kashi Vishwanath Corridor, evening boat Aarti, holy dip at Triveni Sangam, and divine Darshan of Ram Lalla at Shri Ram Janmabhoomi Mandir in Ayodhya.',
      significance: 'Varanasi is the Moksha Puri of Lord Shiva, Prayagraj is the Tirthraj of holy rivers, and Ayodhya is the sacred birthplace of Lord Shri Rama.',
      bestTimeToVisit: 'October to March offers pleasant weather for temple visits, river ghat walks, and boat rides.',
      placesCovered: [
        'Kashi Vishwanath Corridor & Annapurna Temple',
        'Dashashwamedh Ghat Evening Ganga Aarti (Private Boat)',
        'Sarnath Dhamek Stupa & Buddha Temple',
        'Triveni Sangam & Bade Hanuman Mandir (Prayagraj)',
        'Shri Ram Janmabhoomi Mandir & Hanuman Garhi (Ayodhya)',
        'Saryu River Ghats & Ram Ki Paidi'
      ],
      travelTips: [
        'Mobile phones and electronic items are restricted inside Shri Ram Janmabhoomi & Kashi Vishwanath inner sanctums.',
        'Wear comfortable slip-on footwear for walking along ghats and temple corridors.',
        'Boating at Triveni Sangam and Dashashwamedh Ghat is arranged with safety lifejackets.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore with dedicated tour manager',
        'Hygienic 3-star deluxe hotel stays in Varanasi, Prayagraj & Ayodhya',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "How is Darshan arranged at Kashi Vishwanath & Shri Ram Janmabhoomi?",
        answer: "Our team assists with queue management and pre-booking slots for smooth Darshan at both Kashi Vishwanath Corridor and Shri Ram Janmabhoomi Mandir."
      },
      {
        question: "Is the Ganga Aarti boat ride included?",
        answer: "Yes! A private boat ride to view the world-famous Evening Ganga Aarti at Dashashwamedh Ghat is included in the package."
      }
    ]
  },
  {
    id: 'kashi-ayodhya',
    title: 'Kashi with Ayodhya Tour Package',
    category: 'pilgrimage',
    destination: 'Uttar Pradesh (Varanasi & Ayodhya)',
    duration: '2N/3D',
    price: '₹29,999/-',
    numericPrice: 29999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=1200&auto=format&fit=crop',
    description: 'Focused Sacred Pilgrimage: Visit Kashi Vishwanath Temple Corridor, Annapurna Temple, Evening Ganga Aarti boat ride in Varanasi, Sarnath Stupa, and divine Ram Lalla Darshan at Shri Ram Janmabhoomi Mandir & Hanuman Garhi in Ayodhya.',
    highlights: [
      'Kashi Vishwanath Corridor & Annapurna Temple Darshan',
      'Dashashwamedh Ghat Evening Ganga Aarti Private Boat Ride',
      'Shri Ram Janmabhoomi Temple & Hanuman Garhi (Ayodhya)',
      'Sarnath Buddhist Heritage & Banarasi Silk Weaving Visit',
      'Direct Round-Trip Flights from Bangalore'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '3 Days Sacred Kashi & Ayodhya Yatra',
    placesList: [
      { name: 'Varanasi (Kashi Vishwanath Corridor & Evening Ganga Aarti)' },
      { name: 'Sarnath (Dhamek Stupa & Buddha Temple)' },
      { name: 'Ayodhya (Shri Ram Janmabhoomi & Hanuman Garhi)' },
      { name: 'Ram Ki Paidi & Saryu River Ghats' }
    ],
    inclusions: [
      'To and from economy class air travel for Bangalore-to-Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
      'Baggage Allowance as per airline policy',
      'Tour Manager Services throughout the tour',
      'Entrance fees of all sightseeing places visited from inside',
      'All Meals (Breakfast, Lunch & Dinner)',
      'Transfers and sightseeing by A/C coach',
      'Accommodation on Twin/Double sharing basis for 02 nights',
      'Private boat ride for Evening Ganga Aarti in Varanasi',
      'Govt Tax of 5% over and above the Tour Cost mentioned'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Visa fees, Airport taxes, Govt taxes, Fuel Surcharges & new Govt tax applicability',
      'Up gradation in Airline class or hotel room category',
      'Cost of Air ticket deviation charges',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
      'Porterage, laundry, telephone, shopping, alcoholic beverages & personal food/drinks',
      'Individual medical, accident, hospitalization, or personal emergency costs',
      'Anything not explicitly mentioned in the Inclusions column'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Varanasi (Arrival & Evening Ganga Aarti)',
        detail: 'Bangalore to Varanasi departure (by flight). On arrival at Varanasi Airport, meet our representative and transfer to hotel. Check in and fresh up. In the evening proceed to Dashashwamedh Ghat for a private boat ride to witness the world-famous Evening Ganga Aarti. Dinner and overnight stay in Varanasi.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Kashi Vishwanath Darshan – Ayodhya Excursion',
        detail: 'Early morning holy dip in River Ganga. Divine Darshan at Kashi Vishwanath Temple Corridor, Annapurna Temple, and Vishalakshi Temple. After breakfast, proceed to Ayodhya (about 200 km). Visit Hanuman Garhi and Shri Ram Janmabhoomi Mandir for divine Ram Lalla Darshan. Visit Kanak Bhawan and attend evening Saryu Aarti at Ram Ki Paidi. Return to Varanasi / Ayodhya for dinner and overnight stay.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Sarnath Excursion & Varanasi Departure',
        detail: 'After breakfast and checkout, visit Sarnath (Dhamek Stupa & Deer Park where Lord Buddha preached his first sermon) and Banarasi Silk weaving center. Post lunch, transfer to Varanasi Airport for return flight to Bangalore carrying divine blessings.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Experience a focused 3-day spiritual pilgrimage covering Kashi Vishwanath Corridor in Varanasi and Shri Ram Janmabhoomi Mandir in Ayodhya. Marvel at the grand Evening Ganga Aarti from a private boat, explore ancient Sarnath, and receive blessings from Lord Shiva and Lord Rama.',
      significance: 'Varanasi is the timeless abode of Mahadev Kashi Vishwanath, while Ayodhya is the divine Janmabhoomi of Lord Shri Ram.',
      bestTimeToVisit: 'October to March offers pleasant weather for temple visits and river ghat walks.',
      placesCovered: [
        'Kashi Vishwanath Corridor & Annapurna Temple',
        'Dashashwamedh Ghat Evening Ganga Aarti (Private Boat)',
        'Sarnath Dhamek Stupa & Buddha Temple',
        'Shri Ram Janmabhoomi Mandir & Hanuman Garhi (Ayodhya)',
        'Kanak Bhawan & Saryu River Ghats'
      ],
      travelTips: [
        'Mobiles and cameras are restricted inside Shri Ram Janmabhoomi inner sanctum.',
        'Wear comfortable slip-on footwear for walking along ghats.',
        'Boating at Dashashwamedh Ghat is equipped with lifejackets.'
      ],
      whyChooseUs: [
        'Direct round-trip flights from Bangalore with seamless transfers',
        'Hygienic 3-star deluxe hotel accommodation',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "How is Darshan arranged at Kashi Vishwanath & Shri Ram Janmabhoomi?",
        answer: "We assist with queue management and pre-booking slots for smooth Darshan at both Kashi Vishwanath Corridor and Shri Ram Janmabhoomi Mandir."
      },
      {
        question: "Is the Ganga Aarti boat ride included?",
        answer: "Yes! A private boat ride to view the world-famous Evening Ganga Aarti at Dashashwamedh Ghat is included."
      }
    ]
  },
  {
    id: 'indore-ujjain',
    title: 'Indore, Ujjain & Omkareshwar Tour Package',
    category: 'pilgrimage',
    destination: 'Madhya Pradesh (Indore, Ujjain, Omkareshwar)',
    duration: '2N/3D',
    price: '₹30,999/-',
    numericPrice: 30999,
    minPax: 2,
    featured: true,
    image: '/Indore and Ujjain Priority Packages.png',
    description: 'Sacred 2 Jyotirlingas Pilgrimage Yatra: Visit Mahakaleshwar Jyotirlinga (3rd Jyotirlinga) with Mahakal Corridor in Ujjain, Omkareshwara Jyotirlinga (4th Jyotirlinga) & Mamaleshwara on the Narmada river, Pitreshwar Hanuman Mandir, Khajrana Ganesh, Sandipani Ashram, and Gadh Kalika in Indore.',
    highlights: [
      'Shri Mahakaleshwar Jyotirlinga (3rd Jyotirlinga) & VIP Darshan',
      'Shri Omkareshwara Jyotirlinga (4th Jyotirlinga) & Mamaleshwara',
      'Mahakal Lok Corridor (900m long with 200 Shiva idols)',
      'Pitreshwar Hanuman Mandir (Tallest Sitting Hanuman Statue)',
      'Khajrana Ganesh Temple & Sandipani Mahamuni Ashram'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '3 Days 2 Jyotirlingas Yatra',
    placesList: [
      { name: 'Ujjain (Mahakaleshwar & Mahakal Corridor)' },
      { name: 'Indore (Pitreshwar Hanuman & Khajrana Ganesh)' },
      { name: 'Omkareshwar (Omkareshwara & Mamaleshwara)' },
      { name: 'Sandipani Ashram & Gadh Kalika Mandir' }
    ],
    inclusions: [
      'Air fares (Both Onward & Return)',
      'Transfers and sightseeing\'s by A/C coach',
      'Accommodation on Twin/Double sharing basis for 02 nights',
      'All meals (Breakfast, Lunch and Dinner)',
      'Professional tourist Guide',
      'VIP Darshan in Mahakaleshwar and Omkareshwar temples'
    ],
    exclusions: [
      'Mineral water, Coffee / Tea, Shopping',
      'Travel Insurance / Tips, Laundry etc.',
      'Any medical, evacuation expenses & expenses occur due to natural climate',
      'Services which are not in the INCLUSIONS'
    ],
    sampleItinerary: [
      {
        day: 'DAY 1',
        title: 'Indore – Ujjain (Arrival & Sightseeing)',
        detail: 'On arrival meet & assistance at Indore airport. Board the vehicle and proceed towards Ujjain. Check in to hotel, fresh up and transfer to sightseeing: visit Sandipani Mahamuni Ashram (where Lord Krishna was educated with Balarama and Sudhama by Maharishi Sandipani), Gadh Kalika Mandir, Mangla Mandir (Mars), and Sri Kalabhairava temple. In the evening visit Mahakal Corridor (measuring over 900m long built around Rudrasagar Lake with 200 Shiva idols). Return back to hotel, dinner and overnight stay at Ujjain.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'DAY 2',
        title: 'Ujjain – Indore (Mahakaaleshwar & Indore Shrines)',
        detail: 'Early in the morning proceed to visit famous Mahakaaleshwar Temple (3rd Jyotirlinga), Bada Ganesh Mandir, and Har Siddhi Mata temple. Return to hotel, have breakfast, check out and proceed towards Indore. Visit Pitreshwar Hanuman Mandir (Pitreshwar Hanuman Dham in Indore is famous for the tallest statue of Sitting Hanuman Ji in the country on Pitra Parvat). Check in to hotel, have lunch, relax, and in the evening visit famous Khajrana Ganesh Temple (built by Maharani Ahilyabai Holkar of the Holkar Dynasty). Return to hotel, dinner and overnight stay at Indore.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'DAY 3',
        title: 'Indore – Omkareshwar – Bangalore Departure',
        detail: 'After breakfast check out and proceed towards Omkareshwar. Visit Omkareshwara Jyotirlinga temple (4th Jyotirlinga) and Mamaleshwara Temple situated on the banks of Narmada river. Return to Indore airport for your return journey to Bangalore carrying sweet memories of the tour.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ]
  },
  {
    id: 'vaishnodevi',
    title: 'Mata Vaishnodevi & Golden Temple Yatra',
    category: 'pilgrimage',
    destination: 'Katra, Jammu & Amritsar',
    duration: '3N/4D',
    price: '₹37,999/-',
    numericPrice: 37999,
    minPax: 2,
    featured: true,
    image: '/Vaishnodevi  Priority Packages.png',
    description: 'Sacred Pilgrimage Yatra: Ascend to Mata Vaishnodevi Temple in Katra, Bhairo Baba Temple via ropeway, Raghunath Ji Temple in Jammu, Golden Temple & Jallianwala Bagh in Amritsar, and Wagah Border Retreat Ceremony.',
    highlights: [
      'Famous Mata Vaishnodevi Holy Shrine Darshan (Katra)',
      'Bhairo Baba Temple & Day-time Ropeway View',
      'Golden Temple (Harmandir Sahib) & Jallianwala Bagh (Amritsar)',
      'India-Pakistan Wagah Border Retreat Ceremony',
      'Raghunath Ji Temple Visit in Jammu'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '4 Days Katra & Amritsar Yatra',
    placesList: [
      { name: 'Katra (Mata Vaishnodevi & Bhairo Baba)' },
      { name: 'Jammu (Raghunath Ji Temple)' },
      { name: 'Amritsar (Golden Temple & Jallianwala Bagh)' },
      { name: 'Wagah Border (Sunset Retreat Ceremony)' }
    ],
    inclusions: [
      'Airfares (Both Onward and Return)',
      'Transfers and Sightseeing by A/C Coach',
      '3-star premium accommodation on a twin/double sharing basis',
      'Packaged drinking water (1 ltr per person per day)',
      'Professional Tourist Guide',
      'Entry tickets as per the itinerary',
      'Bairo baba rope way tickets (Bhawan - Bhairav Nath)',
      'All Meals (Dinner, Breakfast and Lunch)'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Mineral water, Coffee/Tea, Shopping',
      'Travel Insurance, Tips, Laundry, etc.',
      'Any medical or evacuation expenses, and expenses due to natural climate',
      'Any service not included in the inclusions or itinerary',
      'Pooja charges if any',
      'Helicopter service, Horse, Palki is not included in the Package'
    ],
    sampleItinerary: [
      {
        day: 'DAY 1',
        title: 'Bangalore – Amritsar – Katra',
        detail: 'On arrival at Sri Guru Ram Dass Jee International Airport, Amritsar. Board vehicle and proceed towards Katra (260Km / 5Hr), enroute visit Raghunath Ji Temple in Jammu. Proceed to Katra, check in to hotel, dinner and overnight stay at Katra.',
        meals: 'Dinner'
      },
      {
        day: 'DAY 2',
        title: 'Katra – Mata Vaishnodevi Darshan',
        detail: 'After breakfast, proceed towards famous Mata Vaishnodevi Temple (combined energies of Kali, Lakshmi, and Saraswati). Options available for trek: Doli, horse ride, and helicopter (@customer own cost). Visit Bhairo Baba Temple (2km upward trek or day-time ropeway option). Dinner and overnight stay at Katra.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'DAY 3',
        title: 'Katra – Jammu – Amritsar (Wagah Border & Golden Temple)',
        detail: 'After breakfast, proceed towards Amritsar with midway lunch. Visit India-Pakistan Wagah Border and watch the famous retreat ceremony performed every evening before sunset. Proceed to Amritsar, visit Golden Temple, dinner and overnight stay at Amritsar.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'DAY 4',
        title: 'Amritsar Sightseeing – Bangalore Departure',
        detail: 'After breakfast, visit Golden Temple and Jallianwala Bagh. Free time for shopping, then proceed to Amritsar airport and depart towards Bangalore with sweet memories of the tour.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Important Note: Kindly carry POST-PAID SIM CARD for your travel, as pre-paid SIM cards will not function in Jammu & Kashmir.',
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'Important Note: Kindly carry POST-PAID SIM CARD for your travel, as pre-paid SIM cards will not function in Jammu & Kashmir.',
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ]
  },
  {
    id: 'baidyanath',
    title: 'Baidyanath Dham',
    category: 'pilgrimage',
    destination: 'Jharkhand (Deoghar)',
    duration: '1N/2D',
    price: '₹28,999/-',
    numericPrice: 28999,
    minPax: 2,
    image: '/baidyanath-tour-packages.webp',
    description: 'Visit Baba Baidyanath Dham (Baba Dham) in Deoghar, one of the 12 sacred Jyothirlingas known for granting divine health & fulfillment. Explore Basukinath, Thapovan, and Jayadurga Shakthipeeta.',
    highlights: ['Baba Baidyanath Jyothirlinga Darshan', 'Basukinath Temple Visit', 'Jayadurga Shakthipeeta', 'Thapovan Visit'],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '1 Trip 4 Places',
    placesList: [
      { name: 'Basukinath Dham' },
      { name: 'Baidhyanath Dham' },
      { name: 'Thapovan' },
      { name: 'Jayadurga Shakthipeeta' }
    ],
    inclusions: [
      'To and from economy class air travel for Bangalore-to-Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
      'Baggage Allowance as per airline policy',
      'All Meals (Breakfast, Lunch and Dinner)',
      'Cost of internal airfare as mentioned in itinerary',
      'Transfers and sightseeing by A/C Vehicle',
      'Accommodation on Twin/Double sharing basis',
      'Govt Tax of 5% over and above the Tour Cost mentioned'
    ],
    exclusions: [
      'Up gradation in Airline class or hotel room category',
      'Cost of Air ticket deviation charges',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
      'Porterage, laundry, telephone, shopping, alcoholic beverages & personal food/drinks',
      'Individual medical, accident, hospitalization, or personal emergency costs',
      'Activity charges or services other than those included in group tour itinerary',
      'Airfare, airport transfers, visa fees to join/leave group independently',
      'Ropeway / Horse ride charges (paid on own)',
      'Anything not explicitly mentioned in the Inclusions column'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore - Deoghar',
        detail: "Upon arrival, receive meet and assistance at Deoghar airport. Board the vehicle and proceed to Baba Baidyanath temple (Vaidyanatha Jyotirlinga temple, also known as Baba Baidyanath dham and Baidyanath dham is one of the twelve Jyotirlingas, the most sacred abodes of Shiva. It is located in Deoghar in the Santhal Parganas division of the state of Jharkhand) . And visit Jayadurga Shakthipeeta [ one among 108 shakthi peeta where Sati's Heart fell here] .Dinner and Overnight Stay at Deoghar",
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Return to Bangalore',
        detail: "Early In the Morning Proceed to Basuki Nath Temple [Vasuki, the serpent who adorns Mahadev's neck alongwith other Nagas from the Nagaloka offered sacrifices to Mahadev during the Sagar Manthan at this place. So Mahadev is established here as the lord of Vasuki hence Basukinath alongwith Goddess Parvati.] Back to Hotel After Breakfast Checkout and visit, Thapovan [It is also believed that King Ravana visited here for Lord Shiva's boon. He was unsuccessful because Hanuman broke his meditation. While Raban was doing penance, the gods instructed Hanuman to break Ravan's meditation. Afterward, return to Deoghar airport for your return journey toBangalore, carrying with you the sweet memories of the tour",
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: 'Days 15 & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Baba Baidyanath Dham in Deoghar, Jharkhand, is one of the 12 sacred Jyotirlingas of Lord Shiva and a revered Shakti Peeth (Jayadurga). This 2-day tour offers complete darshan of Baba Dham, Basukinath Temple, Thapovan, and Jayadurga Shakthipeeta with flight transfers, hotel stays, and full meals.',
      significance: 'Baidyanath Dham is believed to be the spot where King Ravana worshipped Lord Shiva to attain extraordinary boons. It is also home to Jayadurga Shakti Peeth where Sati\'s heart fell.',
      bestTimeToVisit: 'October to March is ideal for visiting Deoghar due to pleasant weather.',
      placesCovered: ['Baidhyanath Dham', 'Basukinath Dham', 'Thapovan', 'Jayadurga Shakthipeeta'],
      travelTips: [
        'Carry government photo ID (Aadhaar/Passport) for flight & hotel check-ins.',
        'Traditional modest dress code is mandatory for temple darshans.',
        'Early morning timing is best suited for peaceful Jyotirlinga darshan.'
      ],
      whyChooseUs: [
        'Direct flight transfers from Bangalore with airport assistance',
        'All meals included (Breakfast, Lunch, Dinner)',
        'Private AC vehicle for comfortable sightseeing',
        'Senior citizen friendly arrangements & dedicated tour support'
      ]
    },
    faqs: [
      {
        question: 'Which 4 major places are covered in this Baidyanath Dham package?',
        answer: 'This package covers 4 sacred places: 1) Baba Baidyanath Dham Jyotirlinga, 2) Basukinath Dham, 3) Thapovan, and 4) Jayadurga Shakthipeeta.'
      },
      {
        question: 'Are all meals and flights included in the package?',
        answer: 'Yes! The package includes economy class return airfare from Bangalore, AC vehicle transfers, hotel accommodation, and all daily meals (Breakfast, Lunch, and Dinner).'
      },
      {
        question: 'What is the cancellation policy for the Baidyanath tour?',
        answer: 'For cancellations 0 to 15 days before departure, a 100% cancellation fee applies. For cancellations 15 days and above prior to departure, a 50% fee applies. Airline ticket cancellation charges are extra as per airline policies.'
      }
    ],
    coordinates: { x: 72, y: 44 }
  },
  {
    id: 'rameshwaram',
    title: 'Rameshwaram, Madurai, Kanyakumari & Trivandrum Yatra',
    category: 'pilgrimage',
    destination: 'Tamil Nadu & Kerala (Trichy, Thanjavur, Madurai, Rameshwaram, Kanyakumari, Thiruvananthapuram)',
    duration: '4N/5D',
    price: '₹35,999/-',
    numericPrice: 35999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    description: 'Grand South India Temple Pilgrimage: Visit Brihadeeswara Temple in Thanjavur, Srirangam Ranganathaswamy Temple, Madurai Meenakshi Temple, Rameshwaram Ramanathaswamy Temple with 22 Holy Theertham Wells & Spatika Linga Darshan, Dhanushkodi, Thiruchendur Murugan Temple, Kanyakumari Vivekananda Rock & Sunset, Suchindram Temple, and Sree Padmanabhaswamy Temple in Thiruvananthapuram.',
    highlights: [
      'Srirangam Ranganathaswamy & UNESCO Brihadeeswara Temple',
      'Madurai Meenakshi Amman Temple Darshan',
      'Ramanathaswamy Temple (Spatika Linga & 22 Holy Theertham Wells Bath)',
      'Dhanushkodi, Kodanda Rama Temple & Pamban Bridge',
      'Thiruchendur Murugan Temple & Kanyakumari Vivekananda Rock Memorial',
      'Sree Anantha Padmanabhaswamy Temple, Kovalam & Hawa Beach'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '5 Days South India Grand Temple Yatra',
    placesList: [
      { name: 'Trichy & Thanjavur (Brihadeeswara & Srirangam)' },
      { name: 'Madurai (Meenakshi Amman Temple)' },
      { name: 'Rameshwaram (Ramanathaswamy, Spatika Linga & Dhanushkodi)' },
      { name: 'Kanyakumari (Vivekananda Rock & Sunset Point)' },
      { name: 'Thiruvananthapuram (Sree Padmanabhaswamy & Kovalam Beach)' }
    ],
    inclusions: [
      'Airfares (Both Onward and Return)',
      'Transfers and Sightseeing by A/C Coach',
      '3-star Premium Accommodation on a Twin/Double sharing basis for 04 nights',
      'Professional Tourist Guide',
      'Entry tickets as per the itinerary',
      'All Meals included (Breakfast, Lunch & Dinner)',
      'Mineral water, Coffee/Tea, Shopping'
    ],
    exclusions: [
      'Travel Insurance, Tips, Laundry, etc.',
      'Any medical or evacuation expenses, and expenses due to natural climate',
      'Any service not included in the inclusions or itinerary',
      'Pooja charges if any',
      'Seat selection and meals are not included in the flight journey',
      'Boating entry tickets'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Trichy – Thanjavur – Madurai',
        detail: 'Bangalore International Airport to Trichy (Tiruchirappalli) International Airport. Upon arrival, proceed towards Thanjavur and visit Brihadeeswara Temple (UNESCO World Heritage Site). After lunch, proceed to visit Lord Srirangam Temple. Proceed towards Madurai, dinner and overnight stay in Madurai.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Madurai – Rameshwaram',
        detail: 'Early in the morning visit Madurai Meenakshi Temple. After darshan, proceed towards Rameshwaram. Upon arrival, proceed to visit Rameshwaram local sightseeing like Dhanushkodi, Kodanda Rama Temple, and other temples. Return back to hotel for overnight stay in Rameshwaram.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Rameshwaram – Thiruchendur – Kanyakumari',
        detail: 'Early in the morning visit Spatika Linga Darshan, 22 Thirth Wells Bath, and Ramanathaswamy Darshan. Post breakfast proceed towards Thiruchendur Murugan Temple. Proceed towards Kanyakumari. Upon arrival, visit Vivekananda Rock Memorial Center. Evening visit Sunset Point, dinner and overnight stay in Kanyakumari.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Kanyakumari – Suchindram – Thiruvananthapuram',
        detail: 'Early morning visit Sunrise Point and Kanyakumari Temple. After breakfast checkout from hotel and proceed towards Suchindram Temple & Nagarcoil Temple. Proceed to Thiruvananthapuram, dinner and overnight stay in Thiruvananthapuram.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Thiruvananthapuram – Bangalore Departure',
        detail: 'After breakfast proceed towards Thiruvananthapuram Sree Anantha Padmanabhaswamy Temple. Enjoy sightseeing at Kovalam Beach and Hawa Beach. After sightseeing, proceed to Thiruvananthapuram Airport for your return flight to Bangalore.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Embark on a grand pilgrimage across Tamil Nadu and Kerala covering Trichy, Thanjavur, Madurai, Rameshwaram, Kanyakumari, and Thiruvananthapuram. Visit sacred Jyotirlinga at Rameshwaram, 22 Holy Theerthams, Spatika Linga, Madurai Meenakshi, Vivekananda Rock, and Sree Padmanabhaswamy Temple.',
      significance: 'Rameshwaram is one of the 12 sacred Jyotirlingas and part of the Char Dham pilgrimage circuit. Combined with Srirangam, Madurai Meenakshi, and Sree Padmanabhaswamy Temple, this tour offers unprecedented spiritual merit.',
      bestTimeToVisit: 'October to March is ideal with pleasant climate along southern coastlines.',
      placesCovered: [
        'Brihadeeswara Temple (Thanjavur)',
        'Srirangam Ranganathaswamy Temple (Trichy)',
        'Meenakshi Amman Temple (Madurai)',
        'Ramanathaswamy Temple & Spatika Linga (Rameshwaram)',
        '22 Holy Theerthams & Dhanushkodi',
        'Thiruchendur Murugan Temple',
        'Vivekananda Rock Memorial & Sunset Point (Kanyakumari)',
        'Suchindram & Nagarcoil Temples',
        'Sree Anantha Padmanabhaswamy Temple & Kovalam Beach (Thiruvananthapuram)'
      ],
      travelTips: [
        'Traditional modest Indian attire is mandatory at all South Indian temples.',
        'Dhoti/Vesti is mandatory for men at Sree Padmanabhaswamy Temple in Trivandrum.',
        'Carry extra set of dry clothes for 22 Theertham holy well baths at Rameshwaram.'
      ],
      whyChooseUs: [
        'Round-trip flights with seamless airport pick-up in Trichy & drop at Trivandrum',
        'Comfortable AC coach transfers throughout the tour',
        'Handpicked 3-star premium hotel stays in Madurai, Rameshwaram, Kanyakumari & Trivandrum'
      ]
    },
    faqs: [
      {
        question: "What is the procedure for 22 Holy Theertham baths at Rameshwaram?",
        answer: "Devotees take holy dips at 22 sacred wells inside the Ramanathaswamy Temple complex. Our guide will assist you with tickets and instructions."
      },
      {
        question: "What is the dress code for Padmanabhaswamy Temple in Thiruvananthapuram?",
        answer: "Men must wear a Dhoti (Mundu) around the waist without shirts. Women must wear Saree, Set-Mundu, or Pavada."
      }
    ]
  },
  {
    id: 'gujarat',
    title: 'Grand Gujarat Pilgrimage & Statue of Unity Yatra',
    category: 'pilgrimage',
    destination: 'Gujarat (Ahmedabad, Dwarka, Porbandar, Somnath, Gir Forest, Bhavnagar, Statue of Unity)',
    duration: '6N/7D',
    price: '₹46,999/-',
    numericPrice: 46999,
    minPax: 2,
    featured: true,
    image: '/Gujarat Priority Packages.png',
    description: 'Grand Gujarat Sacred & Heritage Yatra: Direct flight from Bangalore to Ahmedabad, Sabarmati Ashram, Adalaj Stepwell, Akshardham, Shree Dwarkadhish Temple (Char Dham), Bet Dwarka, Nageshwar Jyotirlinga, Rukmini Temple, Kirti Mandir & Sudama Mandir in Porbandar, Somnath Jyotirlinga & Light/Sound Show, Gir Forest National Park Safari, Nishkalank Mahadev Temple in sea, World\'s Tallest Statue of Unity (182m), Valley of Flowers, and Sardar Sarovar Dam.',
    highlights: [
      'Shree Dwarkadhish Temple (Holy Char Dham) & Bet Dwarka',
      'Nageshwar Jyotirlinga & Somnath Jyotirlinga (Light & Sound Show)',
      'World\'s Tallest Statue of Unity (182m) & Sardar Sarovar Dam',
      'Nishkalank Mahadev Sea Temple (5 Pandava Shivlings)',
      'Gir Forest National Park Safari Ride',
      'Sabarmati Ashram, Adalaj Stepwell & Akshardham Temple'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '7 Days Grand Gujarat & Statue of Unity Yatra',
    placesList: [
      { name: 'Ahmedabad & Gandhinagar (Sabarmati, Adalaj & Akshardham)' },
      { name: 'Dwarka (Dwarkadhish Temple, Bet Dwarka & Nageshwar)' },
      { name: 'Porbandar & Somnath (Kirti Mandir & Somnath Jyotirlinga)' },
      { name: 'Gir Forest & Bhavnagar (Gir Safari & Nishkalank Mahadev)' },
      { name: 'Statue of Unity (182m Statue, Valley of Flowers & Dam)' }
    ],
    inclusions: [
      'Airfares (Both Onward and Return)',
      '3-star Premium Accommodation on twin and double sharing basis for 06 nights',
      'Packed drinking water (1 ltr per person per day)',
      'Professional Tour Manager (group packages / if included for customised)',
      'All meals included (Breakfast, Lunch, Dinner & Tea/Coffee for group packages)',
      'Entry tickets as mentioned (Akshardham light show, Gir Safari Devaliya national park local coach, SOU Viewing gallery)',
      'A/C Coach transfers and sightseeing'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Travel Insurance, Tips, Laundry, etc.',
      'Any medical or evacuation expenses, and expenses due to natural climate',
      'Any service not included in the inclusions or itinerary',
      'Pooja charges if any',
      'Pooja / Dhan is excluded',
      'Gir Safari Tickets not included'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Ahmedabad – Gandhinagar',
        detail: 'Meet and Greet at KIAL Airport Bangalore. Board flight to Ahmedabad. On arrival at Ahmedabad Airport, board vehicle and after breakfast proceed towards Adalaj Vav (Adalaj Stepwell / Rudabai Stepwell). Visit Sabarmati Ashram, and in the evening visit Akshardham (Sri Swaminarayan Temple) in Gandhinagar. Return to Ahmedabad for dinner and overnight stay.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Ahmedabad – Dwarka',
        detail: 'After breakfast, checkout from hotel and proceed towards Dwarka (about 450 km) with enroute lunch. On arrival in Dwarka, check in to hotel, fresh up. In the evening visit Shree Dwarkadhish Temple (holy Char Dham destination). Return back to hotel, dinner and overnight stay at Dwarka.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Dwarka – Bet Dwarka – Nageshwar Jyotirlinga',
        detail: 'After breakfast transfer to Bet Dwarka. On return visit Gopi Talav, Nageshwar Jyotirlinga (8th Jyotirlinga), and Rukmini Temple. Return to hotel. In the evening, get another divine Darshan at Shree Dwarkadhish Temple. Dinner and overnight stay at hotel in Dwarka.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Dwarka – Porbandar – Somnath',
        detail: 'After breakfast, checkout and proceed to Porbandar (about 100 km). Visit Kirti Mandir (birthplace of Mahatma Gandhi) and Sudama Mandir. Proceed to Somnath, check in to hotel. Visit Triveni Sangam (where Hiren, Kapila & Saraswati meet the Arabian Sea), Geetha Mandir & Bhalka Theerth. Visit Somnath Jyotirlinga Temple and enjoy the evening Light & Sound show. Dinner and overnight stay in Somnath.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Somnath – Gir Forest – Bhavnagar',
        detail: 'After breakfast, checkout and proceed to Sasan Gir Forest (Gir Forest National Park wildlife sanctuary) to enjoy a safari ride. Proceed to Bhavnagar with enroute lunch. Dinner and overnight stay at Bhavnagar.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 6',
        title: 'Bhavnagar – Nishkalank Mahadev – Statue of Unity',
        detail: 'After breakfast, checkout and proceed to visit Nishkalank Mahadev Temple (Lord Shiva temple in the sea with 5 Shivlings worshipped by Pandavas, accessible during low tides). Proceed to Statue of Unity. Dinner and overnight stay at hotel near Statue of Unity.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 7',
        title: 'Statue of Unity – Ahmedabad Departure',
        detail: 'After breakfast, checkout and visit World\'s Tallest Statue of Unity (Sardar Vallabhbhai Patel 182m bronze statue), Valley of Flowers, and Sardar Sarovar Dam. Enroute lunch, then proceed to Ahmedabad airport for return flight to Bangalore with sweet memories.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Discover Gujarat\'s grand spiritual and heritage treasures on this 7-day yatra. Visit two sacred Jyotirlingas (Nageshwar & Somnath), Char Dham Dwarkadhish Mandir, Bet Dwarka, Porbandar, Gir Forest National Park, Nishkalank Mahadev sea temple, and the world\'s tallest Statue of Unity (182m).',
      significance: 'Dwarka is one of the four cardinal Char Dhams established by Adi Shankaracharya. Somnath is the first of the 12 Jyotirlingas, while Nageshwar is the 8th Jyotirlinga. Nishkalank Mahadev holds ancient Pandava heritage.',
      bestTimeToVisit: 'October to March offers pleasant weather for sightseeing and wildlife safaris across Gujarat.',
      placesCovered: [
        'Sabarmati Ashram & Adalaj Stepwell (Ahmedabad)',
        'Akshardham Swaminarayan Temple (Gandhinagar)',
        'Shree Dwarkadhish Temple & Bet Dwarka',
        'Nageshwar Jyotirlinga, Gopi Talav & Rukmini Temple',
        'Kirti Mandir & Sudama Mandir (Porbandar)',
        'Somnath Jyotirlinga, Triveni Sangam & Bhalka Theerth',
        'Sasan Gir Forest National Park Safari',
        'Nishkalank Mahadev Temple (Koliyak Sea)',
        'Statue of Unity (182m), Valley of Flowers & Sardar Sarovar Dam'
      ],
      travelTips: [
        'Nishkalank Mahadev sea temple is visited during low tide timings.',
        'Carry official government ID cards (Aadhaar / Passport) for Gir Safari entry and Statue of Unity viewing gallery.',
        'Wear comfortable walking shoes for stepwells and temple complexes.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore to Ahmedabad',
        'Comfortable AC coach transfers across the 7-day Gujarat circuit',
        'Handpicked 3-star premium hotel stays and all meals included'
      ]
    },
    faqs: [
      {
        question: "How do we reach Bet Dwarka?",
        answer: "Bet Dwarka is reached by a short boat ride or via the new Sudarshan Setu cable bridge from Okha port."
      },
      {
        question: "Is the Statue of Unity viewing gallery included?",
        answer: "Yes, ticket entry for the Statue of Unity Viewing Gallery, Valley of Flowers, and Sardar Sarovar Dam is included."
      }
    ]
  },

  // ================= DOMESTIC JOURNEYS =================
  {
    id: 'andaman',
    title: 'Andaman Islands Paradise Tour Package (Port Blair, Havelock & Ross Island)',
    category: 'domestic',
    destination: 'Andaman Islands (Port Blair, Havelock Island & Ross Island)',
    duration: '4N/5D',
    price: '₹44,999/-',
    numericPrice: 44999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop',
    description: 'Tropical Island Paradise: Direct round-trip flights from Bangalore to Port Blair, Corbyn\'s Cove Beach, historic Cellular Jail with Light & Sound Show, scenic cruise to Havelock Island, Radhanagar Beach (Asia\'s finest), Kalapathar Beach, Elephant Beach speed boat excursion, inter-island cruise ferry, and Ross Island (Netaji Subhash Chandra Bose Island).',
    highlights: [
      'Cellular Jail Visit & Captivating Light and Sound Show',
      'Radhanagar Beach (Asia\'s Finest Beach) & Kalapathar Beach',
      'Elephant Beach Speed Boat Cruise & Water Sports Hub',
      'Ross Island (Netaji Subhash Chandra Bose Island Colonial Ruins)',
      'Direct Round-Trip Flights from Bangalore & Cruise Ferry Tickets'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '5 Days Tropical Andaman Island Yatra',
    placesList: [
      { name: 'Port Blair (Cellular Jail, Corbyn\'s Cove & Light & Sound Show)' },
      { name: 'Havelock Island (Radhanagar Beach & Kalapathar Beach)' },
      { name: 'Elephant Beach (Speedboat Cruise & Coral Reefs)' },
      { name: 'Ross Island (Netaji Subhash Chandra Bose Island Ruins)' }
    ],
    inclusions: [
      'Roundtrip Airfares from Bengaluru (Bangalore to Port Blair roundtrip flights)',
      'All sightseeing and transfers by A/C coach',
      'Accommodation on twin/double sharing basis for 04 nights',
      'All sightseeing entry fees (including Cellular Jail Light & Sound show)',
      'Meals as mentioned in itinerary (Breakfast, Lunch, Dinner)',
      'Tour Manager service throughout',
      'Govt. taxes (5%)',
      'Ferry / Cruise Tickets between islands included',
      'Entry tickets included as per itinerary',
      'Professional Tour Manager',
      'Mineral water, coffee & tea'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'TCS (5% or 10%) on GST-inclusive price',
      'Water sports / activity entry fees (e.g., snorkeling, sea walking, scuba diving, jet skiing)',
      'Any personal expenses (laundry, shopping, alcohol, etc.)',
      'Expenses due to unforeseen circumstances',
      'Any services not mentioned in the inclusions'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Port Blair – Corbyn\'s Cove & Cellular Jail Light & Sound Show',
        detail: 'Airport pickup at Veer Savarkar International Airport Port Blair. Warm welcome and escort to hotel. Afternoon visit Corbyn\'s Cove Beach (9 km from city, popular for beach activities). Visit historic Cellular Jail (iconic freedom struggle monument). Evening witness the captivating 30-minute Light and Sound Show at Cellular Jail showcasing freedom struggle history. Dinner and overnight stay in Port Blair.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Port Blair – Cruise to Havelock Island (Radhanagar & Kalapathar Beaches)',
        detail: 'Transfer to Port Blair Jetty and board scenic sea cruise to Havelock Island across Bay of Bengal. Arrive in Havelock and visit Radhanagar Beach (Beach No. 7, rated among Asia\'s finest beaches for breathtaking sunset view). Visit serene Kalapathar Beach (lined with black coral rocks and golden shores). Dinner and overnight stay in Havelock.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Havelock Island – Elephant Beach Speed Boat Excursion',
        detail: 'After breakfast, take an exhilarating speed boat ride to Elephant Beach (famous for crystal-clear turquoise waters and vibrant coral reefs). Spend day exploring white sand shores with optional water activities like snorkeling, glass-bottom boat rides, sea walks, scuba diving, and jet skiing. Evening return to resort for dinner and overnight stay in Havelock.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Havelock – Cruise to Port Blair – Ross Island Tour',
        detail: 'After breakfast checkout and board ferry cruise back to Port Blair. Afternoon short boat ride to Ross Island (Netaji Subhash Chandra Bose Island, former British administrative headquarters). Explore colonial ruins of church, bakery, hospital, chief commissioner\'s residence reclaimed by banyan roots, freely roaming deer & peacocks, and Indian Navy museum. Return to Port Blair for dinner and overnight stay.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Port Blair – Departure to Bangalore',
        detail: 'After breakfast, checkout from hotel and transfer to Veer Savarkar International Airport Port Blair for return flight journey to Bangalore with unforgettable memories of the Andaman Islands.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, ferry cruises, weather changes, or naval harbor restrictions.',
        'Flight timings and inter-island ferry timings are subject to availability and weather conditions at the time of booking.',
        'Seats in flights and inter-island cruises will be auto assigned.'
      ]
    },
    remarks: [
      'Water Activities Note: Water sports such as scuba diving, sea walk, jet ski, and snorkeling at Elephant Beach are excluded from base package fare.',
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Explore the tropical paradise of the Andaman Islands on this 5-day tour. Enjoy direct round-trip flights from Bangalore, visit historic Cellular Jail with Light & Sound Show in Port Blair, cruise across blue Bay of Bengal waters to Havelock Island, relax at Asia\'s famed Radhanagar Beach, visit Elephant Beach speed boat hub, and explore colonial British ruins on Ross Island.',
      significance: 'Andaman is a land of supreme natural beauty and deep national heritage—home to Cellular Jail where freedom fighters were exiled, pristine coral reefs, and untouched tropical islands.',
      bestTimeToVisit: 'October to May provides clear blue skies, calm sea cruises, and ideal water visibility for beach trips.',
      placesCovered: [
        'Cellular Jail & Light and Sound Show',
        'Corbyn\'s Cove Beach',
        'Radhanagar Beach (Beach No. 7 Havelock)',
        'Kalapathar Beach Havelock',
        'Elephant Beach Speedboat Cruise',
        'Ross Island (Netaji Subhash Chandra Bose Island)',
        'Veer Savarkar Airport Port Blair'
      ],
      travelTips: [
        'Carry valid government photo ID proof (Aadhaar / Passport) at all times for jetty harbor security checks.',
        'Water activities are optional; wear quick-dry clothing and carry extra towels for beach trips.',
        'Sunscreen, sunglasses, hat, and waterproof phone pouches are recommended for island cruises.'
      ],
      whyChooseUs: [
        'Round-trip flight tickets from Bangalore to Port Blair included',
        'Pre-booked premium Catamaran / Ferry cruise tickets for inter-island transfers',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "Are inter-island ferry tickets included?",
        answer: "Yes, luxury catamaran/ferry cruise tickets between Port Blair and Havelock Island are included."
      },
      {
        question: "Are water sports at Elephant Beach included?",
        answer: "The speedboat ride transfer to Elephant Beach is included. Individual water sports like scuba diving or sea walk are optional at customer's own cost."
      }
    ]
  },
  {
    id: 'kashmir',
    title: 'Kashmir Paradise Tour Package',
    category: 'domestic',
    destination: 'Kashmir (Srinagar, Gulmarg, Sonamarg, Pahalgam)',
    duration: '5N/6D',
    price: '₹51,999/-',
    numericPrice: 51999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200&auto=format&fit=crop',
    description: 'Paradise on Earth: Direct round-trip flight from Bangalore, 1 night in luxury Dal Lake Houseboat & 4 nights in 3-star premium hotels, Gulmarg Gondola Cable Car Ride to Khalinmarg, Sonamarg Meadow of Gold, Pahalgam Valley (Aru, Betaab & Chandanwari), Mughal Gardens, Hazratbal Shrine, Pari Mahal, Dal Lake Shikara Ride, and Shankaracharya Temple.',
    highlights: [
      'Dal Lake Houseboat Stay & Shikara Ride',
      'Gulmarg Gondola Cable Car Ride to Khalinmarg',
      'Pahalgam Valley (Aru Valley, Betaab Valley & Chandanwari)',
      'Sonamarg (Meadow of Gold & Thajiwas Glacier View)',
      'Mughal Gardens (Nishat Bagh), Hazratbal Shrine, Pari Mahal & Shankaracharya Temple'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '6 Days Kashmir Paradise Yatra',
    placesList: [
      { name: 'Srinagar (Dal Lake Houseboat, Mughal Gardens & Shankaracharya Temple)' },
      { name: 'Gulmarg (Gondola Cable Car Ride & Khalinmarg)' },
      { name: 'Sonamarg (Meadow of Gold & Sindh River Valley)' },
      { name: 'Pahalgam (River Lidder, Aru Valley & Betaab Valley)' }
    ],
    inclusions: [
      'Airfares (Both Onward and Return)',
      'Transfers and Sightseeing by AC / Private vehicle',
      '3-star Premium Accommodation on a Twin/Double sharing basis (1 night stay in Houseboat in Srinagar and 4 nights stay in 3-star Premium Hotels)',
      'Entry tickets as per the itinerary',
      'Professional tour guide',
      'Gulmarg Gondola Cable Car Ride',
      'Mineral Water (1 Ltr per person per day)',
      'All Meals (Breakfast, Lunch & Dinner) For Group Packages',
      'Dal Lake Shikara Ride'
    ],
    exclusions: [
      'Travel Insurance, Tips, Laundry, etc.',
      'Any medical or evacuation expenses, and expenses due to natural climate',
      'Any service not included in the inclusions or itinerary',
      'Horse, palki, Helicopter charges',
      'Any Snow Activities in Kashmir',
      'Seat selection and meals are not included in the flight journey'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Srinagar (Arrival & Local Market Walk)',
        detail: 'Meeting and greeting at Kempegowda International Airport Bangalore. On arrival at Srinagar airport, transfer to check-in at hotel. Welcome drink Kashmiri Kehwa. Evening free to relax. Later in the evening enjoy local market by walk. Overnight stay in Srinagar.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Srinagar – Gulmarg Gondola Ride – Srinagar',
        detail: 'After breakfast, checkout from hotel and proceed towards Gulmarg (one of the most beautiful summer resorts in the valley). On arrival at Gulmarg, check in to hotel and relax. In the afternoon, proceed to enjoy the Gondola cable car ride from Gulmarg to Khalinmarg. Return back to hotel for dinner and overnight stay in Srinagar.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Srinagar – Sonamarg Excursion – Srinagar',
        detail: 'After breakfast, leave for a full-day excursion to Sonamarg (located at an altitude of about 9,000 ft, popularly called the "Meadow of Gold"). Enjoy the spectacular drive through valleys and mountains along the Sindh River. Option to hire ponies to visit Thajiwas Glacier. After sightseeing, return to Srinagar for dinner and overnight stay.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Srinagar – Pahalgam (Aru & Betaab Valleys)',
        detail: 'After breakfast proceed to Pahalgam ("Valley of Shepherds"). Enjoy nature and walk around the banks of River Lidder (base camp for Amarnath Yatra). Visit Aru Valley, Betaab Valley, Chandanwari, and optional horse riding to Baisaran meadows. Overnight stay at hotel in Pahalgam.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Pahalgam – Srinagar (Mughal Gardens & Dal Lake Shikara Ride)',
        detail: 'After breakfast transfer to Srinagar. Visit Mughal Gardens, Hazratbal Shrine (opposite Nishat Bagh on Dal Lake), and Pari Mahal. In the afternoon enjoy a scenic Shikara ride on Dal Lake to experience the beauty compared to Venice. Check in to Dal Lake Houseboat for overnight stay.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 6',
        title: 'Srinagar (Shankaracharya Temple) – Bangalore Departure',
        detail: 'After breakfast transfer to visit Shankaracharya Temple (Takht-e-Suleiman hill, dedicated to Lord Shiva, oldest shrine in Kashmir valley). Transfer to Srinagar airport to board flight for return journey to Bangalore with sweet memories.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Important Note: Kindly carry POST-PAID SIM CARD for your travel, as pre-paid SIM cards will not function in Jammu & Kashmir.',
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'Important Note: Kindly carry POST-PAID SIM CARD for your travel, as pre-paid SIM cards will not function in Jammu & Kashmir.',
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Experience Paradise on Earth with our 6-day Kashmir Paradise Tour Package. Enjoy direct flight transfers from Bangalore, stay 1 night in a traditional Dal Lake Houseboat and 4 nights in 3-star premium hotels, ride the famous Gulmarg Gondola Cable Car to Khalinmarg, explore Sonamarg Meadow of Gold, Pahalgam valleys, Mughal Gardens, and historic Shankaracharya Temple.',
      significance: 'Kashmir is celebrated worldwide for its breathtaking alpine scenery, tranquil Dal Lake, ancient Shiva shrines like Shankaracharya Temple, and rich Assamese & Kashmiri heritage.',
      bestTimeToVisit: 'April to October offers lush greenery and blooming flowers, while December to February transforms Kashmir into a white snow wonderland.',
      placesCovered: [
        'Dal Lake Houseboat & Shikara Ride',
        'Gulmarg Gondola Cable Car Ride (Khalinmarg)',
        'Sonamarg (Meadow of Gold & Sindh River)',
        'Pahalgam (River Lidder, Aru Valley & Betaab Valley)',
        'Mughal Gardens (Nishat Bagh & Shalimar Bagh)',
        'Hazratbal Shrine & Pari Mahal',
        'Shankaracharya Temple (Takht-e-Suleiman)'
      ],
      travelTips: [
        'Important: Pre-paid SIM cards do not work in Jammu & Kashmir; carry a post-paid SIM card.',
        'Carry warm clothing / jacket even during summer months for high altitude spots like Gulmarg & Sonamarg.',
        'Follow tour manager guidelines during horse riding and pony rides in Pahalgam.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore with airport assistance',
        'Authentic 1-night Dal Lake Houseboat stay included',
        'Gulmarg Gondola cable car ride tickets included in package'
      ]
    },
    faqs: [
      {
        question: "Is Gulmarg Gondola cable car ticket included in the package?",
        answer: "Yes, Gondola cable car ride tickets are included in the package as mentioned in the itinerary."
      },
      {
        question: "Does pre-paid SIM card work in Kashmir?",
        answer: "No, pre-paid SIM cards from other states will not work in J&K due to security regulations. Please carry a post-paid SIM card."
      }
    ]
  },
  {
    id: 'leh-ladakh',
    title: 'Leh Ladakh High Altitude Expedition',
    category: 'domestic',
    destination: 'Ladakh (Leh, Khardung La, Nubra Valley, Turtuk, Pangong Lake)',
    duration: '6N/7D',
    price: '₹60,999/-',
    numericPrice: 60999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200&auto=format&fit=crop',
    description: 'The Land of High Passes: Direct round-trip flight to Leh, acclimatization stay, Hall of Fame, Gurudwara Pathar Sahib, Magnetic Hill, Indus-Zanskar Sangam, Alchi & Hemis Monasteries, Shanti Stupa, Leh Palace, Rancho School (3 Idiots), Khardung La Pass (highest motorable road), Nubra Valley, Turtuk Village (India-Pakistan border), and day trip to Pangong Lake via Chang La Pass.',
    highlights: [
      'Pangong Lake Day Trip via Chang La Pass',
      'Nubra Valley & Khardung La Pass (Highest Motorable Road)',
      'Turtuk Village (Last Indian Village on Indo-Pak Border)',
      'Hall of Fame Light & Sound Show, Magnetic Hill & Sangam',
      'Shanti Stupa, Leh Palace, Hemis & Alchi Monasteries'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '7 Days Leh Ladakh High Altitude Expedition',
    placesList: [
      { name: 'Leh (Shanti Stupa, Leh Palace, Hemis & Alchi Monasteries)' },
      { name: 'Magnetic Hill & Sangam (Confluence of Zanskar & Indus)' },
      { name: 'Nubra Valley via Khardung La Pass' },
      { name: 'Turtuk Village (Indo-Pak Border)' },
      { name: 'Pangong Lake via Chang La Pass' }
    ],
    inclusions: [
      'Airfares (Both Onward & Return)',
      'Baggage Allowance as per airline policy',
      'Travel by comfortable non-A/C small vehicles (for mountain terrain)',
      'Accommodation in comfortable hotels on twin/triple/single sharing basis for 06 nights',
      'All Meals – Morning tea/coffee, breakfast, lunch, evening tea/coffee with cookies/snacks, dinner and Water Bottle (1 Litre) per person per day',
      'Guide & driver tips, hotel & restaurant tips, permits/entrance fees for all sightseeing places to be visited',
      'Entry tickets included as per itinerary'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Extra expenses (route change, airline change, date change, accommodation) due to unforeseen force majeure',
      'Cost of insurance for 60 years and above',
      'Porterage, laundry, telephone charges, shopping, wines & alcoholic beverages, personal items/drinks',
      'Extra costs incurred on behalf of an individual due to illness, accident, hospitalization, or personal emergency'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Leh & Acclimatization Rest',
        detail: 'Morning arrival at Leh Airport. Warm welcome by representative and transfer to hotel. Check-in and rest to acclimatize to high altitude. Afternoon lunch at hotel. Post-lunch continue resting or gentle stroll. Evening welcome briefing and leisure time. Dinner and overnight stay at hotel in Leh.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Local Leh Sightseeing (Hall of Fame, Magnetic Hill & Sangam)',
        detail: 'Morning breakfast at hotel. Visit Hall of Fame Museum (maintained by Indian Army), Gurudwara Pathar Sahib, gravity-defying Magnetic Hill, and Sangam (Confluence of Zanskar & Indus Rivers). Afternoon lunch en route. Explore ancient Alchi Monastery. Evening attend Light & Sound Show at Hall of Fame. Dinner and overnight stay at hotel in Leh.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Leh Heritage Tour (Shanti Stupa, Leh Palace & Hemis)',
        detail: 'Morning breakfast at hotel. Visit white-domed Shanti Stupa for panoramic views, historic Leh Palace, Sindhu Ghat, and Rancho School (Druk White Lotus School from "3 Idiots"). Afternoon lunch. Visit Hemis Monastery (largest and wealthiest monastery in Ladakh). Return to Leh for dinner and overnight stay.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Leh to Nubra Valley via Khardung La Pass',
        detail: 'Morning breakfast at hotel. Depart for Nubra Valley, crossing Khardung La Pass (one of the highest motorable roads in the world). Afternoon lunch en route. Check-in at Nubra Valley hotel/camp. Optional camel rides or ATV rides. Dinner and overnight stay in Nubra Valley.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Nubra Valley – Visit Turtuk Village – Leh',
        detail: 'Morning breakfast at hotel/camp. Visit Turtuk Village, the last village on the Indian side of the border with Pakistan. Afternoon lunch in Turtuk Village. Return drive to Leh. Evening dinner and overnight stay at hotel in Leh.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 6',
        title: 'Day Trip to Pangong Lake via Chang La Pass – Leh',
        detail: 'Morning early breakfast at hotel. Depart for a day trip to Pangong Lake via Chang La Pass. Afternoon lunch at a scenic spot near Pangong Lake. Enjoy mesmerizing views of the blue lake and surrounding mountains. Return to Leh for dinner and overnight stay.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 7',
        title: 'Checkout & Leh Airport Departure',
        detail: 'Morning breakfast at hotel. Checkout from hotel and transfer to Leh Airport for return flight departure to Bangalore carrying unforgettable memories.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'High Altitude Note: Complete rest on Day 1 is mandatory to acclimatize to high altitude oxygen levels in Leh.',
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Conquer the high-altitude wilderness of Ladakh on this 7-day expedition. Experience the high-altitude blue waters of Pangong Lake via Chang La, cross Khardung La Pass (highest motorable road), explore double-hump camel sand dunes in Nubra Valley, visit Turtuk Village on the Indo-Pak border, Magnetic Hill, Sangam, and historic Buddhist monasteries.',
      significance: 'Ladakh is known as "Little Tibet", home to ancient Vajrayana Buddhist monasteries (Hemis, Alchi), serene stupas, and dramatic high-altitude Himalayan landscapes.',
      bestTimeToVisit: 'May to September offers comfortable weather, clear roads across Khardung La & Chang La, and blooming mountain valleys.',
      placesCovered: [
        'Pangong Lake & Chang La Pass',
        'Khardung La Pass & Nubra Valley',
        'Turtuk Village (Indo-Pak Border)',
        'Hall of Fame & Light/Sound Show',
        'Magnetic Hill & Sangam (Zanskar & Indus)',
        'Shanti Stupa & Historic Leh Palace',
        'Sindhu Ghat & Rancho School',
        'Hemis & Alchi Monasteries'
      ],
      travelTips: [
        'Mandatory Acclimatization: Rest completely on Day 1 to avoid Acute Mountain Sickness (AMS).',
        'Stay well hydrated throughout the tour with water and warm beverages.',
        'Carry sunscreen, sunglasses, lip balm, and warm layers for high altitude passes.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore to Leh with airport transfers',
        'Experienced mountain drivers and local guides',
        'All meals included (Morning tea/coffee, Breakfast, Lunch, Evening snacks, Dinner)'
      ]
    },
    faqs: [
      {
        question: "Is acclimatization required on arrival in Leh?",
        answer: "Yes, Day 1 is completely reserved for rest and acclimatization to high altitude oxygen levels in Leh."
      },
      {
        question: "Are inner line permits and entry tickets included?",
        answer: "Yes, inner line permits, guide tips, driver tips, hotel tips, and entry tickets for all itinerary places are included."
      }
    ]
  },
  {
    id: 'golden-triangle',
    title: 'Golden Triangle Tour Package (Jaipur, Agra, Mathura, Vrindavan & Delhi)',
    category: 'domestic',
    destination: 'Rajasthan, UP & Delhi (Jaipur, Agra, Mathura, Vrindavan, Delhi)',
    duration: '5N/6D',
    price: '₹44,999/-',
    numericPrice: 44999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
    description: 'Iconic Golden Triangle & Braj Bhoomi Circuit: Direct flight from Bangalore to Jaipur, Hawa Mahal, Jantar Mantar, City Palace, Amber Fort, Jaigarh Fort, Nahargarh Fort, World-famous Taj Mahal & Agra Fort, Shri Krishna Janmabhoomi in Mathura, Prem Mandir & Bankey Bihari in Vrindavan, Red Fort, Rajghat, India Gate, Rashtrapati Bhavan, Akshardham, Qutub Minar, and Lotus Temple in Delhi.',
    highlights: [
      'Jaipur Forts & Palaces (Amber Fort, Jaigarh, Nahargarh & City Palace)',
      'World-Famous Taj Mahal & Agra Fort on Yamuna River',
      'Shri Krishna Janmabhoomi (Mathura) & Prem Mandir (Vrindavan)',
      'Red Fort, Rajghat, India Gate & Rashtrapati Bhavan (Delhi)',
      'Akshardham Temple, UNESCO Qutub Minar & Lotus Temple'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '6 Days Golden Triangle Heritage Tour',
    placesList: [
      { name: 'Jaipur (Hawa Mahal, City Palace, Amber & Jaigarh Forts)' },
      { name: 'Agra (World-Famous Taj Mahal & Agra Fort)' },
      { name: 'Mathura & Vrindavan (Shri Krishna Janmabhoomi & Prem Mandir)' },
      { name: 'Delhi (Red Fort, India Gate, Akshardham & Qutub Minar)' }
    ],
    inclusions: [
      'To and from economy class air travel for Bangalore to Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
      'Baggage Allowance as per airline policy',
      'Entry tickets if any',
      'Tour Manager services throughout the trip',
      'Entrance fees of all sightseeing places to be visited from inside',
      'All Meals – Breakfast, Lunch & Dinner',
      'Cost of internal airfare as mentioned in itinerary',
      'Transfers and sightseeing by A/C coach',
      'Accommodation on Twin/Double sharing basis for 05 nights',
      'Govt Tax of 5% over and above the Tour Cost mentioned'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Any increase in Airfare, Airport taxes, Govt Taxes, Fuel Surcharges & new Govt tax applicability',
      'Any up gradation in Airline class or hotel room category',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Entry tickets for water games and activities',
      'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
      'Porterage, laundry, telephone charges, shopping, alcoholic beverages & personal items/drinks',
      'Extra costs incurred on behalf of an individual due to illness, accident, hospitalization, or personal emergency',
      'Services or activity charges other than those included in group tour itinerary',
      'Entry Tickets inside the Taj Mahal'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Jaipur (Hawa Mahal, Jantar Mantar & City Palace)',
        detail: 'On arrival at Jaipur International Airport (JAI), receive a warm reception and transfer to Jaipur sightseeings. Visit Hawa Mahal ("Palace of Winds"), Jantar Mantar (astronomical observatory built by Maharaja Sawai Jai Singh II). Post lunch check in to hotel, fresh up and visit City Palace, Birla Mandir, and local shopping. Dinner and overnight stay in Jaipur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Jaipur Forts Sightseeing (Amber Fort, Jaigarh & Nahargarh)',
        detail: 'After breakfast, proceed for Jaipur fort sightseeings: Amber Fort (fortified palace built by Raja Man Singh), Jaigarh Fort (built by Jai Singh II to protect Amer Fort complex), and Nahargarh Fort (standing on Aravalli Hills edge). Return to hotel for dinner and overnight stay in Jaipur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Jaipur – Agra (Taj Mahal & Agra Fort)',
        detail: 'In the morning checkout and proceed to Agra (230 km / 4.5 hrs). On arrival in Agra, check in to hotel, fresh up and visit world-famous Taj Mahal, followed by Agra Fort (historic seat of Mughal Empire on Yamuna River). Dinner and overnight stay in Agra.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Agra – Mathura – Vrindavan – Delhi',
        detail: 'After breakfast, checkout and proceed to Mathura. Visit Shri Krishna Janmabhoomi Temple. Proceed to Vrindavan (10 km) to visit Prem Mandir (stunning white marble temple) and Bankey Bihari Temple. Transfer to Delhi for dinner and overnight stay in Delhi.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Full Day Delhi Sightseeing',
        detail: 'After breakfast, proceed for Delhi sightseeings: Red Fort, Rajghat (Mahatma Gandhi memorial), India Gate (WWI soldier memorial), drive past Rashtrapati Bhavan & Parliament House, and visit Akshardham Temple in the evening. Dinner and overnight stay in Delhi.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 6',
        title: 'Delhi Sightseeing (Qutub Minar & Lotus Temple) – Bangalore Departure',
        detail: 'After breakfast, checkout and visit 12th-century Qutub Minar (UNESCO World Heritage Site) and Lotus Temple. Post lunch, leisure time for shopping before transfer to Indira Gandhi International Airport (DEL) for return flight to Bangalore with sweet memories.',
        meals: 'Breakfast, Lunch, Dinner'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Experience India\'s iconic Golden Triangle circuit combined with sacred Braj Bhoomi (Mathura & Vrindavan). Marvel at Jaipur\'s majestic pink architecture & hilltop forts, Agra\'s eternal Taj Mahal & Agra Fort, Mathura & Vrindavan\'s Lord Krishna shrines, and Delhi\'s historic UNESCO monuments.',
      significance: 'The Golden Triangle connects three of India\'s most historically and culturally significant cities (Jaipur, Agra, Delhi) alongside the holy birthplace of Lord Krishna in Mathura.',
      bestTimeToVisit: 'October to March offers pleasant weather for walking through forts, palaces, and monument complexes.',
      placesCovered: [
        'Hawa Mahal, City Palace & Jantar Mantar (Jaipur)',
        'Amber Fort, Jaigarh Fort & Nahargarh Fort',
        'Taj Mahal & Agra Fort (Agra)',
        'Shri Krishna Janmabhoomi (Mathura) & Prem Mandir (Vrindavan)',
        'Red Fort, Rajghat, India Gate & Rashtrapati Bhavan (Delhi)',
        'Akshardham Temple, Qutub Minar & Lotus Temple'
      ],
      travelTips: [
        'Entry tickets inside the Taj Mahal main mausoleum are excluded / optional.',
        'Wear comfortable walking shoes for fort inclines and large monument grounds.',
        'Respect dress codes when visiting active temples in Vrindavan, Mathura & Delhi.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore to Jaipur & return from Delhi',
        'Hygienic 3-star deluxe hotel stays across Jaipur, Agra & Delhi',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "Is entry inside Taj Mahal included?",
        answer: "Sightseeing of Taj Mahal from outside/premises is included. Main mausoleum inner entry tickets are optional/extra as per ASI guidelines."
      },
      {
        question: "Are Mathura and Vrindavan visited during the trip?",
        answer: "Yes, on Day 4 we visit Shri Krishna Janmabhoomi in Mathura and Prem Mandir & Bankey Bihari in Vrindavan en route to Delhi."
      }
    ]
  },
  {
    id: 'rajasthan',
    title: 'Grand Royal Rajasthan Tour Package (Udaipur, Jodhpur, Jaisalmer, Pushkar & Jaipur)',
    category: 'domestic',
    destination: 'Rajasthan (Udaipur, Nathdwara, Jodhpur, Jaisalmer, Pushkar, Jaipur)',
    duration: '7N/8D',
    price: '₹60,999/-',
    numericPrice: 60999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop',
    description: 'Grand Royal Odyssey of Rajasthan: Direct round-trip flights from Bangalore, Srinathji Temple & 369ft Statue of Belief in Nathdwara, City Palace & Fateh Sagar boat ride in Udaipur, Umaid Bhawan Palace & Mehrangarh Fort in Jodhpur, Sam Sand Dunes desert stay & Patwon Ki Haveli in Jaisalmer, sacred Brahma Temple & Lake in Pushkar, Jal Mahal, Hawa Mahal, Jantar Mantar, Jaigarh Fort & Amber Fort in Jaipur.',
    highlights: [
      'Nathdwara Shrinathji Temple & World\'s 369ft Tallest Shiva Statue (Statue of Belief)',
      'Udaipur City Palace, Jagdish Mandir & Fateh Sagar Lake Boat Ride',
      'Jodhpur Mehrangarh Fort & Umaid Bhawan Palace Art-Deco Heritage',
      'Jaisalmer Golden Fort, Patwon Ki Haveli & Sam Sand Dunes Desert Stay',
      'World\'s Only Brahma Temple & Holy Lake Dip in Pushkar',
      'Jaipur Heritage (Amber Fort, Jaigarh Fort, Jal Mahal, Hawa Mahal & Jantar Mantar)'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '8 Days Grand Royal Rajasthan Yatra',
    placesList: [
      { name: 'Udaipur & Nathdwara (City Palace & Shrinathji Temple)' },
      { name: 'Jodhpur (Mehrangarh Fort & Umaid Bhawan Palace)' },
      { name: 'Jaisalmer (Golden Fort & Sam Sand Dunes Desert Stay)' },
      { name: 'Pushkar (World\'s Only Lord Brahma Temple & Sacred Lake)' },
      { name: 'Jaipur (Amber Fort, Jaigarh, Jal Mahal & Hawa Mahal)' }
    ],
    inclusions: [
      'To and from economy class air travel for Bangalore-to-Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
      'Baggage Allowance as per airline policy',
      'Tour Manager Services throughout the tour',
      'Entrance fees of all sightseeing places to be visited from inside',
      'All Meals – Breakfast, Lunch & Dinner',
      'Cost of internal airfare as mentioned in itinerary',
      'Transfers and sightseeing by A/C vehicle',
      'Accommodation on Twin/Double sharing basis for 07 nights in 3-star Premium Hotels / Desert Tents',
      'Govt Tax of 5% over and above the Tour Cost mentioned',
      'Professional Tour Manager throughout the tour'
    ],
    exclusions: [
      'TCS (5% or 10%) applicable on GST inclusive price',
      'Any increase in Airfare, Airport taxes, Govt Taxes, Fuel Surcharges & new Govt tax applicability',
      'Entry tickets for optional activities, horse ride, river rafting, desert camel safari / Jeep safari ride at Sam sand dunes (Own cost)',
      'Up gradation in Airline class or hotel room category',
      'Cost of Air ticket deviation charges & Safari ride at Ranthambore National Park',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
      'Porterage, laundry, telephone charges, shopping, wines & alcoholic beverages, personal items',
      'Extra costs incurred on behalf of an individual due to illness, accident, hospitalization, or personal emergency',
      'Seat selection and meals are not included in the flight journey'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Udaipur – Nathdwara Excursion (Shrinathji & Statue of Belief)',
        detail: 'Flight from Bangalore to Udaipur Airport. Meet and greet on arrival. Have breakfast and proceed towards Nathdwara (46 km). Visit Srinathji Temple (7-year-old child avatar of Lord Krishna, 12th-century self-manifested black stone deity). Visit "Statue of Belief" (awe-inspiring 369 ft tall Shiva statue, one of the largest in the world). Transfer to hotel for check-in. Dinner and overnight stay in Udaipur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Udaipur Full Day City of Lakes Sightseeing',
        detail: 'After breakfast, proceed to visit City Palace, Jagdish Mandir, and Saheliyon ki Bari. Enjoy evening boat ride over Fateh Sagar Lake witnessing scenic Aravalli mountain reflections. Return to hotel for dinner and overnight stay in Udaipur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Udaipur – Jodhpur Transfer (Umaid Bhawan & Mehrangarh Fort)',
        detail: 'After breakfast, checkout and proceed to Jodhpur (249 km / 5 hrs). On arrival, check in to hotel and visit Umaid Bhawan Palace (built in 1944 in art-deco and Indo-colonial style). Visit grand Mehrangarh Fort (one of India\'s largest forts with rich museum artifacts). Dinner and overnight stay in Jodhpur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Jodhpur – Jaisalmer Sand Dunes & Desert Camp Stay',
        detail: 'After breakfast, checkout and proceed to Jaisalmer (266 km / 5 hrs). Arrive at Sam Sand Dunes. Experience desert sunset views with optional camel ride or Jeep safari ride (own cost). Check in for an authentic desert tent / hotel stay with traditional Rajasthani folk music, dance & dinner. Overnight stay in Jaisalmer.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Jaisalmer Golden Fort Tour – Return to Jodhpur',
        detail: 'Visit Jaisalmer Fort (famous living Golden Fort built of yellow sandstone shimmering like a mirage). Visit Patwon Ki Haveli (group of 5 intricately carved 18th-century Jain mansions). Post sightseeing, proceed to Jodhpur (180 km / 4 hrs). Check in to hotel for dinner and overnight stay in Jodhpur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 6',
        title: 'Jodhpur – Pushkar (Brahma Temple & Sacred Lake Dip)',
        detail: 'After breakfast, checkout and proceed to Pushkar (180 km / 3.5 hrs). Check in to hotel, fresh up. In the evening visit famous Rangji Temple, Gayatri Temple (Shakti Peeth), Saraswati Temple, and sacred Pushkar Lake. Visit world\'s only Brahma Temple (dedicated to Lord Brahma in white marble). Dinner and overnight stay in Pushkar.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 7',
        title: 'Pushkar – Jaipur Pink City Tour (Jal Mahal, Hawa Mahal & City Palace)',
        detail: 'Travel to Jaipur, the Pink City (142 km / 3 hrs). Start sightseeing at Jal Mahal (palace in the middle of Man Sagar Lake). Visit famous Hawa Mahal ("Palace of Winds"), Jantar Mantar (UNESCO World Heritage astronomical site), and serene white marble City Palace. Dinner and overnight stay in Jaipur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 8',
        title: 'Jaipur Forts Sightseeing (Amber Fort & Jaigarh) – Bangalore Departure',
        detail: 'After breakfast, checkout and visit Jaigarh Fort (home to world\'s largest cannon on wheels Jaivana), Amber Fort (majestic hilltop fortress with Maota Lake view), Albert Hall Museum (oldest museum in Rajasthan), and Birla Temple. Transfer to Jaipur International Airport for return flight to Bangalore with royal memories.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Embark on the ultimate 8-day royal journey across Rajasthan. Fly directly from Bangalore to explore 5 iconic destinations: Udaipur\'s serene lakes, Nathdwara\'s Shrinathji & 369ft Statue of Belief, Jodhpur\'s towering Mehrangarh Fort, Jaisalmer\'s Golden Fort & Sam Sand Dunes, Pushkar\'s sacred Brahma Temple, and Jaipur\'s grand hilltop forts.',
      significance: 'Rajasthan represents the pinnacle of Indian royalty, bravery, and architectural splendor—featuring UNESCO World Heritage hill forts, sacred pilgrimage lakes, and golden desert traditions.',
      bestTimeToVisit: 'October to March offers cool desert breezes and ideal weather for sightseeing across forts and palaces.',
      placesCovered: [
        'Nathdwara Shrinathji Temple & Statue of Belief (369 ft)',
        'Udaipur City Palace, Jagdish Temple & Fateh Sagar Lake',
        'Jodhpur Mehrangarh Fort & Umaid Bhawan Palace',
        'Jaisalmer Golden Fort & Sam Sand Dunes Desert Camp',
        'Patwon Ki Haveli Jaisalmer',
        'Pushkar Brahma Temple & Sacred Pushkar Lake',
        'Jaipur Jal Mahal, Hawa Mahal & Jantar Mantar',
        'Amber Fort, Jaigarh Fort & Albert Hall Museum'
      ],
      travelTips: [
        'Camel / Jeep safari at Sam Sand Dunes is optional at customer\'s own expense.',
        'Wear comfortable slip-on shoes for temple visits in Pushkar and Nathdwara.',
        'Sunscreen, hat, and sunglasses are recommended for daytime desert excursions.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore to Udaipur & return from Jaipur',
        'Handpicked 3-star premium hotel stay + 1-night authentic desert tent stay in Jaisalmer',
        'All meals included throughout the 8-day tour'
      ]
    },
    faqs: [
      {
        question: "Is desert camp stay included in Jaisalmer?",
        answer: "Yes! On Day 4 we provide an authentic desert tent / hotel stay at Sam Sand Dunes with Rajasthani cultural music and dance."
      },
      {
        question: "Is the Statue of Belief in Nathdwara visited?",
        answer: "Yes, on Day 1 we visit the 369 ft tall Statue of Belief (Lord Shiva statue) in Nathdwara alongside Shrinathji Temple."
      }
    ]
  },
  {
    id: 'kerala',
    title: 'God\'s Own Country Kerala Tour Package (Munnar, Thekkady & Alleppey)',
    category: 'domestic',
    destination: 'Kerala (Cochin, Munnar, Thekkady, Alleppey)',
    duration: '4N/5D',
    price: '₹34,999/-',
    numericPrice: 34999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop',
    description: 'God\'s Own Country Tour: Round-trip flights from Bangalore to Cochin, scenic drive to Munnar tea & spice plantations, Cheeyappara Waterfalls, Eravikulam National Park (Rajamalai), Mattupetty Dam, Echo Point, Periyar Wildlife Sanctuary Tiger Reserve & Lake boat cruise in Thekkady, and overnight luxury Alleppey Houseboat Backwater Cruise.',
    highlights: [
      'Munnar Tea Plantations, Tea Museum & Cheeyappara Waterfalls',
      'Rajamalai Eravikulam National Park & Anamudi Peak View',
      'Mattupetty Dam, Lake Boating & Echo Point',
      'Thekkady Periyar Wildlife Sanctuary & Spice Plantations',
      'Overnight Deluxe Alleppey Houseboat Backwater Cruise (All Meals Onboard)'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '5 Days Scenic Kerala Backwaters & Hill Station Yatra',
    placesList: [
      { name: 'Munnar (Tea Gardens, Eravikulam & Mattupetty Dam)' },
      { name: 'Thekkady (Periyar Wildlife Sanctuary & Spice Tour)' },
      { name: 'Alleppey (Luxury Houseboat Backwater Cruise)' },
      { name: 'Cochin (Airport Transfers & Fort Kochi Enroute)' }
    ],
    inclusions: [
      'Airfares (Both Onward and Return)',
      'Transfers and Sightseeing by A/C Coach / Private vehicle',
      '3-star Premium Accommodation on a Twin/Double sharing basis (Including 1 night overnight stay in Alleppey Houseboat)',
      'Entry tickets as per the itinerary',
      'Meals - (MAPAI Plan: Breakfast & Dinner, plus All Meals onboard Houseboat)',
      'Mineral water (1 Litre per person per day)',
      'Professional tour guide service',
      'Roundtrip Air Fares'
    ],
    exclusions: [
      'Any medical or evacuation expenses, and expenses due to natural climate',
      'Any service not included in the inclusions or itinerary',
      'Seat selection and meals are not included in the flight journey',
      'Travel Insurance, Tips, Laundry, etc.'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Cochin – Munnar',
        detail: 'Flight from Bangalore to Cochin Airport. On arrival at Cochin airport, meet and assist by representative. Proceed to Munnar (130 km / 4 hrs). Enroute visit tea and spice plantations, Cheeyappara Waterfalls, and scenic mountain viewpoints. Arrive in Munnar, check into hotel. Enjoy evening at leisure. Dinner and overnight stay at hotel in Munnar.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Full Day Munnar Sightseeing',
        detail: 'After breakfast, proceed for full-day sightseeing across Munnar: Echo Point, Kundala Lake and Kundala Dam, Mattupetty Lake and Mattupetty Dam, Munnar Tea Gardens, Tea Museum & Factory, Blossom Park, Pothamedu View Point, Hydel Park, and Rajamalai Eravikulam National Park (home to endangered Nilgiri Tahr). Optional Kathakali & Kalaripayattu performance at Punarjani Village. Dinner and overnight stay at hotel in Munnar.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Munnar – Thekkady (Periyar Tiger Reserve)',
        detail: 'After breakfast, proceed to Thekkady (90 km / 3 hrs). Check in to hotel and relax. In the afternoon, visit Periyar Wildlife Sanctuary & Tiger Reserve. Enjoy boat cruise on Periyar Lake to spot wild elephants, deer, and birds. Visit cardamom, pepper, tea, and coffee spice plantations. Dinner and overnight stay at hotel in Thekkady.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Thekkady – Alleppey (Houseboat Backwater Cruise)',
        detail: 'Morning after breakfast, proceed to Alleppey (140 km / 4 hrs). Check in for an overnight stay on a traditional Kerala Houseboat. Sail through a maze of backwater canals witnessing village scenes, paddy fields, coconut palms, and local life. Meals onboard: Lunch, Evening Tea & Snacks, Dinner, and next morning\'s Breakfast. Overnight stay on houseboat anchored in backwaters.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Alleppey – Cochin Airport – Bangalore Departure',
        detail: 'After breakfast on the houseboat, checkout and transfer to Cochin International Airport for your return flight to Bangalore with sweet memories of God\'s Own Country.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Experience God\'s Own Country on this 5-day tour of Kerala. Take direct flights from Bangalore to Cochin, drive through rolling tea estates in Munnar, explore Periyar Tiger Reserve in Thekkady, and cruise the peaceful backwaters of Alleppey on a private deluxe houseboat.',
      significance: 'Kerala is renowned as God\'s Own Country for its emerald backwaters, lush Western Ghats, spice gardens, Ayurvedic heritage, and traditional art forms like Kathakali.',
      bestTimeToVisit: 'September to March offers cool mountain climate in Munnar and ideal backwater cruising conditions in Alleppey.',
      placesCovered: [
        'Munnar Tea Gardens & Tea Museum',
        'Rajamalai Eravikulam National Park (Nilgiri Tahr)',
        'Mattupetty Dam, Lake & Echo Point',
        'Thekkady Periyar Wildlife Sanctuary & Lake Cruise',
        'Cardamom, Pepper & Coffee Spice Plantations',
        'Alleppey Backwaters Luxury Houseboat Cruise'
      ],
      travelTips: [
        'Houseboat check-in time is 12:00 PM and check-out is 9:00 AM next morning.',
        'Carry light cottons for backwaters and light woolens/sweaters for Munnar hill station nights.',
        'Eravikulam National Park entry tickets require advance online slot allocation during peak tourist seasons.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore to Cochin with dedicated AC cab',
        'Overnight Deluxe Houseboat stay in Alleppey backwaters with all meals onboard included',
        'Hygienic 3-star deluxe hotel stays in Munnar & Thekkady'
      ]
    },
    faqs: [
      {
        question: "Are all meals included during the Alleppey Houseboat stay?",
        answer: "Yes! Welcome drink, Lunch, Evening Tea & Snacks, Dinner, and Breakfast are fully included onboard the houseboat."
      },
      {
        question: "Are flight tickets from Bangalore included?",
        answer: "Yes, round-trip economy airfares between Bangalore and Cochin are included in the package."
      }
    ]
  },
  {
    id: 'goa',
    title: 'Goa Beach & Heritage Tour Package',
    category: 'domestic',
    destination: 'Goa (North Goa & South Goa)',
    duration: '2N/3D',
    price: '₹19,999/-',
    numericPrice: 19999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
    description: 'Sun, Sand & Heritage Gateway: Round-trip flights from Bangalore, North Goa beaches (Calangute, Baga & Anjuna), historic Fort Aguada, South Goa heritage (UNESCO Basilica of Bom Jesus & Se Cathedral), authentic Goan cuisine, and vibrant seaside markets.',
    highlights: [
      'North Goa Famous Beaches (Calangute, Baga & Anjuna)',
      'South Goa UNESCO Heritage Monuments (Basilica of Bom Jesus)',
      '17th Century Portuguese Fort Aguada & Lighthouse View',
      'Thrilling Watersports & Authentic Goan Seafood/Cuisine',
      'Direct Round-Trip Flights from Bangalore'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '3 Days Goa Coastal Getaway',
    placesList: [
      { name: 'North Goa (Calangute, Baga & Fort Aguada)' },
      { name: 'South Goa (Old Goa UNESCO Churches & Miramar Beach)' },
      { name: 'Panjim (Mandovi Riverfront & Local Shopping)' }
    ],
    inclusions: [
      'Airfares (Both Onward and Return)',
      'Transfers and Sightseeing by A/C vehicle',
      '3-star Premium Accommodation on a Twin/Double sharing basis for 02 nights',
      'Entry tickets as per the itinerary',
      'Meals - (MAPI Plan: Breakfast, Lunch & Dinner)'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Professional Tourist Guide',
      'Mineral water, Coffee/Tea, Shopping',
      'Travel Insurance, Tips, Laundry, etc.',
      'Any medical or evacuation expenses, and expenses due to natural climate',
      'Any service not included in the inclusions or itinerary',
      'Water sports activities & Mandovi river cruise ticket charges'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Arrival in Goa & Evening Market Exploration',
        detail: 'Flight from Bangalore to Goa Airport (Dabolim / MOPA). On arrival, airport pickup and transfer to 3-star premium resort/hotel. Check-in and relax. Evening free at leisure to explore local area, beach shacks, and vibrant flea markets. Dinner and overnight stay at hotel in Goa.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Full Day Goa Sightseeing (North & South Goa Highlights)',
        detail: 'After breakfast, proceed for full-day sightseeing in Goa. Visit Fort Aguada (17th-century Portuguese lighthouse and fortress), famous North Goa beaches (Calangute, Baga, Anjuna), and South Goa UNESCO heritage sites including Basilica of Bom Jesus and Se Cathedral in Old Goa. Enjoy authentic Goan cuisine for lunch. Evening free for beach activities and sunset viewing. Dinner and overnight stay at hotel in Goa.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Goa Shopping & Departure to Bangalore',
        detail: 'After breakfast, check out from hotel. Enjoy free time for last-minute souvenir shopping in Panjim or local beach flea markets. Transfer to Goa Airport for return journey to Bangalore carrying fond memories of sun, sand, and sea.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Unwind in India\'s favorite beach capital on this 3-day Goa Tour. Enjoy direct flights from Bangalore, stay in 3-star premium beach accommodation, explore historic Fort Aguada, marvel at UNESCO-listed Basilica of Bom Jesus in Old Goa, and soak in the sun at Baga and Calangute beaches.',
      significance: 'Goa is famous for its unique blend of Indian and Portuguese cultures, centuries-old churches, golden palm-fringed coastlines, and laid-back beach lifestyle.',
      bestTimeToVisit: 'November to February for pleasant beach weather, vibrant festivals, and water sports activities.',
      placesCovered: [
        'Fort Aguada & Lighthouse View',
        'Calangute, Baga & Anjuna Beaches',
        'Basilica of Bom Jesus (UNESCO Heritage)',
        'Se Cathedral & Old Goa Monuments',
        'Panjim City & Mandovi River Promenade'
      ],
      travelTips: [
        'Carry light beachwear, flip-flops, sunscreen, and sunglasses.',
        'Water sports like banana ride, jet ski, and parasailing are optional at customer\'s own cost.',
        'Maintain reverence when visiting sacred heritage churches in Old Goa.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore to Goa with airport assistance',
        '3-star premium resort stay near North Goa beaches',
        'Included meal plan (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "Are flight tickets from Bangalore included?",
        answer: "Yes, onward and return flight airfares between Bangalore and Goa are included."
      },
      {
        question: "Is water sports included in the package?",
        answer: "Water sports activities are optional at beach spots at customer's own expense."
      }
    ]
  },
  {
    id: 'himachal',
    title: 'Himachal Pradesh Tour Package (Shimla, Manali & Solang Valley)',
    category: 'domestic',
    destination: 'Himachal Pradesh (Shimla, Kullu, Manali, Solang Valley, Chandigarh)',
    duration: '6N/7D',
    price: '₹39,999/-',
    numericPrice: 39999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3e99c0f2c?q=80&w=1200&auto=format&fit=crop',
    description: 'Majestic Himalayan Mountain Tour: Round-trip flights from Bangalore, colonial charm of Shimla & Kufri, scenic Pinjore Gardens, Kullu Valley rafting & shawl factories, snow-capped Solang Valley & Atal Tunnel in Manali, Hadimba Devi Temple, Vashisht Hot Springs, and Rock Garden in Chandigarh.',
    highlights: [
      'Shimla Mall Road, Ridge & Kufri Snow Point Sightseeing',
      'Solang Valley Snow Sports, Zorbing & Paragliding',
      'Atal Tunnel (World\'s Longest Highway Tunnel at 10,000 ft)',
      'Kullu Valley Rafting, Saffron Fields & Shawl Weaving Centers',
      'Hadimba Devi Temple, Vashisht Hot Springs & Chandigarh Rock Garden'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '7 Days Scenic Himachal & Manali Valley Tour',
    placesList: [
      { name: 'Shimla & Kufri (Mall Road, Ridge & Green Valley)' },
      { name: 'Kullu (Kullu Valley Rafting & Vaishno Devi Temple)' },
      { name: 'Manali (Hadimba Temple, Vashisht & Club House)' },
      { name: 'Solang Valley & Atal Tunnel' },
      { name: 'Chandigarh (Rock Garden & Sukhna Lake)' }
    ],
    inclusions: [
      'To and from economy class air travel for Bangalore-to-Bangalore tour guests (Airfare, Airport taxes & Visa Fees)',
      'Baggage Allowance as per airline policy',
      'Tour Manager Services throughout the tour',
      'Entrance fees of all sightseeing places visited from inside',
      'All Meals (Breakfast, Lunch & Dinner)',
      'Transfers and sightseeing by A/C coach / private vehicle',
      'Accommodation on Twin/Double sharing basis for 06 nights',
      'Govt Tax of 5% over and above the Tour Cost mentioned'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      'Visa fees, Airport taxes, Govt taxes, Fuel Surcharges & new Govt tax applicability',
      'Up gradation in Airline class or hotel room category',
      'Cost of Air ticket deviation charges',
      'Increase in rate of exchange leading to land arrangement cost increase prior to departure',
      'Cost of pre or post tour hotel accommodation',
      'Extra expenses (route change, airline change, date change, accommodation) due to force majeure',
      'Porterage, laundry, telephone, shopping, alcoholic beverages & personal food/drinks',
      'Individual medical, accident, hospitalization, or personal emergency costs',
      'Anything not explicitly mentioned in the Inclusions column',
      'Rohtang Pass NGT permit & adventure activity charges (paragliding, skiing, zorbing)'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Bangalore – Chandigarh – Shimla',
        detail: 'Flight from Bangalore to Chandigarh Airport. On arrival, meet our representative and transfer to Shimla (110 km / 4 hrs). Enroute visit Pinjore Gardens and enjoy scenic views of the Shivalik Hills. Check in to hotel, fresh up. Evening walk on Shimla Mall Road, Ridge, and Christ Church. Dinner and overnight stay in Shimla.',
        meals: 'Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Shimla & Kufri Excursion',
        detail: 'After breakfast, proceed for a full-day excursion to Kufri (famous winter sports destination and apple orchards). Visit Himalayan Wildlife Zoo, Mahasu Peak, and Green Valley viewpoint. Return to Shimla for shopping at Lakkar Bazaar and Scandal Point. Dinner and overnight stay in Shimla.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Shimla – Kullu Valley – Manali',
        detail: 'After breakfast, checkout and proceed to Manali (250 km / 7 hrs) via Kullu Valley. Enroute visit Pandoh Dam, Hanogi Mata Temple, Kullu Vaishno Devi Temple, and famous Kullu Shawl Weaving Factory. Option for white-water river rafting in River Beas. Arrive in Manali, check in to hotel for dinner and overnight stay.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Manali Local Sightseeing',
        detail: 'After breakfast, visit famous Hadimba Devi Temple (surrounded by majestic Deodar cedar forests), Vashisht Hot Sulphur Springs and Temple, Club House, Tibetan Monastery, and Van Vihar. Evening stroll and shopping at Manali Mall Road. Dinner and overnight stay in Manali.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Manali – Solang Valley & Atal Tunnel Excursion',
        detail: 'After breakfast, proceed to Solang Valley (famous for adventure sports such as paragliding, zorbing, cable car rides, and snow activities). Drive through engineering marvel Atal Tunnel (world\'s longest highway tunnel above 10,000 ft) to Sissu in Lahaul Valley. Return to Manali for dinner and overnight stay.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 6',
        title: 'Manali – Chandigarh Transfer',
        detail: 'After breakfast, checkout from hotel and proceed to Chandigarh (300 km / 8 hrs). Enroute lunch. Arrive in Chandigarh, visit Rose Garden or Sukhna Lake in the evening. Check in to hotel for dinner and overnight stay in Chandigarh.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 7',
        title: 'Chandigarh (Rock Garden) – Bangalore Departure',
        detail: 'After breakfast, checkout from hotel and visit famous Rock Garden (created by Nek Chand out of industrial waste) and Sukhna Lake. Post lunch, transfer to Chandigarh Airport for return flight to Bangalore with wonderful memories of Himachal.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ],
    detailedContent: {
      overview: 'Experience the magic of Himachal Pradesh on this comprehensive 7-day tour. From colonial British architecture on Shimla Mall Road to snow adventures in Solang Valley, scenic drives through Atal Tunnel to Lahaul, Kullu river rafting, and Chandigarh Rock Garden.',
      significance: 'Himachal Pradesh is Devbhumi (Land of Gods), boasting pristine Himalayan peaks, sacred rivers (Beas, Sutlej), ancient wood-carved temples like Hadimba Devi, and serene pine forests.',
      bestTimeToVisit: 'March to June for pleasant summer weather and flower blooms; October to February for snow experiences.',
      placesCovered: [
        'Shimla Ridge, Mall Road & Christ Church',
        'Kufri Snow Point & Himalayan Zoo',
        'Kullu Valley, Beas River & Shawl Factories',
        'Hadimba Temple, Vashisht Hot Springs & Club House (Manali)',
        'Solang Valley & Atal Tunnel (10,000 ft)',
        'Chandigarh Rock Garden & Sukhna Lake'
      ],
      travelTips: [
        'Carry warm woolens and jackets as temperatures drop in evening hours across Shimla and Manali.',
        'Pre-booking of Rohtang Pass NGT permits or electric vehicle passes is required for Rohtang trips.',
        'Wear comfortable sports/walking shoes for mountain trails and step inclines.'
      ],
      whyChooseUs: [
        'Round-trip flight transfers from Bangalore to Chandigarh with private AC cab',
        'Handpicked 3-star premium hotel stays in Shimla, Manali & Chandigarh',
        'All meals included (Breakfast, Lunch, Dinner)'
      ]
    },
    faqs: [
      {
        question: "Is Atal Tunnel visited during the trip?",
        answer: "Yes! On Day 5 we drive through Atal Tunnel (world's longest highway tunnel above 10,000 ft) to Sissu in Lahaul Valley."
      },
      {
        question: "Are adventure activities in Solang Valley included?",
        answer: "Sightseeing transfers to Solang Valley are included. Individual adventure sports like paragliding, zorbing, or skiing are optional at customer's own cost."
      }
    ]
  },

  // ================= INTERNATIONAL JOURNEYS =================
  {
    id: 'bhutan',
    title: 'Bhutan Tour Package',
    category: 'international',
    destination: 'Bhutan (Phuentsholing, Thimphu, Punakha, Paro)',
    duration: '6N/7D',
    price: '₹65,999/-',
    numericPrice: 65999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200&auto=format&fit=crop',
    description: 'Land of the Thunder Dragon (Bhutan): Scenic road transfers from Bagdogra/Phuentsholing to Thimphu, Punakha Dzong, Dochu-La-Pass, Chhimi Lhakhang Fertility Temple, and the iconic Tiger\'s Nest (Paro Taktsang) hike.',
    highlights: [
      'Tiger\'s Nest Monastery (Paro Taktsang) Hike',
      'Punakha Dzong & Suspension Bridge',
      'Dochu-La-Pass (3,150m) Himalayan Panorama View',
      'Chhimi Lhakhang (Temple of Fertility)',
      'Kuensel Phodrang (Buddha Statue) & Folk Heritage Museum'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '7 Days 15+ Sightseeings',
    placesList: [
      { name: 'Phuentsholing (Gateway of Bhutan)' },
      { name: 'Thimphu (Capital City)' },
      { name: 'Punakha & Wangdue' },
      { name: 'Paro Valley & Tiger Nest' }
    ],
    inclusions: [
      'Airfares (Both Onward & Return)',
      'Transfers and sightseeing by A/c Coach',
      'Accommodation on Twin/Double sharing basis for 06 nights',
      'All Breakfast, Lunch and Dinner meals included',
      'Professional Tourist Guide',
      'Packaged drinking water per day 1ltr per person'
    ],
    exclusions: [
      'Coffee / Tea, Shopping',
      'Travel Insurance / Tips, Laundry etc.',
      'Auto charges if any',
      'Entry fee if any',
      'Any medical, evacuation expenses & expenses occur due to natural climate',
      'Any other services which are not included in INCLUSIONS.'
    ],
    sampleItinerary: [
      {
        day: 'Day 01',
        title: 'Bagdogra – Phuentsholing',
        detail: 'Arrival at Bagdogra International Airport and transfer to Phuentsholing (The Gateway of Bhutan by road from India). Phuentsholing is a thriving commercial center on the northern edge of the Indian Plains. Check-in to the hotel, dinner and overnight stay at Phuentsholing.\n\nSightseeing Notes:\n1. Kharbandi Gate :- Free\n2. Gompa Mandir :- Free',
        meals: 'Dinner'
      },
      {
        day: 'Day 02',
        title: 'Phuentsholing – Thimphu (170 kms / 6 hr)',
        detail: 'After breakfast complete the immigration formalities and transfer to Thimphu (7,710 ft.) – (170 KMS. 6 hrs Approx) the capital city of Bhutan. Check in at the hotel, dinner and overnight stay at Thimphu.\n\nSightseeing Notes:\n1. Waterfall :- Free\n2. Chukha Dam View :- Free\n3. Gedu Business College :- Free',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 03',
        title: 'Thimphu – Punakha – Night Stay Paro',
        detail: 'After breakfast drive to Punakha / Wangdue, on the way stop at Dochu-La-Pass (3150 mts.) to view higher Himalayas. Arrival at Punakha, check in at hotel and later by afternoon visit Punakha Dzong - built in 1637 by Zhabdrung Ngawang Namgyal, for many years until the time of the second king, it served as the seat of the Government. The Dzong was named Druk Pungthang Dechen Phodrang (Palace of Great Happiness). Punakha is still the winter residence of Je-Khenpo and King Jigme Dorji Wangchuck convened the first National Assembly here in 1952, after that take a short excursion trip to visit Chhimi Lhakhang - "The Temple of Fertility" built by Lama Drukpa Kuenley, and return back to hotel, dinner and stay overnight at Paro.\n\nSightseeing Notes & Entry Fees:\n1. Punakha Dzong :- Rs. 500/-\n2. Dochula Pass :- Free\n3. Suspension Bridge :- Free\n4. River Rafting :- Rs. 1700/- (6pax – Rs. 10,000)\n5. Fertility Temple Entrance Fee :- Rs. 500/- (For those not doing river rafting)',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 04',
        title: 'Thimphu local Sightseeing',
        detail: 'Thimphu the capital of Bhutan is home of Royal family. After breakfast start for Thimphu sightseeing, a short fresh n up and for visit Kuensel Phodrang (Buddha Statue) a place for refreshing with a huge statue of Buddha, National Memorial Chorten (Monument) & Folk Heritage Museum, afternoon visit Sangaygang View Point, Changangkha Monastery, Tribal dance at Paro resort, dinner and stay overnight at Thimphu.\n\nSightseeing Notes & Entry Fees:\n1. Buddha Point :- Free\n2. Sangaygang View :- Free\n3. Tashi Chho Dzong View :- Free\n4. Zilukha Nunnery :- Free\n5. Memorial Chorten :- Fee Rs. 500/-\n6. National Museum Fee :- Rs. 300/-',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 05',
        title: 'Paro local sightseeing (Tiger Nest Hike)',
        detail: 'After breakfast visit Hiking the Tiger nest (those who will not be going to Tiger nest can do Chele la Pass – entry free), lunch after that local Paro shopping visit. Overnight stay at Paro.\n\nSightseeing Notes & Entry Fees:\n1. Ta Dzong :- Rs. 500/-\n2. National Museum :- Rs. 300/-\n3. Rinpung Dzong :- Rs. 300/-\n4. Tiger Nest :- Rs. 1000/-',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 06',
        title: 'Paro – Phuentsholing (180 kms / 7 hr)',
        detail: 'Early morning breakfast, transfer from Paro to Phuentsholing - A drive of nearly 160 km, check-in to hotel, lunch enroute stop at Santokhe village visit, and later in the evening proceed to Phuentsholing shopping and return back to the hotel, dinner, stay overnight at the hotel in Phuentsholing.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 07',
        title: 'Phuentsholing – IXB Airport (Bagdogra)',
        detail: 'After Breakfast, finish the immigration formalities, checkout from the Hotel and transfer to Bagdogra International Airport with the sweet memories of the tour.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ]
  },
  {
    id: 'nepal',
    title: 'Nepal Muktinath & Pashupatinath Tour Package',
    category: 'international',
    destination: 'Nepal (Kathmandu, Pokhara, Muktinath, Jomsom, Lumbini, Bhairahawa)',
    duration: '6N/7D',
    price: '₹45,999/-',
    numericPrice: 45999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    description: 'Sacred Himalayan Pilgrimage: Pashupatinath Temple, Jalnarayan Temple, Muktinath Dham Pilgrimage, Manakamana Cable Car, Lumbini (Birthplace of Gautam Buddha), Fewa Lake boat ride, and Gorakhnath Temple via Gorakhpur.',
    highlights: [
      'Pashupatinath Temple & Guheshwori Shakti Peeth Darshan',
      'Muktinath Dham Pilgrimage (200km from Pokhara by Scorpio Jeep)',
      'Manakamana Temple Visit by Scenic Cable Car / Ropeway',
      'Lumbini - Birthplace of Gautam Buddha',
      'Fewa Lake Boat Ride & Gupteshwor Mahadev Cave'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: true,
      sightseeing: true
    },
    placesBadge: '7 Days Complete Nepal Yatra',
    placesList: [
      { name: 'Kathmandu (Pashupatinath & Durbar Sq)' },
      { name: 'Pokhara (Fewa Lake & Bindavasini)' },
      { name: 'Muktinath & Jomsom (Himalayan Dham)' },
      { name: 'Lumbini (Gautam Buddha Birthplace)' }
    ],
    inclusions: [
      'Pick up from Gorakhpur by Tempo Traveler / bus or similar vehicle',
      'Nepal Transfers & sightseeing by 35 seated bus',
      'Pokhara Muktinath by Non AC Scorpio (5 pax each in Jeep)',
      'Permit for Muktinath',
      'Daily Breakfast & Dinner at Hotel',
      'Lunch on the way at outside restaurant',
      'Hotel stay on Dbl/Triple sharing basis as per program (Kathmandu: Hotel Le Himalaya 2N, Pokhara: Hotel Lakeside Retreat 2N, Jomsom: Hotel Sunrise 1N, Bhairahawa: Hotel Asian Buddha 1N)',
      'Entrance fee at Monuments',
      'Professional tourist Guide',
      'Ropeway ride at Manakamana',
      'Boat ride in Fewa Lake',
      'Daily 1ltr water bottle in Bus'
    ],
    exclusions: [
      'Laundry Service, Bottled drinks',
      'Tips for staff, guide & driver, Personal Travel Insurance',
      'Your personal Expenses, Extra activities',
      'Any other services which are not included in INCLUSIONS.'
    ],
    sampleItinerary: [
      {
        day: 'Day 01',
        title: 'Arrival & Transfer to Kathmandu',
        detail: 'Upon arrival at Airport, you will be met by our representative & before check in you will be briefed about your tour program, then transfer to hotel, check in to the hotel, dinner and overnight stay at the hotel in Kathmandu (Hotel Le Himalaya or similar).',
        meals: 'Dinner'
      },
      {
        day: 'Day 02',
        title: 'Kathmandu City Tour',
        detail: 'After breakfast proceeds for the Kathmandu city tour which covers Pashupatinath Temple, Jalnaryan Temple, Guheshwori, Kathmandu Durbar Square & Swoyambhunath Stupa, then return back to the hotel, dinner and stay overnight at the hotel in Kathmandu.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 03',
        title: 'Kathmandu – Manakamana – Pokhara',
        detail: 'After breakfast, proceed to visit the most famous Manakamana Temple Visit by rope way, and then proceed to Pokhara, check in to the hotel, dinner and stay overnight at the hotel in Pokhara (Hotel Lakeside Retreat or similar).',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 04',
        title: 'Pokhara – Mukthinath – Jomsom',
        detail: 'Today early morning at 6am, take packed breakfast & transfer to Muktinath (200Km from Pokhara which takes 8 hrs to reach by 4x4 Scorpio Jeep), take darshan & return to Jomsom, check in to the hotel, dinner and stay overnight at the hotel in Jomsom (Hotel Sunrise or similar).',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 05',
        title: 'Jomsom – Pokhara Sightseeing',
        detail: 'After breakfast, proceed to visit most famous Bindavasini temple, Gupteshwor mahadev & Fewa Lake (with boat ride), and then return back to the hotel, dinner and stay overnight at the hotel in Pokhara.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 06',
        title: 'Pokhara – Lumbini – Bhairahawa',
        detail: 'After Breakfast, check out from the hotel, and visit Lumbini (birthplace of Gautam Buddha), and then proceed to Bhairahawa, check in to the hotel, relax, have dinner and stay overnight at the hotel in Bhairahawa (Hotel Asian Buddha or similar).',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 07',
        title: 'Bhairahawa – Gorakhpur Departure',
        detail: 'After breakfast, proceed to visit Bhairahawa, via Gorakhnath Temple, later Sunauli border, clear border formalities, then transfer to Gorakhpur airport for your return journey with the blessings of Muktinath and sweet memories of the trip.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'Hotel Accommodations: Kathmandu (Hotel Le Himalaya 2N), Pokhara (Hotel Lakeside Retreat 2N), Jomsom (Hotel Sunrise 1N), Bhairahawa (Hotel Asian Buddha 1N).',
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in India is generally 1:30 PM and Check-out time is 10:00 AM.'
    ]
  },
  {
    id: 'sri-lanka',
    title: 'Sri Lanka',
    category: 'international',
    destination: 'Sri Lanka',
    duration: 'TBA',
    price: 'Coming Soon',
    numericPrice: 0,
    minPax: 2,
    comingSoon: true,
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop',
    description: 'Ramayana Trail & Island Beauty: Ancient temples of Kandy, Sigiriya Rock Fortress, Ravana Falls, and golden beaches of Bentota.',
    highlights: ['Ramayana Heritage Trail Sites', 'Temple of Sacred Tooth Relic Kandy', 'Sigiriya Rock Fortress', 'Bentota Beach Resort'],
    inclusions: ['Curated Package Launching Soon'],
    exclusions: ['To be updated upon launch'],
    sampleItinerary: []
  },
  {
    id: 'bali',
    title: 'Bali',
    category: 'international',
    destination: 'Indonesia',
    duration: 'TBA',
    price: 'Coming Soon',
    numericPrice: 0,
    minPax: 2,
    comingSoon: true,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    description: 'Island of the Gods: Sacred Tanah Lot temple, Besakih Mother Temple, Ubud rice terraces, and cultural Balinese dance performances.',
    highlights: ['Tanah Lot Sea Temple Sunset', 'Besakih Mother Temple Tour', 'Ubud Art & Cultural Heart', 'Nusa Penida Island Excursion'],
    inclusions: ['Curated Package Launching Soon'],
    exclusions: ['To be updated upon launch'],
    sampleItinerary: []
  },
  {
    id: 'malaysia',
    title: 'Malaysia Truly Asia Tour Package (Kuala Lumpur & Genting Highlands)',
    category: 'international',
    destination: 'Malaysia (Kuala Lumpur, Putrajaya & Genting Highlands)',
    duration: '3N/4D',
    price: '₹45,999/-',
    numericPrice: 45999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6ff816766?q=80&w=1200&auto=format&fit=crop',
    description: 'Truly Asia Gateway: Stay at Verdant Hill / Similar Hotel, enroute Putrajaya City Tour & Pink Mosque, Aquaria KLCC Park, KL Tower & Petronas Twin Towers observation deck, Batu Caves Lord Murugan Shrine, and Genting Highlands Skyway Cable Car ride.',
    highlights: [
      'Petronas Twin Towers Observation Deck (Entrance Ticket Included)',
      'KL Tower Observatory (Entrance Ticket Included)',
      'Batu Caves Lord Murugan Statue & Limestone Caves',
      'Genting Highlands Scenic Skyway Cable Car Ride',
      'Putrajaya Administrative Capital, Pink Mosque & Aquaria KLCC'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: false,
      sightseeing: true
    },
    placesBadge: '4 Days Malaysia Truly Asia Highlights',
    placesList: [
      { name: 'Putrajaya (Administrative Capital & Pink Mosque)' },
      { name: 'Kuala Lumpur (Petronas Twin Towers, KL Tower & Aquaria KLCC)' },
      { name: 'Batu Caves (Golden Lord Murugan Statue & Limestone Shrines)' },
      { name: 'Genting Highlands (Skyway Cable Car Ride & Mountain Resort)' }
    ],
    inclusions: [
      '03 Nights Stay at Verdant Hill / Similar Hotel in Kuala Lumpur',
      'Daily Breakfast & Indian Dinners at authentic Indian restaurants',
      'All Sightseeing & Transfers by A/C vehicle as per itinerary',
      'All entrance tickets mentioned included (Petronas Twin Towers ticket, KL Tower ticket & Genting Cable Car ticket)',
      'Visa Free on Arrival (as per current Malaysian government regulations)',
      'Travel Insurance free for guests up to the age of 59 years'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      '5% GST extra on package cost',
      '5% TCS on GST-inclusive package amount',
      'Airfare (International roundtrip flight tickets)',
      'Personal Expenses: Laundry, telephone calls, room service, and items of personal nature. Tips for guides, drivers, and hotel staff',
      'Optional Tours & Activities: Indoor & Outdoor Theme Park Tickets in Genting Highlands, or any activity not mentioned in inclusions',
      'Tourist Tax: KL Tourism tax (approx MYR 10 per room per night) to be paid directly at hotel by guest',
      'Extra expenses incurred due to unforeseen circumstances like flight delays, natural calamities, or weather changes'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Kuala Lumpur – Putrajaya City Tour & Aquaria KLCC',
        detail: 'Arrive at Kuala Lumpur International Airport (KLIA). Meet our representative and proceed for enroute Putrajaya City Tour—explore Malaysia\'s modern administrative capital, Putrajaya Lake, and the famous Pink Mosque (Masjid Putra). Enjoy Indian breakfast en route. Check-in at Verdant Hill / Similar Hotel and rest. In the evening, visit Aquaria KLCC Park beneath the Twin Towers. Delicious Indian dinner at restaurant and overnight stay in Kuala Lumpur.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Kuala Lumpur City Tour + KL Tower + Petronas Twin Towers',
        detail: 'After breakfast at hotel, proceed for full-day Kuala Lumpur City Tour—visit King\'s Palace (Istana Negara), National Monument, Independence Square (Dataran Merdeka), and National Mosque. Visit KL Tower with included entrance tickets to enjoy 360-degree city views. Visit iconic Petronas Twin Towers with included skybridge & observation deck entrance tickets. Indian dinner at restaurant and overnight stay in Kuala Lumpur.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Batu Caves Excursion + Genting Highlands Skyway Cable Car',
        detail: 'After breakfast at hotel, proceed to visit Batu Caves Temple—marvel at the iconic 140-foot golden Lord Murugan statue and climb the 272 colorful steps to the limestone cave shrines. Continue drive up to Genting Highlands and enjoy the scenic Genting Skyway Cable Car ride over ancient rainforests. Free time to explore Genting Casino & Awana SkyCentral (theme park tickets optional at own cost). Return to KL for Indian dinner and overnight stay.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Hotel Checkout & Departure from Kuala Lumpur',
        detail: 'After breakfast at hotel, check out from hotel. Transfer to Kuala Lumpur International Airport (KLIA) for your onward return flight carrying wonderful memories of Malaysia.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, mechanical problems, strikes, bandhs, or weather changes.',
        'Flight timings are subject to availability at the time of booking.',
        'Seats in the flights will be auto assigned by respective airlines.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in Malaysia is generally 3:00 PM and Check-out time is 12:00 PM.'
    ],
    detailedContent: {
      overview: 'Discover the vibrant capital of Malaysia with our 4-day Malaysia Truly Asia Tour Package. Experience modern skyscrapers, rich cultural heritage, and misty hill stations. Stay at Verdant Hill / Similar Hotel, visit Putrajaya Pink Mosque, KL Tower, Petronas Twin Towers, Batu Caves Lord Murugan Temple, and ride the Genting Skyway Cable Car.',
      significance: 'Malaysia offers a rich tapestry of Malay, Chinese, Indian, and indigenous cultures, famous for iconic modern architecture like Petronas Twin Towers alongside ancient spiritual shrines like Batu Caves.',
      bestTimeToVisit: 'November to August provides dry weather and ideal conditions for sightseeing across Kuala Lumpur and Genting Highlands.',
      placesCovered: [
        'Petronas Twin Towers Observation Deck & Skybridge',
        'KL Tower Observatory Deck',
        'Aquaria KLCC Oceanarium',
        'Putrajaya Administrative Capital & Pink Mosque',
        'King\'s Palace, National Monument & Independence Square',
        'Batu Caves Lord Murugan Shrine',
        'Genting Highlands Skyway Cable Car'
      ],
      travelTips: [
        'Modest dress code (covered shoulders and knees) is required while climbing Batu Caves steps.',
        'KL Tourism tax (MYR 10 per room per night) is payable directly at hotel check-in.',
        'Carry light cotton clothing for KL city and a light jacket/sweater for cool Genting Highlands.'
      ],
      whyChooseUs: [
        'Hygienic stay at Verdant Hill / Similar premium hotel in KL central location',
        'Included entrance tickets for Petronas Twin Towers, KL Tower, and Genting Cable Car',
        'Authentic Indian dinners included daily'
      ]
    },
    faqs: [
      {
        question: "Are Petronas Twin Towers and KL Tower tickets included?",
        answer: "Yes! Entrance tickets for both Petronas Twin Towers observation deck and KL Tower observatory are included."
      },
      {
        question: "Is visa required for Indian passport holders traveling to Malaysia?",
        answer: "Currently, Indian passport holders enjoy Visa-Free entry to Malaysia for stays up to 30 days (subject to government regulations)."
      }
    ]
  },
  {
    id: 'maldives',
    title: 'Maldives Island Paradise Package (Kaani Village & Spa, Maafushi)',
    category: 'international',
    destination: 'Maldives (South Malé Atoll, Maafushi Island)',
    duration: '4N/5D',
    price: '₹85,999/-',
    numericPrice: 85999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    description: 'Tropical Paradise Gateway: 4 nights stay at Kaani Village & Spa in Deluxe Double Room with Pool View, Half-Board Dining (Breakfast + Lunch/Dinner), Shared Speedboat transfers across South Malé Atoll, free 30-day Visa on Arrival, IMUGA declaration assistance, and 24x7 WhatsApp support.',
    highlights: [
      'Four Nights Stay at Kaani Village & Spa (Deluxe Double Room with Pool View)',
      'Half-Board Meal Plan Included (Daily Breakfast + Lunch or Dinner at Resort)',
      'Shared Speedboat Transfers (Velana International Airport ⇆ Maafushi)',
      'Maafushi\'s Bikini Beach, House Reef & Poolside Relaxation',
      'Free 30-Day Maldives Visa on Arrival & IMUGA Traveller Declaration Assistance'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: false,
      flights: false,
      sightseeing: true
    },
    placesBadge: '5 Days Maldives Island Gateway',
    placesList: [
      { name: 'Velana International Airport (Malé)' },
      { name: 'South Malé Atoll (Scenic Speedboat Cruise)' },
      { name: 'Maafushi Island (Kaani Village & Spa)' },
      { name: 'Maafushi Bikini Beach & House Reef' }
    ],
    inclusions: [
      '4 nights accommodation at Kaani Village & Spa, Maafushi in Deluxe Double Room with Pool View for 2 adults',
      'Half-board meal plan (MAP) – daily breakfast plus one main meal (lunch or dinner) at the resort',
      'Return shared (SIC) speedboat transfers (Velana International Airport ⇆ Maafushi)',
      'Meet-and-assist by the resort representative at airport arrivals hall',
      'Applicable Maldivian TGST and Green Tax on hotel and transfer services listed',
      'Maldives visa on arrival – free of charge for 30 days with no advance filing',
      'IMUGA Traveller Declaration filed with assistance before flight',
      '24×7 on-tour WhatsApp support from Sai Samarth Tours team'
    ],
    exclusions: [
      'Return airfare Bengaluru ⇆ Malé – quoted live and ticketed at confirmation',
      'GST 5% and TCS as per Government of India norms',
      'The third meal of the day, and all beverages including bottled water taken with meals',
      'All excursions and water sports – sandbank & turtle snorkeling trips, island hopping, dolphin cruise, jet ski, parasailing, fishing – bookable at resort tour desk',
      'Spa treatments and anything at floating bars offshore',
      'Travel insurance – available on request and strongly recommended',
      'Early check-in before 2:00 PM and late check-out beyond 12:00 noon',
      'A night in Malé if flight arrives after 15:00 hrs or departs before 09:00 hrs',
      'Tips to boat crew and resort staff; laundry, telephone and personal expenses',
      'Anything not specifically mentioned under Package Inclusions'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in the Maldives — Speedboat to Maafushi',
        detail: 'Arrive at Velana International Airport, Malé; free 30-day visa on arrival stamped in passport. Meet Kaani representative at arrivals hall and board shared (SIC) speedboat transfer across South Malé Atoll (30-45 mins). Check in at Kaani Village & Spa in Deluxe Double Room with Pool View (available from 2:00 PM). Rest of day free to enjoy pool, beach loungers, and first walk to Maafushi\'s bikini beach. Dinner at resort under half-board plan. Overnight on Maafushi.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Sandbank, Turtles & Coral Garden Excursion',
        detail: 'Breakfast at resort. Morning leisure by pool. Suggested optional outing—half-day sandbank, turtle point, and coral garden snorkeling trip (bookable at resort desk). Snorkeling gear issued at jetty; shallow reef stops ideal for first-timers. Return by afternoon for lunch or dinner under half-board plan. Evening free to enjoy soft warm sunset light over turquoise waters. Overnight on Maafushi.',
        meals: 'Breakfast + one main meal (Lunch or Dinner)'
      },
      {
        day: 'Day 3',
        title: 'A Full Day of Maldivian Blue & Sunset Dolphin Cruise',
        detail: 'Breakfast at resort. Day free for optional activities: island hopping to local/resort islands, water sports session (jet ski, parasailing, banana boat), or relaxing by pool & spa. In late afternoon, optional sunset dolphin cruise to witness wild dolphins riding bow waves. One main meal at resort under half-board plan. Overnight on Maafushi.',
        meals: 'Breakfast + one main meal (Lunch or Dinner)'
      },
      {
        day: 'Day 4',
        title: 'At Leisure on Maafushi Island',
        detail: 'Breakfast at your own pace. Scheduled free day to relax by pool, loungers, house reef, or resort spa treatment. Optional dusk fishing trip with local crew or short island walk through Maafushi village & craft shops. One main meal at resort. Last unhurried evening by the water. Overnight on Maafushi.',
        meals: 'Breakfast + one main meal (Lunch or Dinner)'
      },
      {
        day: 'Day 5',
        title: 'Maafushi to Malé — Airport Departure',
        detail: 'Breakfast at resort; final morning swim in calm lagoon waters. Check out by 12:00 noon (luggage storage available at reception). Board shared speedboat back to Velana International Airport, Malé, timed for return flight to Bengaluru carrying unforgettable island memories.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, speedboat transfers due to sea conditions, or weather changes.',
        'Speedboat departure timings are fixed according to resort schedule and boats do not wait beyond designated departure time.',
        'Rooms and speedboat seats will be allocated upon arrival.'
      ]
    },
    remarks: [
      'All meals under Half-Board Plan are served at the resort main restaurant.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time at Kaani Village & Spa is 2:00 PM and Check-out time is 12:00 PM.'
    ],
    detailedContent: {
      overview: 'Escape to the pristine tropical islands of the Maldives with our 5-day Maafushi Island Package. Stay 4 nights at Kaani Village & Spa in a Deluxe Double Room with Pool View, enjoy Half-Board dining, speed boat transfers across South Malé Atoll, free 30-day Visa on Arrival, and optional sandbank, turtle snorkeling & dolphin cruises.',
      significance: 'The Maldives is world-renowned for crystal-clear turquoise lagoons, vibrant coral reefs, pristine white sandbanks, and serene island living.',
      bestTimeToVisit: 'November to April offers dry sunny weather, calm seas, and crystal-clear underwater visibility.',
      placesCovered: [
        'Velana International Airport Malé',
        'South Malé Atoll Speedboat Route',
        'Kaani Village & Spa Resort (Maafushi)',
        'Maafushi Bikini Beach & Lagoon',
        'Sandbank, Turtle Point & Coral Gardens'
      ],
      travelTips: [
        'Free 30-day Visa on Arrival is stamped at Malé Airport—no advance visa filing required.',
        'IMUGA Traveller Declaration must be submitted online within 96 hours before arrival flight.',
        'Speedboat transfers operate during daylight hours; ensure flight lands in Malé before 15:00 hrs.'
      ],
      whyChooseUs: [
        '4 nights stay at Kaani Village & Spa in Deluxe Double Room with Pool View',
        'Half-Board Meal Plan (Breakfast + Lunch or Dinner) included daily',
        'Pre-arranged round-trip shared speedboat transfers & 24x7 WhatsApp support'
      ]
    },
    faqs: [
      {
        question: "Is visa required prior to traveling to Maldives for Indian citizens?",
        answer: "No, a free 30-day Visa on Arrival is stamped in your passport at Malé Airport upon presentation of valid return tickets and hotel voucher."
      },
      {
        question: "What meal plan is included in this package?",
        answer: "This package includes Half-Board (MAP) meal plan, featuring daily breakfast plus one main meal (lunch or dinner) at the resort."
      }
    ]
  },
  {
    id: 'europe',
    title: 'Europe',
    category: 'international',
    destination: 'Europe',
    duration: 'TBA',
    price: 'Coming Soon',
    numericPrice: 0,
    minPax: 2,
    comingSoon: true,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop',
    description: 'European Dream: Paris Eiffel Tower, Swiss Alps, romantic Venice, and historic Rome.',
    highlights: ['Paris City Tour & Seine Cruise', 'Mt. Titlis & Lucerne', 'Venice Gondola Ride', 'Rome Colosseum'],
    inclusions: ['Curated Package Launching Soon'],
    exclusions: ['To be updated upon launch'],
    sampleItinerary: []
  },
  {
    id: 'dubai',
    title: 'Dubai',
    category: 'international',
    destination: 'UAE',
    duration: 'TBA',
    price: 'Coming Soon',
    numericPrice: 0,
    minPax: 2,
    comingSoon: true,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    description: 'City of Superlatives: Burj Khalifa, desert safaris, luxury shopping, and modern marvels in the UAE.',
    highlights: ['Burj Khalifa Observation Deck', 'Desert Safari with BBQ Dinner', 'Dubai Mall & Aquarium', 'Dhow Cruise Marina'],
    inclusions: ['Curated Package Launching Soon'],
    exclusions: ['To be updated upon launch'],
    sampleItinerary: []
  },
  {
    id: 'singapore',
    title: 'Singapore & Malaysia Twin Country Tour Package',
    category: 'international',
    destination: 'Singapore & Malaysia (Singapore, Sentosa, Kuala Lumpur, Genting Highlands, Putrajaya)',
    duration: '6N/7D',
    price: '₹79,999/-',
    numericPrice: 79999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop',
    description: 'Ultimate South East Asia Twin Country Experience: 3 nights at Hotel Boss / Similar in Singapore & 3 nights at Verdant Hill / Similar in Kuala Lumpur, Temple of Tooth Relic, Night Safari with Indian dinner at Ulu Ulu Safari Restaurant, City Tour (Merlion Park, Marina Bay Sands, Gardens by the Bay domes & Light Show), full day Universal Studios, Sentosa Island (SEA Aquarium, Cable Car & Wings of Time), luxury coach transfer to KL, Batu Caves, Genting Highlands Cable Car, and Putrajaya Pink Mosque.',
    highlights: [
      'Night Safari Experience with Dinner at Ulu Ulu Safari Restaurant (Singapore)',
      'Universal Studios Full-Day Theme Park Tour (Entry Ticket Included)',
      'Sentosa Island (Cable Car Ride, SEA Aquarium & Wings of Time Show)',
      'Gardens by the Bay 2 Domes Visit & Evening Light Show',
      'Petronas Twin Towers, KL Tower, Batu Caves & Genting Cable Car (Malaysia)'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: false,
      sightseeing: true
    },
    placesBadge: '7 Days Singapore & Malaysia Grand Duo Tour',
    placesList: [
      { name: 'Singapore (Merlion Park, Night Safari, Sentosa & Universal Studios)' },
      { name: 'Gardens by the Bay (Flower Dome & Cloud Forest)' },
      { name: 'Kuala Lumpur (Petronas Twin Towers & KL Tower)' },
      { name: 'Batu Caves & Genting Highlands (Two-way Cable Car)' },
      { name: 'Putrajaya (Pink Mosque & Administrative Capital)' }
    ],
    inclusions: [
      '3 Nights Accommodation at Hotel Boss / Similar in Singapore',
      '3 Nights Accommodation at Verdant Hill Hotel / Similar in Kuala Lumpur',
      'Daily Indian Breakfast at hotels and Indian Lunches/Dinners at local authentic restaurants',
      'Special Indian Dinner at Ulu Ulu Safari Restaurant (Night Safari, Singapore)',
      'Night Safari entrance tickets with tram ride',
      'Full-day visit to Universal Studios Singapore with entry tickets',
      'Sentosa Island visit including Cable Car Ride, SEA Aquarium, Madame Tussauds & Wings of Time show',
      'Singapore City Tour (Merlion Park, Marina Bay Sands, Gardens by the Bay Domes, drive past Singapore Flyer)',
      'Inter-country transfer from Singapore to Kuala Lumpur (Shared luxury coach / flight)',
      'Kuala Lumpur City Tour covering KL Tower, Petronas Twin Towers, King\'s Palace, National Mosque & Independence Square',
      'Batu Caves visit & Genting Highlands including two-way Cable Car Ride',
      'Putrajaya City Tour on departure day',
      'All transfers and sightseeing by private A/C vehicle',
      'English-speaking local guide for all tours and Sai Samarth Tour Manager assistance'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      '5% GST extra on package cost',
      '5% TCS on GST-inclusive package amount',
      'Airfare: International flight tickets to/from Singapore and Kuala Lumpur (unless specified)',
      'Visa Fees: Singapore Visa and Malaysia Visa fees',
      'Personal Expenses: Laundry, telephone calls, room service, tips for guides, drivers & hotel staff',
      'Optional Tours & Activities: Any optional tours/activities not mentioned in inclusions',
      'Travel Insurance: Guests advised to purchase medical/trip cancellation insurance',
      'Tourist Tax: KL Tourism tax (MYR 10/room/night) to be paid directly at hotel'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Singapore – Temple of Tooth Relic & Night Safari with Ulu Ulu Dinner',
        detail: 'Morning arrival at Singapore Changi Airport. Enjoy an Indian breakfast. Visit iconic Temple of Tooth Relic Singapore. Check in to Hotel Boss / Similar and enjoy Indian lunch. Evening experience the world\'s first Night Safari with tram ride through nocturnal wildlife habitats, followed by Indian dinner at Ulu Ulu Safari Restaurant. Overnight stay in Singapore.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 2',
        title: 'Singapore City Tour & Sentosa Island Excursion',
        detail: 'Morning explore Singapore landmarks: Merlion Park, Marina Bay Sands, drive past Singapore Flyer & Civic District. Enjoy Indian lunch at local restaurant. Afternoon head to Sentosa Island via scenic Cable Car. Visit S.E.A. Aquarium, Madame Tussauds, and witness the captivating Wings of Time multi-sensory laser & fountain show. Indian dinner and overnight stay in Singapore.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Full Day Universal Studios & Gardens by the Bay',
        detail: 'Spend the day at world-famous Universal Studios Singapore with thrilling movie-themed rides (Hollywood, Sci-Fi City, Ancient Egypt, Far Far Away). Indian lunch included. Evening visit Gardens by the Bay—explore Flower Dome & Cloud Forest greenhouses and enjoy the evening Garden Rhapsody Light Show. Indian dinner and overnight stay in Singapore.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Singapore to Kuala Lumpur Transfer by Shared Luxury Coach',
        detail: 'After breakfast, checkout from hotel in Singapore. Board luxury shared coach transfer to Kuala Lumpur (approx 5-6 hrs). Complete border immigration formalities at Tuas / Woodlands checkpoint. Evening arrival in Kuala Lumpur, check in to Verdant Hill Hotel / Similar. Overnight stay in Kuala Lumpur.',
        meals: 'Breakfast'
      },
      {
        day: 'Day 5',
        title: 'Kuala Lumpur City Tour – Petronas Twin Towers & KL Tower',
        detail: 'Morning half-day Kuala Lumpur City Tour: King\'s Palace (Istana Negara), National Monument, Independence Square (Dataran Merdeka), and National Mosque. Indian lunch at local restaurant. Visit iconic Petronas Twin Towers and KL Tower observatory. Evening relax and enjoy Indian dinner. Overnight stay in Kuala Lumpur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 6',
        title: 'Batu Caves & Genting Highlands Two-Way Cable Car Excursion',
        detail: 'Morning stop at Batu Caves (2-hour visit to 140ft golden Lord Murugan statue & limestone cave temples). Continue to Genting Highlands and enjoy the two-way Awana Skyway Cable Car ride over mountain rainforests. Indian lunch during tour. Return to Kuala Lumpur in the evening followed by Indian dinner. Overnight stay in Kuala Lumpur.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 7',
        title: 'Putrajaya City Tour – Departure to Airport',
        detail: 'Morning check out from hotel in Kuala Lumpur. Enjoy Indian lunch. Afternoon explore Putrajaya administrative capital and Pink Mosque on a city tour. Evening transfer to Kuala Lumpur International Airport (KLIA) for return flight (in-flight dinner). Return home carrying magnificent memories of Singapore & Malaysia.',
        meals: 'Breakfast, Lunch'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, coach transfers, or weather changes.',
        'Flight/coach timings are subject to availability at the time of booking.',
        'Seats in flights/coaches will be auto assigned by respective operators.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in Singapore & Malaysia is 3:00 PM and Check-out time is 12:00 PM.'
    ],
    detailedContent: {
      overview: 'Experience the ultimate South East Asia twin-country holiday with our 7-day Singapore & Malaysia Grand Duo Tour. Enjoy 3 nights in Singapore at Hotel Boss and 3 nights in Kuala Lumpur at Verdant Hill Hotel. Includes Night Safari, Universal Studios, Sentosa Cable Car, Gardens by the Bay Domes, Petronas Twin Towers, KL Tower, Batu Caves, Genting Cable Car, and Putrajaya.',
      significance: 'Singapore and Malaysia combine futuristic urban architecture, world-class theme parks, pristine island resorts, and rich multicultural heritage in a single seamless itinerary.',
      bestTimeToVisit: 'November to August offers pleasant weather and vibrant city illuminations across Singapore and Kuala Lumpur.',
      placesCovered: [
        'Night Safari & Ulu Ulu Restaurant (Singapore)',
        'Sentosa Island, SEA Aquarium & Wings of Time',
        'Universal Studios Singapore Full Day',
        'Gardens by the Bay Domes & Light Show',
        'Petronas Twin Towers & KL Tower (Kuala Lumpur)',
        'Batu Caves Lord Murugan Shrine',
        'Genting Highlands Skyway Cable Car',
        'Putrajaya Pink Mosque'
      ],
      travelTips: [
        'Ensure valid visas for both Singapore and Malaysia prior to departure (if applicable).',
        'Wear comfortable walking shoes for Universal Studios theme park day.',
        'Carry light jackets for Genting Highlands and AC coach transfers.'
      ],
      whyChooseUs: [
        '3 nights stay at Hotel Boss Singapore + 3 nights at Verdant Hill Hotel KL',
        'All major entrance tickets included (Night Safari, Universal Studios, Sentosa, Cable Cars, Gardens by the Bay, Twin Towers & KL Tower)',
        'Indian breakfasts, lunches, and dinners included daily throughout the trip'
      ]
    },
    faqs: [
      {
        question: "Are entrance tickets for Universal Studios and Night Safari included?",
        answer: "Yes! Full-day entry tickets for Universal Studios Singapore and Night Safari tickets with tram ride and Ulu Ulu dinner are fully included."
      },
      {
        question: "How is transfer between Singapore and Kuala Lumpur arranged?",
        answer: "Inter-country transfer between Singapore and Kuala Lumpur is arranged via luxury shared coach / flight with border immigration assistance."
      }
    ]
  },
  {
    id: 'thailand',
    title: 'Thailand Delights Tour Package (Bangkok & Pattaya)',
    category: 'international',
    destination: 'Thailand (Bangkok & Pattaya)',
    duration: '4N/5D',
    price: '₹42,999/-',
    numericPrice: 42999,
    minPax: 2,
    featured: true,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop',
    description: 'Land of Smiles Gateway: 2 nights in Pattaya beach resort & 2 nights in Bangkok city hotel, Coral Island speed boat excursion with Indian lunch, Alcazar Cabaret Show, Golden Buddha (Wat Traimit) & Marble Temple (Wat Benchamabophit), Chao Phraya River Cruise & Gems Gallery.',
    highlights: [
      'Speedboat Tour to Coral Island (Koh Larn) with Indian Buffet Lunch',
      'World-Famous Alcazar Cabaret Show in Pattaya',
      'Bangkok Temple Tour (Golden Buddha Wat Traimit & Marble Temple Wat Benchamabophit)',
      'Gems Gallery International & World\'s Largest Jewellery Store',
      'Chao Phraya Princess River Cruise Dinner & Shopping at Pratunam Markets'
    ],
    tourIncludes: {
      hotels: true,
      transport: true,
      allMeals: true,
      flights: false,
      sightseeing: true
    },
    placesBadge: '5 Days Thailand Beach & Temple Fiesta',
    placesList: [
      { name: 'Pattaya (Coral Island Speedboat, Alcazar Show & Walking Street)' },
      { name: 'Bangkok (Golden Buddha, Marble Temple & Chao Phraya Cruise)' },
      { name: 'Pratunam & MBK Shopping District' }
    ],
    inclusions: [
      '02 Nights accommodation at 3-star Deluxe Resort in Pattaya',
      '02 Nights accommodation at 3-star Deluxe City Hotel in Bangkok',
      'Daily Breakfast at hotels and Indian Lunches / Dinners at authentic Indian restaurants',
      'Speedboat transfer to Coral Island with Indian Buffet Lunch',
      'Alcazar Cabaret Show normal seat tickets in Pattaya',
      'Bangkok City & Temple Tour (Wat Traimit Golden Buddha & Wat Benchamabophit Marble Temple)',
      'Gems Gallery visit with free souvenir & tram tour',
      'All transfers & sightseeing by private A/C vehicle',
      'English-speaking local guide assistance & Sai Samarth Tour Manager support'
    ],
    exclusions: [
      'Seat selection and meals are not included in the flight journey',
      '5% GST extra on package cost',
      '5% TCS on GST-inclusive package amount',
      'International Airfare (Bengaluru / India ⇆ Bangkok roundtrip flight tickets)',
      'Thailand Visa Fee (Visa on Arrival / E-visa fee if applicable)',
      'Water sports activities on Coral Island (parasailing, sea walk, banana boat, jet ski)',
      'Personal expenses (laundry, telephone, minibar, tips for guide/driver)',
      'Anything not explicitly mentioned under Inclusions column'
    ],
    sampleItinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Bangkok – Transfer to Pattaya & Evening Alcazar Show',
        detail: 'Arrive at Suvarnabhumi / Don Mueang International Airport in Bangkok. Meet & assist by representative and transfer to coastal resort city of Pattaya (approx 2 hrs). Check into hotel and fresh up. Evening proceed to watch the spectacular Alcazar Cabaret Show (glitz, glamour, dance & music performance). Indian dinner at restaurant and overnight stay in Pattaya.',
        meals: 'Dinner'
      },
      {
        day: 'Day 2',
        title: 'Coral Island (Koh Larn) Speedboat Excursion with Indian Lunch',
        detail: 'After breakfast at hotel, board speed boat to Coral Island (Koh Larn). Enjoy clear turquoise waters, white sand beaches, and optional water sports (parasailing, sea walk, jet ski, banana boat ride). Enjoy delicious Indian buffet lunch on the island. Afternoon return to hotel. Evening free to explore Pattaya Beach Road and Walking Street. Indian dinner and overnight stay in Pattaya.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 3',
        title: 'Pattaya to Bangkok Transfer – Gems Gallery & City Temple Tour',
        detail: 'After breakfast, checkout from Pattaya hotel and proceed to Bangkok. Enroute visit World\'s Largest Jewellery Store & Museum at Gems Gallery. On arrival in Bangkok, proceed for City Temple Tour: Golden Buddha Temple (Wat Traimit housing 5.5-ton solid gold statue) and Marble Temple (Wat Benchamabophit). Check into Bangkok hotel. Evening optional Chao Phraya River Cruise with dinner. Overnight stay in Bangkok.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 4',
        title: 'Bangkok Shopping Extravaganza (Pratunam & MBK Center)',
        detail: 'After breakfast at hotel, full day kept for shopping in Bangkok\'s famous shopping districts: Pratunam Wholesale Market, Platinum Fashion Mall, MBK Center, and CentralWorld. Enjoy Indian lunch during shopping tour. Evening free for leisure or street food tasting. Indian dinner and overnight stay in Bangkok.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 'Day 5',
        title: 'Hotel Checkout & Departure from Bangkok',
        detail: 'After breakfast at hotel, check out from hotel. Transfer to Bangkok International Airport (BKK/DMK) for return flight journey to India carrying wonderful memories of Thailand.',
        meals: 'Breakfast'
      }
    ],
    cancellationPolicy: {
      table: [
        { days: 'Days 0-15', fee: '100%' },
        { days: '15 Days & Above', fee: '50%' }
      ],
      notes: [
        'Sai Samarth Tours will not refund any claims for delay or cancellation of flight, speedboat transfers due to sea conditions, or weather changes.',
        'Flight/speedboat timings are subject to availability at the time of booking.',
        'Seats in flights and transfer vehicles will be auto assigned.'
      ]
    },
    remarks: [
      'All meals are provided by Sai Samarth Tours in case the flight reaches destination early morning or leaves late in the evening.',
      'The tour price mentioned for this tour is for Indian nationals only. Rates vary for NRIs or foreign nationals.',
      'NRIs & Foreign nationals must convey proper identity and submit passport copies to booking executive.',
      'Standard Check-in time of hotels in Thailand is 2:00 PM and Check-out time is 12:00 PM.'
    ],
    detailedContent: {
      overview: 'Experience the magic of Thailand with our 5-day Thailand Delights Tour Package. Stay 2 nights in Pattaya and 2 nights in Bangkok, cruise to Coral Island on a speed boat, watch the world-famous Alcazar Cabaret Show, visit historic Buddhist temples, explore Gems Gallery, and shop in Pratunam market.',
      significance: 'Thailand is celebrated as the "Land of Smiles", famous for sacred golden Buddha shrines, pristine tropical islands, world-class nightlife, and vibrant shopping bazaars.',
      bestTimeToVisit: 'November to April offers dry cool weather and ideal beach conditions in Pattaya and Coral Island.',
      placesCovered: [
        'Coral Island (Koh Larn) White Sand Beach',
        'Alcazar Cabaret Show (Pattaya)',
        'Golden Buddha Temple (Wat Traimit)',
        'Marble Temple (Wat Benchamabophit)',
        'Gems Gallery International Store',
        'Pratunam Wholesale Market & MBK Center'
      ],
      travelTips: [
        'Modest dress code (covered shoulders and knees) is strictly enforced in Bangkok Buddhist temples.',
        'Water sports on Coral Island are optional at customer\'s own cost.',
        'Keep passports and departure cards safe for airport immigration.'
      ],
      whyChooseUs: [
        '2 nights deluxe resort stay in Pattaya + 2 nights city hotel in Bangkok',
        'Speedboat transfer & Indian buffet lunch at Coral Island included',
        'Authentic Indian breakfasts, lunches, and dinners included daily'
      ]
    },
    faqs: [
      {
        question: "Is visa required for Indian citizens traveling to Thailand?",
        answer: "Thailand currently offers Visa Exemption / Visa on Arrival for Indian passport holders (subject to government regulations)."
      },
      {
        question: "Is Coral Island speedboat tour included?",
        answer: "Yes, speedboat transfers to Coral Island and Indian buffet lunch on the island are fully included."
      }
    ]
  },

];

export const PILGRIMAGE_PACKAGES = ALL_PACKAGES.filter(p => p.category === 'pilgrimage');
export const DOMESTIC_PACKAGES = ALL_PACKAGES.filter(p => p.category === 'domestic');
export const INTERNATIONAL_PACKAGES = ALL_PACKAGES.filter(p => p.category === 'international');
