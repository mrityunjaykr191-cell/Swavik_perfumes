import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'signature-xi',
    name: 'Signature XI',
    collection: 'signature',
    price: 2499,
    volume: 50,
    description: 'A timeless blend that captures the essence of Kannauj\'s legendary perfumery tradition. Rich, sophisticated, and unmistakably luxurious.',
    story: 'Signature XI is our ode to the master perfumers of Kannauj who have perfected their craft over generations. This fragrance embodies the heritage of Indian attar-making, with a modern interpretation that appeals to contemporary luxury seekers. Each note has been carefully selected to create a harmonious symphony that lingers for hours.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=1000&fit=crop',
    ],
    topNotes: ['Bergamot', 'Lemon', 'Grapefruit'],
    middleNotes: ['Rose', 'Jasmine', 'Sandalwood'],
    baseNotes: ['Vetiver', 'Cedarwood', 'Musk'],
    benefits: [
      'Long-lasting fragrance that lasts 8-12 hours',
      'Safe for all fabric types including delicate materials',
      'Hypoallergenic and skin-friendly formula',
      'Enhances personal grooming and confidence',
    ],
    usageGuide: 'Spray 2-3 times on fabric or pulse points for optimal fragrance projection. For fabric perfuming, spray from 6 inches away. Can also be used as a personal fragrance.',
    faqs: [
      {
        question: 'Is this fragrance permanent?',
        answer: 'No, this is a temporary fragrance that gradually fades. We recommend reapplying every 6-8 hours for lasting fragrance.',
      },
      {
        question: 'Can I use this on all types of fabric?',
        answer: 'Yes, this fragrance is safe for all fabric types including silk, wool, cotton, and synthetic materials.',
      },
      {
        question: 'Does it cause staining?',
        answer: 'No, our formula is designed not to leave stains on any fabric.',
      },
    ],
    relatedProducts: ['2', '3', '4'],
  },
  {
    id: '2',
    slug: 'midnight-kiss',
    name: 'Midnight Kiss',
    collection: 'midnight',
    price: 1999,
    volume: 50,
    description: 'An enchanting nocturnal fragrance that whispers of mystery and allure. Perfect for evening wear and special occasions.',
    story: 'Inspired by the magic of midnight, Midnight Kiss blends dark florals with woody undertones to create an atmosphere of sophistication. This is a fragrance for those who dare to be different, who embrace the night with confidence and grace.',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=1000&fit=crop',
    ],
    topNotes: ['Blackcurrant', 'Pear', 'Mandarin'],
    middleNotes: ['Iris', 'Peony', 'Ambroxan'],
    baseNotes: ['Patchouli', 'Sandalwood', 'Vanilla'],
    benefits: [
      'Sophisticated fragrance for evening occasions',
      'Long-lasting performance (8+ hours)',
      'Works beautifully on fabric and skin',
      'Creates an aura of elegance and mystery',
    ],
    usageGuide: 'Apply to pulse points or spray on fabric for a subtle, sophisticated scent. Perfect for evenings and special occasions.',
    faqs: [
      {
        question: 'Is this suitable for daytime wear?',
        answer: 'While this is designed for evenings, you can wear it during daytime if you prefer deeper, more sensual fragrances.',
      },
      {
        question: 'How long does the fragrance last?',
        answer: 'Midnight Kiss typically lasts 8-10 hours on fabric and skin.',
      },
    ],
    relatedProducts: ['1', '3', '5'],
  },
  {
    id: '3',
    slug: 'born-in-desert',
    name: 'Born In Desert',
    collection: 'desert',
    price: 2299,
    volume: 50,
    description: 'A bold, sun-drenched fragrance inspired by the vast deserts of the Middle East. Warm spices, amber, and oud create an intoxicating blend.',
    story: 'Born In Desert captures the essence of Arabian luxury. This fragrance is inspired by ancient desert caravans and the timeless beauty of Middle Eastern perfumery. Oud, the legendary "wood of the gods," forms the heart of this composition, supported by warming spices that evoke sun-baked sand and distant spice markets.',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&h=1000&fit=crop',
    ],
    topNotes: ['Saffron', 'Cumin', 'Cardamom'],
    middleNotes: ['Oud', 'Rose', 'Incense'],
    baseNotes: ['Amber', 'Musk', 'Agarwood'],
    benefits: [
      'Luxurious oud-based composition',
      'Excellent longevity (10-12 hours)',
      'Transforms any fabric with exotic fragrance',
      'Perfect gift for fragrance connoisseurs',
    ],
    usageGuide: 'This is a concentrated fragrance. Use sparingly - 1-2 sprays on fabric or pulse points are sufficient. The fragrance develops beautifully over time.',
    faqs: [
      {
        question: 'Is real oud used in this fragrance?',
        answer: 'We use a high-quality oud accord that provides the characteristic oud experience with excellent performance.',
      },
      {
        question: 'This fragrance is quite strong. Is this normal?',
        answer: 'Yes, this is intentional. Our formula is concentrated, so use sparingly for optimal results.',
      },
    ],
    relatedProducts: ['1', '2', '4'],
  },
  {
    id: '4',
    slug: 'juicy-secret',
    name: 'Juicy Secret',
    collection: 'juicy',
    price: 1799,
    volume: 50,
    description: 'A fresh, fruity composition that delights the senses. Bursting with juicy fruits and subtle florals for an irresistible allure.',
    story: 'Juicy Secret is an ode to the sweetness of life. This fragrance celebrates the vibrant energy of ripe fruits, blended with delicate florals to create something truly special. It\'s playful yet sophisticated, fresh yet sensual - a fragrance for those who love the finer things in life.',
    image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=1000&fit=crop',
    ],
    topNotes: ['Peach', 'Raspberry', 'Watermelon'],
    middleNotes: ['Freesia', 'Magnolia', 'Orange Blossom'],
    baseNotes: ['Musk', 'Vanilla', 'Amber'],
    benefits: [
      'Fresh, fruity fragrance perfect for daytime',
      'Uplifting and mood-enhancing scent profile',
      'Moderate longevity (6-8 hours)',
      'Great for casual and professional settings',
    ],
    usageGuide: 'Perfect for daytime use. Spray 2-3 times on fabric or body for a fresh, fruity aura that brightens your day.',
    faqs: [
      {
        question: 'Is this fragrance sweet?',
        answer: 'Yes, but in a sophisticated way. The fruity notes are balanced with florals to avoid being cloying.',
      },
      {
        question: 'Can I wear this in a professional setting?',
        answer: 'Absolutely. The fragrance is fresh and professional while still being distinctive.',
      },
    ],
    relatedProducts: ['1', '2', '5'],
  },
  {
    id: '5',
    slug: 'after-the-shower',
    name: 'After The Shower',
    collection: 'shower',
    price: 1499,
    volume: 50,
    description: 'A clean, refreshing fragrance that captures the crisp feeling of freshness after a luxurious bath. Citrus and aquatic notes create a spa-like experience.',
    story: 'After The Shower is inspired by the calming ritual of self-care. This fragrance encapsulates the feeling of stepping out of a warm shower, wrapped in the aroma of natural botanicals and fresh water. It\'s perfect for those who appreciate simplicity, cleanliness, and the therapeutic power of fragrance.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=1000&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=1000&fit=crop',
    ],
    topNotes: ['Lemongrass', 'Eucalyptus', 'Mint'],
    middleNotes: ['Lavender', 'Water Lily', 'Geranium'],
    baseNotes: ['Cedarwood', 'Musk', 'Soft Woody Notes'],
    benefits: [
      'Refreshing, spa-like fragrance experience',
      'Perfect post-shower fragrance application',
      'Hypoallergenic and gentle on skin',
      'Creates a calming, meditative atmosphere',
    ],
    usageGuide: 'Apply immediately after shower for maximum freshness. Perfect for humid climates and daytime wear.',
    faqs: [
      {
        question: 'Can I use this fragrance on damp fabric?',
        answer: 'Yes, this fragrance works beautifully on damp fabric and actually enhances the fresh feeling.',
      },
      {
        question: 'How long does the freshness last?',
        answer: 'The fresh opening lasts about 3-4 hours, with the fragrance continuing to develop for 6-8 hours total.',
      },
    ],
    relatedProducts: ['1', '4', '5'],
  },
];

export const collections = [
  {
    id: 'signature',
    name: 'Signature XI',
    description: 'Our flagship collection. Timeless, sophisticated, and unmistakably luxurious.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=600&fit=crop',
    slug: 'signature-xi',
  },
  {
    id: 'midnight',
    name: 'Midnight Kiss',
    description: 'Enchanting nocturnal fragrances for evening wear and special occasions.',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=600&fit=crop',
    slug: 'midnight-kiss',
  },
  {
    id: 'desert',
    name: 'Born In Desert',
    description: 'Bold, sun-drenched fragrances inspired by Middle Eastern luxury.',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=800&h=600&fit=crop',
    slug: 'born-in-desert',
  },
  {
    id: 'juicy',
    name: 'Juicy Secret',
    description: 'Fresh, fruity compositions celebrating the sweetness of life.',
    image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800&h=600&fit=crop',
    slug: 'juicy-secret',
  },
];

export const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Fashion Enthusiast',
    content:
      'Swavik fragrances transformed my daily routine. The quality is exceptional and the scents are truly unique. I\'ve received countless compliments!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    name: 'Rajesh Kapoor',
    role: 'Luxury Lifestyle Blogger',
    content:
      'As someone who appreciates fine fragrances, I can confidently say Swavik stands among the best. The heritage, the craftsmanship, the quality - everything is premium.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    name: 'Divya Patel',
    role: 'Interior Designer',
    content:
      'I use Swavik fragrances to perfume my clients\' homes and offices. The longevity and sophistication are unmatched. Highly recommended for anyone who values quality.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
];

export const whySwavik = [
  {
    title: 'Heritage Craftsmanship',
    description:
      'Rooted in the 2000-year-old tradition of Kannauj perfumery. Each fragrance is a masterpiece of artisanal expertise.',
    icon: '✦',
  },
  {
    title: 'Natural Ingredients',
    description:
      'We source the finest natural ingredients from around the world, blended with traditional techniques for authenticity.',
    icon: '🌿',
  },
  {
    title: 'Fabric Safe Formula',
    description:
      'Carefully formulated to be safe for all fabric types - from delicate silk to everyday cotton. No staining, no damage.',
    icon: '🧵',
  },
  {
    title: 'Long-Lasting Fragrance',
    description:
      'Our concentrated formulas ensure your fragrance lasts throughout the day. Hours of luxurious aroma.',
    icon: '⏱',
  },
  {
    title: 'Premium Packaging',
    description:
      'Each bottle is crafted with care, reflecting the luxury and sophistication of the Swavik brand.',
    icon: '📦',
  },
  {
    title: 'Personalized Experience',
    description:
      'Our fragrance experts are ready to help you find your perfect scent. Personalized recommendations available.',
    icon: '💫',
  },
];
