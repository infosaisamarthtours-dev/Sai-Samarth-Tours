export type CategoryType = 'pilgrimage' | 'domestic' | 'international';

export interface Package {
  id: string;
  title: string;
  category: CategoryType;
  destination: string;
  duration: string;
  price: string;
  numericPrice: number;
  minPax: number;
  featured?: boolean;
  comingSoon?: boolean;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  sampleItinerary: { day: string; title: string; detail: string }[];
  coordinates?: { x: number; y: number }; // For Interactive India Map positioning
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  founders: string[];
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
  };
  phoneTentative: string;
  whatsappNumber: string;
  emailTentative: string;
  workingHours: string;
}

export interface EnquiryFormState {
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  numberOfTravellers: string;
  preferredTravelDate: string;
  selectedPackage: string;
  specialRequirements: string;
  message: string;
}
