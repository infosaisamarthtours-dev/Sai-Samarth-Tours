import { BusinessConfig } from '../types';

export const siteConfig: BusinessConfig = {
  name: "Sai Samarth Tours",
  tagline: "PILGRIMAGE • CULTURE • JOURNEY",
  founders: ["Naveen M", "Chandra Shekar R"],
  address: {
    line1: "NO : 2238, Second Floor",
    line2: "16th ‘B’ Cross",
    area: "Yelahanka New Town",
    city: "Bengaluru",
    pincode: "560064",
    state: "Karnataka",
    country: "India"
  },
  phoneTentative: "9187711649",
  whatsappNumber: "919187711649",
  emailTentative: "info.saisamarthtours@gmail.com",
  workingHours: "Mon - Sat: 9:30 AM - 7:30 PM (IST)"
};

export const getFullAddress = (config: BusinessConfig = siteConfig): string => {
  const { line1, line2, area, city, pincode, state, country } = config.address;
  return `${line1}, ${line2}, ${area}, ${city} – ${pincode}, ${state}, ${country}`;
};

