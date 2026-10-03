import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('dist directory not found. Please run npm run build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf8');

// Package slugs mapping
const packageSlugsMap = {
  'shirdi-regular': 'shirdi-tour-package-from-bangalore',
  'shirdi-via-pune': 'shirdi-via-pune-tour-package-from-bangalore',
  'shirdi-via-mumbai': 'shirdi-via-mumbai-tour-package-from-bangalore',
  'shirdi-2-jyothirlinga': 'shirdi-with-2-jyotirlinga-tour-package-from-bangalore',
  'shirdi-3-jyothirlinga': 'shirdi-with-3-jyotirlinga-tour-package-from-bangalore',
  'kashi-ayodhya-prayagraj': 'kashi-ayodhya-prayagraj-tour-package-from-bangalore',
  'kashi-ayodhya': 'kashi-ayodhya-tour-package-from-bangalore',
  'kholapur-pandarpur': 'kolhapur-pandharpur-tour-package-from-bangalore',
  'puri-jagannath': 'puri-jagannath-konark-tour-package-from-bangalore',
  'kamakhya': 'kamakhya-temple-tour-package-from-bangalore',
  'indore-ujjain': 'indore-ujjain-omkareshwar-tour-package-from-bangalore',
  'vaishnodevi': 'vaishnodevi-golden-temple-tour-package-from-bangalore',
  'baidyanath': 'baidyanath-dham-tour-package-from-bangalore',
  'rameshwaram': 'rameshwaram-madurai-kanyakumari-tour-package-from-bangalore',
  'gujarat': 'grand-gujarat-somnath-dwarka-tour-package-from-bangalore',
  'nepal': 'nepal-muktinath-pashupatinath-tour-package-from-bangalore',
  'kashmir': 'kashmir-tour-package-from-bangalore',
  'kerala': 'kerala-tour-package-from-bangalore',
  'leh-ladakh': 'leh-ladakh-tour-package-from-bangalore',
  'rajasthan': 'rajasthan-tour-package-from-bangalore',
  'himachal': 'himachal-pradesh-tour-package-from-bangalore',
  'goa': 'goa-beach-tour-package-from-bangalore',
  'andaman': 'andaman-islands-tour-package-from-bangalore',
  'golden-triangle': 'golden-triangle-delhi-agra-jaipur-tour-package-from-bangalore',
  'thailand-regular': 'thailand-tour-package-from-bangalore',
  'singapore-malaysia': 'singapore-malaysia-tour-package-from-bangalore',
  'malaysia-regular': 'malaysia-tour-package-from-bangalore',
  'maldives': 'maldives-tour-package-from-bangalore',
  'bhutan': 'bhutan-tour-package-from-bangalore',
  'sri-lanka': 'sri-lanka-tour-package-from-bangalore',
  'bali': 'bali-tour-package-from-bangalore',
  'dubai': 'dubai-tour-package-from-bangalore',
  'europe': 'europe-tour-package-from-bangalore'
};

// Helper to replace meta tags in template
function generateHtml({ title, description, url, image, type = 'website' }) {
  const absoluteImage = image.startsWith('http') ? image : `https://saisamarthtours.com${image.startsWith('/') ? '' : '/'}${image}`;
  const absoluteUrl = url.startsWith('http') ? url : `https://saisamarthtours.com${url.startsWith('/') ? '' : '/'}${url}`;

  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${description}" />`);

  // Replace Canonical
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${absoluteUrl}" />`);

  // Replace Open Graph
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${absoluteUrl}" />`);
  html = html.replace(/<meta property="og:type" content=".*?" \/>/i, `<meta property="og:type" content="${type}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${absoluteImage}" />`);
  html = html.replace(/<meta property="og:image:secure_url" content=".*?" \/>/i, `<meta property="og:image:secure_url" content="${absoluteImage}" />`);

  // Replace Twitter
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${absoluteImage}" />`);

  return html;
}

function writePage(subPath, html) {
  const dir = path.join(distDir, subPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
}

// 1. Prerender Packages
const packagesFile = fs.readFileSync(path.join(rootDir, 'src/data/packages.ts'), 'utf8');
const packageBlocks = packagesFile.split(/\n\s*\{\s*\n\s*id:\s*['"]/g).slice(1);

console.log(`Prerendering ${packageBlocks.length} package Open Graph pages...`);

packageBlocks.forEach((block) => {
  const idMatch = block.match(/^([a-zA-Z0-9_-]+)['"]/);
  if (!idMatch) return;
  const id = idMatch[1];

  const titleMatch = block.match(/title:\s*['"`](.*?)['"`],/);
  const title = titleMatch ? titleMatch[1] : id;

  const descMatch = block.match(/description:\s*['"`]([\s\S]*?)['"`],/);
  const desc = descMatch ? descMatch[1].trim() : `Book ${title} tour package from Bangalore with flights and hotels.`;

  const priceMatch = block.match(/price:\s*['"`](.*?)['"`],/);
  const price = priceMatch ? priceMatch[1] : '';

  const imgMatch = block.match(/image:\s*['"`](.*?)['"`],/);
  const image = imgMatch ? imgMatch[1] : '/shirdi-tour-hero-banner-desktop.webp';

  const slug = packageSlugsMap[id] || `${id}-tour-package-from-bangalore`;

  const metaTitle = `${title} from Bangalore | Sai Samarth Tours`;
  const metaDesc = `${desc.slice(0, 160)}... Price: ${price}. Includes return flights, 3-star AC hotel & VIP darshan.`;

  const html = generateHtml({
    title: metaTitle,
    description: metaDesc,
    url: `/package/${slug}`,
    image,
    type: 'product'
  });

  // Write both to slug path and short id path
  writePage(`package/${slug}`, html);
  writePage(`package/${id}`, html);
});

// 2. Prerender Destination Hubs
const destinations = [
  {
    slug: 'shirdi',
    name: 'Shirdi',
    title: 'Shirdi Tour Packages from Bangalore | VIP Darshan Flights | Sai Samarth Tours',
    desc: 'Book direct flight Shirdi tour packages from Bangalore. Includes VIP Darshan at Sai Baba Samadhi Mandir, Kakad Aarti, 3-star AC hotels, pure veg meals, and senior citizen assistance.',
    image: '/shirdi-tour-hero-banner-desktop.webp'
  },
  {
    slug: 'kashi',
    name: 'Kashi',
    title: 'Kashi Ayodhya Tour Packages from Bangalore | Flights & VIP Darshan | Sai Samarth Tours',
    desc: 'Complete Kashi, Ayodhya, Prayagraj & Bodh Gaya tour packages from Bangalore. Includes return flights, special Kashi Vishwanath Darshan, Ganga Aarti boat ride, 3-star hotels & pure veg meals.',
    image: '/pilgrimage-tours-hero-banner-desktop.webp'
  },
  {
    slug: 'kashmir',
    name: 'Kashmir',
    title: 'Kashmir Tour Packages from Bangalore | Flights, Houseboat & Gulmarg | Sai Samarth Tours',
    desc: 'Experience paradise on earth with our Kashmir holiday packages from Bangalore. Includes return flights, luxury Dal Lake houseboat, Gulmarg gondola, Pahalgam valley & private AC transport.',
    image: '/domestic-tours-hero-banner-desktop.webp'
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    title: 'Kerala Tour Packages from Bangalore | Munnar, Alleppey & Thekkady | Sai Samarth Tours',
    desc: 'Book all-inclusive Kerala holiday packages from Bangalore. Explore Munnar tea plantations, Thekkady spice gardens, Alleppey backwater houseboats & Kochi heritage with private vehicle.',
    image: '/kerala-tour-package-from-bangalore.webp'
  },
  {
    slug: 'ayodhya',
    name: 'Ayodhya',
    title: 'Ayodhya Ram Mandir Tour Packages from Bangalore | Sai Samarth Tours',
    desc: 'Direct flight yatra packages from Bangalore to Ayodhya Ram Janmabhoomi Mandir. Includes VIP Darshan, Hanuman Garhi, Sarayu Aarti, 3-star AC hotels & pure vegetarian meals.',
    image: '/kashi-ayodhya-tour-package-from-bangalore-1.webp'
  },
  {
    slug: 'jyotirlinga',
    name: 'Jyotirlinga',
    title: 'Jyotirlinga Tour Packages from Bangalore | 2, 3 & 5 Jyotirlinga Yatras | Sai Samarth Tours',
    desc: 'Sacred Jyotirlinga tour packages from Bangalore with flights. Visit Trimbakeshwar, Bhimashankar, Grishneshwar, Mahakaleshwar, Omkareshwar, Somnath, Baidyanath & Rameshwaram.',
    image: '/shirdi-with-3-jyotirlinga-tour-package-from-bangalore-1.webp'
  },
  {
    slug: 'rameshwaram',
    name: 'Rameshwaram',
    title: 'Rameshwaram Tour Package from Bangalore | Madurai & Kanyakumari | Sai Samarth Tours',
    desc: 'All-inclusive Rameshwaram tour package from Bangalore with flights. Covers Ramanathaswamy Temple, 22 Holy Theerthams, Madurai Meenakshi Amman & Kanyakumari sunrise.',
    image: '/rameshwaram-madurai-kanyakumari-tour-package-from-bangalore-1.webp'
  },
  {
    slug: 'chardham',
    name: 'Char Dham Yatra',
    title: 'Char Dham Yatra from Bangalore | Kedarnath & Badrinath Flight Tour | Sai Samarth Tours',
    desc: 'Complete Char Dham Yatra from Bangalore with flights to Dehradun. Covers Yamunotri, Gangotri, Kedarnath & Badrinath with helicopter shuttle, VIP darshan, 3-star hotels & pure veg meals.',
    image: '/chardham-yatra-tour-package-from-bangalore.webp'
  },
  {
    slug: 'tirupati',
    name: 'Tirupati Balaji',
    title: 'Tirupati Tour Package from Bangalore | VIP Special Entry Darshan | Sai Samarth Tours',
    desc: 'Book 1-day or 2-day Tirupati tour package from Bangalore with confirmed ₹300 Special Entry VIP Darshan at Lord Venkateswara Swamy Temple Tirumala, Padmavathi Temple & AC transport.',
    image: '/tirupati-balaji-tour-package-from-bangalore.webp'
  },
  {
    slug: 'goa',
    name: 'Goa',
    title: 'Goa Tour Package from Bangalore | Beach Holidays & Resorts | Sai Samarth Tours',
    desc: 'All-inclusive Goa tour packages from Bangalore with direct flights. Luxury 4-star beach resort stays, North & South Goa sightseeing, cruise dinner & airport transfers.',
    image: '/goa-beach-tour-package-from-bangalore.webp'
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    title: 'Rajasthan Tour Package from Bangalore | Royal Forts & Palaces | Sai Samarth Tours',
    desc: 'Grand Rajasthan tour packages from Bangalore. Explore Jaipur Pink City, Jodhpur Blue City, Udaipur Lake Palace & Jaisalmer Thar desert safari with flights and hotels.',
    image: '/rajasthan-tour-package-from-bangalore.webp'
  },
  {
    slug: 'ladakh',
    name: 'Leh Ladakh',
    title: 'Ladakh Tour Package from Bangalore | Pangong Lake & Khardung La | Sai Samarth Tours',
    desc: 'Breathtaking Leh Ladakh tour packages from Bangalore with flights. Explore Pangong Tso Lake, Nubra Valley, Khardung La pass & ancient Buddhist monasteries.',
    image: '/leh-ladakh-tour-package-from-bangalore.webp'
  },
  {
    slug: 'andaman',
    name: 'Andaman Islands',
    title: 'Andaman Tour Package from Bangalore | Havelock Island & Scuba | Sai Samarth Tours',
    desc: 'Exotic Andaman tour packages from Bangalore with direct flights. Radhanagar Beach in Havelock, Neil Island coral reefs, Cellular Jail light show & cruise transfers.',
    image: '/andaman-islands-tour-package-from-bangalore.webp'
  },
  {
    slug: 'thailand',
    name: 'Thailand',
    title: 'Thailand Tour Package from Bangalore | Bangkok & Pattaya | Sai Samarth Tours',
    desc: 'All-inclusive Thailand tour packages from Bangalore with flights. Explore Coral Island speedboat tour, Alcazar show, Bangkok temple tour, Safari World & Indian meals.',
    image: '/thailand-tour-package-from-bangalore.webp'
  },
  {
    slug: 'dubai',
    name: 'Dubai',
    title: 'Dubai Tour Package from Bangalore | Burj Khalifa & Desert Safari | Sai Samarth Tours',
    desc: 'Luxury Dubai tour packages from Bangalore. Includes direct flights, Burj Khalifa 124th floor, Desert Safari with BBQ dinner, Marina Dhow cruise & Dubai Mall.',
    image: '/dubai-tour-package-from-bangalore.webp'
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    title: 'Malaysia Tour Package from Bangalore | Kuala Lumpur & Genting | Sai Samarth Tours',
    desc: 'All-inclusive Malaysia tour packages from Bangalore. Visit Petronas Twin Towers, Genting Highlands cable car, Batu Caves temple & Sunway Lagoon with flights.',
    image: '/malaysia-tour-package-from-bangalore.webp'
  },
  {
    slug: 'maldives',
    name: 'Maldives',
    title: 'Maldives Tour Package from Bangalore | Luxury Water Villa Resorts | Sai Samarth Tours',
    desc: 'Direct flight Maldives holiday packages from Bangalore. Stay in luxury overwater villas, private speedboat transfers, all-inclusive dining & coral reef excursions.',
    image: '/maldives-tour-package-from-bangalore.webp'
  }
];

destinations.forEach(dest => {
  const html = generateHtml({
    title: dest.title,
    description: dest.desc,
    url: `/destinations/${dest.slug}`,
    image: dest.image,
    type: 'website'
  });
  writePage(`destinations/${dest.slug}`, html);
});

// 3. Prerender Core & Category Pages
const pages = [
  {
    path: 'tour-packages',
    title: 'Tour Packages from Bangalore | Pilgrimage & Holiday Yatras | Sai Samarth Tours',
    desc: 'Browse 30+ all-inclusive tour packages from Bangalore. Curated Shirdi flight yatras, Kashi Ayodhya, Jyotirlingas, Kashmir, Kerala, and international vacations with 3-star AC hotels & pure veg meals.',
    image: '/shirdi-tour-hero-banner-desktop.webp'
  },
  {
    path: 'pilgrimage-tour-packages',
    title: 'Pilgrimage Tour Packages from Bangalore | Sai Samarth Tours',
    desc: 'Book all-inclusive sacred pilgrimage yatra packages from Bangalore to Kashi, Ayodhya, Puri Jagannath, Vaishno Devi, Kamakhya & Jyotirlingas. Includes flights, VIP darshan & 3-star AC hotels.',
    image: '/pilgrimage-packages-category-card.webp'
  },
  {
    path: 'shirdi-tour-packages',
    title: 'Bangalore to Shirdi Tour Packages | Flights & VIP Darshan | Sai Samarth Tours',
    desc: 'Book direct flights from Bangalore to Shirdi with confirmed VIP Darshan, Kakad Aarti assistance, 3-star hotel stay, and pure vegetarian meals.',
    image: '/shirdi-packages-category-card.webp'
  },
  {
    path: 'domestic-tour-packages',
    title: 'Domestic Holiday Packages from Bangalore | Sai Samarth Tours',
    desc: 'Explore incredible India with curated domestic tour packages from Bangalore covering Kashmir, Kerala, Ladakh, Rajasthan, Himachal, Goa, and Andaman with flights and AC vehicles.',
    image: '/domestic-packages-category-card.webp'
  },
  {
    path: 'international-tour-packages',
    title: 'International Tour Packages from Bangalore | Sai Samarth Tours',
    desc: 'Discover world destinations with international tour packages from Bangalore. Complete visa guidance, direct flights, 4-star stays, and Indian meals for Thailand, Malaysia, Singapore, Bali, Dubai.',
    image: '/international-packages-category-card.webp'
  },
  {
    path: 'senior-citizen-tour-packages',
    title: 'Senior Citizen Tour Packages from Bangalore | Safe & Assisted Pilgrimages | Sai Samarth Tours',
    desc: 'Assisted senior citizen tour packages from Bangalore. Comfortable pilgrimage tours to Shirdi, Kashi, Tirupati, Char Dham & Rameshwaram with wheelchair assistance, pure veg meals, 3-star AC hotels & tour managers.',
    image: '/shirdi-tour-hero-banner-desktop.webp'
  },
  {
    path: 'family-tour-packages-from-bangalore',
    title: 'Family Tour Packages from Bangalore | Domestic & International Holidays | Sai Samarth Tours',
    desc: 'Book best family tour packages from Bangalore with flights. Handcrafted vacations to Kashmir, Kerala, Goa, Andaman, Thailand, Dubai & Bali with kid-friendly activities, deluxe hotels & private AC vehicles.',
    image: '/domestic-tours-hero-banner-desktop.webp'
  },
  {
    path: 'group-tour-packages-from-bangalore',
    title: 'Group Tour Packages from Bangalore | Custom Community & Corporate Yatras | Sai Samarth Tours',
    desc: 'All-inclusive group tour packages from Bangalore for extended families, apartment associations, senior citizen forums & corporate offsites. Dedicated luxury AC Volvo coaches, customized meals & bulk discounts.',
    image: '/shirdi-tour-hero-banner-desktop.webp'
  },
  {
    path: 'tour-packages-from-bangalore',
    title: 'Tour Packages from Bangalore | Pilgrimage & Holiday Yatras | Sai Samarth Tours',
    desc: 'Browse 30+ all-inclusive tour packages from Bangalore. Curated Shirdi flight yatras, Kashi Ayodhya, Jyotirlingas, Kashmir, Kerala, and international vacations with 3-star AC hotels & pure veg meals.',
    image: '/shirdi-tour-hero-banner-desktop.webp'
  },
  {
    path: 'pilgrimage-tours-from-bangalore',
    title: 'Pilgrimage Tours from Bangalore | Sacred Yatras with Flights | Sai Samarth Tours',
    desc: 'Book all-inclusive sacred pilgrimage yatra packages from Bangalore to Kashi, Ayodhya, Puri Jagannath, Vaishno Devi, Kamakhya & Jyotirlingas with flights, VIP darshan & 3-star AC hotels.',
    image: '/pilgrimage-packages-category-card.webp'
  },
  {
    path: 'shirdi-tour-packages-from-bangalore',
    title: 'Shirdi Tour Packages from Bangalore | Flights, VIP Darshan & 3-Star Hotels | Sai Samarth Tours',
    desc: 'Book direct flight Shirdi tour packages from Bangalore with Sai Samarth Tours. Includes VIP darshan passes, Shani Shingnapur, Trimbakeshwar, Bhimashankar Jyotirlingas, and 3-star AC accommodation.',
    image: '/shirdi-packages-category-card.webp'
  },
  {
    path: 'domestic-tour-packages-from-bangalore',
    title: 'Domestic Tour Packages from Bangalore | Incredible India Holidays | Sai Samarth Tours',
    desc: 'Handcrafted India holiday packages from Bangalore: Kashmir, Kerala backwaters, Leh Ladakh, Rajasthan, Himachal Pradesh & Andaman. Includes flights, deluxe hotels & customized sightseeing.',
    image: '/domestic-packages-category-card.webp'
  },
  {
    path: 'international-tour-packages-from-bangalore',
    title: 'International Tour Packages from Bangalore | World Vacations | Sai Samarth Tours',
    desc: 'Premium international holiday packages from Bangalore: Singapore, Malaysia, Thailand, Bali, Dubai, Sri Lanka, Nepal & Europe. Complete visa assistance, flights, 4-star hotels & meals.',
    image: '/international-packages-category-card.webp'
  },
  {
    path: 'about',
    title: 'About Sai Samarth Tours | Bangalore’s Leading Pilgrimage & Holiday Agency',
    desc: 'Serving over 20,000+ devotees since 2013 with dedicated tour managers, flight tickets, VIP darshan, and verified 3-star accommodations.',
    image: '/about-sai-samarth-tours-agency.webp'
  },
  {
    path: 'contact',
    title: 'Contact Us | Sai Samarth Tours Bangalore Office & Consultation',
    desc: 'Get in touch with Sai Samarth Tours in Yelahanka New Town, Bangalore. Speak with our tour advisors for flight bookings, customized packages, and instant quotes.',
    image: '/sai-samarth-tours-logo.webp'
  },
  {
    path: 'blog',
    title: 'Travel Blog & Pilgrimage Guides | Sai Samarth Tours',
    desc: 'Read authentic travel guides, temple timings, darshan rules, and itinerary tips for Shirdi, Kashi, Ayodhya, Kashmir, and overseas tours from Bangalore.',
    image: '/shirdi-tour-hero-banner-desktop.webp'
  }
];

pages.forEach(p => {
  const html = generateHtml({
    title: p.title,
    description: p.desc,
    url: `/${p.path}`,
    image: p.image,
    type: 'website'
  });
  writePage(p.path, html);
});

console.log('Successfully prerendered Open Graph social previews for all packages, destinations, and category pages!');
