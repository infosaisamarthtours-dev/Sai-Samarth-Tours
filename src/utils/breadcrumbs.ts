import { Package } from '../types';

export interface BreadcrumbHierarchy {
  category: { name: string; url: string };
  region: { name: string; url?: string };
}

const REGION_MAP: Record<string, { region: string; regionUrl?: string }> = {
  // Shirdi & Maharashtra Yatras
  'shirdi-regular': { region: 'Maharashtra', regionUrl: '/destinations/shirdi' },
  'shirdi-via-pune': { region: 'Maharashtra', regionUrl: '/destinations/shirdi' },
  'shirdi-via-mumbai': { region: 'Maharashtra', regionUrl: '/destinations/shirdi' },
  'shirdi-2-jyothirlinga': { region: 'Maharashtra', regionUrl: '/destinations/shirdi' },
  'shirdi-3-jyothirlinga': { region: 'Maharashtra', regionUrl: '/destinations/shirdi' },
  'kholapur-pandarpur': { region: 'Maharashtra', regionUrl: '/pilgrimage-tour-packages' },

  // Sacred Yatras (UP, Uttarakhand, Gujarat, etc.)
  'kashi-ayodhya-prayagraj': { region: 'Uttar Pradesh', regionUrl: '/destinations/kashi' },
  'kashi-ayodhya': { region: 'Uttar Pradesh', regionUrl: '/destinations/kashi' },
  'chardham': { region: 'Uttarakhand', regionUrl: '/destinations/chardham' },
  'vaishnodevi': { region: 'Jammu & Kashmir', regionUrl: '/pilgrimage-tour-packages' },
  'puri-jagannath': { region: 'Odisha', regionUrl: '/pilgrimage-tour-packages' },
  'kamakhya': { region: 'Assam', regionUrl: '/pilgrimage-tour-packages' },
  'indore-ujjain': { region: 'Madhya Pradesh', regionUrl: '/destinations/jyotirlinga' },
  'gujarat': { region: 'Gujarat', regionUrl: '/destinations/jyotirlinga' },
  'baidyanath': { region: 'Jharkhand', regionUrl: '/destinations/jyotirlinga' },
  'rameshwaram': { region: 'Tamil Nadu', regionUrl: '/destinations/rameshwaram' },
  'rameshwaram-madurai': { region: 'Tamil Nadu', regionUrl: '/destinations/rameshwaram' },
  'tirupati': { region: 'Andhra Pradesh', regionUrl: '/destinations/tirupati' },
  'nepal': { region: 'Nepal', regionUrl: '/destinations/nepal' },

  // Domestic Holiday Packages
  'kashmir': { region: 'Kashmir', regionUrl: '/destinations/kashmir' },
  'leh-ladakh': { region: 'Ladakh', regionUrl: '/destinations/ladakh' },
  'kerala': { region: 'Kerala', regionUrl: '/destinations/kerala' },
  'goa': { region: 'Goa', regionUrl: '/destinations/goa' },
  'rajasthan': { region: 'Rajasthan', regionUrl: '/destinations/rajasthan' },
  'himachal': { region: 'Himachal Pradesh', regionUrl: '/destinations/himachal' },
  'andaman': { region: 'Andaman Islands', regionUrl: '/destinations/andaman' },
  'golden-triangle': { region: 'Golden Triangle', regionUrl: '/domestic-tour-packages' },

  // International Holiday Packages
  'thailand': { region: 'Thailand', regionUrl: '/destinations/thailand' },
  'thailand-regular': { region: 'Thailand', regionUrl: '/destinations/thailand' },
  'dubai': { region: 'Dubai & UAE', regionUrl: '/destinations/dubai' },
  'bali': { region: 'Bali', regionUrl: '/destinations/bali' },
  'malaysia': { region: 'Malaysia', regionUrl: '/destinations/malaysia' },
  'malaysia-regular': { region: 'Malaysia', regionUrl: '/destinations/malaysia' },
  'singapore-malaysia': { region: 'Singapore & Malaysia', regionUrl: '/destinations/singapore' },
  'maldives': { region: 'Maldives', regionUrl: '/destinations/maldives' },
  'sri-lanka': { region: 'Sri Lanka', regionUrl: '/destinations/sri-lanka' },
  'bhutan': { region: 'Bhutan', regionUrl: '/destinations/bhutan' },
  'europe': { region: 'Europe', regionUrl: '/international-tour-packages' },
};

export function getPackageBreadcrumbHierarchy(pkg: Package): BreadcrumbHierarchy {
  const cat = pkg.category;
  let category = { name: 'Tour Packages', url: '/tour-packages' };

  if (cat === 'pilgrimage') {
    category = { name: 'Pilgrimage Tours', url: '/pilgrimage-tour-packages' };
  } else if (cat === 'domestic') {
    category = { name: 'Domestic Tours', url: '/domestic-tour-packages' };
  } else if (cat === 'international') {
    category = { name: 'International Tours', url: '/international-tour-packages' };
  }

  const mapped = REGION_MAP[pkg.id] || { 
    region: pkg.destination ? pkg.destination.split(',')[0].trim() : 'Destinations',
    regionUrl: undefined
  };

  return {
    category,
    region: {
      name: mapped.region,
      url: mapped.regionUrl
    }
  };
}
