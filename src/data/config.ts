import { BusinessConfig } from '../types';

export const siteConfig: BusinessConfig = {
  name: "Sai Samarth Tours",
  tagline: "PILGRIMAGE • CULTURE • JOURNEY",
  founders: ["Naveen M", "Chandra Shekar R"],
  address: {
    line1: "No. 2238, Second Floor",
    line2: "16th ‘B’ Cross",
    area: "Yelahanka New Town",
    city: "Bengaluru",
    pincode: "560064",
    state: "Karnataka",
    country: "India"
  },
  phoneTentative: "6361181869",
  whatsappNumber: "916361181869",
  emailTentative: "info@saisamarthtours.com",
  workingHours: "Mon - Sat: 9:30 AM - 7:30 PM (IST)"
};

export const getFullAddress = (config: BusinessConfig = siteConfig): string => {
  const { line1, line2, area, city, pincode, state, country } = config.address;
  return `${line1}, ${line2}, ${area}, ${city} – ${pincode}, ${state}, ${country}`;
};
