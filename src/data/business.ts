// ──────────────────────────────────────────────
//  Great Yarmouth Plumbers – core business data
// ──────────────────────────────────────────────

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  county: string;
  postcode: string;
  country: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Business {
  name: string;
  legalName: string;
  owner: string;
  phone: string;
  phoneHref: string;
  email: string;
  website: string;
  address: Address;
  coordinates: Coordinates;
  hours: BusinessHours[];
  license: string;
  yearEstablished: number;
  serviceRadius: string;
  schemaType: string;
  description: string;
  tagline: string;
}

export const business: Business = {
  name: 'Great Yarmouth Plumbers',
  legalName: 'Great Yarmouth Plumbers',
  owner: 'Sam Altman',
  phone: '01493 334000',
  phoneHref: 'tel:+441493334000',
  email: 'Contact@greatyarmouthplumbers.co.uk',
  website: 'https://greatyarmouthplumbers.co.uk',
  address: {
    street: '30 Regent St',
    city: 'Great Yarmouth',
    county: 'Norfolk',
    postcode: 'NR30 1RR',
    country: 'United Kingdom',
  },
  coordinates: { lat: 52.6039, lng: 1.7278 },
  hours: [
    { days: 'Monday - Saturday', hours: '8:00 AM - 6:00 PM' },
    { days: 'Sunday', hours: 'Emergency Service Only' },
    { days: 'Emergency Service', hours: '24/7' },
  ],
  license: '',
  yearEstablished: 2020,
  serviceRadius:
    'Great Yarmouth and surrounding Norfolk and Suffolk areas within 20 miles',
  schemaType: 'Plumber',
  description:
    'Great Yarmouth Plumbers provides reliable, professional plumbing services across Great Yarmouth and the surrounding Norfolk area. From emergency repairs to full repiping, our experienced team is here to help.',
  tagline: 'Your Trusted Local Plumbers in Great Yarmouth',
};

/** Returns the number of full years the business has been operating. */
export function yearsInBusiness(): number {
  return new Date().getFullYear() - business.yearEstablished;
}
