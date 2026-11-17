import { siteConfig } from '../data/config';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['TravelAgency', 'LocalBusiness', 'Organization'],
  '@id': 'https://saisamarthtours.com/#localbusiness',
  'name': 'Sai Samarth Tours',
  'alternateName': [
    'Sai Samarth Tours Bangalore',
    'Sai Samarth Pilgrimage Tours',
    'Sai Samarth Travels'
  ],
  'url': 'https://saisamarthtours.com/',
  'logo': 'https://saisamarthtours.com/sai-samarth-tours-logo.webp',
  'image': [
    'https://saisamarthtours.com/shirdi-tour-hero-banner-desktop.webp',
    'https://saisamarthtours.com/about-sai-samarth-tours-agency.webp',
    'https://saisamarthtours.com/sai-samarth-tours-logo.webp'
  ],
  'description': 'Leading travel agency and pilgrimage tour operator in Bangalore offering all-inclusive Shirdi flight packages, Kashi Ayodhya yatras, Jyotirlinga tours, domestic and international vacations with 3-star AC hotels and tour manager assistance.',
  'telephone': '+919187711649',
  'email': 'info.saisamarthtours@gmail.com',
  'priceRange': '₹15,999 - ₹75,999',
  'currenciesAccepted': 'INR',
  'paymentAccepted': 'Cash, Credit Card, Debit Card, UPI, Net Banking',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.area}`,
    'addressLocality': siteConfig.address.city,
    'addressRegion': siteConfig.address.state,
    'postalCode': siteConfig.address.pincode,
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 13.0995,
    'longitude': 77.5873
  },
  'hasMap': 'https://maps.google.com/?q=No.+2238,+Second+Floor,+16th+B+Cross,+Yelahanka+New+Town,+Bengaluru,+Karnataka+560064',
  'openingHours': [
    'Mo-Sa 09:00-20:00',
    'Su 10:00-14:00'
  ],
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '09:00',
      'closes': '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Sunday',
      'opens': '10:00',
      'closes': '14:00'
    }
  ],
  'areaServed': [
    {
      '@type': 'AdministrativeArea',
      'name': 'Yelahanka'
    },
    {
      '@type': 'AdministrativeArea',
      'name': 'Yelahanka New Town'
    },
    {
      '@type': 'City',
      'name': 'Bengaluru'
    },
    {
      '@type': 'City',
      'name': 'Bangalore'
    },
    {
      '@type': 'AdministrativeArea',
      'name': 'Karnataka'
    },
    {
      '@type': 'Country',
      'name': 'India'
    }
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Tour Packages from Bangalore',
    'itemListElement': [
      {
        '@type': 'OfferCatalog',
        'name': 'Pilgrimage Tour Packages from Bangalore',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'TouristTrip',
              'name': 'Shirdi Tour Packages from Bangalore',
              'description': 'Direct flight Shirdi pilgrimage packages with VIP Darshan, Kakad Aarti, and 3-star AC hotels.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'TouristTrip',
              'name': 'Kashi Ayodhya Tour Packages from Bangalore',
              'description': 'All-inclusive Kashi Vishwanath, Ayodhya Ram Mandir & Prayagraj Sangam pilgrimage packages.'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'TouristTrip',
              'name': 'Jyotirlinga Tour Packages from Bangalore',
              'description': 'Sacred 12 Jyotirlinga yatras covering Trimbakeshwar, Grishneshwar, Bhimashankar, Mahakaleshwar & Omkareshwar.'
            }
          }
        ]
      }
    ]
  },
  'sameAs': [
    'https://www.facebook.com/saisamarthtours',
    'https://www.instagram.com/sai.samarth.tours',
    'https://www.youtube.com/@SAISAMARTHTOURS',
    'https://maps.google.com/?q=No.+2238,+Second+Floor,+16th+B+Cross,+Yelahanka+New+Town,+Bengaluru,+Karnataka+560064'
  ],
  'founders': siteConfig.founders.map(name => ({
    '@type': 'Person',
    name
  }))
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://saisamarthtours.com/#website',
  'url': 'https://saisamarthtours.com/',
  'name': 'Sai Samarth Tours',
  'description': 'Leading travel agency and pilgrimage tour operator in Bangalore offering all-inclusive tour packages with flights, 3-star AC hotels, pure veg meals, and tour manager assistance.',
  'publisher': {
    '@id': 'https://saisamarthtours.com/#localbusiness'
  },
  'inLanguage': 'en-IN'
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://saisamarthtours.com/#organization',
  'name': 'Sai Samarth Tours',
  'url': 'https://saisamarthtours.com/',
  'logo': 'https://saisamarthtours.com/sai-samarth-tours-logo.webp',
  'telephone': '+919187711649',
  'email': 'info.saisamarthtours@gmail.com',
  'sameAs': [
    'https://www.facebook.com/saisamarthtours',
    'https://www.instagram.com/sai.samarth.tours',
    'https://www.youtube.com/@SAISAMARTHTOURS'
  ]
};

export function getBreadcrumbSchema(items: { name: string; url?: string }[]) {
  const allItems = [{ name: 'Home', url: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': allItems.map((item, index) => {
      const isLast = index === allItems.length - 1;
      let absoluteItemUrl: string | undefined = undefined;
      if (item.url) {
        absoluteItemUrl = item.url.startsWith('http')
          ? item.url
          : `https://saisamarthtours.com${item.url.startsWith('/') ? '' : '/'}${item.url}`;
      } else if (isLast && typeof window !== 'undefined') {
        absoluteItemUrl = window.location.href;
      }
      return {
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        ...(absoluteItemUrl ? { 'item': absoluteItemUrl } : {})
      };
    })
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(f => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer
      }
    }))
  };
}

export function getTouristTripSchema(pkg: any, canonicalUrl?: string) {
  const title = pkg.seoH1 || pkg.title;
  const url = canonicalUrl || `https://saisamarthtours.com/package/${pkg.id}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    'name': title,
    'description': pkg.description || `${title} from Bangalore with flights and hotel stay.`,
    'touristType': ['Pilgrims', 'Families', 'Senior Citizens'],
    'offers': {
      '@type': 'Offer',
      'price': pkg.numericPrice || 18999,
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
      'validFrom': '2026-01-01',
      'url': url
    },
    'provider': {
      '@type': 'TravelAgency',
      'name': 'Sai Samarth Tours',
      'telephone': '+919187711649',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bengaluru',
        'addressRegion': 'Karnataka',
        'postalCode': '560064',
        'streetAddress': 'No. 2238, Second Floor, 16th ‘B’ Cross, Yelahanka New Town'
      }
    }
  };
}

export function getArticleSchema(post: any, canonicalUrl?: string) {
  const url = canonicalUrl || `https://saisamarthtours.com/blog/${post.slug || post.id}`;
  const image = post.image.startsWith('http') ? post.image : `https://saisamarthtours.com${post.image.startsWith('/') ? '' : '/'}${post.image}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.excerpt,
    'image': image,
    'author': {
      '@type': 'Person',
      'name': post.author?.name || 'Sai Samarth Travel Editorial Team'
    },
    'publisher': {
      '@type': 'TravelAgency',
      'name': 'Sai Samarth Tours',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://saisamarthtours.com/sai-samarth-tours-logo.webp'
      }
    },
    'datePublished': post.date,
    'mainEntityOfPage': url
  };
}
