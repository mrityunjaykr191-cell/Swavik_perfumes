/**
 * Site-wide constants
 */

// URLs
export const SITE_NAME = 'Swavik Fabric Perfumes';
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// Navigation
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const COLLECTION_MENU_GROUPS = [
  {
    title: 'Fragrance Collections',
    items: [
      {
        label: 'Global Collection',
        href: '/collections#global',
        description: 'World-inspired blends with a modern luxury character.',
      },
      {
        label: 'Middle Eastern Collection',
        href: '/collections#middle-eastern',
        description: 'Warm oud, amber, spice, and rich evening profiles.',
      },
      {
        label: 'Indian Heritage Collection',
        href: '/collections#indian-heritage',
        description: 'Kannauj craftsmanship rooted in timeless Indian perfumery.',
      },
      {
        label: 'Gourmand Collection',
        href: '/collections#gourmand',
        description: 'Inviting fragrances with soft, indulgent notes.',
      },
    ],
  },
  {
    title: 'Curated Browsing',
    items: [
      {
        label: 'Gifting',
        href: '/collections#gifting',
        description: 'Thoughtful fragrance selections for memorable occasions.',
      },
      {
        label: "Swavik's Own",
        href: '/collections#swaviks-own',
        description: 'Signature compositions that define the Swavik house.',
      },
      {
        label: 'Sandalwood Therapy',
        href: '/collections#sandalwood-therapy',
        description: 'Grounding sandalwood-led fragrances for quiet rituals.',
      },
    ],
  },
];

// API Endpoints
export const API_ENDPOINTS = {
  ORDERS: '/api/orders',
  PAYMENT: '/api/payment',
  PRODUCTS: '/api/products',
};

// Collections
export const COLLECTIONS = [
  { id: 'signature', name: 'Signature XI' },
  { id: 'midnight', name: 'Midnight Kiss' },
  { id: 'desert', name: 'Born In Desert' },
  { id: 'juicy', name: 'Juicy Secret' },
  { id: 'shower', name: 'After The Shower' },
];

// Pricing
export const SHIPPING_THRESHOLD = 999; // Free shipping above this amount
export const SHIPPING_COST = 100;

// Contact
export const CONTACT_INFO = {
  email: 'hello@svawikperfumes.com',
  phone: '+91 98765 43210',
  address: 'Kannauj, Uttar Pradesh, India',
};

// Social Media
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/svawikperfumes',
  instagram: 'https://instagram.com/svawikperfumes',
  twitter: 'https://twitter.com/svawikperfumes',
};

// Features
export const FEATURES = [
  'Natural Ingredients',
  'Heritage Craftsmanship',
  'Long Lasting',
  'Fabric Safe',
  'Made in Kannauj',
];

// Payment Methods
export const PAYMENT_METHODS = [
  { value: 'cod', label: 'Cash on Delivery', description: 'Pay when you receive your order' },
  { value: 'upi', label: 'UPI Payment', description: 'Google Pay, PhonePe, Paytm' },
  { value: 'card', label: 'Credit/Debit Card', description: 'Visa, Mastercard, American Express' },
];
