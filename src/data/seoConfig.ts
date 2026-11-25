/**
 * Centralized SEO & Keyword Configuration for Sai Samarth Tours Bangalore
 * 
 * Defines unique page-wise primary keywords, secondary keywords, titles,
 * meta descriptions, canonical URLs, and Open Graph metadata for all
 * public routes (Core pages, Tour Packages, Destinations, and Blogs).
 */

export interface PageSEOConfig {
  path: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: 'website' | 'article' | 'product';
  h1: string;
}

// ============================================================================
// 1. CORE & CATEGORY PAGES SEO CONFIGURATION
// ============================================================================
export const CORE_PAGES_SEO: Record<string, PageSEOConfig> = {
  '/': {
    path: '/',
    primaryKeyword: 'tour packages from bangalore',
    secondaryKeywords: [
      'travel agency in bangalore',
      'pilgrimage tour operator in bangalore',
      'shirdi tour package from bangalore',
      'yelahanka travel agency',
      'bangalore holiday packages'
    ],
    title: 'Sai Samarth Tours: Tour Packages from Bangalore | Pilgrimage & Holidays',
    description: 'Book top tour packages from Bangalore with Sai Samarth Tours. Direct flights for Shirdi VIP Darshan, Kashi, Puri Jagannath, Kamakhya & Jyotirlingas with 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/',
    ogTitle: 'Sai Samarth Tours: Tour Packages from Bangalore | Pilgrimage & Holidays',
    ogDescription: 'Bangalore’s premier travel agency for flight pilgrimages, deluxe bus yatras, and domestic/international holiday packages with pure veg meals & VIP darshan.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'Tour Packages from Bangalore – Pilgrimage & Holiday Yatras'
  },
  '/tour-packages': {
    path: '/tour-packages',
    primaryKeyword: 'all tour packages from bangalore',
    secondaryKeywords: [
      'bangalore tour package list',
      'flight tour packages from bangalore',
      'holiday trips departing bangalore',
      'domestic international tour packages bangalore',
      'budget tour packages from bangalore'
    ],
    title: 'All Tour Packages from Bangalore | Flight & Holiday Yatras | Sai Samarth Tours',
    description: 'Explore 35+ domestic, international, and spiritual tour packages departing from Bangalore. All packages include return flights, 3-star AC hotels, and pure veg meals.',
    canonical: 'https://saisamarthtours.com/tour-packages',
    ogTitle: 'All Tour Packages from Bangalore | Flight & Holiday Yatras',
    ogDescription: 'Browse all-inclusive pilgrimage, domestic, and international holiday packages departing directly from Bangalore Kempegowda International Airport.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'All Tour Packages from Bangalore'
  },
  '/pilgrimage-tour-packages': {
    path: '/pilgrimage-tour-packages',
    primaryKeyword: 'pilgrimage tour packages from bangalore',
    secondaryKeywords: [
      'hindu pilgrimage packages bangalore',
      'temple tour packages from bangalore',
      'spiritual yatra packages bangalore',
      'south north india temple tours',
      'jyotirlinga tour packages from bangalore'
    ],
    title: 'Pilgrimage Tour Packages from Bangalore | Sacred Temple Yatras | Sai Samarth Tours',
    description: 'Book all-inclusive sacred pilgrimage yatra packages from Bangalore to Kashi, Ayodhya, Puri Jagannath, Vaishno Devi, Kamakhya & Jyotirlingas with confirmed VIP darshan.',
    canonical: 'https://saisamarthtours.com/pilgrimage-tour-packages',
    ogTitle: 'Pilgrimage Tour Packages from Bangalore | Sacred Temple Yatras',
    ogDescription: 'Guided spiritual yatras departing from Bangalore with VIP darshan passes, verified 3-star AC hotels, pure veg dining, and senior citizen assistance.',
    ogImage: '/pilgrimage-packages-category-card.webp',
    ogType: 'website',
    h1: 'Pilgrimage Tour Packages from Bangalore'
  },
  '/shirdi-tour-packages': {
    path: '/shirdi-tour-packages',
    primaryKeyword: 'shirdi tour packages from bangalore',
    secondaryKeywords: [
      'bangalore to shirdi flight package',
      'shirdi vip darshan package from bangalore',
      'shirdi tour package with flight',
      'shirdi kakad aarti tour bangalore',
      'shani shingnapur shirdi tour bangalore'
    ],
    title: 'Shirdi Tour Packages from Bangalore | Flights & VIP Darshan | Sai Samarth Tours',
    description: 'Book direct flight Shirdi tour packages from Bangalore with Sai Samarth Tours. Includes VIP darshan passes, 5:00 AM Kakad Aarti, Shani Shingnapur, and 3-star AC hotel stay.',
    canonical: 'https://saisamarthtours.com/shirdi-tour-packages',
    ogTitle: 'Shirdi Tour Packages from Bangalore | Flights & VIP Darshan',
    ogDescription: 'Bangalore to Shirdi direct flight yatra with confirmed early morning Kakad Aarti at Baba Samadhi Mandir, pure veg meals, and dedicated tour manager care.',
    ogImage: '/shirdi-packages-category-card.webp',
    ogType: 'website',
    h1: 'Shirdi Tour Packages from Bangalore'
  },
  '/bus-packages': {
    path: '/bus-packages',
    primaryKeyword: 'bus tour packages from bangalore',
    secondaryKeywords: [
      'deluxe bus yatra from bangalore',
      'panch bootha yatra bus tour',
      'shirdi kolhapur bus package from bangalore',
      'luxury ac coach temple tours bangalore',
      'weekend bus tours from bangalore'
    ],
    title: 'Bus Tour Packages from Bangalore | Deluxe AC Coach Yatras | Sai Samarth Tours',
    description: 'Book all-inclusive Deluxe A/C Pushback Bus tour packages from Bangalore. Flagship Panch Bootha Yatra & Shirdi Kolhapur bus yatras with Tour Manager and 3-star AC stays.',
    canonical: 'https://saisamarthtours.com/bus-packages',
    ogTitle: 'Bus Tour Packages from Bangalore | Deluxe AC Coach Yatras',
    ogDescription: 'Experience stress-free pilgrimage road journeys in pushback 2+2 AC coaches departing from Bangalore with pure veg meals and senior citizen care.',
    ogImage: '/panch-bootha-bus-yatra-1.webp',
    ogType: 'website',
    h1: 'Deluxe Bus Tour Packages from Bangalore'
  },
  '/domestic-tour-packages': {
    path: '/domestic-tour-packages',
    primaryKeyword: 'domestic tour packages from bangalore',
    secondaryKeywords: [
      'india holiday packages from bangalore',
      'kashmir tour package from bangalore',
      'kerala holiday package from bangalore',
      'domestic flight tours from bangalore',
      'himachal rajasthan tour packages bangalore'
    ],
    title: 'Domestic Holiday Packages from Bangalore | Incredible India | Sai Samarth Tours',
    description: 'Explore incredible India with curated domestic tour packages from Bangalore covering Kashmir, Kerala, Ladakh, Rajasthan, Himachal, Goa, and Andaman with flights and AC vehicles.',
    canonical: 'https://saisamarthtours.com/domestic-tour-packages',
    ogTitle: 'Domestic Holiday Packages from Bangalore | Incredible India',
    ogDescription: 'Handcrafted domestic holiday tours from Bangalore Kempegowda Airport with verified 3-star and 4-star hotels, private sightseeing, and dedicated support.',
    ogImage: '/domestic-packages-category-card.webp',
    ogType: 'website',
    h1: 'Domestic Tour Packages from Bangalore'
  },
  '/international-tour-packages': {
    path: '/international-tour-packages',
    primaryKeyword: 'international tour packages from bangalore',
    secondaryKeywords: [
      'overseas holiday packages from bangalore',
      'thailand tour package from bangalore',
      'singapore malaysia tour from bangalore',
      'dubai holiday package from bangalore',
      'bali international package bangalore'
    ],
    title: 'International Tour Packages from Bangalore | World Vacations | Sai Samarth Tours',
    description: 'Discover world destinations with international tour packages from Bangalore. Complete visa guidance, direct flights, 4-star stays, and Indian meals for Thailand, Bali & Dubai.',
    canonical: 'https://saisamarthtours.com/international-tour-packages',
    ogTitle: 'International Tour Packages from Bangalore | World Vacations',
    ogDescription: 'Premium international vacation packages departing from Bangalore with flights, visa assistance, 4-star hotels, Indian dining, and guided city excursions.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'website',
    h1: 'International Tour Packages from Bangalore'
  },
  '/senior-citizen-tour-packages': {
    path: '/senior-citizen-tour-packages',
    primaryKeyword: 'senior citizen tour packages from bangalore',
    secondaryKeywords: [
      'assisted pilgrimage for senior citizens',
      'elderly friendly temple tours bangalore',
      'wheelchair assistance pilgrimage tour',
      'shirdi tour for senior citizens',
      'kashi yatra for elderly from bangalore'
    ],
    title: 'Senior Citizen Tour Packages from Bangalore | Assisted Yatras | Sai Samarth Tours',
    description: 'Assisted senior citizen tour packages from Bangalore. Comfortable pilgrimage tours to Shirdi, Kashi, and Tirupati with wheelchair assistance, pure veg meals & tour managers.',
    canonical: 'https://saisamarthtours.com/senior-citizen-tour-packages',
    ogTitle: 'Senior Citizen Tour Packages from Bangalore | Assisted Yatras',
    ogDescription: 'Thoughtfully paced spiritual yatras tailored for elderly devotees with ground-floor rooms, elevator access, wheelchair assistance, and caring tour escorts.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'Senior Citizen Tour Packages from Bangalore'
  },
  '/family-tour-packages-from-bangalore': {
    path: '/family-tour-packages-from-bangalore',
    primaryKeyword: 'family tour packages from bangalore',
    secondaryKeywords: [
      'bangalore family vacation packages',
      'domestic family tour from bangalore',
      'family holiday packages with flight',
      'kashmir kerala family tour bangalore',
      'international family vacation from bangalore'
    ],
    title: 'Family Tour Packages from Bangalore | Domestic & World Holidays | Sai Samarth Tours',
    description: 'Book best family tour packages from Bangalore with flights. Handcrafted vacations to Kashmir, Kerala, Goa, Andaman, Thailand & Dubai with private AC vehicles and deluxe stays.',
    canonical: 'https://saisamarthtours.com/family-tour-packages-from-bangalore',
    ogTitle: 'Family Tour Packages from Bangalore | Domestic & World Holidays',
    ogDescription: 'Memorable family holidays from Bangalore featuring kid-friendly itineraries, verified deluxe hotels, private AC transport, and customized dining options.',
    ogImage: '/domestic-packages-category-card.webp',
    ogType: 'website',
    h1: 'Family Tour Packages from Bangalore'
  },
  '/group-tour-packages-from-bangalore': {
    path: '/group-tour-packages-from-bangalore',
    primaryKeyword: 'group tour packages from bangalore',
    secondaryKeywords: [
      'customized group tours bangalore',
      'corporate offsite tour packages bangalore',
      'community pilgrimage group tours',
      'private volvo bus tours from bangalore',
      'apartment association tour packages'
    ],
    title: 'Group Tour Packages from Bangalore | Custom Community Yatras | Sai Samarth Tours',
    description: 'All-inclusive group tour packages from Bangalore for extended families, apartment associations, and corporate offsites. Dedicated luxury AC coaches & bulk savings.',
    canonical: 'https://saisamarthtours.com/group-tour-packages-from-bangalore',
    ogTitle: 'Group Tour Packages from Bangalore | Custom Community Yatras',
    ogDescription: 'Tailored group travel packages with customized departures, dedicated AC coaches, personalized meals, and professional tour coordination.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'Group & Customized Tour Packages from Bangalore'
  },
  '/travel-resources': {
    path: '/travel-resources',
    primaryKeyword: 'travel resources and pilgrimage guides bangalore',
    secondaryKeywords: [
      'temple dress codes and rules india',
      'darshan booking tips for pilgrims',
      'senior citizen travel checklist',
      'pilgrimage packing list india',
      'yatra planning guide bangalore'
    ],
    title: 'Travel Resources & Pilgrimage Guides | Sai Samarth Tours Bangalore',
    description: 'Comprehensive travel resources, temple darshan rules, dress codes, senior citizen travel tips, and packing checklists for Bangalore pilgrims and holiday travelers.',
    canonical: 'https://saisamarthtours.com/travel-resources',
    ogTitle: 'Travel Resources & Pilgrimage Guides | Sai Samarth Tours Bangalore',
    ogDescription: 'Essential travel planning resources, temple darshan timings, dress code guidelines, and health tips curated by Bangalore’s leading pilgrimage tour operator.',
    ogImage: '/pilgrimage-packages-category-card.webp',
    ogType: 'website',
    h1: 'Travel Resources & Pilgrimage Guides'
  },
  '/partners': {
    path: '/partners',
    primaryKeyword: 'business partners and airline networks bangalore',
    secondaryKeywords: [
      'sai samarth tours official partners',
      'authorized airline travel partners bangalore',
      'hospitality hotel network pilgrimage',
      'verified transport partners bangalore',
      'tourism alliances karnataka'
    ],
    title: 'Official Business Partners & Airlines | Sai Samarth Tours Bangalore',
    description: 'Verified business partners, scheduled airlines, and hotel networks collaborating with Sai Samarth Tours to deliver seamless pilgrimage and holiday packages.',
    canonical: 'https://saisamarthtours.com/partners',
    ogTitle: 'Official Business Partners & Airlines | Sai Samarth Tours Bangalore',
    ogDescription: 'Discover our genuine partnerships with scheduled airlines, verified 3-star & 4-star hotel chains, and local ground transport providers.',
    ogImage: '/sai-samarth-tours-logo.webp',
    ogType: 'website',
    h1: 'Official Business Partners & Alliances'
  },
  '/about': {
    path: '/about',
    primaryKeyword: 'about sai samarth tours bangalore',
    secondaryKeywords: [
      'best travel agency in yelahanka',
      'pilgrimage tour operator bangalore profile',
      'trusted tour company bangalore',
      'tour operator since 2013 bangalore',
      'sai samarth tours office yelahanka'
    ],
    title: 'About Sai Samarth Tours | Leading Travel Agency in Yelahanka Bangalore',
    description: 'Serving over 20,000+ devotees since 2013 with dedicated tour managers, direct flights from Bangalore, VIP darshan passes, and verified 3-star AC hotel stays.',
    canonical: 'https://saisamarthtours.com/about',
    ogTitle: 'About Sai Samarth Tours | Leading Travel Agency in Yelahanka Bangalore',
    ogDescription: 'Learn about Bangalore’s premier pilgrimage tour operator based in Yelahanka New Town. Dedicated to senior-citizen care, pure veg dining, and verified hotels.',
    ogImage: '/about-sai-samarth-tours-agency.webp',
    ogType: 'website',
    h1: 'About Sai Samarth Tours Bangalore'
  },
  '/contact': {
    path: '/contact',
    primaryKeyword: 'contact sai samarth tours bangalore',
    secondaryKeywords: [
      'travel agency in yelahanka new town contact',
      'sai samarth tours phone number',
      'sai samarth tours yelahanka address',
      'pilgrimage tour booking bangalore contact',
      'book tour package bangalore phone'
    ],
    title: 'Contact Us | Sai Samarth Tours Yelahanka Bangalore Office & Phone',
    description: 'Get in touch with Sai Samarth Tours in Yelahanka New Town, Bangalore. Speak with our tour advisors on +91 91877 11649 for instant quotes and bookings.',
    canonical: 'https://saisamarthtours.com/contact',
    ogTitle: 'Contact Us | Sai Samarth Tours Yelahanka Bangalore Office & Phone',
    ogDescription: 'Visit our office in Yelahanka New Town or call +91 91877 11649 / WhatsApp for customized itineraries, flight packages, and instant tour booking.',
    ogImage: '/sai-samarth-tours-logo.webp',
    ogType: 'website',
    h1: 'Contact Sai Samarth Tours Bangalore'
  },
  '/faq': {
    path: '/faq',
    primaryKeyword: 'sai samarth tours faq bangalore',
    secondaryKeywords: [
      'frequently asked questions pilgrimage tours',
      'shirdi package booking questions bangalore',
      'senior citizen tour faq',
      'pure veg tour meals faq',
      'vip darshan pass procedure faq'
    ],
    title: 'Frequently Asked Questions (FAQ) | Sai Samarth Tours Bangalore',
    description: 'Find answers to common questions about Sai Samarth Tours pilgrimage packages, flight bookings, VIP Darshan, pure veg meals, and senior citizen assistance.',
    canonical: 'https://saisamarthtours.com/faq',
    ogTitle: 'Frequently Asked Questions (FAQ) | Sai Samarth Tours Bangalore',
    ogDescription: 'Everything you need to know about our flight bookings, hotel standards, pure vegetarian dining, VIP darshan passes, and cancellation rules.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'Frequently Asked Questions'
  },
  '/cancellation-policy': {
    path: '/cancellation-policy',
    primaryKeyword: 'tour cancellation policy sai samarth tours',
    secondaryKeywords: [
      'pilgrimage tour refund rules bangalore',
      'flight tour rescheduling policy',
      'travel booking cancellation terms',
      'refund terms sai samarth tours'
    ],
    title: 'Cancellation & Refund Policy | Sai Samarth Tours Bangalore',
    description: 'Official cancellation, refund, and tour rescheduling policies for pilgrimage and holiday packages operated by Sai Samarth Tours Bangalore.',
    canonical: 'https://saisamarthtours.com/cancellation-policy',
    ogTitle: 'Cancellation & Refund Policy | Sai Samarth Tours Bangalore',
    ogDescription: 'Transparent cancellation and refund guidelines for domestic flights, deluxe bus tours, and international holiday packages.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'Cancellation & Refund Policy'
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    primaryKeyword: 'privacy policy sai samarth tours',
    secondaryKeywords: [
      'customer data protection travel agency',
      'website privacy terms bangalore',
      'personal information safety sai samarth'
    ],
    title: 'Privacy Policy | Sai Samarth Tours Bangalore',
    description: 'Learn how Sai Samarth Tours protects your personal information, travel booking details, and online communications with data privacy standards.',
    canonical: 'https://saisamarthtours.com/privacy-policy',
    ogTitle: 'Privacy Policy | Sai Samarth Tours Bangalore',
    ogDescription: 'Our commitment to safeguarding customer privacy, booking credentials, and communication records.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'Privacy Policy'
  },
  '/terms-of-use': {
    path: '/terms-of-use',
    primaryKeyword: 'terms of use sai samarth tours',
    secondaryKeywords: [
      'website booking terms bangalore',
      'travel agency service terms',
      'tourist booking agreement terms'
    ],
    title: 'Terms of Use | Sai Samarth Tours Bangalore',
    description: 'Official Terms of Use and website booking agreements governing all pilgrimage, domestic, and international tours by Sai Samarth Tours.',
    canonical: 'https://saisamarthtours.com/terms-of-use',
    ogTitle: 'Terms of Use | Sai Samarth Tours Bangalore',
    ogDescription: 'Legal terms of use and booking agreements governing customer services with Sai Samarth Tours Bangalore.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'Terms of Use'
  },
  '/blog': {
    path: '/blog',
    primaryKeyword: 'travel blog and pilgrimage guides bangalore',
    secondaryKeywords: [
      'hindu temple yatra guides',
      'shirdi darshan blog bangalore',
      'jyotirlinga travel articles',
      'spiritual travel blog india',
      'bangalore to temple guides'
    ],
    title: 'Travel Blog & Pilgrimage Guides | Sai Samarth Tours Bangalore',
    description: 'Read authentic travel guides, temple timings, VIP darshan rules, and itinerary tips for Shirdi, Kashi, Ayodhya, Puri, and overseas tours from Bangalore.',
    canonical: 'https://saisamarthtours.com/blog',
    ogTitle: 'Travel Blog & Pilgrimage Guides | Sai Samarth Tours Bangalore',
    ogDescription: 'Expert travel guides, ritual timings, and authentic pilgrim advice authored by Sai Samarth Tours Bangalore travel specialists.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'website',
    h1: 'Travel Guides & Pilgrimage Blog'
  }
};

// ============================================================================
// 2. DESTINATION HUBS SEO CONFIGURATION
// ============================================================================
export const DESTINATION_PAGES_SEO: Record<string, PageSEOConfig> = {
  'shirdi': {
    path: '/destinations/shirdi',
    primaryKeyword: 'shirdi tour package from bangalore',
    secondaryKeywords: [
      'bangalore to shirdi flight tour',
      'shirdi sai baba darshan package',
      'shirdi airport yatra from bangalore',
      'shani shingnapur darshan tour'
    ],
    title: 'Shirdi Tour Packages from Bangalore | Direct Flights & VIP Darshan',
    description: 'Book direct flight Shirdi tour packages from Bangalore. Land directly at Shirdi Airport with confirmed VIP darshan, Kakad Aarti & 3-star AC hotel stay.',
    canonical: 'https://saisamarthtours.com/destinations/shirdi',
    ogTitle: 'Shirdi Tour Packages from Bangalore | Direct Flights & VIP Darshan',
    ogDescription: 'Experience divine peace in Shirdi with direct flights from Kempegowda Airport, early morning Kakad Aarti, and luxury accommodation.',
    ogImage: '/shirdi-packages-category-card.webp',
    ogType: 'website',
    h1: 'Shirdi Tour Packages from Bangalore'
  },
  'kashi': {
    path: '/destinations/kashi',
    primaryKeyword: 'kashi tour package from bangalore',
    secondaryKeywords: [
      'varanasi pilgrimage tour from bangalore',
      'kashi vishwanath darshan from bangalore',
      'bangalore to varanasi flight yatra',
      'ganga aarti boat ride package'
    ],
    title: 'Kashi Tour Packages from Bangalore | Varanasi Flight Yatras | Sai Samarth Tours',
    description: 'All-inclusive Kashi Varanasi tour packages from Bangalore with return flights. Kashi Vishwanath VIP Darshan, evening Ganga Aarti boat ride & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/destinations/kashi',
    ogTitle: 'Kashi Tour Packages from Bangalore | Varanasi Flight Yatras',
    ogDescription: 'Sacred Kashi Vishwanath pilgrimage departing from Bangalore with direct flights, Ganga boat cruise, and comfortable AC accommodation.',
    ogImage: '/kashi-ayodhya-prayagraj-1.webp',
    ogType: 'website',
    h1: 'Kashi Tour Packages from Bangalore'
  },
  'ayodhya': {
    path: '/destinations/ayodhya',
    primaryKeyword: 'ayodhya tour package from bangalore',
    secondaryKeywords: [
      'ram mandir tour package from bangalore',
      'ayodhya ram janmabhoomi darshan package',
      'bangalore to ayodhya flight tour',
      'hanuman garhi ayodhya yatra'
    ],
    title: 'Ayodhya Tour Packages from Bangalore | Ram Mandir Darshan | Sai Samarth Tours',
    description: 'Curated Ayodhya tour packages from Bangalore with flights. Confirmed Shri Ram Janmabhoomi VIP Darshan, Hanuman Garhi, Kanak Bhawan & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/destinations/ayodhya',
    ogTitle: 'Ayodhya Tour Packages from Bangalore | Ram Mandir Darshan',
    ogDescription: 'Visit the sacred birthplace of Lord Rama in Ayodhya with direct flights from Bangalore, verified hotels, and hassle-free temple coordination.',
    ogImage: '/kashi-ayodhya-prayagraj-1.webp',
    ogType: 'website',
    h1: 'Ayodhya Tour Packages from Bangalore'
  },
  'ujjain': {
    path: '/destinations/ujjain',
    primaryKeyword: 'ujjain tour package from bangalore',
    secondaryKeywords: [
      'mahakaleshwar bhasma aarti tour from bangalore',
      'bangalore to ujjain flight package',
      'mahakal lok corridor tour bangalore',
      'kaal bhairav ujjain yatra'
    ],
    title: 'Ujjain Tour Package from Bangalore | Mahakaleshwar Bhasma Aarti | Sai Samarth Tours',
    description: 'Book Ujjain Mahakaleshwar tour package from Bangalore with flights. Confirmed 4:00 AM Bhasma Aarti guidance, Mahakal Lok Corridor & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/destinations/ujjain',
    ogTitle: 'Ujjain Tour Package from Bangalore | Mahakaleshwar Bhasma Aarti',
    ogDescription: 'Spiritual Ujjain Jyotirlinga tour departing from Bangalore featuring Mahakaleshwar Bhasma Aarti, Harsiddhi Shaktipeeth, and Mahakal Lok Corridor.',
    ogImage: '/mahakal-lok-corridor-ujjain-night.webp',
    ogType: 'website',
    h1: 'Ujjain Mahakaleshwar Tour Packages from Bangalore'
  },
  'omkareshwar': {
    path: '/destinations/omkareshwar',
    primaryKeyword: 'omkareshwar tour package from bangalore',
    secondaryKeywords: [
      'omkareshwar jyotirlinga package from bangalore',
      'narmada river parikrama tour',
      'mamleshwar jyotirlinga tour bangalore',
      'indore to omkareshwar tour'
    ],
    title: 'Omkareshwar Tour Package from Bangalore | Narmada River Yatra | Sai Samarth Tours',
    description: 'All-inclusive Omkareshwar Jyotirlinga tour package from Bangalore. Covers Omkareshwar Island, Mamleshwar Jyotirlinga, Narmada holy boat ride & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/destinations/omkareshwar',
    ogTitle: 'Omkareshwar Tour Package from Bangalore | Narmada River Yatra',
    ogDescription: 'Visit the sacred Om-shaped island of Omkareshwar and Mamleshwar Jyotirlinga on the Narmada River with direct flights from Bangalore to Indore.',
    ogImage: '/omkareshwar-jyotirlinga-temple-narmada-river.webp',
    ogType: 'website',
    h1: 'Omkareshwar Jyotirlinga Tour Packages from Bangalore'
  },
  'puri': {
    path: '/destinations/puri',
    primaryKeyword: 'puri tour package from bangalore',
    secondaryKeywords: [
      'puri jagannath tour package from bangalore',
      'jagannath puri trip from bangalore',
      'bangalore to puri flight package',
      'puri golden beach tour'
    ],
    title: 'Puri Tour Package from Bangalore | Sri Jagannath Temple Darshan | Sai Samarth Tours',
    description: 'Curated Puri tour packages from Bangalore with return flights to Bhubaneswar. Priority Jagannath Temple Darshan, Golden Beach, Mahaprasad & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/destinations/puri',
    ogTitle: 'Puri Tour Package from Bangalore | Sri Jagannath Temple Darshan',
    ogDescription: 'Sacred Char Dham yatra to Puri Lord Jagannath temple with direct flights from Bangalore, authentic Mahaprasad dining, and luxury beach hotels.',
    ogImage: '/puri-jagannath-konark-tour-package-from-bangalore-1.webp',
    ogType: 'website',
    h1: 'Puri Jagannath Tour Packages from Bangalore'
  },
  'konark': {
    path: '/destinations/konark',
    primaryKeyword: 'konark tour package from bangalore',
    secondaryKeywords: [
      'konark sun temple package from bangalore',
      'chandrabhaga beach tour odisha',
      'puri konark tour package from bangalore',
      'unesco konark temple trip'
    ],
    title: 'Konark Tour Package from Bangalore | Sun Temple & Chandrabhaga | Sai Samarth Tours',
    description: 'All-inclusive Konark tour packages from Bangalore. Explore UNESCO World Heritage Konark Sun Temple chariot, Chandrabhaga Beach, Marine Drive & Puri Jagannath.',
    canonical: 'https://saisamarthtours.com/destinations/konark',
    ogTitle: 'Konark Tour Package from Bangalore | Sun Temple & Chandrabhaga',
    ogDescription: 'Marvel at the 13th-century stone chariot architecture of Konark Sun Temple combined with Puri Jagannath darshan and Bhubaneswar transfers.',
    ogImage: '/puri-jagannath-konark-tour-package-from-bangalore-2.webp',
    ogType: 'website',
    h1: 'Konark Sun Temple Tour Packages from Bangalore'
  },
  'kamakhya': {
    path: '/destinations/kamakhya',
    primaryKeyword: 'kamakhya tour package from bangalore',
    secondaryKeywords: [
      'kamakhya temple tour from bangalore',
      'guwahati kamakhya flight package',
      'kamakhya shaktipeeth yatra bangalore',
      'nilachal hills kamakhya darshan'
    ],
    title: 'Kamakhya Tour Package from Bangalore | Guwahati Temple Darshan | Sai Samarth Tours',
    description: 'Special Kamakhya temple tour package from Bangalore by flight. Nilachal Hills Maa Kamakhya VIP Darshan, Brahmaputra cruise, Umananda & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/destinations/kamakhya',
    ogTitle: 'Kamakhya Tour Package from Bangalore | Guwahati Temple Darshan',
    ogDescription: 'Sacred pilgrimage to Maa Kamakhya Devi Shaktipeeth in Guwahati with direct flights from Bangalore, VIP darshan coordination, and scenic Brahmaputra views.',
    ogImage: '/kamakhya-temple-guwahati-travel-guide-hero.webp',
    ogType: 'website',
    h1: 'Kamakhya Temple Tour Packages from Bangalore'
  },
  'meghalaya': {
    path: '/destinations/meghalaya',
    primaryKeyword: 'meghalaya tour package from bangalore',
    secondaryKeywords: [
      'shillong cherrapunji tour package from bangalore',
      'dawki river tour from bangalore',
      'meghalaya holiday package with flight',
      'northeast india tour package from bangalore'
    ],
    title: 'Meghalaya Tour Package from Bangalore | Shillong, Cherrapunji & Dawki | Sai Samarth Tours',
    description: 'Scenic Meghalaya tour packages from Bangalore with flights. Explore Shillong, Cherrapunji Nohkalikai waterfalls, Dawki crystal Umngot river & Kamakhya Temple.',
    canonical: 'https://saisamarthtours.com/destinations/meghalaya',
    ogTitle: 'Meghalaya Tour Package from Bangalore | Shillong, Cherrapunji & Dawki',
    ogDescription: 'Discover the Abode of Clouds from Bangalore. Experience Nohkalikai Falls, Living Root Bridges, glass-clear Dawki river, and comfortable hill-station stays.',
    ogImage: '/kamakhya-with-meghalaya-tour-package-from-bangalore.webp',
    ogType: 'website',
    h1: 'Meghalaya Tour Packages from Bangalore'
  },
  'jyotirlinga': {
    path: '/destinations/jyotirlinga',
    primaryKeyword: 'jyotirlinga tour packages from bangalore',
    secondaryKeywords: [
      '12 jyotirlinga tour package from bangalore',
      'maharashtra jyotirlinga tour from bangalore',
      'ujjain omkareshwar jyotirlinga package',
      'shiva pilgrimage tours from bangalore'
    ],
    title: 'Jyotirlinga Tour Packages from Bangalore | 12 Sacred Shiva Yatras | Sai Samarth Tours',
    description: 'Curated 12 Jyotirlinga tour packages from Bangalore by flight & train. Covers Maharashtra 5 Jyotirlingas, Ujjain, Omkareshwar, Somnath, Kashi & Rameshwaram.',
    canonical: 'https://saisamarthtours.com/destinations/jyotirlinga',
    ogTitle: 'Jyotirlinga Tour Packages from Bangalore | 12 Sacred Shiva Yatras',
    ogDescription: 'Embark on sacred Jyotirlinga pilgrimages across India with flights from Bangalore, confirmed temple entry, pure veg meals, and experienced tour escorts.',
    ogImage: '/shirdi-packages-category-card.webp',
    ogType: 'website',
    h1: '12 Jyotirlinga Tour Packages from Bangalore'
  },
  'chardham': {
    path: '/destinations/chardham',
    primaryKeyword: 'chardham yatra package from bangalore',
    secondaryKeywords: [
      'kedarnath badrinath tour from bangalore',
      'uttarakhand chardham flight package',
      'kedarnath helicopter package from bangalore',
      'char dham yatra by air from bangalore'
    ],
    title: 'Char Dham Yatra from Bangalore | Kedarnath & Badrinath | Sai Samarth Tours',
    description: 'Spiritual Char Dham Yatra package from Bangalore. Covers Yamunotri, Gangotri, Kedarnath, and Badrinath with flights to Dehradun, helicopter booking & deluxe hotels.',
    canonical: 'https://saisamarthtours.com/destinations/chardham',
    ogTitle: 'Char Dham Yatra from Bangalore | Kedarnath & Badrinath',
    ogDescription: 'Complete Himalayan Char Dham yatra departing from Bangalore with helicopter ticketing assistance, experienced mountain chauffeurs, and medical care support.',
    ogImage: '/best-time-to-visit-kedarnath-weather-temperature-guide-hero.webp',
    ogType: 'website',
    h1: 'Char Dham Yatra Packages from Bangalore'
  }
};

// ============================================================================
// 3. PRIORITY TOUR PACKAGES SEO CONFIGURATION (TASK 3)
// ============================================================================
export const PACKAGE_PAGES_SEO: Record<string, PageSEOConfig> = {
  // 1. Direct Shirdi Tour
  'shirdi-regular': {
    path: '/package/shirdi-tour-package-from-bangalore',
    primaryKeyword: 'direct shirdi flight package from bangalore',
    secondaryKeywords: [
      'shirdi tour package from bangalore',
      'bangalore to shirdi direct flight',
      'shirdi kakad aarti darshan from bangalore',
      'shirdi yatra from bangalore by air'
    ],
    title: 'Direct Shirdi Flight Tour Package from Bangalore | VIP Darshan | Sai Samarth Tours',
    description: 'Book direct flight Shirdi tour package from Bangalore. Land directly at Shirdi Airport with confirmed 5:00 AM Kakad Aarti, VIP Samadhi Mandir darshan, Shani Shingnapur & 3-star AC hotel.',
    canonical: 'https://saisamarthtours.com/package/shirdi-tour-package-from-bangalore',
    ogTitle: 'Direct Shirdi Flight Tour Package from Bangalore | VIP Darshan',
    ogDescription: 'Fastest 1N/2D Shirdi pilgrimage from Bangalore landing directly at Shirdi Airport. Confirmed Kakad Aarti, VIP darshan passes, pure veg meals, and AC transport.',
    ogImage: '/shirdi-flight-tour-package-from-bangalore-1.webp',
    ogType: 'product',
    h1: 'Shirdi Tour Package from Bangalore – Direct Flight & VIP Darshan'
  },

  // 2. Shirdi via Pune
  'shirdi-via-pune': {
    path: '/package/shirdi-via-pune-tour-package-from-bangalore',
    primaryKeyword: 'shirdi tour package via pune from bangalore',
    secondaryKeywords: [
      'bangalore to pune shirdi tour',
      'shirdi via pune flight package',
      'ranjangaon mahaganapati shirdi package',
      'pune to shirdi package from bangalore'
    ],
    title: 'Shirdi Tour Package via Pune from Bangalore | Flight & Darshan | Sai Samarth Tours',
    description: 'All-inclusive Shirdi via Pune flight tour from Bangalore. Includes return airfare, Ranjangaon Mahaganapati darshan, Shirdi Sai Baba VIP darshan, Shani Shingnapur & AC hotel stay.',
    canonical: 'https://saisamarthtours.com/package/shirdi-via-pune-tour-package-from-bangalore',
    ogTitle: 'Shirdi Tour Package via Pune from Bangalore | Flight & Darshan',
    ogDescription: 'Comfortable 2N/3D pilgrimage from Bangalore via Pune. Features Ranjangaon Ganapati, Shirdi Sai Baba VIP darshan, and Shani Shingnapur with dedicated AC coach.',
    ogImage: '/shirdi-flight-tour-package-from-bangalore-2.webp',
    ogType: 'product',
    h1: 'Shirdi Tour Package via Pune from Bangalore'
  },

  // 3. Shirdi via Mumbai
  'shirdi-via-mumbai': {
    path: '/package/shirdi-via-mumbai-tour-package-from-bangalore',
    primaryKeyword: 'shirdi tour package via mumbai from bangalore',
    secondaryKeywords: [
      'mumbai shirdi tour package from bangalore',
      'siddhivinayak shirdi package from bangalore',
      'bangalore to mumbai shirdi flight tour',
      'trimbakeshwar shirdi tour from bangalore'
    ],
    title: 'Shirdi Tour Package via Mumbai from Bangalore | Siddhivinayak & Shirdi | Sai Samarth Tours',
    description: 'Experience Mumbai and Shirdi together from Bangalore. Direct flights, Siddhivinayak Temple, Trimbakeshwar Jyotirlinga, Shirdi Sai Baba VIP darshan & 3-star AC accommodation.',
    canonical: 'https://saisamarthtours.com/package/shirdi-via-mumbai-tour-package-from-bangalore',
    ogTitle: 'Shirdi Tour Package via Mumbai from Bangalore | Siddhivinayak & Shirdi',
    ogDescription: '2N/3D tour combining Mumbai Siddhivinayak & Mahalakshmi temples, Trimbakeshwar Jyotirlinga in Nashik, and Shirdi Sai Baba Samadhi Mandir VIP darshan.',
    ogImage: '/shirdi-flight-tour-package-from-bangalore-3.webp',
    ogType: 'product',
    h1: 'Shirdi Tour Package via Mumbai from Bangalore'
  },

  // 4. Shirdi with 2 Jyotirlingas
  'shirdi-2-jyothirlinga': {
    path: '/package/shirdi-with-2-jyotirlinga-tour-package-from-bangalore',
    primaryKeyword: 'shirdi with 2 jyotirlinga tour package from bangalore',
    secondaryKeywords: [
      'shirdi trimbakeshwar grishneshwar package from bangalore',
      'maharashtra 2 jyotirlinga shirdi tour',
      'shirdi jyotirlinga tour from bangalore',
      'nashik ellora shirdi package'
    ],
    title: 'Shirdi with 2 Jyotirlinga Tour Package from Bangalore | Trimbakeshwar & Grishneshwar',
    description: 'Sacred Maharashtra pilgrimage from Bangalore covering Shirdi Sai Baba, Trimbakeshwar in Nashik, and Grishneshwar near Ellora. Includes return flights, pure veg meals & VIP darshan.',
    canonical: 'https://saisamarthtours.com/package/shirdi-with-2-jyotirlinga-tour-package-from-bangalore',
    ogTitle: 'Shirdi with 2 Jyotirlinga Tour Package from Bangalore | Trimbakeshwar & Grishneshwar',
    ogDescription: '2N/3D spiritual circuit covering Trimbakeshwar and Grishneshwar Jyotirlingas along with Shirdi Sai Baba VIP darshan and Shani Shingnapur.',
    ogImage: '/shirdi-packages-category-card.webp',
    ogType: 'product',
    h1: 'Shirdi with 2 Jyotirlinga Tour Package from Bangalore'
  },

  // 5. Shirdi with 3 Jyotirlingas
  'shirdi-3-jyothirlinga': {
    path: '/package/shirdi-with-3-jyotirlinga-tour-package-from-bangalore',
    primaryKeyword: 'shirdi with 3 jyotirlinga tour package from bangalore',
    secondaryKeywords: [
      'bhimashankar trimbakeshwar grishneshwar shirdi package',
      'maharashtra 3 jyotirlinga tour from bangalore',
      '3 jyotirlinga with shirdi flight tour',
      'shirdi jyotirlinga yatra bangalore'
    ],
    title: 'Shirdi with 3 Jyotirlinga Tour Package from Bangalore | Complete Maharashtra Yatra',
    description: 'Complete 4-day Maharashtra Jyotirlinga circuit from Bangalore. Covers Bhimashankar, Trimbakeshwar, Grishneshwar, and Shirdi Sai Baba VIP darshan with flights, AC travel & 3-star stays.',
    canonical: 'https://saisamarthtours.com/package/shirdi-with-3-jyotirlinga-tour-package-from-bangalore',
    ogTitle: 'Shirdi with 3 Jyotirlinga Tour Package from Bangalore | Complete Maharashtra Yatra',
    ogDescription: 'All-inclusive 3N/4D pilgrimage covering all 3 Western Maharashtra Jyotirlingas, Shirdi Sai Baba, Ellora Caves, and Shani Shingnapur with dedicated tour managers.',
    ogImage: '/shirdi-flight-tour-package-from-bangalore-1.webp',
    ogType: 'product',
    h1: 'Shirdi with 3 Jyotirlinga Tour Package from Bangalore'
  },

  // 6. Kashi with Ayodhya
  'kashi-ayodhya': {
    path: '/package/kashi-ayodhya-tour-package-from-bangalore',
    primaryKeyword: 'kashi ayodhya tour package from bangalore',
    secondaryKeywords: [
      'bangalore to kashi ayodhya tour',
      'varanasi ayodhya flight tour from bangalore',
      'kashi vishwanath ayodhya ram mandir package',
      'ayodhya kashi darshan package'
    ],
    title: 'Kashi Ayodhya Tour Package from Bangalore | Flight, Temple Darshan & AC Hotels',
    description: 'Sacred 3-day spiritual yatra from Bangalore. Direct flights to Varanasi, Kashi Vishwanath Corridor, evening Ganga Aarti boat ride, and Ayodhya Shri Ram Janmabhoomi VIP darshan.',
    canonical: 'https://saisamarthtours.com/package/kashi-ayodhya-tour-package-from-bangalore',
    ogTitle: 'Kashi Ayodhya Tour Package from Bangalore | Flight, Temple Darshan & AC Hotels',
    ogDescription: '2N/3D sacred yatra covering Kashi Vishwanath, Annapurna Temple, Dashashwamedh Ganga Aarti, and Ayodhya Ram Mandir Janmabhoomi with flights from Bangalore.',
    ogImage: '/kashi-ayodhya-prayagraj-1.webp',
    ogType: 'product',
    h1: 'Kashi Ayodhya Tour Package from Bangalore'
  },

  // 7. Kashi Ayodhya Prayagraj and Bodhgaya
  'kashi-ayodhya-prayagraj': {
    path: '/package/kashi-ayodhya-prayagraj-tour-package-from-bangalore',
    primaryKeyword: 'kashi ayodhya prayagraj tour package from bangalore',
    secondaryKeywords: [
      'kashi ayodhya prayagraj bodhgaya package',
      'varanasi ayodhya prayagraj flight package',
      'triveni sangam kashi ram mandir tour',
      'kashi yatra from bangalore by flight'
    ],
    title: 'Kashi Ayodhya Prayagraj Tour Package from Bangalore | Complete UP Pilgrimage',
    description: 'All-inclusive 4-day pilgrimage from Bangalore by flight. Covers Kashi Vishwanath, Ayodhya Ram Mandir, Triveni Sangam boat ride in Prayagraj, and Bodh Gaya with pure veg meals & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/package/kashi-ayodhya-prayagraj-tour-package-from-bangalore',
    ogTitle: 'Kashi Ayodhya Prayagraj Tour Package from Bangalore | Complete UP Pilgrimage',
    ogDescription: 'Comprehensive 3N/4D spiritual circuit covering Kashi Vishwanath, Ayodhya Ram Janmabhoomi, Prayagraj Triveni Sangam, and Bodhgaya with round-trip flights.',
    ogImage: '/kashi-ayodhya-prayagraj-1.webp',
    ogType: 'product',
    h1: 'Kashi Ayodhya Prayagraj Tour Package from Bangalore'
  },

  // 8. Ujjain and Omkareshwar
  'indore-ujjain': {
    path: '/package/indore-ujjain-omkareshwar-tour-package-from-bangalore',
    primaryKeyword: 'indore ujjain omkareshwar tour package from bangalore',
    secondaryKeywords: [
      'ujjain bhasma aarti tour package from bangalore',
      'omkareshwar jyotirlinga package from bangalore',
      'indore ujjain tour package from bangalore',
      'mahakaleshwar omkareshwar flight tour'
    ],
    title: 'Indore Ujjain Omkareshwar Tour Package from Bangalore | Bhasma Aarti & Darshan',
    description: 'Direct flight twin-Jyotirlinga yatra from Bangalore to Indore. Includes Ujjain Mahakaleshwar 4:00 AM Bhasma Aarti, Mahakal Lok Corridor, Omkareshwar Island & Narmada boat ride.',
    canonical: 'https://saisamarthtours.com/package/indore-ujjain-omkareshwar-tour-package-from-bangalore',
    ogTitle: 'Indore Ujjain Omkareshwar Tour Package from Bangalore | Bhasma Aarti & Darshan',
    ogDescription: '3N/4D Madhya Pradesh Jyotirlinga tour departing from Bangalore by air. Covers Mahakaleshwar, Omkareshwar, Mamleshwar, and Indore culinary markets.',
    ogImage: '/indore-ujjain-omkareshwar-tour-package-from-bangalore-1.webp',
    ogType: 'product',
    h1: 'Indore Ujjain Omkareshwar Tour Package from Bangalore'
  },

  // 9. Puri Jagannath and Konark
  'puri-jagannath': {
    path: '/package/puri-jagannath-konark-tour-package-from-bangalore',
    primaryKeyword: 'puri jagannath tour package from bangalore',
    secondaryKeywords: [
      'puri konark tour package from bangalore',
      'jagannath puri trip from bangalore',
      'bangalore to puri tour package by flight',
      'puri jagannath darshan package from bangalore'
    ],
    title: 'Puri Jagannath Konark Tour Package from Bangalore | Flights & Priority Darshan',
    description: 'Book 3-day Puri Jagannath tour from Bangalore with flights to Bhubaneswar. Priority Jagannath Temple darshan, UNESCO Konark Sun Temple chariot, Chandrabhaga beach & 3-star AC hotel.',
    canonical: 'https://saisamarthtours.com/package/puri-jagannath-konark-tour-package-from-bangalore',
    ogTitle: 'Puri Jagannath Konark Tour Package from Bangalore | Flights & Priority Darshan',
    ogDescription: '2N/3D sacred Odisha Golden Triangle tour from Bangalore. Experience Lord Jagannath darshan, Konark Sun Temple, and Lingaraj Temple with beach resort stay.',
    ogImage: '/puri-jagannath-konark-tour-package-from-bangalore-1.webp',
    ogType: 'product',
    h1: 'Puri Jagannath Konark Tour Package from Bangalore'
  },

  // 10. Kamakhya and Meghalaya
  'kamakhya-meghalaya': {
    path: '/package/kamakhya-with-meghalaya-tour-package-from-bangalore',
    primaryKeyword: 'kamakhya with meghalaya tour package from bangalore',
    secondaryKeywords: [
      'kamakhya meghalaya tour package',
      'kamakhya temple tour from bangalore',
      'meghalaya tour package from bangalore',
      'guwahati shillong cherrapunji tour package'
    ],
    title: 'Kamakhya with Meghalaya Tour Package from Bangalore | Flight & Sightseeing Yatra',
    description: 'Complete Northeast spiritual & scenic yatra from Bangalore. Direct flights to Guwahati, Maa Kamakhya VIP darshan, Umananda, Shillong, Cherrapunji Nohkalikai Falls & Dawki river.',
    canonical: 'https://saisamarthtours.com/package/kamakhya-with-meghalaya-tour-package-from-bangalore',
    ogTitle: 'Kamakhya with Meghalaya Tour Package from Bangalore | Flight & Sightseeing Yatra',
    ogDescription: '4N/5D all-inclusive Northeast tour from Bangalore. Nilachal Hills Maa Kamakhya darshan, Shillong viewpoints, Cherrapunji waterfalls, and Dawki border boat cruise.',
    ogImage: '/kamakhya-with-meghalaya-tour-package-from-bangalore.webp',
    ogType: 'product',
    h1: 'Kamakhya with Meghalaya Tour Package from Bangalore'
  },

  // 11. Kamakhya Temple Guwahati
  'kamakhya': {
    path: '/package/kamakhya-temple-tour-package-from-bangalore',
    primaryKeyword: 'kamakhya temple tour package from bangalore',
    secondaryKeywords: [
      'kamakhya darshan tour package',
      'guwahati kamakhya flight tour',
      'kamakhya shaktipeeth yatra from bangalore',
      'maa kamakhya temple trip'
    ],
    title: 'Kamakhya Temple Tour Package from Bangalore | Guwahati Darshan & Flights',
    description: 'Direct flight Maa Kamakhya Temple pilgrimage from Bangalore. Includes VIP darshan assistance on Nilachal Hills, Brahmaputra river sunset cruise, Umananda island & 3-star AC hotel.',
    canonical: 'https://saisamarthtours.com/package/kamakhya-temple-tour-package-from-bangalore',
    ogTitle: 'Kamakhya Temple Tour Package from Bangalore | Guwahati Darshan & Flights',
    ogDescription: 'Dedicated 2N/3D pilgrimage to Maa Kamakhya Shaktipeeth in Guwahati with Bangalore return flights, river cruise, and private AC transfers.',
    ogImage: '/kamakhya-temple-guwahati-travel-guide-hero.webp',
    ogType: 'product',
    h1: 'Kamakhya Temple Guwahati Tour Package from Bangalore'
  },

  // 12. Kolhapur and Pandharpur
  'kholapur-pandarpur': {
    path: '/package/kolhapur-pandharpur-tour-package-from-bangalore',
    primaryKeyword: 'kolhapur pandharpur tour package from bangalore',
    secondaryKeywords: [
      'pandharpur vitthal darshan from bangalore',
      'kolhapur mahalakshmi tour from bangalore',
      'pandharpur kolhapur tour package',
      'maharashtra temple yatra from bangalore'
    ],
    title: 'Kolhapur Pandharpur Tour Package from Bangalore | Vitthal & Mahalakshmi Yatra',
    description: 'Spiritual journey to Pandharpur Vitthal Rukmini Mandir and Kolhapur Ambabai Mahalakshmi Temple from Bangalore. Includes AC travel, verified hotel stays & pure veg meals.',
    canonical: 'https://saisamarthtours.com/package/kolhapur-pandharpur-tour-package-from-bangalore',
    ogTitle: 'Kolhapur Pandharpur Tour Package from Bangalore | Vitthal & Mahalakshmi Yatra',
    ogDescription: '2N/3D sacred Maharashtra pilgrimage from Bangalore covering Pandharpur Chandrabhaga holy snan and Kolhapur Shaktipeeth darshan with pure veg dining.',
    ogImage: '/shirdi-packages-category-card.webp',
    ogType: 'product',
    h1: 'Kolhapur Pandharpur Tour Package from Bangalore'
  },

  // Deluxe Bus Tour Packages
  'panch-bootha-balaji-bus-tour': {
    path: '/package/panch-bootha-yatra-tirumala-balaji-bus-tour-from-bangalore',
    primaryKeyword: 'panch bootha yatra bus tour from bangalore',
    secondaryKeywords: [
      'tirumala balaji bus tour from bangalore',
      'pancha bootha sthalam tour from bangalore',
      'bangalore to tirupati chidambaram bus package',
      '5 shiva temples bus yatra'
    ],
    title: 'Panch Bootha Yatra & Tirumala Balaji Bus Tour from Bangalore | 2N/3D Luxury Coach',
    description: 'Flagship 2N/3D deluxe pushback AC bus tour from Bangalore for ₹16,999/- all-inclusive. Covers Tirumala Balaji ₹300 VIP darshan and 5 sacred Shiva element temples.',
    canonical: 'https://saisamarthtours.com/package/panch-bootha-yatra-tirumala-balaji-bus-tour-from-bangalore',
    ogTitle: 'Panch Bootha Yatra & Tirumala Balaji Bus Tour from Bangalore | 2N/3D Luxury Coach',
    ogDescription: 'All-inclusive weekend luxury bus yatra covering Tirumala Balaji, Srikalahasti, Kanchipuram, Tiruvannamalai, Chidambaram, and Trichy Jambukeswarar.',
    ogImage: '/panch-bootha-bus-yatra-1.webp',
    ogType: 'product',
    h1: 'Panch Bootha Yatra & Tirumala Balaji Bus Tour from Bangalore'
  },

  'shirdi-saptashrungi-kolhapur-bus-tour': {
    path: '/package/shirdi-saptha-shrungi-kolhapur-bus-tour-from-bangalore',
    primaryKeyword: 'shirdi kolhapur bus tour from bangalore',
    secondaryKeywords: [
      'shirdi saptashrungi bus package from bangalore',
      'bangalore to shirdi bus yatra',
      'kolhapur mahalakshmi shirdi bus tour',
      'maharashtra temple bus tour bangalore'
    ],
    title: 'Shirdi Saptashrungi Kolhapur Bus Tour from Bangalore | 4N/5D Deluxe AC Coach',
    description: 'Book 4N/5D Deluxe AC bus tour from Bangalore covering Shirdi Sai Baba, Vani Saptashrungi Shaktipeeth, Shani Shingnapur & Kolhapur Mahalakshmi for ₹18,999/-.',
    canonical: 'https://saisamarthtours.com/package/shirdi-saptha-shrungi-kolhapur-bus-tour-from-bangalore',
    ogTitle: 'Shirdi Saptashrungi Kolhapur Bus Tour from Bangalore | 4N/5D Deluxe AC Coach',
    ogDescription: 'Comfortable road yatra across Maharashtra holy shrines with pushback AC coach seating, verified 3-star AC hotel stays, and on-board tour manager.',
    ogImage: '/shirdi-flight-tour-package-from-bangalore-2.webp',
    ogType: 'product',
    h1: 'Shirdi Saptashrungi Kolhapur Deluxe Bus Tour from Bangalore'
  },

  'south-india-yatra-bus-tour': {
    path: '/package/south-india-yatra-bus-tour-from-bangalore',
    primaryKeyword: 'south india temple bus tour from bangalore',
    secondaryKeywords: [
      'rameshwaram madurai bus tour from bangalore',
      'kanyakumari padmanabhaswamy bus yatra',
      'tamil nadu kerala temple tour from bangalore',
      'deluxe bus south india pilgrimage'
    ],
    title: 'South India Yatra Deluxe Bus Tour from Bangalore | 6N/7D Tamil Nadu & Kerala',
    description: 'Comprehensive 6N/7D luxury bus pilgrimage from Bangalore covering Madurai Meenakshi, Rameshwaram Ramanathaswamy, Kanyakumari & Trivandrum Padmanabhaswamy for ₹24,999/-.',
    canonical: 'https://saisamarthtours.com/package/south-india-yatra-bus-tour-from-bangalore',
    ogTitle: 'South India Yatra Deluxe Bus Tour from Bangalore | 6N/7D Tamil Nadu & Kerala',
    ogDescription: 'Grand temple circuit of South India in a luxury AC coach with 3-star stays, pure vegetarian South Indian meals, and senior citizen assistance.',
    ogImage: '/domestic-tours-hero-banner-desktop.webp',
    ogType: 'product',
    h1: 'South India Yatra Deluxe Bus Tour from Bangalore'
  },

  // Other Pilgrimage & Domestic Packages
  'rameshwaram': {
    path: '/package/rameshwaram-madurai-kanyakumari-tour-package-from-bangalore',
    primaryKeyword: 'rameshwaram madurai kanyakumari tour package from bangalore',
    secondaryKeywords: [
      'rameshwaram tour package from bangalore',
      'madurai meenakshi kanyakumari tour bangalore',
      'bangalore to rameshwaram flight tour',
      'south india sacred triangle yatra'
    ],
    title: 'Rameshwaram Madurai Kanyakumari Tour Package from Bangalore | Flight & Stays',
    description: 'Book 4N/5D South India pilgrimage from Bangalore. Covers Ramanathaswamy Jyotirlinga 22 theerthams, Dhanushkodi, Madurai Meenakshi Amman & Kanyakumari sunset.',
    canonical: 'https://saisamarthtours.com/package/rameshwaram-madurai-kanyakumari-tour-package-from-bangalore',
    ogTitle: 'Rameshwaram Madurai Kanyakumari Tour Package from Bangalore | Flight & Stays',
    ogDescription: 'Divine pilgrimage to Tamil Nadu’s holiest shrines with Bangalore flights, dedicated AC transport, verified hotels, and pure veg dining.',
    ogImage: '/domestic-tours-hero-banner-desktop.webp',
    ogType: 'product',
    h1: 'Rameshwaram Madurai Kanyakumari Tour Package from Bangalore'
  },

  'gujarat': {
    path: '/package/grand-gujarat-somnath-dwarka-tour-package-from-bangalore',
    primaryKeyword: 'somnath dwarka tour package from bangalore',
    secondaryKeywords: [
      'gujarat pilgrimage package from bangalore',
      'dwarkadhish somnath flight tour from bangalore',
      'nageshwar jyotirlinga tour bangalore',
      'bet dwarka somnath light show package'
    ],
    title: 'Grand Gujarat Somnath Dwarka Tour Package from Bangalore | Flight Yatra',
    description: 'Sacred 5N/6D Gujarat pilgrimage from Bangalore. Covers Dwarkadhish Mandir, Bet Dwarka, Nageshwar Jyotirlinga, Somnath light & sound show, and Porbandar with flights & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/package/grand-gujarat-somnath-dwarka-tour-package-from-bangalore',
    ogTitle: 'Grand Gujarat Somnath Dwarka Tour Package from Bangalore | Flight Yatra',
    ogDescription: 'Experience divine blessings at Dwarkadhish and Somnath Jyotirlinga on the Arabian Sea with flights from Bangalore and Gujarati/South Indian meals.',
    ogImage: '/shirdi-packages-category-card.webp',
    ogType: 'product',
    h1: 'Grand Gujarat Somnath Dwarka Tour Package from Bangalore'
  },

  'vaishnodevi': {
    path: '/package/vaishnodevi-golden-temple-tour-package-from-bangalore',
    primaryKeyword: 'vaishno devi golden temple tour package from bangalore',
    secondaryKeywords: [
      'vaishno devi package from bangalore with flight',
      'amritsar golden temple tour from bangalore',
      'katra vaishno devi yatra bangalore',
      'wagah border amritsar tour package'
    ],
    title: 'Vaishno Devi & Golden Temple Tour Package from Bangalore | Flight Yatra',
    description: 'Holy 4N/5D yatra from Bangalore covering Mata Vaishno Devi Bhavan in Katra, Amritsar Golden Temple (Harmandir Sahib), and Wagah Border with flights & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/package/vaishnodevi-golden-temple-tour-package-from-bangalore',
    ogTitle: 'Vaishno Devi & Golden Temple Tour Package from Bangalore | Flight Yatra',
    ogDescription: 'Spiritual journey from Bangalore to Katra and Amritsar with helicopter/battery car assistance for senior citizens, pure veg meals, and AC transfers.',
    ogImage: '/pilgrimage-packages-category-card.webp',
    ogType: 'product',
    h1: 'Vaishno Devi & Golden Temple Tour Package from Bangalore'
  },

  'baidyanath': {
    path: '/package/baidyanath-dham-tour-package-from-bangalore',
    primaryKeyword: 'baidyanath dham tour package from bangalore',
    secondaryKeywords: [
      'deoghar baidyanath tour from bangalore',
      'baba baidyanath jyotirlinga flight package',
      'bangalore to deoghar pilgrimage',
      'basukinath temple deoghar package'
    ],
    title: 'Baidyanath Dham Deoghar Tour Package from Bangalore | Flight Yatra',
    description: 'Sacred 2N/3D Baidyanath Dham Jyotirlinga tour package from Bangalore with flights. Includes Baba Baidyanath Mandir VIP darshan, Basukinath & 3-star AC hotel stay.',
    canonical: 'https://saisamarthtours.com/package/baidyanath-dham-tour-package-from-bangalore',
    ogTitle: 'Baidyanath Dham Deoghar Tour Package from Bangalore | Flight Yatra',
    ogDescription: 'Visit the divine healing shrine of Baba Baidyanath Jyotirlinga in Deoghar with direct flights from Bangalore, VIP darshan coordination, and pure veg meals.',
    ogImage: '/pilgrimage-packages-category-card.webp',
    ogType: 'product',
    h1: 'Baidyanath Dham Deoghar Tour Package from Bangalore'
  },

  'nepal': {
    path: '/package/nepal-muktinath-pashupatinath-tour-package-from-bangalore',
    primaryKeyword: 'nepal muktinath tour package from bangalore',
    secondaryKeywords: [
      'pashupatinath tour from bangalore',
      'nepal pilgrimage package from bangalore',
      'kathmandu pokhara muktinath flight tour',
      'muktinath 108 water spouts yatra'
    ],
    title: 'Nepal Muktinath & Pashupatinath Tour Package from Bangalore | Himalayan Yatra',
    description: 'All-inclusive 5N/6D Himalayan spiritual tour from Bangalore. Covers Kathmandu Pashupatinath, Pokhara, Jomsom flight, and sacred Muktinath 108 spouts with flights & 3-star stays.',
    canonical: 'https://saisamarthtours.com/package/nepal-muktinath-pashupatinath-tour-package-from-bangalore',
    ogTitle: 'Nepal Muktinath & Pashupatinath Tour Package from Bangalore | Himalayan Yatra',
    ogDescription: 'Sacred Himalayan pilgrimage to Lord Pashupatinath and Muktinath Dham with round-trip flights from Bangalore, mountain transfers, and pure veg dining.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'product',
    h1: 'Nepal Muktinath & Pashupatinath Tour Package from Bangalore'
  },

  'kashmir': {
    path: '/package/kashmir-tour-package-from-bangalore',
    primaryKeyword: 'kashmir tour package from bangalore',
    secondaryKeywords: [
      'srinagar gulmarg package from bangalore',
      'kashmir holiday with flight from bangalore',
      'dal lake houseboat tour bangalore',
      'pahalgam sonamarg tour from bangalore'
    ],
    title: 'Kashmir Tour Package from Bangalore | Dal Lake Houseboat & Gulmarg Gondola',
    description: 'Book 5N/6D Kashmir paradise vacation from Bangalore with flights. Includes Srinagar Dal Lake luxury houseboat, Shikara ride, Gulmarg Gondola cable car & Pahalgam valleys.',
    canonical: 'https://saisamarthtours.com/package/kashmir-tour-package-from-bangalore',
    ogTitle: 'Kashmir Tour Package from Bangalore | Dal Lake Houseboat & Gulmarg Gondola',
    ogDescription: 'Experience paradise on earth with direct flights from Bangalore to Srinagar. Enjoy deluxe houseboats, snowy Gulmarg peaks, and scenic Pahalgam valleys.',
    ogImage: '/kashmir-tour-from-bangalore-guide-hero.webp',
    ogType: 'product',
    h1: 'Kashmir Paradise Tour Package from Bangalore'
  },

  'kerala': {
    path: '/package/kerala-tour-package-from-bangalore',
    primaryKeyword: 'kerala tour package from bangalore',
    secondaryKeywords: [
      'munnar alleppey houseboat package from bangalore',
      'kerala holiday packages from bangalore',
      'bangalore to kerala flight tour',
      'thekkady periyar wildlife package'
    ],
    title: 'Kerala Tour Package from Bangalore | Munnar Tea Hills & Alleppey Houseboat',
    description: 'Scenic 4N/5D Kerala tour from Bangalore. Munnar tea plantations, Thekkady Periyar wildlife, and Alleppey backwater luxury private houseboat cruise with flights & meals.',
    canonical: 'https://saisamarthtours.com/package/kerala-tour-package-from-bangalore',
    ogTitle: 'Kerala Tour Package from Bangalore | Munnar Tea Hills & Alleppey Houseboat',
    ogDescription: 'Discover God’s Own Country with comfortable transfers from Bangalore. Features misty Munnar hills, spice plantations, and serene Alleppey backwaters.',
    ogImage: '/kerala-tour-package-from-bangalore-guide-hero.webp',
    ogType: 'product',
    h1: 'Kerala God’s Own Country Tour Package from Bangalore'
  },

  'leh-ladakh': {
    path: '/package/leh-ladakh-tour-package-from-bangalore',
    primaryKeyword: 'leh ladakh tour package from bangalore',
    secondaryKeywords: [
      'ladakh holiday package from bangalore with flight',
      'pangong lake nubra valley tour from bangalore',
      'khardung la pass tour package bangalore',
      'leh monasteries tour from bangalore'
    ],
    title: 'Leh Ladakh Tour Package from Bangalore | Nubra Valley & Pangong Lake',
    description: 'Thrilling 6N/7D Himalayan Ladakh tour from Bangalore with flights. Experience Khardung La Pass, Nubra Valley sand dunes, double-humped camel safari & crystal Pangong Tso Lake.',
    canonical: 'https://saisamarthtours.com/package/leh-ladakh-tour-package-from-bangalore',
    ogTitle: 'Leh Ladakh Tour Package from Bangalore | Nubra Valley & Pangong Lake',
    ogDescription: 'High-altitude Himalayan adventure from Bangalore with acclimatization days, oxygen support, luxury campsite stays, and expert local drivers.',
    ogImage: '/domestic-packages-category-card.webp',
    ogType: 'product',
    h1: 'Leh Ladakh Himalayan Tour Package from Bangalore'
  },

  'rajasthan': {
    path: '/package/rajasthan-tour-package-from-bangalore',
    primaryKeyword: 'rajasthan tour package from bangalore',
    secondaryKeywords: [
      'jaipur jodhpur udaipur package from bangalore',
      'rajasthan royal heritage tour bangalore',
      'jaisalmer desert safari package from bangalore',
      'rajasthan flight holiday from bangalore'
    ],
    title: 'Rajasthan Tour Package from Bangalore | Royal Forts, Palaces & Desert Safari',
    description: 'Royal 6N/7D Rajasthan heritage tour from Bangalore with flights. Explore Jaipur Amer Fort, Jodhpur Mehrangarh, Udaipur Lake Pichola palaces & Jaisalmer sand dunes.',
    canonical: 'https://saisamarthtours.com/package/rajasthan-tour-package-from-bangalore',
    ogTitle: 'Rajasthan Tour Package from Bangalore | Royal Forts, Palaces & Desert Safari',
    ogDescription: 'Immerse yourself in royal Rajputana heritage with flights from Bangalore, heritage hotel stays, private AC vehicles, and authentic Rajasthani cultural evenings.',
    ogImage: '/domestic-packages-category-card.webp',
    ogType: 'product',
    h1: 'Royal Rajasthan Heritage Tour Package from Bangalore'
  },

  'himachal': {
    path: '/package/himachal-pradesh-tour-package-from-bangalore',
    primaryKeyword: 'himachal tour package from bangalore',
    secondaryKeywords: [
      'shimla manali tour package from bangalore',
      'himachal holiday with flight from bangalore',
      'solang valley rohtang pass tour bangalore',
      'kullu manali holiday package bangalore'
    ],
    title: 'Himachal Tour Package from Bangalore | Shimla, Manali & Solang Valley Snow',
    description: 'Refreshing 6N/7D Himachal holiday from Bangalore with flights. Covers Shimla Mall Road, Kufri snow viewpoints, Manali Solang Valley snow sports, Rohtang & Kullu.',
    canonical: 'https://saisamarthtours.com/package/himachal-pradesh-tour-package-from-bangalore',
    ogTitle: 'Himachal Tour Package from Bangalore | Shimla, Manali & Solang Valley Snow',
    ogDescription: 'Escape to the Himalayas from Bangalore. Enjoy snowy mountain views, pine forests, adventure activities in Solang Valley, and comfortable mountain resort stays.',
    ogImage: '/domestic-packages-category-card.webp',
    ogType: 'product',
    h1: 'Himachal Pradesh Shimla Manali Tour Package from Bangalore'
  },

  'goa': {
    path: '/package/goa-beach-tour-package-from-bangalore',
    primaryKeyword: 'goa tour package from bangalore',
    secondaryKeywords: [
      'goa beach holiday from bangalore',
      'bangalore to goa flight holiday package',
      'north south goa resort tour bangalore',
      'dudhsagar falls cruise goa package'
    ],
    title: 'Goa Tour Package from Bangalore | Golden Beaches & Mandovi Sunset Cruise',
    description: 'Relaxing 3N/4D Goa beach holiday from Bangalore with flights. Includes luxury resort accommodation near Calangute beach, Mandovi river sunset cruise & North/South Goa sightseeing.',
    canonical: 'https://saisamarthtours.com/package/goa-beach-tour-package-from-bangalore',
    ogTitle: 'Goa Tour Package from Bangalore | Golden Beaches & Mandovi Sunset Cruise',
    ogDescription: 'Unwind on sunny Goan beaches with direct 1-hour flights from Bangalore, private AC cab transfers, beachside breakfast, and water sports options.',
    ogImage: '/domestic-packages-category-card.webp',
    ogType: 'product',
    h1: 'Goa Beach Holiday Tour Package from Bangalore'
  },

  'andaman': {
    path: '/package/andaman-islands-tour-package-from-bangalore',
    primaryKeyword: 'andaman tour package from bangalore',
    secondaryKeywords: [
      'havelock radhanagar beach package from bangalore',
      'andaman islands holiday with flight bangalore',
      'cellular jail port blair tour from bangalore',
      'elephant beach coral reef snorkeling package'
    ],
    title: 'Andaman Tour Package from Bangalore | Havelock Radhanagar & Coral Reefs',
    description: 'Exotic 4N/5D Andaman Islands vacation from Bangalore with flights. Port Blair Cellular Jail, Havelock Island Radhanagar Beach, luxury Makruzz catamaran & snorkeling.',
    canonical: 'https://saisamarthtours.com/package/andaman-islands-tour-package-from-bangalore',
    ogTitle: 'Andaman Tour Package from Bangalore | Havelock Radhanagar & Coral Reefs',
    ogDescription: 'Tropical island paradise tour with flights from Bangalore. Walk on Asia’s best Radhanagar beach, witness the Cellular Jail light show, and cruise on luxury ferries.',
    ogImage: '/domestic-packages-category-card.webp',
    ogType: 'product',
    h1: 'Andaman Islands Tropical Holiday Package from Bangalore'
  },

  'golden-triangle': {
    path: '/package/golden-triangle-delhi-agra-jaipur-tour-package-from-bangalore',
    primaryKeyword: 'golden triangle tour package from bangalore',
    secondaryKeywords: [
      'delhi agra jaipur tour from bangalore',
      'taj mahal tour package from bangalore',
      'bangalore to golden triangle flight package',
      'india golden triangle heritage trip'
    ],
    title: 'Golden Triangle Tour Package from Bangalore | Delhi, Agra Taj Mahal & Jaipur',
    description: 'Classic 4N/5D Golden Triangle tour from Bangalore with flights. Marvel at Agra Taj Mahal at sunrise, Jaipur Amer Fort & palaces, and historic Delhi monuments.',
    canonical: 'https://saisamarthtours.com/package/golden-triangle-delhi-agra-jaipur-tour-package-from-bangalore',
    ogTitle: 'Golden Triangle Tour Package from Bangalore | Delhi, Agra Taj Mahal & Jaipur',
    ogDescription: 'India’s most iconic cultural journey from Bangalore with return flights, private AC chauffeur transport, verified 3-star AC hotels, and heritage guide service.',
    ogImage: '/domestic-packages-category-card.webp',
    ogType: 'product',
    h1: 'Golden Triangle Delhi Agra Jaipur Tour Package from Bangalore'
  },

  // International Tour Packages
  'thailand': {
    path: '/package/thailand-tour-package-from-bangalore',
    primaryKeyword: 'thailand tour package from bangalore',
    secondaryKeywords: [
      'bangkok pattaya package from bangalore',
      'thailand holiday package with flight bangalore',
      'coral island speedboat tour package',
      'chao phraya dinner cruise thailand'
    ],
    title: 'Thailand Tour Package from Bangalore | Bangkok & Pattaya Coral Island',
    description: 'Exciting 4N/5D Thailand vacation from Bangalore. Direct flights, Pattaya Coral Island speedboat tour with Indian lunch, Alcazar show, Bangkok marble temples & Chao Phraya cruise.',
    canonical: 'https://saisamarthtours.com/package/thailand-tour-package-from-bangalore',
    ogTitle: 'Thailand Tour Package from Bangalore | Bangkok & Pattaya Coral Island',
    ogDescription: 'All-inclusive Thailand vacation departing from Bangalore Kempegowda Airport with 4-star hotels, Indian dining, visa guidance, and guided city tours.',
    ogImage: '/thailand-tour-package-from-bangalore-guide-hero.webp',
    ogType: 'product',
    h1: 'Thailand Bangkok & Pattaya Tour Package from Bangalore'
  },

  'singapore-malaysia': {
    path: '/package/singapore-malaysia-tour-package-from-bangalore',
    primaryKeyword: 'singapore malaysia tour package from bangalore',
    secondaryKeywords: [
      'singapore tour package from bangalore',
      'universal studios sentosa package bangalore',
      'kuala lumpur genting highlands tour from bangalore',
      'singapore malaysia dual country package'
    ],
    title: 'Singapore & Malaysia Tour Package from Bangalore | Universal Studios & KL',
    description: 'Dual-country 5N/6D tour from Bangalore. Universal Studios Singapore, Sentosa Island, Marina Bay Sands, Kuala Lumpur Petronas Towers, Batu Caves & Genting cable car.',
    canonical: 'https://saisamarthtours.com/package/singapore-malaysia-tour-package-from-bangalore',
    ogTitle: 'Singapore & Malaysia Tour Package from Bangalore | Universal Studios & KL',
    ogDescription: 'Two vibrant countries in one seamless trip from Bangalore with round-trip flights, luxury coach transfers, 4-star hotels, and authentic Indian buffet dining.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'product',
    h1: 'Singapore & Malaysia Tour Package from Bangalore'
  },

  'malaysia': {
    path: '/package/malaysia-tour-package-from-bangalore',
    primaryKeyword: 'malaysia tour package from bangalore',
    secondaryKeywords: [
      'kuala lumpur tour from bangalore',
      'genting highlands package from bangalore',
      'batu caves murugan temple tour bangalore',
      'malaysia holiday package with flight'
    ],
    title: 'Malaysia Tour Package from Bangalore | Kuala Lumpur & Genting Highlands',
    description: 'Affordable 3N/4D Malaysia vacation from Bangalore. Kuala Lumpur city tour, Petronas Twin Towers photo stop, Genting Highlands cable car & sacred Batu Caves Murugan temple.',
    canonical: 'https://saisamarthtours.com/package/malaysia-tour-package-from-bangalore',
    ogTitle: 'Malaysia Tour Package from Bangalore | Kuala Lumpur & Genting Highlands',
    ogDescription: 'Explore modern skyscrapers, hill resorts, and iconic cultural landmarks in Malaysia with direct flights from Bangalore and 4-star city accommodations.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'product',
    h1: 'Malaysia Highlights Tour Package from Bangalore'
  },

  'maldives': {
    path: '/package/maldives-tour-package-from-bangalore',
    primaryKeyword: 'maldives tour package from bangalore',
    secondaryKeywords: [
      'maldives water villa package from bangalore',
      'maldives honeymoon package from bangalore',
      'bangalore to maldives direct flight package',
      'luxury island resort maldives package'
    ],
    title: 'Maldives Tour Package from Bangalore | Luxury Overwater Villas & Speedboat',
    description: 'Romantic 3N/4D Maldives luxury island getaway from Bangalore. Stay in an overwater private villa with turquoise lagoon views, speedboat transfers & all-inclusive dining.',
    canonical: 'https://saisamarthtours.com/package/maldives-tour-package-from-bangalore',
    ogTitle: 'Maldives Tour Package from Bangalore | Luxury Overwater Villas & Speedboat',
    ogDescription: 'Luxury island vacation just 2 hours by air from Bangalore. Includes private speedboat transfers, coral reef snorkeling, and all-inclusive gourmet meal plans.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'product',
    h1: 'Maldives Luxury Island Tour Package from Bangalore'
  },

  'bali': {
    path: '/package/bali-tour-package-from-bangalore',
    primaryKeyword: 'bali tour package from bangalore',
    secondaryKeywords: [
      'bali honeymoon package from bangalore',
      'ubud tanah lot tour from bangalore',
      'nusa penida island tour package bangalore',
      'bali flight holiday package from bangalore'
    ],
    title: 'Bali Tour Package from Bangalore | Ubud Terraces, Tanah Lot & Nusa Penida',
    description: 'Enchanting 5N/6D Bali island holiday from Bangalore. Ubud monkey forest & rice terraces, Tanah Lot ocean sunset temple, Uluwatu Kecak dance & Nusa Penida speedboat tour.',
    canonical: 'https://saisamarthtours.com/package/bali-tour-package-from-bangalore',
    ogTitle: 'Bali Tour Package from Bangalore | Ubud Terraces, Tanah Lot & Nusa Penida',
    ogDescription: 'Discover the Island of the Gods with flights from Bangalore. Features private pool villa stays, cultural temple excursions, and Nusa Penida island sightseeing.',
    ogImage: '/bali-tour-from-bangalore-guide-hero.webp',
    ogType: 'product',
    h1: 'Bali Island Paradise Tour Package from Bangalore'
  },

  'dubai': {
    path: '/package/dubai-tour-package-from-bangalore',
    primaryKeyword: 'dubai tour package from bangalore',
    secondaryKeywords: [
      'dubai desert safari package from bangalore',
      'burj khalifa tour from bangalore',
      'abu dhabi baps temple tour bangalore',
      'bangalore to dubai flight package'
    ],
    title: 'Dubai Tour Package from Bangalore | Burj Khalifa, Desert Safari & Abu Dhabi',
    description: 'Glittering 4N/5D Dubai holiday from Bangalore with direct flights. Burj Khalifa 124th floor, Desert Safari BBQ dinner & dune bashing, Marina Dhow cruise & Abu Dhabi BAPS Mandir.',
    canonical: 'https://saisamarthtours.com/package/dubai-tour-package-from-bangalore',
    ogTitle: 'Dubai Tour Package from Bangalore | Burj Khalifa, Desert Safari & Abu Dhabi',
    ogDescription: 'Premium Dubai vacation package with flights from Bangalore, 4-star city hotels, desert safari thrills, and iconic Abu Dhabi architectural tours.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'product',
    h1: 'Dubai & Abu Dhabi Tour Package from Bangalore'
  },

  'bhutan': {
    path: '/package/bhutan-tour-package-from-bangalore',
    primaryKeyword: 'bhutan tour package from bangalore',
    secondaryKeywords: [
      'paro tigers nest tour from bangalore',
      'thimphu bhutan package from bangalore',
      'bangalore to bhutan flight holiday',
      'land of thunder dragon tour package'
    ],
    title: 'Bhutan Tour Package from Bangalore | Paro Tiger’s Nest & Thimphu Dzongs',
    description: 'Peaceful 5N/6D Bhutan holiday from Bangalore. Hike to legendary Paro Tiger’s Nest monastery, explore Thimphu Buddha Dordenma, Punakha suspension bridge & scenic valleys.',
    canonical: 'https://saisamarthtours.com/package/bhutan-tour-package-from-bangalore',
    ogTitle: 'Bhutan Tour Package from Bangalore | Paro Tiger’s Nest & Thimphu Dzongs',
    ogDescription: 'Experience carbon-negative Bhutan with return flights from Bangalore, sustainable development fee (SDF) clearance, 3-star AC hotels, and personal tour guides.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'product',
    h1: 'Bhutan Land of Thunder Dragon Tour Package from Bangalore'
  },

  'sri-lanka': {
    path: '/package/sri-lanka-tour-package-from-bangalore',
    primaryKeyword: 'sri lanka tour package from bangalore',
    secondaryKeywords: [
      'ramayana trail tour from bangalore',
      'kandy nuwara eliya package from bangalore',
      'seetha amman temple sri lanka package',
      'bangalore to colombo flight tour'
    ],
    title: 'Sri Lanka Tour Package from Bangalore | Sacred Ramayana Trail & Tea Hills',
    description: 'Cultural 5N/6D Sri Lanka tour from Bangalore. Visit Kandy Sacred Tooth Relic Temple, Nuwara Eliya Seetha Amman Temple & Ashok Vatika, Ramboda waterfalls & Colombo city tour.',
    canonical: 'https://saisamarthtours.com/package/sri-lanka-tour-package-from-bangalore',
    ogTitle: 'Sri Lanka Tour Package from Bangalore | Sacred Ramayana Trail & Tea Hills',
    ogDescription: 'Retrace sacred Ramayana legends and lush Ceylon tea hill country with short 1.5-hour flights from Bangalore, private AC vehicles, and Indian dining.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'product',
    h1: 'Sri Lanka Ramayana Trail Tour Package from Bangalore'
  },

  'europe': {
    path: '/package/europe-tour-package-from-bangalore',
    primaryKeyword: 'europe tour package from bangalore',
    secondaryKeywords: [
      'paris swiss italy tour from bangalore',
      'europe group holiday package from bangalore',
      'mount titlis eiffel tower tour bangalore',
      'schengen visa tour package from bangalore'
    ],
    title: 'Europe Splendors Tour Package from Bangalore | Paris, Swiss Alps & Rome',
    description: 'Grand 9N/10D Europe tour from Bangalore. Paris Eiffel Tower, Swiss Alps Mount Titlis revolving cable car, Lucerne Lake, Venice gondola ride, Rome Colosseum & Vatican City.',
    canonical: 'https://saisamarthtours.com/package/europe-tour-package-from-bangalore',
    ogTitle: 'Europe Splendors Tour Package from Bangalore | Paris, Swiss Alps & Rome',
    ogDescription: 'The ultimate European holiday departing from Bangalore with Schengen visa assistance, international flights, 4-star hotels, Indian dinners, and tour manager.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'product',
    h1: 'Europe Splendors Tour Package from Bangalore'
  }
};

// ============================================================================
// 4. BLOG POSTS SEO CONFIGURATION (TASK 4)
// ============================================================================
export const BLOG_PAGES_SEO: Record<string, PageSEOConfig> = {
  'puri-jagannath-tour-package-from-bangalore': {
    path: '/blog/puri-jagannath-tour-package-from-bangalore',
    primaryKeyword: 'puri jagannath tour package from bangalore',
    secondaryKeywords: [
      'puri tour package from bangalore',
      'jagannath puri trip from bangalore',
      'puri konark tour package from bangalore',
      'bangalore to puri tour package by flight',
      'puri jagannath darshan package from bangalore'
    ],
    title: 'Puri Jagannath Tour Package from Bangalore: 3-Day Flight, Darshan & Cost Guide',
    description: 'Complete guide to booking the best Puri Jagannath tour package from Bangalore by flight. Covers temple dress codes, VIP darshan passes, Konark Sun Temple & costs.',
    canonical: 'https://saisamarthtours.com/blog/puri-jagannath-tour-package-from-bangalore',
    ogTitle: 'Puri Jagannath Tour Package from Bangalore: 3-Day Flight & Darshan Guide',
    ogDescription: 'Planning a trip to Puri from Bangalore? Here is everything about direct flights, Anandabazar Mahaprasad, Konark Sun Temple chariot, and 3-day itinerary.',
    ogImage: '/puri-jagannath-konark-tour-package-from-bangalore-1.webp',
    ogType: 'article',
    h1: 'Puri Jagannath Tour Package from Bangalore: 3-Day Flight, Darshan, Konark & Cost Guide'
  },
  'kamakhya-with-meghalaya-tour-package-from-bangalore': {
    path: '/blog/kamakhya-with-meghalaya-tour-package-from-bangalore',
    primaryKeyword: 'kamakhya with meghalaya tour package from bangalore',
    secondaryKeywords: [
      'kamakhya meghalaya tour package',
      'kamakhya temple tour from bangalore',
      'meghalaya tour package from bangalore',
      'guwahati shillong tour package',
      'shillong cherrapunji tour package'
    ],
    title: 'Kamakhya with Meghalaya Tour Package from Bangalore: 5-Day Flight & Darshan Guide',
    description: 'Essential guide to Kamakhya with Meghalaya tour package from Bangalore. Covers Guwahati Maa Kamakhya darshan pass rules, Shillong, Cherrapunji falls & Dawki.',
    canonical: 'https://saisamarthtours.com/blog/kamakhya-with-meghalaya-tour-package-from-bangalore',
    ogTitle: 'Kamakhya with Meghalaya Tour Package from Bangalore: 5-Day Guide',
    ogDescription: 'Complete 5-day itinerary connecting Nilachal Hills Maa Kamakhya Temple darshan with the breathtaking wonders of Meghalaya from Bangalore by air.',
    ogImage: '/kamakhya-with-meghalaya-tour-package-from-bangalore.webp',
    ogType: 'article',
    h1: 'Kamakhya with Meghalaya Tour Package from Bangalore: 5-Day Flight, Temple Darshan, Shillong & Cherrapunji Guide'
  },
  'indore-ujjain-omkareshwar-tour-package-from-bangalore': {
    path: '/blog/indore-ujjain-omkareshwar-tour-package-from-bangalore',
    primaryKeyword: 'indore ujjain omkareshwar tour package from bangalore',
    secondaryKeywords: [
      'indore ujjain tour package',
      'ujjain bhasma aarti tour package from bangalore',
      'indore ujjain distance',
      'indore to omkareshwar distance',
      'indore ujjain omkareshwar itinerary 3 days'
    ],
    title: 'Indore Ujjain Omkareshwar Tour Package from Bangalore: Bhasma Aarti & Cost Guide',
    description: 'Comprehensive guide for booking Indore Ujjain Omkareshwar tour package from Bangalore with flights. Covers Mahakaleshwar 4:00 AM Bhasma Aarti, Narmada boat ride & budget.',
    canonical: 'https://saisamarthtours.com/blog/indore-ujjain-omkareshwar-tour-package-from-bangalore',
    ogTitle: 'Indore Ujjain Omkareshwar Tour Package from Bangalore: Complete Guide',
    ogDescription: 'How to plan a twin-Jyotirlinga pilgrimage to Mahakaleshwar and Omkareshwar from Bangalore with flight options, Bhasma Aarti booking, and 3-day itinerary.',
    ogImage: '/mahakal-lok-corridor-ujjain-night.webp',
    ogType: 'article',
    h1: 'Indore Ujjain Omkareshwar Tour Package from Bangalore: Complete Flight, Bhasma Aarti, Itinerary & Cost Guide'
  },
  'places-to-visit-in-omkareshwar-jyotirlinga-temple-attractions-guide': {
    path: '/blog/places-to-visit-in-omkareshwar-jyotirlinga-temple-attractions-guide',
    primaryKeyword: 'places to visit in omkareshwar',
    secondaryKeywords: [
      'omkareshwar jyotirlinga temple attractions',
      'mamleshwar temple omkareshwar',
      'narmada river parikrama omkareshwar',
      'omkareshwar darshan timings'
    ],
    title: 'Places to Visit in Omkareshwar: Jyotirlinga Temple & Island Attractions Guide',
    description: 'Discover the top places to visit in Omkareshwar Jyotirlinga. Detailed guide to Omkareshwar Island, Mamleshwar Mandir, Narmada boat ride, Parikrama & timings.',
    canonical: 'https://saisamarthtours.com/blog/places-to-visit-in-omkareshwar-jyotirlinga-temple-attractions-guide',
    ogTitle: 'Places to Visit in Omkareshwar: Jyotirlinga Temple Attractions',
    ogDescription: 'Explore the sacred Om-shaped island of Omkareshwar: temple darshan secrets, Mamleshwar shrine, Narmada Ghats, and 24 Avatars group of temples.',
    ogImage: '/omkareshwar-jyotirlinga-temple-narmada-river.webp',
    ogType: 'article',
    h1: 'Places to Visit in Omkareshwar: Jyotirlinga Temple & Island Attractions Guide'
  },
  'best-time-to-visit-kedarnath-weather-temperature-things-to-do-guide': {
    path: '/blog/best-time-to-visit-kedarnath-weather-temperature-things-to-do-guide',
    primaryKeyword: 'best time to visit kedarnath',
    secondaryKeywords: [
      'kedarnath weather and temperature',
      'kedarnath opening dates 2026',
      'kedarnath helicopter booking tips',
      'worst time to visit kedarnath'
    ],
    title: 'Best Time to Visit Kedarnath: Weather, Temp & Travel Guide | Sai Samarth Tours',
    description: 'Plan your Kedarnath Yatra: Best time to visit month-by-month, temperature & weather guide, opening dates, helicopter booking & things to do from Bangalore.',
    canonical: 'https://saisamarthtours.com/blog/best-time-to-visit-kedarnath-weather-temperature-things-to-do-guide',
    ogTitle: 'Best Time to Visit Kedarnath: Weather, Temp & Travel Guide',
    ogDescription: 'Month-by-month breakdown of Kedarnath climate, snowfall timings, helicopter booking guidance, and senior citizen travel precautions.',
    ogImage: '/best-time-to-visit-kedarnath-weather-temperature-guide-hero.webp',
    ogType: 'article',
    h1: 'Best Time to Visit Kedarnath: Weather, Temperature, Opening Dates & Guide'
  },
  '5-jyotirlingas-of-maharashtra-names-locations-timings-guide': {
    path: '/blog/5-jyotirlingas-of-maharashtra-names-locations-timings-guide',
    primaryKeyword: '5 jyotirlingas of maharashtra',
    secondaryKeywords: [
      'maharashtra 5 jyotirlinga names and locations',
      'trimbakeshwar bhimashankar grishneshwar tour',
      '5 jyotirlinga road itinerary from bangalore',
      'parli vaijnath aundha nagnath darshan'
    ],
    title: '5 Jyotirlingas of Maharashtra: Names, Locations, Timings & Tour Guide',
    description: 'Complete guide to the 5 Jyotirlingas of Maharashtra: Trimbakeshwar, Bhimashankar, Grishneshwar, Parli Vaijnath & Aundha Nagnath with routes, timings & tips.',
    canonical: 'https://saisamarthtours.com/blog/5-jyotirlingas-of-maharashtra-names-locations-timings-guide',
    ogTitle: '5 Jyotirlingas of Maharashtra: Names, Locations & Timings Guide',
    ogDescription: 'Detailed route map and darshan rules for visiting all 5 sacred Shiva Jyotirlingas situated across Maharashtra starting from Bangalore.',
    ogImage: '/shirdi-packages-category-card.webp',
    ogType: 'article',
    h1: '5 Jyotirlingas of Maharashtra: Names, Locations, Timings & Complete Tour Itinerary'
  },
  '12-jyotirlinga-temples-in-india-travel-guide': {
    path: '/blog/12-jyotirlinga-temples-in-india-travel-guide',
    primaryKeyword: '12 jyotirlinga temples in india',
    secondaryKeywords: [
      '12 jyotirlinga names and places map',
      'all jyotirlinga tour package from bangalore',
      'dwadash jyotirlinga yatra guide',
      'somnath mahakaleshwar kashi jyotirlinga'
    ],
    title: '12 Jyotirlinga Temples in India: Complete Travel Guide & Circuit Map',
    description: 'Comprehensive guide to all 12 Jyotirlinga temples in India with locations, spiritual legends, best visiting seasons, and tour connections from Bangalore.',
    canonical: 'https://saisamarthtours.com/blog/12-jyotirlinga-temples-in-india-travel-guide',
    ogTitle: '12 Jyotirlinga Temples in India: Complete Travel Guide & Circuit Map',
    ogDescription: 'Discover the sacred Dwadasha Jyotirlinga shrines across India. Includes historical significance, travel routes, and guided tour itineraries.',
    ogImage: '/pilgrimage-packages-category-card.webp',
    ogType: 'article',
    h1: '12 Jyotirlinga Temples in India: Complete Travel Guide & Circuit Map'
  },
  'ujjain-mahakaleshwar-bhasma-aarti-booking-darshan-guide': {
    path: '/blog/ujjain-mahakaleshwar-bhasma-aarti-booking-darshan-guide',
    primaryKeyword: 'ujjain mahakaleshwar bhasma aarti booking',
    secondaryKeywords: [
      'bhasma aarti dress code rules',
      'mahakaleshwar darshan booking online',
      'ujjain bhasma aarti timings',
      'mahakal lok corridor ujjain visit'
    ],
    title: 'Ujjain Mahakaleshwar Bhasma Aarti Booking: Rules, Timings & Darshan Guide',
    description: 'Step-by-step guide to Ujjain Mahakaleshwar Bhasma Aarti booking online and offline. Covers dress code rules, 4:00 AM entry timings, VIP protocol & tips.',
    canonical: 'https://saisamarthtours.com/blog/ujjain-mahakaleshwar-bhasma-aarti-booking-darshan-guide',
    ogTitle: 'Ujjain Mahakaleshwar Bhasma Aarti Booking & Darshan Guide',
    ogDescription: 'Everything you need to know about witnessing the sacred 4:00 AM Bhasma Aarti at Mahakaleshwar Jyotirlinga in Ujjain without middlemen hassle.',
    ogImage: '/mahakal-lok-corridor-ujjain-night.webp',
    ogType: 'article',
    h1: 'Ujjain Mahakaleshwar Bhasma Aarti: Booking Rules, Timings & Darshan Guide'
  },
  'shirdi-tour-package-from-bangalore-direct-flight-vip-darshan': {
    path: '/blog/shirdi-tour-package-from-bangalore-direct-flight-vip-darshan',
    primaryKeyword: 'shirdi tour package from bangalore direct flight',
    secondaryKeywords: [
      'shirdi flight yatra from bangalore',
      'shirdi kakad aarti vip darshan guide',
      'bangalore to shirdi airport flight timings',
      'shani shingnapur trip from shirdi'
    ],
    title: 'Shirdi Tour Package from Bangalore: Direct Flight & VIP Darshan Guide',
    description: 'Detailed guide to direct flight Shirdi tour package from Bangalore. Covers Shirdi Airport transfers, early morning 5:00 AM Kakad Aarti & VIP darshan passes.',
    canonical: 'https://saisamarthtours.com/blog/shirdi-tour-package-from-bangalore-direct-flight-vip-darshan',
    ogTitle: 'Shirdi Tour Package from Bangalore: Direct Flight & VIP Darshan Guide',
    ogDescription: 'How to plan a quick, peaceful 2-day Shirdi pilgrimage from Bangalore landing directly at Shirdi Airport with elderly family members.',
    ogImage: '/shirdi-flight-tour-package-from-bangalore-1.webp',
    ogType: 'article',
    h1: 'Shirdi Tour Package from Bangalore: Direct Flight, VIP Darshan & Itinerary Guide'
  },
  'shirdi-tour-package-from-bangalore-guide': {
    path: '/blog/shirdi-tour-package-from-bangalore-guide',
    primaryKeyword: 'bangalore to shirdi tour guide',
    secondaryKeywords: [
      'shirdi travel tips from bangalore',
      'shirdi darshan timings and rules',
      'shirdi hotel stay advice bangalore',
      'shirdi flight vs train travel'
    ],
    title: 'Bangalore to Shirdi Tour Guide: Flight Options, Temples & Travel Tips',
    description: 'Expert guide on visiting Shirdi from Bangalore. Compare direct flights, Pune routes, Samadhi Mandir darshan rules, and Shani Shingnapur sightseeing.',
    canonical: 'https://saisamarthtours.com/blog/shirdi-tour-package-from-bangalore-guide',
    ogTitle: 'Bangalore to Shirdi Tour Guide: Flight Options & Tips',
    ogDescription: 'Planning your Shirdi Sai Baba darshan from Bangalore? Read our comprehensive comparison of routes, flight options, and hotel accommodations.',
    ogImage: '/shirdi-packages-category-card.webp',
    ogType: 'article',
    h1: 'Bangalore to Shirdi Tour Guide: Flights, Darshan, Hotels & Itinerary Tips'
  },
  'shirdi-vip-darshan-guide-2026': {
    path: '/blog/shirdi-vip-darshan-guide-2026',
    primaryKeyword: 'shirdi vip darshan booking online',
    secondaryKeywords: [
      'sai baba samadhi mandir vip pass',
      'shirdi aarti pass booking procedure',
      'senior citizen darshan line shirdi',
      'shirdi trust online darshan booking'
    ],
    title: 'Shirdi VIP Darshan Online Booking: Samadhi Mandir Aarti & Rules Guide',
    description: 'Complete guide to Shirdi VIP darshan passes, Aarti online booking, line timings, and special entry facilities for senior citizens at Shree Saibaba Sansthan.',
    canonical: 'https://saisamarthtours.com/blog/shirdi-vip-darshan-guide-2026',
    ogTitle: 'Shirdi VIP Darshan Online Booking: Samadhi Mandir Aarti Guide',
    ogDescription: 'Skip 4-hour general queues with verified VIP darshan passes at Shirdi Sai Baba Samadhi Mandir. Complete online booking rules and counter tips.',
    ogImage: '/shirdi-tour-hero-banner-desktop.webp',
    ogType: 'article',
    h1: 'Shirdi VIP Darshan Guide: Online Booking, Aarti Passes & Senior Citizen Rules'
  },
  'shirdi-with-3-jyotirlinga-tour-package-from-bangalore-guide': {
    path: '/blog/shirdi-with-3-jyotirlinga-tour-package-from-bangalore-guide',
    primaryKeyword: 'shirdi with 3 jyotirlinga tour package from bangalore guide',
    secondaryKeywords: [
      'bhimashankar trimbakeshwar grishneshwar shirdi itinerary',
      'maharashtra jyotirlinga yatra from bangalore',
      '4 days shirdi jyotirlinga route map',
      'shirdi jyotirlinga flight tour guide'
    ],
    title: 'Shirdi with 3 Jyotirlinga Tour from Bangalore: 4-Day Complete Itinerary',
    description: 'Detailed 4-day roadmap for Shirdi with 3 Jyotirlinga tour from Bangalore. Covers Bhimashankar, Trimbakeshwar, Grishneshwar, Ellora & Shani Shingnapur.',
    canonical: 'https://saisamarthtours.com/blog/shirdi-with-3-jyotirlinga-tour-package-from-bangalore-guide',
    ogTitle: 'Shirdi with 3 Jyotirlinga Tour from Bangalore: 4-Day Itinerary',
    ogDescription: 'Step-by-step 4-day pilgrimage plan connecting Shirdi Sai Baba with Maharashtra’s 3 sacred Jyotirlingas departing by air from Bangalore.',
    ogImage: '/shirdi-flight-tour-package-from-bangalore-1.webp',
    ogType: 'article',
    h1: 'Shirdi with 3 Jyotirlinga Tour from Bangalore: Complete 4-Day Itinerary Guide'
  },
  'kashi-ayodhya-prayagraj-tour-from-bangalore-complete-guide': {
    path: '/blog/kashi-ayodhya-prayagraj-tour-from-bangalore-complete-guide',
    primaryKeyword: 'kashi ayodhya prayagraj tour from bangalore guide',
    secondaryKeywords: [
      'varanasi ayodhya prayagraj complete yatra',
      'triveni sangam boat snan rituals',
      'kashi vishwanath sugam darshan pass',
      'ayodhya ram mandir janmabhoomi guide'
    ],
    title: 'Kashi Ayodhya Prayagraj Tour from Bangalore: Complete Flight Pilgrimage Guide',
    description: 'Comprehensive guide to Kashi Ayodhya Prayagraj tour from Bangalore. Detailed darshan timings, Triveni Sangam rituals, Ganga Aarti boat ride & budget.',
    canonical: 'https://saisamarthtours.com/blog/kashi-ayodhya-prayagraj-tour-from-bangalore-complete-guide',
    ogTitle: 'Kashi Ayodhya Prayagraj Tour from Bangalore: Complete Pilgrimage Guide',
    ogDescription: 'Everything you need to know before taking a Kashi-Ayodhya-Prayagraj flight tour from Bangalore: darshan slots, boat rides, and priest arrangements.',
    ogImage: '/kashi-ayodhya-prayagraj-1.webp',
    ogType: 'article',
    h1: 'Kashi Ayodhya Prayagraj Tour from Bangalore: Complete Pilgrimage Guide'
  },
  'kashi-ayodhya-tour-package-from-bangalore': {
    path: '/blog/kashi-ayodhya-tour-package-from-bangalore',
    primaryKeyword: 'kashi ayodhya tour package from bangalore guide',
    secondaryKeywords: [
      'kashi ayodhya 3 days flight tour',
      'bangalore to varanasi ayodhya trip',
      'ram mandir kashi vishwanath yatra',
      'kashi ayodhya trip cost from bangalore'
    ],
    title: 'Kashi Ayodhya Tour Package from Bangalore: 3-Day Flight & Darshan Itinerary',
    description: 'Plan your 3-day spiritual yatra from Bangalore to Kashi and Ayodhya. Covers Kashi Vishwanath Golden Temple, Ganga Aarti, Ayodhya Ram Mandir & flights.',
    canonical: 'https://saisamarthtours.com/blog/kashi-ayodhya-tour-package-from-bangalore',
    ogTitle: 'Kashi Ayodhya Tour Package from Bangalore: 3-Day Itinerary',
    ogDescription: 'How to experience divine blessings in Varanasi and Ayodhya in just 3 days departing from Bangalore Kempegowda Airport by air.',
    ogImage: '/kashi-ayodhya-prayagraj-1.webp',
    ogType: 'article',
    h1: 'Kashi Ayodhya Tour Package from Bangalore: 3-Day Flight & Darshan Itinerary'
  },
  'kashi-ayodhya-prayagraj-heritage-guide': {
    path: '/blog/kashi-ayodhya-prayagraj-heritage-guide',
    primaryKeyword: 'kashi ayodhya prayagraj heritage guide',
    secondaryKeywords: [
      'sacred shrines of uttar pradesh',
      'varanasi ghats history and culture',
      'ayodhya saryu aarti timings',
      'triveni sangam spiritual importance'
    ],
    title: 'Kashi, Ayodhya & Prayagraj Heritage Guide: Temples, Rituals & Traditions',
    description: 'Explore the profound cultural and spiritual heritage of Varanasi, Ayodhya, and Prayagraj. Essential insights on rituals, Pind Daan, and temple lore.',
    canonical: 'https://saisamarthtours.com/blog/kashi-ayodhya-prayagraj-heritage-guide',
    ogTitle: 'Kashi, Ayodhya & Prayagraj Heritage Guide: Temples & Traditions',
    ogDescription: 'Deep dive into the Vedic heritage and ancient legends of Uttar Pradesh’s sacred triangle: Kashi Vishwanath, Ayodhya Ram Janmabhoomi, and Prayagraj Sangam.',
    ogImage: '/kashi-ayodhya-prayagraj-1.webp',
    ogType: 'article',
    h1: 'Kashi, Ayodhya & Prayagraj: Complete Heritage, Temples & Rituals Guide'
  },
  'panch-bootha-yatra-tirumala-balaji-bus-tour-bangalore': {
    path: '/blog/panch-bootha-yatra-tirumala-balaji-bus-tour-bangalore',
    primaryKeyword: 'panch bootha yatra bus tour guide',
    secondaryKeywords: [
      '5 shiva element temples tour from bangalore',
      'tirumala balaji weekend bus tour',
      'srikalahasti kanchipuram chidambaram bus yatra',
      'pancha bootha sthalam itinerary'
    ],
    title: 'Panch Bootha Yatra & Tirumala Balaji Bus Tour from Bangalore: 3-Day Guide',
    description: 'Complete 3-day itinerary guide for Panch Bootha Yatra & Tirumala Balaji deluxe bus tour from Bangalore. Covers 5 cosmic Shiva temples & Balaji darshan.',
    canonical: 'https://saisamarthtours.com/blog/panch-bootha-yatra-tirumala-balaji-bus-tour-bangalore',
    ogTitle: 'Panch Bootha Yatra & Tirumala Balaji Bus Tour from Bangalore Guide',
    ogDescription: 'Experience the 5 cosmic elemental Shiva shrines (Air, Earth, Fire, Space, Water) plus Tirumala Balaji darshan on a weekend deluxe AC coach yatra.',
    ogImage: '/panch-bootha-bus-yatra-1.webp',
    ogType: 'article',
    h1: 'Panch Bootha Yatra & Tirumala Balaji Bus Tour from Bangalore: 3-Day Guide'
  },
  'kamakhya-temple-guwahati-travel-guide-darshan-tips': {
    path: '/blog/kamakhya-temple-guwahati-travel-guide-darshan-tips',
    primaryKeyword: 'kamakhya temple guwahati travel guide',
    secondaryKeywords: [
      'kamakhya darshan pass rules and timings',
      'nilachal hills temple visit guide',
      'kamakhya vip ticket counter details',
      'ambubachi mela travel tips'
    ],
    title: 'Kamakhya Temple Guwahati Travel Guide: Darshan Timings, Passes & Tips',
    description: 'Authentic guide to visiting Maa Kamakhya Temple on Nilachal Hills, Guwahati. Darshan pass procedures, timings, dress codes, rituals & airport distance.',
    canonical: 'https://saisamarthtours.com/blog/kamakhya-temple-guwahati-travel-guide-darshan-tips',
    ogTitle: 'Kamakhya Temple Guwahati Travel Guide: Darshan Timings & Tips',
    ogDescription: 'Practical pilgrim advice for visiting Maa Kamakhya Devi Shaktipeeth in Guwahati: ticket counter rules, Garbhagriha entry, and temple dress code.',
    ogImage: '/kamakhya-temple-guwahati-travel-guide-hero.webp',
    ogType: 'article',
    h1: 'Kamakhya Temple Guwahati Travel Guide: Darshan Timings, Passes & Tips'
  },
  'kamakhya-temple-guwahati-tour-package-from-bangalore': {
    path: '/blog/kamakhya-temple-guwahati-tour-package-from-bangalore',
    primaryKeyword: 'kamakhya temple guwahati tour package from bangalore guide',
    secondaryKeywords: [
      'bangalore to kamakhya flight tour',
      'guwahati pilgrimage package bangalore',
      'kamakhya darshan cost from bangalore',
      'umananda island boat cruise guwahati'
    ],
    title: 'Kamakhya Temple Guwahati Tour from Bangalore: Flight, Darshan & Itinerary',
    description: 'Plan your Maa Kamakhya pilgrimage from Bangalore by air. Covers direct flights to Guwahati, VIP darshan coordination, Brahmaputra cruise & 3-star AC hotels.',
    canonical: 'https://saisamarthtours.com/blog/kamakhya-temple-guwahati-tour-package-from-bangalore',
    ogTitle: 'Kamakhya Temple Guwahati Tour from Bangalore: Flight & Darshan',
    ogDescription: '2-night 3-day spiritual itinerary to Guwahati from Bangalore with priority Kamakhya darshan passes and Brahmaputra sunset views.',
    ogImage: '/kamakhya-temple-guwahati-travel-guide-hero.webp',
    ogType: 'article',
    h1: 'Kamakhya Temple Guwahati Tour from Bangalore: Flight, Darshan & Itinerary'
  },
  'puri-jagannath-konark-sun-temple-tour-complete-odisha-travel-guide': {
    path: '/blog/puri-jagannath-konark-sun-temple-tour-complete-odisha-travel-guide',
    primaryKeyword: 'puri jagannath konark sun temple tour guide',
    secondaryKeywords: [
      'odisha golden triangle travel guide',
      'konark sun temple architecture secrets',
      'puri jagannath temple customs and rules',
      'bhubaneswar to puri tour road guide'
    ],
    title: 'Puri Jagannath & Konark Sun Temple: Complete Odisha Golden Triangle Guide',
    description: 'Comprehensive travel guide to Odisha’s Golden Triangle: Puri Lord Jagannath Temple, UNESCO Konark Sun Temple chariot, Chandrabhaga beach & Bhubaneswar.',
    canonical: 'https://saisamarthtours.com/blog/puri-jagannath-konark-sun-temple-tour-complete-odisha-travel-guide',
    ogTitle: 'Puri Jagannath & Konark Sun Temple: Complete Odisha Guide',
    ogDescription: 'Discover the ancient mysteries of Puri Jagannath Temple and the architectural marvel of Konark Sun Temple with detailed travel tips.',
    ogImage: '/puri-jagannath-konark-tour-package-from-bangalore-1.webp',
    ogType: 'article',
    h1: 'Puri Jagannath & Konark Sun Temple: Complete Odisha Golden Triangle Travel Guide'
  },
  'kashmir-tour-from-bangalore-best-time-budget-itinerary': {
    path: '/blog/kashmir-tour-from-bangalore-best-time-budget-itinerary',
    primaryKeyword: 'kashmir tour from bangalore guide',
    secondaryKeywords: [
      'bangalore to kashmir package cost',
      'srinagar gulmarg pahalgam itinerary',
      'dal lake houseboat booking advice',
      'kashmir snowfall season for bangaloreans'
    ],
    title: 'Kashmir Tour from Bangalore: Best Time, Budget, Flights & Itinerary Guide',
    description: 'How to plan a dreamy Kashmir holiday from Bangalore. Flight connections, Dal Lake houseboats, Gulmarg Gondola Phase 1 & 2 tickets, and 6-day itinerary.',
    canonical: 'https://saisamarthtours.com/blog/kashmir-tour-from-bangalore-best-time-budget-itinerary',
    ogTitle: 'Kashmir Tour from Bangalore: Best Time, Budget & Itinerary Guide',
    ogDescription: 'Complete budget and season planning guide for traveling to Srinagar, Gulmarg, and Pahalgam from Bangalore Kempegowda Airport.',
    ogImage: '/kashmir-tour-from-bangalore-guide-hero.webp',
    ogType: 'article',
    h1: 'Kashmir Tour from Bangalore: Best Time, Budget, Flights & 6-Day Itinerary Guide'
  },
  'kashmir-paradise-seasons-guide': {
    path: '/blog/kashmir-paradise-seasons-guide',
    primaryKeyword: 'kashmir seasons travel guide',
    secondaryKeywords: [
      'best season for kashmir trip',
      'kashmir in winter vs spring',
      'tulip festival srinagar timings',
      'snowfall in gulmarg months'
    ],
    title: 'Kashmir in All Seasons: When to Visit for Snow, Tulips, Shikaras & Autumn',
    description: 'Detailed month-by-month guide to Kashmir’s 4 enchanting seasons: Winter snow in Gulmarg, Spring Tulip Festival, Summer retreats & golden Autumn Chinar.',
    canonical: 'https://saisamarthtours.com/blog/kashmir-paradise-seasons-guide',
    ogTitle: 'Kashmir in All Seasons: When to Visit Guide',
    ogDescription: 'Decide the best month for your Kashmir holiday based on snowfall, blooming gardens, houseboat climate, and budget considerations.',
    ogImage: '/kashmir-tour-from-bangalore-guide-hero.webp',
    ogType: 'article',
    h1: 'Kashmir in All Seasons: When to Visit for Snow, Tulips, Shikaras & Autumn Foliage'
  },
  'kerala-tour-package-from-bangalore-munnar-alleppey-guide': {
    path: '/blog/kerala-tour-package-from-bangalore-munnar-alleppey-guide',
    primaryKeyword: 'kerala tour package from bangalore guide',
    secondaryKeywords: [
      'munnar alleppey tour from bangalore',
      'kerala backwaters houseboat booking tips',
      'thekkady wildlife trip bangalore',
      'kerala itinerary 5 days from bangalore'
    ],
    title: 'Kerala Tour Package from Bangalore: Munnar Hills, Alleppey Houseboat & Guide',
    description: 'Complete travel guide for Kerala tour package from Bangalore. Munnar tea estates, Thekkady Periyar boating, Alleppey backwater houseboats & road route.',
    canonical: 'https://saisamarthtours.com/blog/kerala-tour-package-from-bangalore-munnar-alleppey-guide',
    ogTitle: 'Kerala Tour Package from Bangalore: Munnar & Alleppey Guide',
    ogDescription: 'Escape to Kerala’s backwaters and tea hills from Bangalore. Includes transport options, verified houseboat advice, and 5-day route map.',
    ogImage: '/kerala-tour-package-from-bangalore-guide-hero.webp',
    ogType: 'article',
    h1: 'Kerala Tour Package from Bangalore: Munnar Hills, Alleppey Houseboat & 5-Day Guide'
  },
  'thailand-tour-package-from-bangalore-budget-visa-itinerary': {
    path: '/blog/thailand-tour-package-from-bangalore-budget-visa-itinerary',
    primaryKeyword: 'thailand tour package from bangalore guide',
    secondaryKeywords: [
      'bangalore to thailand flight cost',
      'bangkok pattaya 5 days itinerary',
      'thailand visa for indian citizens 2026',
      'coral island speedboat tour advice'
    ],
    title: 'Thailand Tour Package from Bangalore: Budget, Visa, Flights & 5-Day Guide',
    description: 'Planning a Thailand vacation from Bangalore? Complete guide on direct flights, visa-free rules for Indians, Pattaya Coral Island, and Bangkok city tours.',
    canonical: 'https://saisamarthtours.com/blog/thailand-tour-package-from-bangalore-budget-visa-itinerary',
    ogTitle: 'Thailand Tour Package from Bangalore: Budget, Visa & Itinerary Guide',
    ogDescription: 'Step-by-step vacation guide for Bangalore families and couples traveling to Bangkok and Pattaya with budget breakdowns and attraction tickets.',
    ogImage: '/thailand-tour-package-from-bangalore-guide-hero.webp',
    ogType: 'article',
    h1: 'Thailand Tour Package from Bangalore: Budget, Visa, Flights & 5-Day Itinerary Guide'
  },
  'bali-tour-from-bangalore-best-places-budget-visa-itinerary': {
    path: '/blog/bali-tour-from-bangalore-best-places-budget-visa-itinerary',
    primaryKeyword: 'bali tour from bangalore guide',
    secondaryKeywords: [
      'bangalore to bali flight route tips',
      'bali visa on arrival for indians',
      'ubud and nusa penida itinerary 6 days',
      'bali honeymoon budget from bangalore'
    ],
    title: 'Bali Tour from Bangalore: Best Places, Budget, Visa & 6-Day Island Guide',
    description: 'Everything you need to plan a Bali trip from Bangalore: flight options, e-Visa on Arrival, Ubud pool villas, Tanah Lot sunset, and Nusa Penida tour.',
    canonical: 'https://saisamarthtours.com/blog/bali-tour-from-bangalore-best-places-budget-visa-itinerary',
    ogTitle: 'Bali Tour from Bangalore: Best Places, Budget & Itinerary Guide',
    ogDescription: 'Handcrafted 6-day Bali itinerary for travelers departing from Bangalore with currency exchange tips, SIM cards, and scenic attractions.',
    ogImage: '/bali-tour-from-bangalore-guide-hero.webp',
    ogType: 'article',
    h1: 'Bali Tour from Bangalore: Best Places, Budget, Visa & 6-Day Island Itinerary Guide'
  },
  'singapore-malaysia-family-guide-2026': {
    path: '/blog/singapore-malaysia-family-guide-2026',
    primaryKeyword: 'singapore malaysia family vacation guide',
    secondaryKeywords: [
      'universal studios singapore family tips',
      'kuala lumpur with kids from bangalore',
      'singapore malaysia visa guide for indians',
      'sentosa island attractions review'
    ],
    title: 'Singapore & Malaysia Family Vacation Guide: Theme Parks, Visas & Itinerary',
    description: 'Family holiday guide to Singapore and Malaysia: Universal Studios ticket tips, Sentosa cable car, Petronas Towers, Genting cable car & child-friendly hotels.',
    canonical: 'https://saisamarthtours.com/blog/singapore-malaysia-family-guide-2026',
    ogTitle: 'Singapore & Malaysia Family Vacation Guide: Theme Parks & Itinerary',
    ogDescription: 'Complete roadmap for a 6-day family adventure across Singapore and Malaysia with verified visa requirements and kid-friendly activities.',
    ogImage: '/international-packages-category-card.webp',
    ogType: 'article',
    h1: 'Singapore & Malaysia Family Vacation Guide: Theme Parks, Visas & 6-Day Itinerary'
  },
  'chardham-yatra-preparation-guide': {
    path: '/blog/chardham-yatra-preparation-guide',
    primaryKeyword: 'chardham yatra preparation guide',
    secondaryKeywords: [
      'chardham medical fitness certificate',
      'what to pack for chardham yatra',
      'kedarnath badrinath senior citizen tips',
      'chardham biometric registration process'
    ],
    title: 'Char Dham Yatra Preparation Guide: Fitness, Registration & Packing Checklist',
    description: 'Essential preparation checklist for Himalayan Char Dham Yatra. Biometric registration steps, medical fitness, clothing advice & helicopter booking tips.',
    canonical: 'https://saisamarthtours.com/blog/chardham-yatra-preparation-guide',
    ogTitle: 'Char Dham Yatra Preparation Guide: Fitness & Checklist',
    ogDescription: 'Crucial checklist for elderly pilgrims and families embarking on the sacred Yamunotri, Gangotri, Kedarnath, and Badrinath Himalayan pilgrimage.',
    ogImage: '/best-time-to-visit-kedarnath-weather-temperature-guide-hero.webp',
    ogType: 'article',
    h1: 'Char Dham Yatra Preparation Guide: Fitness, Registration, Packing & Senior Citizen Care'
  },
  'best-south-india-temple-tour-from-bangalore-guide': {
    path: '/blog/best-south-india-temple-tour-from-bangalore-guide',
    primaryKeyword: 'best south india temple tour from bangalore',
    secondaryKeywords: [
      'tamil nadu temple circuit from bangalore',
      'madurai rameshwaram kanyakumari tour guide',
      'tirupati balaji temple package bangalore',
      'dravidian temple architecture tour'
    ],
    title: 'Best South India Temple Tours from Bangalore: Circuits, Routes & Guide',
    description: 'Explore the top South Indian temple circuits from Bangalore. Detailed guide covering Madurai Meenakshi, Rameshwaram, Kanyakumari, Tirupati & Thanjavur.',
    canonical: 'https://saisamarthtours.com/blog/best-south-india-temple-tour-from-bangalore-guide',
    ogTitle: 'Best South India Temple Tours from Bangalore: Routes Guide',
    ogDescription: 'Curated pilgrimage circuits across Tamil Nadu, Karnataka, and Kerala with road distances, darshan rules, and senior citizen travel facilities.',
    ogImage: '/domestic-tours-hero-banner-desktop.webp',
    ogType: 'article',
    h1: 'Best South India Temple Tours from Bangalore: Sacred Circuits, Routes & Guide'
  },
  'south-india-tour-package-from-bangalore': {
    path: '/blog/south-india-tour-package-from-bangalore',
    primaryKeyword: 'south india tour package from bangalore guide',
    secondaryKeywords: [
      'temple tours departing bangalore',
      'kanyakumari rameshwaram madurai itinerary',
      'south india yatra cost from bangalore',
      'ac coach south india temple tour'
    ],
    title: 'South India Tour Package from Bangalore: Complete Spiritual Itinerary Guide',
    description: 'All-inclusive guide to South India tour package from Bangalore by luxury bus or flight. Covers Ramanathaswamy 22 wells, Meenakshi Amman & Kanyakumari.',
    canonical: 'https://saisamarthtours.com/blog/south-india-tour-package-from-bangalore',
    ogTitle: 'South India Tour Package from Bangalore: Spiritual Itinerary Guide',
    ogDescription: 'Experience divine architecture, holy coastal theerthams, and evening temple pujas across Tamil Nadu and Kerala starting from Bangalore.',
    ogImage: '/domestic-tours-hero-banner-desktop.webp',
    ogType: 'article',
    h1: 'South India Tour Package from Bangalore: Complete Spiritual Itinerary Guide'
  },
  'prasadam-and-temple-rituals-india': {
    path: '/blog/prasadam-and-temple-rituals-india',
    primaryKeyword: 'sacred temple prasadam and rituals in india',
    secondaryKeywords: [
      'puri jagannath mahaprasad 56 bhog',
      'tirupati laddu prasadam history',
      'temple abhishekams and archana rules',
      'holy prasadam significance hinduism'
    ],
    title: 'Sacred Temple Prasadam & Rituals in India: Puri Mahaprasad to Tirupati Laddu',
    description: 'Explore the divine significance of sacred temple prasadam across India: Lord Jagannath 56-bhog Mahaprasad, Tirupati GI-tagged Laddu, and temple rituals.',
    canonical: 'https://saisamarthtours.com/blog/prasadam-and-temple-rituals-india',
    ogTitle: 'Sacred Temple Prasadam & Rituals in India Guide',
    ogDescription: 'Discover the culinary sanctification and Vedic cooking traditions of India’s grandest temples, from Anandabazar in Puri to Tirumala Balaji.',
    ogImage: '/pilgrimage-packages-category-card.webp',
    ogType: 'article',
    h1: 'Sacred Temple Prasadam & Rituals in India: From Puri Mahaprasad to Tirupati Laddu'
  }
};

// ============================================================================
// 5. HELPER LOOKUP FUNCTIONS (TASK 5)
// ============================================================================

/**
 * Returns the exact SEO configuration for any path or route.
 */
export function getSEOForRoute(pathname: string): PageSEOConfig | undefined {
  const cleanPath = pathname.split('?')[0].replace(/\/$/, '') || '/';
  
  // 1. Direct match in core pages
  if (CORE_PAGES_SEO[cleanPath]) {
    return CORE_PAGES_SEO[cleanPath];
  }

  // 2. Destination match (/destinations/:slug)
  if (cleanPath.startsWith('/destinations/')) {
    const slug = cleanPath.replace('/destinations/', '');
    if (DESTINATION_PAGES_SEO[slug]) {
      return DESTINATION_PAGES_SEO[slug];
    }
  }

  // 3. Package match (/package/:idOrSlug)
  if (cleanPath.startsWith('/package/')) {
    const idOrSlug = cleanPath.replace('/package/', '');
    return getSEOForPackage(idOrSlug);
  }

  // 4. Blog match (/blog/:slugOrId)
  if (cleanPath.startsWith('/blog/')) {
    const slugOrId = cleanPath.replace('/blog/', '');
    return getSEOForBlog(slugOrId);
  }

  return undefined;
}

/**
 * Returns the SEO configuration for a package by its ID or canonical slug.
 */
export function getSEOForPackage(packageIdOrSlug: string): PageSEOConfig | undefined {
  // Direct match by ID
  if (PACKAGE_PAGES_SEO[packageIdOrSlug]) {
    return PACKAGE_PAGES_SEO[packageIdOrSlug];
  }

  // Match by canonical path
  for (const pkgSEO of Object.values(PACKAGE_PAGES_SEO)) {
    if (pkgSEO.path === `/package/${packageIdOrSlug}`) {
      return pkgSEO;
    }
  }

  return undefined;
}

/**
 * Returns the SEO configuration for a blog post by its slug or ID.
 */
export function getSEOForBlog(blogSlugOrId: string): PageSEOConfig | undefined {
  if (BLOG_PAGES_SEO[blogSlugOrId]) {
    return BLOG_PAGES_SEO[blogSlugOrId];
  }

  for (const blogSEO of Object.values(BLOG_PAGES_SEO)) {
    if (blogSEO.path === `/blog/${blogSlugOrId}`) {
      return blogSEO;
    }
  }

  return undefined;
}

/**
 * Returns all SEO configurations for sitemap, audits, and static generators.
 */
export function getAllPagesSEO(): PageSEOConfig[] {
  return [
    ...Object.values(CORE_PAGES_SEO),
    ...Object.values(DESTINATION_PAGES_SEO),
    ...Object.values(PACKAGE_PAGES_SEO),
    ...Object.values(BLOG_PAGES_SEO)
  ];
}
