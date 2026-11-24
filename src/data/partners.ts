export type PartnershipType = 
  | 'Aviation Partner' 
  | 'Ticketing Partner' 
  | 'Hospitality Partner' 
  | 'Tourism Board' 
  | 'Transport Partner';

export interface Partner {
  id: string;
  name: string;
  websiteUrl: string;
  description: string;
  logo: string;
  partnershipType: PartnershipType;
  featured?: boolean;
}

export const GENUINE_PARTNERS: Partner[] = [
  {
    id: 'indigo-airlines',
    name: 'IndiGo Airlines (InterGlobe Aviation)',
    websiteUrl: 'https://www.goindigo.in',
    description: "India's largest passenger airline, providing non-stop and connecting scheduled flights from Kempegowda International Airport (BLR) for our Shirdi, Varanasi, Guwahati, and Bhubaneswar tour departures.",
    logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&h=100&fit=crop&q=80',
    partnershipType: 'Aviation Partner',
    featured: true
  },
  {
    id: 'air-india',
    name: 'Air India',
    websiteUrl: 'https://www.airindia.com',
    description: "India's premier full-service global carrier, connecting Bangalore travelers seamlessly to holy destinations and international circuits across Asia and the Middle East.",
    logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&h=100&fit=crop&q=80',
    partnershipType: 'Aviation Partner',
    featured: true
  },
  {
    id: 'irctc',
    name: 'IRCTC (Indian Railway Catering & Tourism Corp)',
    websiteUrl: 'https://www.irctc.co.in',
    description: 'Official Government of India enterprise for railway ticketing, luxury tourist trains, and helicopter ticket facilitation for sacred Himalayan shrines.',
    logo: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=200&h=100&fit=crop&q=80',
    partnershipType: 'Ticketing Partner',
    featured: true
  },
  {
    id: 'kstdc',
    name: 'Karnataka Tourism & KSTDC Ecosystem',
    websiteUrl: 'https://kstdc.co',
    description: 'Karnataka State Tourism Development Corporation network, promoting responsible tourism, heritage exploration, and verified travel standards across South India.',
    logo: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=200&h=100&fit=crop&q=80',
    partnershipType: 'Tourism Board',
    featured: true
  },
  {
    id: 'sarovar-hotels',
    name: 'Sarovar Hotels & Resorts',
    websiteUrl: 'https://www.sarovarhotels.com',
    description: 'Leading hospitality brand offering verified 3-star and 4-star pure vegetarian friendly accommodations in Shirdi, Kashi, and Tirupati for our pilgrim groups.',
    logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=100&fit=crop&q=80',
    partnershipType: 'Hospitality Partner',
    featured: false
  },
  {
    id: 'lemon-tree-hotels',
    name: 'Lemon Tree Hotels',
    websiteUrl: 'https://www.lemontreehotels.com',
    description: 'Nationwide contemporary midscale hotel chain providing accessible, elevator-equipped rooms and hygienic dining for senior citizens and families in pilgrimage hubs.',
    logo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&h=100&fit=crop&q=80',
    partnershipType: 'Hospitality Partner',
    featured: false
  }
];

/**
 * Allows the administrator to add a new genuine business partner.
 */
export function addPartner(newPartner: Omit<Partner, 'id'>): Partner {
  const id = newPartner.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const partner: Partner = {
    ...newPartner,
    id
  };
  GENUINE_PARTNERS.push(partner);
  return partner;
}
