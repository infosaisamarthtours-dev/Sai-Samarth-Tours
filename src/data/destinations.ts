export interface DestinationData {
  id: string;
  name: string;
  category: 'pilgrimage' | 'domestic' | 'international';
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  tagline: string;
  packageIds: string[];
  highlights: string[];
  overview: string;
  quickFacts: {
    bestTime: string;
    flightDuration: string;
    idealDays: string;
    meals: string;
    airport: string;
    tourManager: string;
  };
  faqs: { question: string; answer: string }[];
}

export const DESTINATIONS: Record<string, DestinationData> = {
  shirdi: {
    id: 'shirdi',
    name: 'Shirdi',
    category: 'pilgrimage',
    seoTitle: 'Shirdi Tour Packages from Bangalore | Flights & VIP Darshan | Sai Samarth Tours',
    seoDescription: 'Direct flight Shirdi tour packages from Bangalore with VIP Darshan at Sai Baba Samadhi Mandir, Kakad Aarti, 3-star AC hotels, pure veg meals, and senior citizen assistance.',
    heroImage: '/shirdi-tour-hero-banner-desktop.webp',
    tagline: 'The Holy Abode of Sri Sai Baba & Sacred Jyotirlinga Circuits',
    packageIds: ['shirdi-regular', 'shirdi-via-pune', 'shirdi-via-mumbai', 'shirdi-2-jyothirlinga', 'shirdi-3-jyothirlinga'],
    highlights: [
      'Direct flights from Bangalore (BLR) to Shirdi / Pune',
      'Pre-booked VIP Darshan at Sai Baba Samadhi Mandir',
      'Assistance for 5:00 AM Kakad Aarti and holy Chavadi & Dwarakamai visits',
      'Option to cover Shani Shingnapur, Trimbakeshwar, Bhimashankar & Grishneshwar',
      'Pure vegetarian South Indian & North Indian dining throughout'
    ],
    overview: 'Shirdi is one of the most revered pilgrimage destinations in India. Sai Samarth Tours has been Bangalore’s premier Shirdi tour operator since 2013, guiding over 20,000+ devotees with direct flights from Kempegowda Airport (BLR), dedicated AC coach transportation, verified 3-star hotels close to the temple, and VIP Darshan entry to avoid exhausting queue lines.',
    quickFacts: {
      bestTime: 'October to March (Pleasant weather throughout)',
      flightDuration: '1 Hour 35 Minutes (Direct from BLR)',
      idealDays: '1 Night / 2 Days or 2 Nights / 3 Days',
      meals: '100% Pure Vegetarian (Breakfast, Lunch & Dinner)',
      airport: 'Shirdi Airport (SAG) / Pune Airport (PNQ)',
      tourManager: 'Accompanies the group from departure to return'
    },
    faqs: [
      {
        question: 'How do we travel from Bangalore to Shirdi in this package?',
        answer: 'We provide round-trip economy flights from Kempegowda International Airport (BLR) directly to Shirdi or Pune airport, with private AC vehicle transfers and hotel check-in managed seamlessly.'
      },
      {
        question: 'Is VIP Darshan included for Sai Baba Samadhi Mandir?',
        answer: 'Yes! We pre-book VIP Darshan passes directly with the temple trust to minimize waiting time, ensuring elderly pilgrims and families have a peaceful, spiritually uplifting experience.'
      }
    ]
  },

  kashi: {
    id: 'kashi',
    name: 'Kashi (Varanasi)',
    category: 'pilgrimage',
    seoTitle: 'Kashi Tour Package from Bangalore | Kashi Ayodhya Yatra | Sai Samarth Tours',
    seoDescription: 'Curated Kashi Ayodhya tour packages from Bangalore with return flights, special Kashi Vishwanath Darshan, Ganga Aarti boat ride, Ayodhya Ram Mandir & 3-star hotels.',
    heroImage: '/pilgrimage-tours-hero-banner-desktop.webp',
    tagline: 'The Eternal City of Light & Sri Ram Janmabhoomi Circuit',
    packageIds: ['kashi-ayodhya-prayagraj', 'kashi-ayodhya'],
    highlights: [
      'Return flights from Bangalore (BLR) to Varanasi (VNS)',
      'Special Darshan at Sri Kashi Vishwanath Jyotirlinga & Annapurna Temple',
      'Exclusive boat cruise for the divine evening Dashashwamedh Ghat Ganga Aarti',
      'Darshan at the newly consecrated Ram Janmabhoomi Mandir in Ayodhya',
      'Holy Triveni Sangam Snan and Tarpanam Vedic rituals in Prayagraj'
    ],
    overview: 'Kashi (Varanasi) is the spiritual capital of India. Paired with the divine Ram Janmabhoomi temple in Ayodhya and the sacred confluence of Triveni Sangam in Prayagraj, our curated flight packages from Bangalore allow pilgrims of all ages to complete this sacred yatra in comfort with complete ritual coordination.',
    quickFacts: {
      bestTime: 'October to April',
      flightDuration: '2 Hours 30 Minutes (Direct/1-stop from BLR)',
      idealDays: '3 Nights / 4 Days or 4 Nights / 5 Days',
      meals: 'Wholesome Pure Vegetarian (Satvik Meals)',
      airport: 'Lal Bahadur Shastri International Airport, Varanasi (VNS)',
      tourManager: 'Expert local coordinators & accompanying guide'
    },
    faqs: [
      {
        question: 'How is Kashi Vishwanath Darshan coordinated for senior citizens?',
        answer: 'We assist with pre-booked Special Darshan passes, utilize battery-operated e-rickshaws through congested temple lanes, and provide personalized guide support to minimize walking.'
      },
      {
        question: 'Are rituals like Pind Daan, Tarpanam, or Abhishekams arranged?',
        answer: 'Yes! We arrange trusted local Vedic Purohits at Prayagraj Triveni Sangam and Kashi Manikarnika/Assi Ghats for family rituals, Tarpanam, and sacred Abhishekams.'
      }
    ]
  },

  ayodhya: {
    id: 'ayodhya',
    name: 'Ayodhya',
    category: 'pilgrimage',
    seoTitle: 'Ayodhya Tour Package from Bangalore | Ram Mandir Darshan | Sai Samarth Tours',
    seoDescription: 'Direct flight Ayodhya tour package from Bangalore. Includes confirmed Ram Janmabhoomi VIP Darshan, Hanuman Garhi, Sarayu Aarti, 3-star AC hotels & pure vegetarian meals.',
    heroImage: '/kashi-ayodhya-tour-package-from-bangalore-1.webp',
    tagline: 'Sacred Birthplace of Bhagwan Sri Ram & Divine Sarayu Ghats',
    packageIds: ['kashi-ayodhya', 'kashi-ayodhya-prayagraj'],
    highlights: [
      'Direct flights from Bangalore to Ayodhya (AYJ) or Varanasi (VNS)',
      'VIP Darshan at the grand Sri Ram Janmabhoomi Mandir',
      'Visits to Hanuman Garhi, Kanak Bhawan & Dashrath Mahal',
      'Evening Sarayu River Aarti and holy Snan',
      'Dedicated Tour Manager support throughout the pilgrimage'
    ],
    overview: 'Witness the glory of Sri Ram Janmabhoomi Mandir in Ayodhya with Sai Samarth Tours. Our Bangalore-to-Ayodhya flight packages feature pre-booked flights, comfortable AC vehicles, verified 3-star accommodations, and senior citizen guidance.',
    quickFacts: {
      bestTime: 'October to March',
      flightDuration: '2 Hours 45 Minutes',
      idealDays: '2 Nights / 3 Days or 4 Nights / 5 Days',
      meals: '100% Pure Vegetarian (Satvik)',
      airport: 'Maharishi Valmiki International Airport, Ayodhya (AYJ)',
      tourManager: 'Accompanying Tour Manager'
    },
    faqs: [
      {
        question: 'Is Ram Mandir Darshan easy for senior citizens from Bangalore?',
        answer: 'Yes! We arrange battery car assistance inside the extensive temple campus, prioritize early morning darshan slots, and provide personal guidance.'
      }
    ]
  },

  jyotirlinga: {
    id: 'jyotirlinga',
    name: '12 Jyotirlinga Circuits',
    category: 'pilgrimage',
    seoTitle: 'Jyotirlinga Tour Packages from Bangalore | 2, 3 & 5 Jyotirlinga Yatras | Sai Samarth Tours',
    seoDescription: 'Sacred Jyotirlinga tour packages from Bangalore with flights. Visit Trimbakeshwar, Bhimashankar, Grishneshwar, Mahakaleshwar, Omkareshwar, Somnath, Baidyanath & Rameshwaram.',
    heroImage: '/shirdi-with-3-jyotirlinga-tour-package-from-bangalore-1.webp',
    tagline: 'Divine Darshan of Lord Shiva’s Supreme Radiance Shrines',
    packageIds: ['shirdi-2-jyothirlinga', 'shirdi-3-jyothirlinga', 'indore-ujjain', 'baidyanath', 'gujarat', 'rameshwaram'],
    highlights: [
      'Comprehensive 2, 3, and 5 Jyotirlinga flight packages from Bangalore',
      'Maharashtra circuit: Bhimashankar, Trimbakeshwar, and Grishneshwar with Shirdi',
      'Madhya Pradesh circuit: Mahakaleshwar (Bhasma Aarti) and Omkareshwar',
      'Gujarat circuit: Somnath and Nageshwar Jyotirlingas',
      'Experienced Tour Manager handling temple protocols and queue management'
    ],
    overview: 'Lord Shiva is venerated in the form of 12 sacred Jyotirlingas across India. Sai Samarth Tours specializes in structured, flight-connected Jyotirlinga yatras departing from Bangalore with VIP Darshan and ritual support.',
    quickFacts: {
      bestTime: 'September to March',
      flightDuration: '1.5 to 2.5 Hours depending on circuit',
      idealDays: '2 Days to 6 Days',
      meals: 'Pure Vegetarian Breakfast, Lunch & Dinner',
      airport: 'Pune, Shirdi, Indore, Ahmedabad, Madurai',
      tourManager: 'Accompanying Tour Manager'
    },
    faqs: [
      {
        question: 'Which Jyotirlingas can be visited in a weekend from Bangalore?',
        answer: 'Trimbakeshwar (Nashik), Grishneshwar (Ellora), and Bhimashankar (near Pune) can all be visited in our 2N/3D Shirdi flight package.'
      }
    ]
  },

  rameshwaram: {
    id: 'rameshwaram',
    name: 'Rameshwaram & South India Temples',
    category: 'pilgrimage',
    seoTitle: 'Rameshwaram Tour Package from Bangalore | Madurai & Kanyakumari | Sai Samarth Tours',
    seoDescription: 'All-inclusive Rameshwaram tour package from Bangalore with flights. Covers Ramanathaswamy Temple, 22 Holy Theerthams, Madurai Meenakshi Amman & Kanyakumari sunrise.',
    heroImage: '/rameshwaram-madurai-kanyakumari-tour-package-from-bangalore-1.webp',
    tagline: 'Sacred Ramanathaswamy Jyotirlinga, 22 Theerthams & Southern Shores',
    packageIds: ['rameshwaram'],
    highlights: [
      'Flights from Bangalore (BLR) to Madurai (IXM) & return',
      'Sacred Snan at 22 Holy Theerthams & Ramanathaswamy Darshan',
      'Madurai Sri Meenakshi Amman Temple special entry',
      'Kanyakumari Vivekananda Rock Memorial & Triveni Sangam',
      'Dedicated AC Tempo Traveller / Innova throughout'
    ],
    overview: 'Rameshwaram is one of the sacred Char Dhams and home to the revered Ramanathaswamy Jyotirlinga. Our package from Bangalore combines flights, private AC vehicles, 3-star hotels, and complete assistance for the holy 22 Theertham snanam rituals.',
    quickFacts: {
      bestTime: 'October to March',
      flightDuration: '1 Hour 15 Minutes (BLR to Madurai)',
      idealDays: '3 Nights / 4 Days',
      meals: 'Traditional Pure Vegetarian South Indian Dining',
      airport: 'Madurai Airport (IXM)',
      tourManager: 'Accompanying Tour Manager'
    },
    faqs: [
      {
        question: 'Is assistance provided for the 22 Theertham bathing ritual?',
        answer: 'Yes, our local coordinators guide pilgrims step-by-step through the 22 holy wells inside the temple complex with minimal waiting.'
      }
    ]
  },

  chardham: {
    id: 'chardham',
    name: 'Char Dham Yatra',
    category: 'pilgrimage',
    seoTitle: 'Char Dham Yatra from Bangalore | Kedarnath & Badrinath Flight Tour | Sai Samarth Tours',
    seoDescription: 'Complete Char Dham Yatra from Bangalore with flights to Dehradun. Covers Yamunotri, Gangotri, Kedarnath & Badrinath with helicopter shuttle, VIP darshan, 3-star hotels & pure veg meals.',
    heroImage: '/chardham-yatra-tour-package-from-bangalore.webp',
    tagline: 'Sacred Himalayan Pilgrimage — Yamunotri, Gangotri, Kedarnath & Badrinath',
    packageIds: ['vaishnodevi', 'baidyanath'],
    highlights: [
      'Round-trip flights from Bangalore (BLR) to Dehradun (DED)',
      'Option for Kedarnath helicopter shuttle service from Phata / Guptkashi / Sersi',
      'VIP Darshan coordination at Kedarnath Jyotirlinga and Badrinath Temple',
      'Holy Snan at Yamunotri Surya Kund & Gangotri Bhagirathi river',
      'Experienced mountain tour manager and 24/7 medical oxygen assistance'
    ],
    overview: 'The holy Char Dham Yatra in the Garhwal Himalayas of Uttarakhand is the most sacred pilgrimage for every Hindu. Sai Samarth Tours organizes all-inclusive Char Dham Yatra packages departing from Bangalore with direct/connecting flights to Dehradun, premium hotel stays, helicopter ticketing assistance, and personalized elder care.',
    quickFacts: {
      bestTime: 'May to June & September to October (Akshaya Tritiya to Diwali)',
      flightDuration: '2 Hours 45 Minutes (Direct/connecting from BLR)',
      idealDays: '9 Nights / 10 Days or 11 Nights / 12 Days',
      meals: '100% Pure Vegetarian & Satvik South/North Indian Meals',
      airport: 'Jolly Grant Airport, Dehradun (DED)',
      tourManager: 'Himalayan pilgrimage escort & local mountain guides'
    },
    faqs: [
      {
        question: 'How do pilgrims travel from Bangalore to Char Dham?',
        answer: 'We provide flights from Bangalore Kempegowda Airport (BLR) to Dehradun (DED). From Dehradun, our private AC coaches take you along the sacred Char Dham circuit (Haridwar, Barkot, Uttarkashi, Guptkashi, Kedarnath, Badrinath).'
      },
      {
        question: 'Are helicopter tickets available for Kedarnath from Bangalore?',
        answer: 'Yes! We assist with pre-booking verified IRCTC helicopter tickets from Phata/Guptkashi/Sersi directly to Kedarnath helipad for comfortable senior citizen darshan.'
      }
    ]
  },

  tirupati: {
    id: 'tirupati',
    name: 'Tirupati Balaji',
    category: 'pilgrimage',
    seoTitle: 'Tirupati Tour Package from Bangalore | VIP Special Entry Darshan | Sai Samarth Tours',
    seoDescription: 'Book 1-day or 2-day Tirupati tour package from Bangalore with confirmed ₹300 Special Entry VIP Darshan at Lord Venkateswara Swamy Temple Tirumala, Padmavathi Temple & AC transport.',
    heroImage: '/tirupati-balaji-tour-package-from-bangalore.webp',
    tagline: 'Divine Darshan of Lord Sri Venkateswara Swamy at Sacred Tirumala Hills',
    packageIds: ['rameshwaram'],
    highlights: [
      'Confirmed ₹300 Special Entry VIP Darshan pass at Tirumala Balaji Temple',
      'Comfortable door-to-door AC vehicle (Innova Crysta / Tempo Traveller / Volvo)',
      'Visits to Tiruchanur Sri Padmavathi Ammavari Temple & Sri Kalahasti',
      'Famous Tirupati Laddu Prasadam included per pilgrim',
      'Experienced driver and local coordinator ensuring quick darshan'
    ],
    overview: 'Tirupati is just a 4.5-hour drive from Bangalore, making it the most visited temple for Karnataka devotees. Sai Samarth Tours provides confirmed VIP Special Entry Darshan packages for Tirupati Balaji from Bangalore with AC vehicle transfers, verified 3-star hotel rooms for freshening up, and pure veg meals.',
    quickFacts: {
      bestTime: 'September to March (Pleasant weather throughout)',
      flightDuration: '4.5 Hours Road Drive (250 km from Bangalore)',
      idealDays: 'Same Day (1 Day) or 1 Night / 2 Days',
      meals: 'Authentic Pure Vegetarian South Indian Meals',
      airport: 'Tirupati Airport (TIR) / Bangalore (BLR)',
      tourManager: 'Dedicated Tirumala temple escort'
    },
    faqs: [
      {
        question: 'Is VIP Special Entry Darshan guaranteed in the Tirupati package?',
        answer: 'Yes, we book verified TTD ₹300 Special Entry Darshan tickets in advance to ensure our guests get quick and smooth darshan within 2 to 3 hours.'
      },
      {
        question: 'What is the pickup point in Bangalore for the Tirupati tour?',
        answer: 'We provide door-to-door pickup across Bangalore (Hebbal, Yelahanka, Indiranagar, Whitefield, Jayanagar, Marathahalli) for private packages, or centralized boarding for group departures.'
      }
    ]
  },

  kashmir: {
    id: 'kashmir',
    name: 'Kashmir',
    category: 'domestic',
    seoTitle: 'Kashmir Tour Package from Bangalore | Flights, Houseboat & Gulmarg | Sai Samarth Tours',
    seoDescription: 'Book all-inclusive Kashmir tour packages from Bangalore. Includes return flights, luxury Dal Lake houseboat, Gulmarg gondola, Pahalgam valley & private AC vehicle.',
    heroImage: '/domestic-tours-hero-banner-desktop.webp',
    tagline: 'Paradise on Earth — Snow-Capped Peaks, Valleys & Dal Lake Houseboats',
    packageIds: ['kashmir'],
    highlights: [
      'Round-trip flights from Bangalore (BLR) to Srinagar (SXR)',
      '1 Night stay in an authentic heritage Dal Lake Houseboat with Shikara ride',
      'Excursion to Gulmarg with assistance for Gondola Cable Car rides',
      'Scenic journey through Pahalgam, Betaab Valley & Aru Valley',
      'Private AC vehicle (Innova Crysta) with seasoned local chauffeur'
    ],
    overview: 'Kashmir is celebrated as the heaven on earth with its snow-capped Himalayan ranges, lush pine meadows, and Dal Lake waters. Our Bangalore-to-Kashmir holiday packages feature verified 3-star/4-star hotels, heated rooms, authentic local sightseeing, and pure vegetarian dining.',
    quickFacts: {
      bestTime: 'March to October (Greenery) / Dec to Feb (Snowfall)',
      flightDuration: '3 Hours 45 Minutes',
      idealDays: '5 Nights / 6 Days',
      meals: 'Wholesome Breakfast & Dinner (Indian Veg / Non-Veg)',
      airport: 'Srinagar International Airport (SXR)',
      tourManager: 'Local representative & 24/7 travel desk'
    },
    faqs: [
      {
        question: 'Are Gulmarg Gondola Phase 1 & 2 tickets included in the package?',
        answer: 'We assist guests with advance booking of Gondola Phase 1 & 2 passes online and guide you on the best morning timing to avoid heavy queues.'
      }
    ]
  },

  kerala: {
    id: 'kerala',
    name: 'Kerala',
    category: 'domestic',
    seoTitle: 'Kerala Tour Package from Bangalore | Munnar, Alleppey & Thekkady | Sai Samarth Tours',
    seoDescription: 'Best Kerala tour packages from Bangalore with flights. Explore Munnar tea gardens, Thekkady wildlife, Alleppey backwater houseboats & Kochi heritage with private vehicle.',
    heroImage: '/kerala-tour-package-from-bangalore.webp',
    tagline: 'God’s Own Country — Misty Hills, Spice Plantations & Backwaters',
    packageIds: ['kerala'],
    highlights: [
      'Direct flights from Bangalore (BLR) to Kochi (COK)',
      'Scenic stay amidst the misty tea plantations of Munnar',
      'Spice plantation walks and Kathakali cultural shows in Thekkady',
      'Exclusive private Alleppey backwater houseboat cruise with all meals',
      'Dedicated private AC vehicle throughout the tour'
    ],
    overview: 'Kerala offers an enchanting escape from Bangalore into misty hills, aromatic spice gardens, and tranquil backwaters. Our customized Kerala packages include flights, handpicked resorts, authentic dining, and private AC transfers.',
    quickFacts: {
      bestTime: 'September to March',
      flightDuration: '1 Hour 10 Minutes (Direct BLR to COK)',
      idealDays: '4 Nights / 5 Days or 5 Nights / 6 Days',
      meals: 'Daily Breakfast & Dinner with authentic Kerala & South Indian options',
      airport: 'Cochin International Airport (COK)',
      tourManager: 'Dedicated 24/7 trip coordinator'
    },
    faqs: [
      {
        question: 'Is the Alleppey houseboat stay private for our family?',
        answer: 'Yes! We provide private deluxe/luxury houseboats dedicated exclusively to your family or couple group.'
      }
    ]
  },

  goa: {
    id: 'goa',
    name: 'Goa',
    category: 'domestic',
    seoTitle: 'Goa Tour Package from Bangalore | Beach Holidays & Resorts | Sai Samarth Tours',
    seoDescription: 'All-inclusive Goa tour packages from Bangalore with direct flights. Luxury 4-star beach resort stays, North & South Goa sightseeing, cruise dinner & airport transfers.',
    heroImage: '/goa-beach-tour-package-from-bangalore.webp',
    tagline: 'Sun, Sand & Heritage — The Ultimate Coastal Getaway from Bangalore',
    packageIds: ['goa'],
    highlights: [
      'Direct 1-hour flight from Bangalore (BLR) to Goa (GOI/GOX)',
      '4-star beach resort stay with swimming pool and private access',
      'North Goa fortresses (Aguada, Chapora) & vibrant beaches (Baga, Calangute)',
      'South Goa heritage churches, Old Goa basilica & Mandovi river cruise',
      'Private AC vehicle for comfortable airport transfers & day trips'
    ],
    overview: 'Goa is Bangalore’s favorite beach holiday destination, just 60 minutes away by direct flight. Sai Samarth Tours organizes relaxing family vacations, corporate retreats, and couples’ getaways with top beachside resorts, curated sightseeing, and zero travel hassle.',
    quickFacts: {
      bestTime: 'October to April',
      flightDuration: '1 Hour (Direct from BLR)',
      idealDays: '3 Nights / 4 Days',
      meals: 'Daily Buffet Breakfast & Dinner',
      airport: 'Dabolim (GOI) / Mopa Manohar International Airport (GOX)',
      tourManager: 'Dedicated Bangalore travel concierge'
    },
    faqs: [
      {
        question: 'Are flight tickets from Bangalore included in the Goa package?',
        answer: 'Yes, our packages feature direct return flights from Kempegowda Airport (BLR) with airport transfers included.'
      }
    ]
  },

  rajasthan: {
    id: 'rajasthan',
    name: 'Rajasthan',
    category: 'domestic',
    seoTitle: 'Rajasthan Tour Package from Bangalore | Royal Forts & Palaces | Sai Samarth Tours',
    seoDescription: 'Grand Rajasthan tour packages from Bangalore. Explore Jaipur Pink City, Jodhpur Blue City, Udaipur Lake Palace & Jaisalmer Thar desert safari with flights and hotels.',
    heroImage: '/rajasthan-tour-package-from-bangalore.webp',
    tagline: 'Land of Kings — Magnificent Forts, Palaces & Golden Desert Dunes',
    packageIds: ['rajasthan', 'golden-triangle'],
    highlights: [
      'Direct flights from Bangalore (BLR) to Jaipur (JAI) or Udaipur (UDR)',
      'Stay in heritage havelis and 3-star/4-star royal palace properties',
      'Desert camp stay in Jaisalmer with camel safari and folk dance',
      'Sightseeing at Amer Fort, City Palace, Hawa Mahal & Mehrangarh Fort',
      'Dedicated private AC vehicle with experienced local chauffeur'
    ],
    overview: 'Experience the grandeur of royal Rajputana with our Bangalore-to-Rajasthan holiday circuits. From the majestic Amber Fort in Jaipur to romantic boat rides on Lake Pichola in Udaipur, every moment is curated for royal comfort.',
    quickFacts: {
      bestTime: 'October to March (Pleasant desert winter)',
      flightDuration: '2 Hours 30 Minutes',
      idealDays: '5 Nights / 6 Days to 7 Nights / 8 Days',
      meals: 'Daily Breakfast & Traditional Rajasthani/North Indian Dinners',
      airport: 'Jaipur (JAI) / Udaipur (UDR) / Jodhpur (JDH)',
      tourManager: 'Accompanying tour guide'
    },
    faqs: [
      {
        question: 'Is a desert safari and tent stay included in Jaisalmer?',
        answer: 'Yes! We arrange luxury Swiss tent accommodations at the Sam Sand Dunes with camel ride, evening bonfire, and cultural Kalbeliya folk dance.'
      }
    ]
  },

  ladakh: {
    id: 'ladakh',
    name: 'Leh Ladakh',
    category: 'domestic',
    seoTitle: 'Ladakh Tour Package from Bangalore | Pangong Lake & Khardung La | Sai Samarth Tours',
    seoDescription: 'Breathtaking Leh Ladakh tour packages from Bangalore with flights. Explore Pangong Tso Lake, Nubra Valley, Khardung La pass & ancient Buddhist monasteries.',
    heroImage: '/leh-ladakh-tour-package-from-bangalore.webp',
    tagline: 'Land of High Passes — Pangong Lake, Nubra Valley & Himalayan Glaciers',
    packageIds: ['leh-ladakh'],
    highlights: [
      'Return flights from Bangalore (BLR) to Leh (IXL) with acclimatization schedule',
      'Scenic drive through Khardung La (World’s highest motorable pass)',
      'Overnight stay at the turquoise blue Pangong Tso Lake',
      'Double-humped camel safari in Hunder Sand Dunes, Nubra Valley',
      'Oxygen cylinder equipped private vehicles for safety'
    ],
    overview: 'Leh Ladakh is a dream destination for travelers seeking raw Himalayan grandeur. Our specialized itineraries from Bangalore include gradual altitude acclimatization, heated boutique hotel stays, Inner Line Permits, and medical oxygen support.',
    quickFacts: {
      bestTime: 'May to September',
      flightDuration: '4 Hours (Connecting via Delhi)',
      idealDays: '5 Nights / 6 Days or 6 Nights / 7 Days',
      meals: 'Daily Breakfast & Wholesome Warm Dinners',
      airport: 'Kushok Bakula Rimpochee Airport, Leh (IXL)',
      tourManager: 'High-altitude specialist guide'
    },
    faqs: [
      {
        question: 'How do you handle acclimatization for travelers flying from Bangalore?',
        answer: 'We mandate a full 24-hour rest on Day 1 in Leh with light hydration and provide vehicle-equipped medical oxygen for high passes.'
      }
    ]
  },

  andaman: {
    id: 'andaman',
    name: 'Andaman Islands',
    category: 'domestic',
    seoTitle: 'Andaman Tour Package from Bangalore | Havelock Island & Scuba | Sai Samarth Tours',
    seoDescription: 'Exotic Andaman tour packages from Bangalore with direct flights. Radhanagar Beach in Havelock, Neil Island coral reefs, Cellular Jail light show & cruise transfers.',
    heroImage: '/andaman-islands-tour-package-from-bangalore.webp',
    tagline: 'Emerald Islands — Pristine White Sand Beaches & Vibrant Coral Reefs',
    packageIds: ['andaman'],
    highlights: [
      'Direct flights from Bangalore (BLR) to Port Blair (IXZ)',
      'High-speed luxury catamaran cruise transfers (Makruzz / Nautika)',
      'Visit Asia’s top-rated Radhanagar Beach in Havelock Island',
      'Sound & Light show at the historic Cellular Jail in Port Blair',
      'Assistance with snorkeling, scuba diving & sea-walking activities'
    ],
    overview: 'The Andaman and Nicobar Islands offer India’s most stunning tropical beaches without needing a passport. Our Bangalore packages feature direct flights, sea-facing 4-star resorts, private cruise tickets, and delicious Indian meals.',
    quickFacts: {
      bestTime: 'October to May',
      flightDuration: '2 Hours 35 Minutes (Direct from BLR)',
      idealDays: '4 Nights / 5 Days or 5 Nights / 6 Days',
      meals: 'Daily Wholesome Breakfast & Dinner',
      airport: 'Veer Savarkar International Airport, Port Blair (IXZ)',
      tourManager: 'Island travel coordinator'
    },
    faqs: [
      {
        question: 'Are direct flights available from Bangalore to Port Blair?',
        answer: 'Yes! Indigo and other airlines operate daily direct non-stop flights from Bangalore (BLR) to Port Blair (IXZ) taking just 2.5 hours.'
      }
    ]
  },

  thailand: {
    id: 'thailand',
    name: 'Thailand',
    category: 'international',
    seoTitle: 'Thailand Tour Package from Bangalore | Bangkok & Pattaya | Sai Samarth Tours',
    seoDescription: 'All-inclusive Thailand tour packages from Bangalore with flights. Explore Coral Island speedboat tour, Alcazar show, Bangkok temple tour, Safari World & Indian meals.',
    heroImage: '/thailand-tour-package-from-bangalore.webp',
    tagline: 'Land of Smiles — Sparkling Beaches, Floating Markets & Bangkok Nightlife',
    packageIds: ['thailand-regular'],
    highlights: [
      'Direct flights from Bangalore (BLR) to Bangkok (BKK/DMK)',
      'Speedboat excursion to Coral Island with parasailing & sea activities',
      'VIP seats for the world-famous Alcazar Cabaret Show in Pattaya',
      'Bangkok City & Temple Tour (Golden Buddha & Marble Temple)',
      'Authentic Indian vegetarian & Jain meals served at every meal stop'
    ],
    overview: 'Thailand is the ultimate international family and holiday getaway from Bangalore. With visa-free/visa-on-arrival entry for Indian citizens, Sai Samarth Tours delivers seamless holidays with verified 4-star city hotels, dedicated AC coaches, and certified English/Hindi speaking guides.',
    quickFacts: {
      bestTime: 'November to April',
      flightDuration: '3 Hours 45 Minutes (Direct from BLR)',
      idealDays: '4 Nights / 5 Days',
      meals: 'Daily Breakfast & 100% Indian Lunch/Dinner with pure veg options',
      airport: 'Suvarnabhumi (BKK) / Don Mueang (DMK)',
      tourManager: 'Accompanying tour escort & local guide'
    },
    faqs: [
      {
        question: 'Is visa required for Indian citizens visiting Thailand from Bangalore?',
        answer: 'Thailand offers Visa Exemption for Indian passport holders for tourist stays up to 30 days. You just need a passport with 6 months validity.'
      }
    ]
  },

  dubai: {
    id: 'dubai',
    name: 'Dubai',
    category: 'international',
    seoTitle: 'Dubai Tour Package from Bangalore | Burj Khalifa & Desert Safari | Sai Samarth Tours',
    seoDescription: 'Luxury Dubai tour packages from Bangalore. Includes direct flights, Burj Khalifa 124th floor, Desert Safari with BBQ dinner, Marina Dhow cruise & Dubai Mall.',
    heroImage: '/dubai-tour-package-from-bangalore.webp',
    tagline: 'City of Gold — Iconic Skyscrapers, Desert Safaris & World-Class Luxury',
    packageIds: ['dubai'],
    highlights: [
      'Direct flights from Bangalore (BLR) to Dubai (DXB)',
      'Entry tickets to Burj Khalifa 124th & 125th Floor Observation Deck',
      'Thrilling 4x4 Desert Dune Bashing with BBQ dinner and belly dance',
      'Dubai Marina luxury Dhow Cruise dinner with live music',
      'Complete UAE tourist visa facilitation included in package'
    ],
    overview: 'From the futuristic heights of Burj Khalifa to thrilling desert adventures, Dubai offers unmatched modern luxury. Our Bangalore tour packages include guaranteed tourist visas, Emirates/FlyDubai flights, 4-star central hotels, and transfers.',
    quickFacts: {
      bestTime: 'November to March',
      flightDuration: '4 Hours (Direct from BLR)',
      idealDays: '4 Nights / 5 Days',
      meals: 'Daily Breakfast & Curated Indian Dinners',
      airport: 'Dubai International Airport (DXB)',
      tourManager: 'Dedicated UAE coordinator'
    },
    faqs: [
      {
        question: 'Do you process the Dubai tourist visa from Bangalore?',
        answer: 'Yes! We handle the complete UAE e-visa processing, document verification, and overseas travel insurance.'
      }
    ]
  },

  malaysia: {
    id: 'malaysia',
    name: 'Malaysia',
    category: 'international',
    seoTitle: 'Malaysia Tour Package from Bangalore | Kuala Lumpur & Genting | Sai Samarth Tours',
    seoDescription: 'All-inclusive Malaysia tour packages from Bangalore. Visit Petronas Twin Towers, Genting Highlands cable car, Batu Caves temple & Sunway Lagoon with flights.',
    heroImage: '/malaysia-tour-package-from-bangalore.webp',
    tagline: 'Truly Asia — Petronas Towers, Genting Highlands & Cultural Heritage',
    packageIds: ['malaysia-regular', 'singapore-malaysia'],
    highlights: [
      'Direct flights from Bangalore (BLR) to Kuala Lumpur (KUL)',
      'Photo stop at the world-famous 88-storey Petronas Twin Towers',
      'Day trip to Genting Highlands with scenic Skyway Cable Car ride',
      'Sacred visit to the giant Lord Murugan statue at Batu Caves',
      'Authentic Indian dining and verified 4-star central hotel stays'
    ],
    overview: 'Malaysia is an intoxicating blend of ultra-modern skyscrapers and lush rainforests. Our Bangalore departure packages include visa consultation, direct airline seats, verified luxury hotels in Bukit Bintang, and Indian vegetarian meals.',
    quickFacts: {
      bestTime: 'All year round (Best: Dec to April)',
      flightDuration: '4 Hours 15 Minutes (Direct from BLR)',
      idealDays: '3 Nights / 4 Days or 5 Nights / 6 Days (with Singapore)',
      meals: 'Daily Breakfast & Wholesome Indian Lunches & Dinners',
      airport: 'Kuala Lumpur International Airport (KUL)',
      tourManager: 'Bangalore accompanying manager'
    },
    faqs: [
      {
        question: 'Is visa required for Indians traveling to Malaysia?',
        answer: 'Malaysia currently provides Visa-Free entry for Indian citizens for visits up to 30 days. You only need to submit the online MDAC arrival card.'
      }
    ]
  },

  maldives: {
    id: 'maldives',
    name: 'Maldives',
    category: 'international',
    seoTitle: 'Maldives Tour Package from Bangalore | Luxury Water Villa Resorts | Sai Samarth Tours',
    seoDescription: 'Direct flight Maldives holiday packages from Bangalore. Stay in luxury overwater villas, private speedboat transfers, all-inclusive dining & coral reef excursions.',
    heroImage: '/maldives-tour-package-from-bangalore.webp',
    tagline: 'Tropical Paradise — Turquoise Lagoons, Overwater Villas & Coral Atolls',
    packageIds: ['maldives'],
    highlights: [
      'Direct 2-hour flight from Bangalore (BLR) to Male (MLE)',
      'Option to stay in beachfront villas and iconic overwater villas',
      'Speedboat or scenic seaplane transfers directly to your private island resort',
      'All-inclusive meal plans (Breakfast, Lunch, Dinner & Beverages)',
      'Complimentary snorkeling gear, dolphin watching & water sports'
    ],
    overview: 'Just 2 hours away by direct flight from Bangalore, Maldives is the ultimate romantic escape and luxury rejuvenation haven. We partner with top 4-star and 5-star island resorts offering overwater bungalows and private lagoon access.',
    quickFacts: {
      bestTime: 'November to April (Dry & sunny season)',
      flightDuration: '2 Hours (Direct non-stop from BLR)',
      idealDays: '3 Nights / 4 Days',
      meals: 'Full Board / All-Inclusive Resort Dining',
      airport: 'Velana International Airport, Male (MLE)',
      tourManager: '24/7 dedicated resort concierge desk'
    },
    faqs: [
      {
        question: 'How far is Maldives from Bangalore by flight?',
        answer: 'Direct flights from Bangalore (BLR) to Male (MLE) take only 2 hours, making it one of the quickest overseas island escapes.'
      }
    ]
  }
};

export const ALL_DESTINATION_SLUGS = Object.keys(DESTINATIONS);
