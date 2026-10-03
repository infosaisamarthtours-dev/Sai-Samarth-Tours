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

// Shared Navigation for Crawlable SSR Snapshot
function renderSharedNav() {
  return `
    <header style="background:#ffffff;border-bottom:1px solid #e5e7eb;padding:12px 20px;">
      <div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
        <a href="/" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:#114088;font-weight:800;font-size:1.25rem;">
          <img src="/sai-samarth-tours-logo.webp" alt="Sai Samarth Tours Bangalore Logo" width="44" height="44" style="border-radius:8px;" />
          <span>Sai Samarth Tours</span>
        </a>
        <nav aria-label="Main Navigation" style="display:flex;flex-wrap:wrap;gap:14px;font-size:0.875rem;font-weight:600;">
          <a href="/tour-packages" style="color:#114088;text-decoration:none;">All Tour Packages</a>
          <a href="/pilgrimage-tour-packages" style="color:#114088;text-decoration:none;">Pilgrimage Tours</a>
          <a href="/shirdi-tour-packages" style="color:#114088;text-decoration:none;">Shirdi Packages</a>
          <a href="/domestic-tour-packages" style="color:#114088;text-decoration:none;">Domestic Tours</a>
          <a href="/international-tour-packages" style="color:#114088;text-decoration:none;">International Tours</a>
          <a href="/senior-citizen-tour-packages" style="color:#114088;text-decoration:none;">Senior Citizen Packages</a>
          <a href="/about" style="color:#4b5563;text-decoration:none;">About Us</a>
          <a href="/contact" style="color:#4b5563;text-decoration:none;">Contact</a>
          <a href="/blog" style="color:#4b5563;text-decoration:none;">Travel Blog</a>
        </nav>
      </div>
    </header>
  `;
}

// Shared Footer for Crawlable SSR Snapshot
function renderSharedFooter() {
  return `
    <footer style="background:#114088;color:#ffffff;padding:30px 20px;border-top:3px solid #EA580C;font-size:0.875rem;">
      <div style="max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;">
        <div>
          <h3 style="font-size:1.05rem;font-weight:800;margin-top:0;margin-bottom:12px;color:#EA580C;">Sai Samarth Tours</h3>
          <p style="color:#d1d5db;line-height:1.5;margin-bottom:10px;">Bangalore's trusted pilgrimage and holiday tour operator based in Yelahanka New Town. Over 20,000+ happy travelers since 2013.</p>
          <p style="color:#d1d5db;line-height:1.5;margin:0;"><strong>Office:</strong> No. 2238, 2nd Floor, 16th 'B' Cross, Yelahanka New Town, Bengaluru, 560064</p>
          <p style="color:#d1d5db;line-height:1.5;margin:4px 0 0 0;"><strong>Phone:</strong> <a href="tel:+919187711649" style="color:#ffffff;text-decoration:underline;">+91 91877 11649</a></p>
        </div>
        <div>
          <h3 style="font-size:1.05rem;font-weight:800;margin-top:0;margin-bottom:12px;color:#EA580C;">Tour Categories</h3>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
            <li><a href="/tour-packages" style="color:#d1d5db;text-decoration:none;">All Tour Packages from Bangalore</a></li>
            <li><a href="/pilgrimage-tour-packages" style="color:#d1d5db;text-decoration:none;">Pilgrimage Tour Packages</a></li>
            <li><a href="/shirdi-tour-packages" style="color:#d1d5db;text-decoration:none;">Shirdi Tour Packages</a></li>
            <li><a href="/domestic-tour-packages" style="color:#d1d5db;text-decoration:none;">Domestic Tour Packages</a></li>
            <li><a href="/international-tour-packages" style="color:#d1d5db;text-decoration:none;">International Tour Packages</a></li>
            <li><a href="/senior-citizen-tour-packages" style="color:#d1d5db;text-decoration:none;">Senior Citizen Tour Packages</a></li>
          </ul>
        </div>
        <div>
          <h3 style="font-size:1.05rem;font-weight:800;margin-top:0;margin-bottom:12px;color:#EA580C;">Popular Destinations</h3>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
            <li><a href="/destinations/shirdi" style="color:#d1d5db;text-decoration:none;">Shirdi Tour Packages</a></li>
            <li><a href="/destinations/kashi" style="color:#d1d5db;text-decoration:none;">Kashi Ayodhya Packages</a></li>
            <li><a href="/destinations/jyotirlinga" style="color:#d1d5db;text-decoration:none;">Jyotirlinga Tour Packages</a></li>
            <li><a href="/destinations/chardham" style="color:#d1d5db;text-decoration:none;">Char Dham Yatra Packages</a></li>
            <li><a href="/destinations/kashmir" style="color:#d1d5db;text-decoration:none;">Kashmir Tour Packages</a></li>
            <li><a href="/destinations/kerala" style="color:#d1d5db;text-decoration:none;">Kerala Tour Packages</a></li>
          </ul>
        </div>
        <div>
          <h3 style="font-size:1.05rem;font-weight:800;margin-top:0;margin-bottom:12px;color:#EA580C;">Company Links</h3>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
            <li><a href="/about" style="color:#d1d5db;text-decoration:none;">About Sai Samarth Tours</a></li>
            <li><a href="/contact" style="color:#d1d5db;text-decoration:none;">Contact & Location</a></li>
            <li><a href="/blog" style="color:#d1d5db;text-decoration:none;">Travel Blog & Guides</a></li>
            <li><a href="/faq" style="color:#d1d5db;text-decoration:none;">Frequently Asked Questions</a></li>
            <li><a href="/cancellation-policy" style="color:#d1d5db;text-decoration:none;">Cancellation Policy</a></li>
            <li><a href="/sitemap.xml" style="color:#d1d5db;text-decoration:none;">XML Sitemap</a></li>
          </ul>
        </div>
      </div>
      <div style="max-width:1200px;margin:24px auto 0 auto;padding-top:16px;border-top:1px solid rgba(255,255,255,0.15);text-align:center;color:#9ca3af;font-size:0.75rem;">
        &copy; 2026 Sai Samarth Tours. All Rights Reserved. Bangalore's Preferred Tour Operator.
      </div>
    </footer>
  `;
}

function buildPackageBody({ title, desc, price, slug }) {
  return `
    <div id="seo-static-snapshot" style="min-height:100vh;display:flex;flex-direction:column;background:#FBF9F5;color:#1C1C1C;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      ${renderSharedNav()}
      <main style="max-width:1200px;margin:0 auto;padding:30px 20px;flex:1;">
        <nav aria-label="Breadcrumb" style="margin-bottom:16px;font-size:0.875rem;color:#6b7280;">
          <a href="/" style="color:#114088;text-decoration:none;">Home</a> &gt; 
          <a href="/tour-packages" style="color:#114088;text-decoration:none;">Tour Packages from Bangalore</a> &gt; 
          <span style="color:#374151;">${title}</span>
        </nav>
        <article>
          <span style="display:inline-block;background:#114088;color:#ffffff;padding:4px 12px;border-radius:9999px;font-size:0.75rem;font-weight:700;letter-spacing:0.05em;margin-bottom:12px;text-transform:uppercase;">
            Bangalore Departure Package
          </span>
          <h1 style="font-size:2.25rem;line-height:1.2;font-weight:900;color:#114088;margin:0 0 16px 0;">
            ${title.includes('from Bangalore') ? title : `${title} from Bangalore`}
          </h1>
          <p style="font-size:1.1rem;color:#374151;margin-bottom:24px;line-height:1.6;">
            ${desc}
          </p>
          <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:24px;">
            <h2 style="font-size:1.35rem;font-weight:800;color:#114088;margin-top:0;margin-bottom:12px;">Tour Package Highlights &amp; Inclusions</h2>
            <ul style="color:#374151;line-height:1.8;padding-left:20px;margin-bottom:16px;">
              <li><strong>Starting Price:</strong> ${price}</li>
              <li><strong>Flights:</strong> Direct or connecting return flights from Kempegowda International Airport (BLR) Bangalore.</li>
              <li><strong>Accommodation:</strong> Verified 3-star AC deluxe hotels with twin/double sharing.</li>
              <li><strong>Meals:</strong> Daily pure vegetarian meals prepared according to South &amp; North Indian preferences.</li>
              <li><strong>Transport:</strong> Dedicated private AC vehicle for all airport transfers and temple/destination sightseeing.</li>
              <li><strong>Assistance:</strong> Tour manager assistance, priority darshan guidance, and dedicated support for senior citizens.</li>
            </ul>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px;">
              <a href="/contact" style="background:#EA580C;color:#ffffff;padding:10px 24px;border-radius:9999px;text-decoration:none;font-weight:700;">Enquire for this Package &rarr;</a>
              <a href="tel:+919187711649" style="background:#059669;color:#ffffff;padding:10px 24px;border-radius:9999px;text-decoration:none;font-weight:700;">Call +91 91877 11649</a>
            </div>
          </div>
          <div style="margin-bottom:24px;">
            <h2 style="font-size:1.35rem;font-weight:800;color:#114088;margin-bottom:12px;">Related Tour Packages from Bangalore</h2>
            <div style="display:flex;flex-wrap:wrap;gap:10px;">
              <a href="/shirdi-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Shirdi Packages</a>
              <a href="/pilgrimage-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Pilgrimage Tours</a>
              <a href="/domestic-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Domestic Tours</a>
              <a href="/international-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">International Tours</a>
              <a href="/senior-citizen-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Senior Citizen Tours</a>
            </div>
          </div>
        </article>
      </main>
      ${renderSharedFooter()}
    </div>
  `;
}

// Helper to replace meta tags and inject crawlable HTML in template
function generateHtml({ title, description, url, image, type = 'website', bodyContent = null }) {
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

  // Inject crawlable body inside #root
  if (bodyContent) {
    html = html.replace(/<div id="root">[\s\S]*?<\/body>/i, `<div id="root">\n${bodyContent}\n    </div>\n  </body>`);
  }

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

console.log(`Prerendering ${packageBlocks.length} package Open Graph pages with crawlable HTML...`);

packageBlocks.forEach((block) => {
  const idMatch = block.match(/^([a-zA-Z0-9_-]+)['"]/);
  if (!idMatch) return;
  const id = idMatch[1];

  const seoH1Match = block.match(/seoH1:\s*['"`](.*?)['"`],/);
  const titleMatch = block.match(/title:\s*['"`](.*?)['"`],/);
  const title = (seoH1Match ? seoH1Match[1] : (titleMatch ? titleMatch[1] : id));

  const descMatch = block.match(/description:\s*['"`]([\s\S]*?)['"`],/);
  const desc = descMatch ? descMatch[1].trim() : `Book ${title} tour package from Bangalore with flights and hotels.`;

  const priceMatch = block.match(/price:\s*['"`](.*?)['"`],/);
  const price = priceMatch ? priceMatch[1] : '';

  const imgMatch = block.match(/image:\s*['"`](.*?)['"`],/);
  const image = imgMatch ? imgMatch[1] : '/shirdi-tour-hero-banner-desktop.webp';

  const slug = packageSlugsMap[id] || `${id}-tour-package-from-bangalore`;

  const metaTitle = title.includes('from Bangalore') 
    ? `${title} | Sai Samarth Tours` 
    : `${title} from Bangalore | Sai Samarth Tours`;
  const metaDesc = `Book ${title}. Includes return flights, verified 3-star AC hotel, pure veg meals & VIP darshan. Price: ${price}.`.slice(0, 155);

  const bodyContent = buildPackageBody({ title, desc, price, slug });

  const html = generateHtml({
    title: metaTitle,
    description: metaDesc,
    url: `/package/${slug}`,
    image,
    type: 'product',
    bodyContent
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

function buildDestinationBody(dest) {
  return `
    <div id="seo-static-snapshot" style="min-height:100vh;display:flex;flex-direction:column;background:#FBF9F5;color:#1C1C1C;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      ${renderSharedNav()}
      <main style="max-width:1200px;margin:0 auto;padding:30px 20px;flex:1;">
        <nav aria-label="Breadcrumb" style="margin-bottom:16px;font-size:0.875rem;color:#6b7280;">
          <a href="/" style="color:#114088;text-decoration:none;">Home</a> &gt; 
          <a href="/tour-packages" style="color:#114088;text-decoration:none;">Destinations</a> &gt; 
          <span style="color:#374151;">${dest.name} Tour Packages</span>
        </nav>
        <article>
          <span style="display:inline-block;background:#114088;color:#ffffff;padding:4px 12px;border-radius:9999px;font-size:0.75rem;font-weight:700;letter-spacing:0.05em;margin-bottom:12px;text-transform:uppercase;">
            Bangalore Departure Hub
          </span>
          <h1 style="font-size:2.25rem;line-height:1.2;font-weight:900;color:#114088;margin:0 0 16px 0;">
            ${dest.title}
          </h1>
          <p style="font-size:1.1rem;color:#374151;margin-bottom:24px;line-height:1.6;">
            ${dest.desc}
          </p>
          <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:24px;">
            <h2 style="font-size:1.35rem;font-weight:800;color:#114088;margin-top:0;margin-bottom:12px;">Why Visit ${dest.name} with Sai Samarth Tours Bangalore?</h2>
            <p style="color:#374151;line-height:1.6;margin-bottom:12px;">
              Sai Samarth Tours curates hassle-free holiday and pilgrimage packages from Bangalore to ${dest.name}. Every itinerary includes:
            </p>
            <ul style="color:#374151;line-height:1.8;padding-left:20px;margin-bottom:16px;">
              <li>Convenient flight schedules departing Bangalore Kempegowda Airport (BLR).</li>
              <li>Comfortable stays in verified 3-star and 4-star AC accommodations.</li>
              <li>Dedicated AC vehicle for all transfers and sightseeing.</li>
              <li>Pure vegetarian food tailored to South &amp; North Indian culinary tastes.</li>
              <li>VIP darshan passes and priority sightseeing assistance.</li>
            </ul>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px;">
              <a href="/contact" style="background:#EA580C;color:#ffffff;padding:10px 24px;border-radius:9999px;text-decoration:none;font-weight:700;">Get Instant Quote &rarr;</a>
              <a href="tel:+919187711649" style="background:#059669;color:#ffffff;padding:10px 24px;border-radius:9999px;text-decoration:none;font-weight:700;">Call Tour Advisor</a>
            </div>
          </div>
          <div style="margin-bottom:24px;">
            <h2 style="font-size:1.35rem;font-weight:800;color:#114088;margin-bottom:12px;">Other Popular Tour Destinations from Bangalore</h2>
            <div style="display:flex;flex-wrap:wrap;gap:10px;">
              <a href="/destinations/shirdi" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Shirdi Packages</a>
              <a href="/destinations/kashi" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Kashi Ayodhya Packages</a>
              <a href="/destinations/kashmir" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Kashmir Packages</a>
              <a href="/destinations/kerala" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Kerala Packages</a>
              <a href="/destinations/thailand" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Thailand Packages</a>
              <a href="/destinations/dubai" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Dubai Packages</a>
            </div>
          </div>
        </article>
      </main>
      ${renderSharedFooter()}
    </div>
  `;
}

function buildPageBody(p) {
  return `
    <div id="seo-static-snapshot" style="min-height:100vh;display:flex;flex-direction:column;background:#FBF9F5;color:#1C1C1C;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
      ${renderSharedNav()}
      <main style="max-width:1200px;margin:0 auto;padding:30px 20px;flex:1;">
        <nav aria-label="Breadcrumb" style="margin-bottom:16px;font-size:0.875rem;color:#6b7280;">
          <a href="/" style="color:#114088;text-decoration:none;">Home</a> &gt; 
          <span style="color:#374151;">${p.title}</span>
        </nav>
        <article>
          <span style="display:inline-block;background:#114088;color:#ffffff;padding:4px 12px;border-radius:9999px;font-size:0.75rem;font-weight:700;letter-spacing:0.05em;margin-bottom:12px;text-transform:uppercase;">
            Bangalore Tour Packages Hub
          </span>
          <h1 style="font-size:2.25rem;line-height:1.2;font-weight:900;color:#114088;margin:0 0 16px 0;">
            ${p.title}
          </h1>
          <p style="font-size:1.1rem;color:#374151;margin-bottom:24px;line-height:1.6;">
            ${p.desc}
          </p>
          <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:24px;">
            <h2 style="font-size:1.35rem;font-weight:800;color:#114088;margin-top:0;margin-bottom:12px;">Package Inclusions &amp; Services</h2>
            <p style="color:#374151;line-height:1.6;margin-bottom:12px;">
              Sai Samarth Tours is dedicated to providing superior travel experiences departing from Bangalore Kempegowda International Airport.
            </p>
            <ul style="color:#374151;line-height:1.8;padding-left:20px;margin-bottom:16px;">
              <li>Return flight tickets departing Bangalore (BLR).</li>
              <li>Confirmed VIP darshan entry and sightseeing passes.</li>
              <li>Comfortable 3-star AC hotel accommodations.</li>
              <li>Pure vegetarian breakfast, lunch, and dinner.</li>
              <li>Senior citizen assistance and wheelchair coordination upon request.</li>
            </ul>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px;">
              <a href="/contact" style="background:#EA580C;color:#ffffff;padding:10px 24px;border-radius:9999px;text-decoration:none;font-weight:700;">Enquire Now &rarr;</a>
              <a href="tel:+919187711649" style="background:#059669;color:#ffffff;padding:10px 24px;border-radius:9999px;text-decoration:none;font-weight:700;">Call +91 91877 11649</a>
            </div>
          </div>
          <div style="margin-bottom:24px;">
            <h2 style="font-size:1.35rem;font-weight:800;color:#114088;margin-bottom:12px;">Browse Other Tour Categories</h2>
            <div style="display:flex;flex-wrap:wrap;gap:10px;">
              <a href="/tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">All Tour Packages</a>
              <a href="/pilgrimage-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Pilgrimage Tours</a>
              <a href="/shirdi-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Shirdi Packages</a>
              <a href="/domestic-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Domestic Packages</a>
              <a href="/international-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">International Packages</a>
              <a href="/senior-citizen-tour-packages" style="background:#ffffff;border:1px solid #d1d5db;padding:8px 14px;border-radius:8px;color:#114088;text-decoration:none;font-weight:600;">Senior Citizen Tours</a>
            </div>
          </div>
        </article>
      </main>
      ${renderSharedFooter()}
    </div>
  `;
}

destinations.forEach(dest => {
  const bodyContent = buildDestinationBody(dest);
  const html = generateHtml({
    title: dest.title,
    description: dest.desc.slice(0, 155),
    url: `/destinations/${dest.slug}`,
    image: dest.image,
    type: 'website',
    bodyContent
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
  const bodyContent = buildPageBody(p);
  const html = generateHtml({
    title: p.title,
    description: p.desc.slice(0, 155),
    url: `/${p.path}`,
    image: p.image,
    type: 'website',
    bodyContent
  });
  writePage(p.path, html);
});

// 4. Prerender Blog Articles
const blogArticles = [
  {
    slug: 'shirdi-vip-darshan-guide-2026',
    title: 'Shirdi VIP Darshan Online Booking, Aarti Timings & Flight Guide from Bangalore (2026)',
    desc: 'Complete guide for Bangalore devotees visiting Shirdi: VIP darshan passes, Aarti schedule, Dress code, and Direct Flights from Kempegowda Airport.',
    image: '/shirdi-tour-hero-banner-desktop.webp',
    h1: 'Shirdi VIP Darshan Booking, Aarti Timings & Flight Guide from Bangalore (2026)',
    intro: 'Planning a pilgrimage to Shirdi from Bangalore? This definitive 2026 guide covers everything you need: official VIP darshan booking steps, Kakad and Shej Aarti schedules, temple rules, and hassle-free flight itineraries.'
  },
  {
    slug: 'kashi-ayodhya-prayagraj-guide-2026',
    title: 'Kashi, Ayodhya & Prayagraj Pilgrimage Circuit: Complete Flight & Darshan Guide from Bangalore (2026)',
    desc: 'Essential guide for Bangalore pilgrims visiting Kashi Vishwanath, Ayodhya Ram Mandir, and Prayagraj Triveni Sangam. Covers Ganga Aarti, VIP passes, and flights.',
    image: '/kashi-ayodhya-prayagraj-tour-package-from-bangalore.webp',
    h1: 'Kashi, Ayodhya & Prayagraj Pilgrimage Circuit Guide from Bangalore (2026)',
    intro: 'The sacred Uttar Pradesh holy triumvirate—Kashi, Ayodhya, and Prayagraj—constitutes the quintessential pilgrimage for every Hindu devotee seeking spiritual liberation.'
  },
  {
    slug: 'singapore-malaysia-family-guide-2026',
    title: 'Singapore Malaysia Tour Guide for Indian Families from Bangalore',
    desc: 'Complete travel guide for Singapore & Malaysia twin-country family tours from Bangalore. Covers Universal Studios, Batu Caves, Genting, visa procedures, and Indian veg food.',
    image: '/singapore-malaysia-tour-package-from-bangalore.webp',
    h1: 'Malaysia & Singapore Twin Country Tour Guide for Indian Families Departing Bangalore',
    intro: 'Combining Malaysia and Singapore in a single international holiday is the premier choice for Indian families, couples, and multi-generational travelers departing Bangalore.'
  },
  {
    slug: 'chardham-yatra-preparation-guide',
    title: 'Char Dham Yatra 2026 Preparation & Flight Guide from Bangalore',
    desc: 'Complete preparation guide for Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath) from Bangalore. Includes biometric pass, helicopter booking, fitness tips, and packing list.',
    image: '/baidyanath-dham-tour-package-from-bangalore.webp',
    h1: 'Char Dham Yatra 2026: Comprehensive Preparation, Medical & Flight Guide from Bangalore',
    intro: 'The Char Dham Yatra in the Garhwal Himalayas of Uttarakhand—visiting Yamunotri, Gangotri, Kedarnath, and Badrinath—is regarded as the supreme pilgrimage of lifetime liberation.'
  },
  {
    slug: 'kashmir-paradise-seasons-guide',
    title: 'Kashmir Tour Guide from Bangalore: Best Season, Houseboats & Flight Routes',
    desc: 'Complete seasonal guide for planning a Kashmir tour package from Bangalore. Covers Srinagar houseboats, Gulmarg Gondola booking, Pahalgam valleys, and snow seasons.',
    image: '/kashmir-tour-package-from-bangalore.webp',
    h1: 'Kashmir Paradise Valley Guide: Best Seasons, Houseboat Stays & Flight Routes from Bangalore',
    intro: 'Renowned as the paradise on earth, Jammu and Kashmir offers breathtaking snow-capped Himalayan vistas, tranquil Dal Lake shikara rides, and alpine meadows.'
  },
  {
    slug: 'prasadam-and-temple-rituals-india',
    title: 'Sacred Temple Prasadam & Ritual Practices Guide | Sai Samarth Tours',
    desc: 'Discover the spiritual secrets of Tirupati Srivari Laddoo, Puri Jagannath Mahaprasad 56 Bhog, and Shirdi Sai Prasadalaya. Pilgrimage tour guide from Bangalore.',
    image: '/puri-jagannath-konark-tour-package-from-bangalore.webp',
    h1: 'Sacred Temple Prasadam & Ritual Practices Across Holy Shrines of India',
    intro: 'In Sanatana Dharma, Temple Prasadam is not merely food—it is the direct divine blessing of the supreme deity.'
  }
];

function buildBlogBody(blog) {
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;color:#1f2937;background:#f9fafb;min-height:100vh;">
      ${renderSharedNav()}
      <main style="max-width:900px;margin:0 auto;padding:40px 20px;">
        <nav aria-label="Breadcrumb" style="font-size:0.875rem;color:#6b7280;margin-bottom:20px;">
          <a href="/" style="color:#114088;text-decoration:none;">Home</a> &gt; 
          <a href="/blog" style="color:#114088;text-decoration:none;">Blog</a> &gt; 
          <span>${blog.title}</span>
        </nav>
        <article>
          <header style="margin-bottom:30px;">
            <span style="display:inline-block;background:#eff6ff;color:#1d4ed8;padding:4px 12px;border-radius:9999px;font-size:0.875rem;font-weight:700;margin-bottom:12px;">Travel &amp; Pilgrimage Guide</span>
            <h1 style="font-size:2.25rem;font-weight:800;color:#114088;line-height:1.25;margin:0 0 16px 0;">${blog.h1}</h1>
            <p style="font-size:1.15rem;line-height:1.6;color:#4b5563;margin-bottom:20px;">${blog.intro}</p>
          </header>
          <div style="margin-bottom:30px;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
            <img src="${blog.image}" alt="${blog.title}" style="width:100%;max-height:480px;object-fit:cover;display:block;" />
          </div>
          <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin-bottom:30px;">
            <h2 style="font-size:1.35rem;font-weight:800;color:#114088;margin-top:0;margin-bottom:12px;">Plan Your Pilgrimage with Sai Samarth Tours Bangalore</h2>
            <p style="color:#374151;line-height:1.6;margin-bottom:16px;">
              Looking for verified flight bookings, confirmed VIP darshan, sanitized luxury transportation, and 3-star AC hotel stays from Bangalore? Contact our expert travel advisors today.
            </p>
            <div style="display:flex;gap:12px;flex-wrap:wrap;">
              <a href="/tour-packages" style="background:#EA580C;color:#ffffff;padding:10px 24px;border-radius:9999px;text-decoration:none;font-weight:700;">Explore All Packages &rarr;</a>
              <a href="/contact" style="background:#114088;color:#ffffff;padding:10px 24px;border-radius:9999px;text-decoration:none;font-weight:700;">Bangalore Office Consultation</a>
            </div>
          </div>
        </article>
      </main>
      ${renderSharedFooter()}
    </div>
  `;
}

blogArticles.forEach(blog => {
  const bodyContent = buildBlogBody(blog);
  const html = generateHtml({
    title: blog.title,
    description: blog.desc.slice(0, 155),
    url: `/blog/${blog.slug}`,
    image: blog.image,
    type: 'article',
    bodyContent
  });
  writePage(`blog/${blog.slug}`, html);
});

console.log('Successfully prerendered Open Graph social previews and crawlable HTML for all packages, destinations, blogs, and category pages!');
