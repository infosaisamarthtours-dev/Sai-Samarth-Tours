import { siteConfig, getFullAddress } from '../data/config';

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
  'url': 'https://saisamarthtours.com',
  'logo': 'https://saisamarthtours.com/sai-samarth-tours-logo.webp',
  'image': [
    'https://saisamarthtours.com/shirdi-tour-hero-banner-desktop.webp',
    'https://saisamarthtours.com/about-sai-samarth-tours-agency.webp',
    'https://saisamarthtours.com/sai-samarth-tours-logo.webp'
  ],
  'description': 'Leading travel agency and pilgrimage tour operator in Bangalore offering all-inclusive Shirdi flight packages, Kashi Ayodhya yatras, Jyotirlinga tours, domestic and international vacations with 3-star AC hotels and tour manager assistance.',
  'telephone': '+919187711649',
  'email': 'info.saisamarthtours@gmail.com',
  'priceRange': '₹17,999 - ₹75,999',
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
  'sameAs': [
    'https://www.facebook.com/saisamarthtours',
    'https://www.instagram.com/saisamarthtours',
    'https://maps.google.com/?q=No.+2238,+Second+Floor,+16th+B+Cross,+Yelahanka+New+Town,+Bengaluru,+Karnataka+560064'
  ],
  'founders': siteConfig.founders.map(name => ({
    '@type': 'Person',
    name
  }))
};
