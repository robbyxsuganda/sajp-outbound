export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  price?: string;
  availability: string;
  origin: string;
  certifications: string[];
  packaging: string;
  shelfLife: string;
  storage: string;
  nutritionalInfo?: {
    calories?: string;
    protein?: string;
    carbs?: string;
    fiber?: string;
  };
}

export const categories = [
  'All',
  'Garlic',
  'Ginger', 
  'Onions',
  'Spices',
  'Fresh Fruits'
];

export const products: Product[] = [
  {
    id: 'premium-garlic',
    name: 'Premium Garlic',
    shortDescription: 'High-quality garlic with strong flavor and aroma, perfect for culinary use.',
    description: 'Our premium garlic is carefully selected from the best farms in Indonesia. Known for its strong flavor and aromatic properties, this garlic is perfect for both culinary and medicinal purposes. Each bulb is hand-picked to ensure maximum freshness and quality.',
    image: 'https://picsum.photos/600/400?random=1',
    category: 'Garlic',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP', 'ISO 22000'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '6-8 months',
    storage: 'Cool, dry place',
    nutritionalInfo: {
      calories: '149 kcal/100g',
      protein: '6.4g',
      carbs: '33g',
      fiber: '2.1g'
    }
  },
  {
    id: 'fresh-ginger',
    name: 'Fresh Ginger Root',
    shortDescription: 'Premium ginger root with excellent flavor and medicinal properties.',
    description: 'Our fresh ginger root is harvested at the perfect time to ensure maximum flavor and nutritional value. Known for its medicinal properties and culinary versatility, this ginger is perfect for both cooking and health purposes.',
    image: 'https://picsum.photos/600/400?random=2',
    category: 'Ginger',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '20kg bags, 40kg bags',
    shelfLife: '3-4 months',
    storage: 'Cool, dry place',
    nutritionalInfo: {
      calories: '80 kcal/100g',
      protein: '1.8g',
      carbs: '18g',
      fiber: '2g'
    }
  },
  {
    id: 'red-onions',
    name: 'Red Onions',
    shortDescription: 'Sweet and mild red onions perfect for cooking and salads.',
    description: 'Our red onions are known for their sweet, mild flavor and beautiful color. Perfect for salads, cooking, and pickling. Grown in optimal conditions to ensure the best taste and texture.',
    image: 'https://picsum.photos/600/400?random=3',
    category: 'Onions',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['HACCP', 'ISO 22000'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '4-6 months',
    storage: 'Cool, dry place',
    nutritionalInfo: {
      calories: '40 kcal/100g',
      protein: '1.1g',
      carbs: '9.3g',
      fiber: '1.7g'
    }
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    shortDescription: 'Pure turmeric powder with excellent color and flavor.',
    description: 'Our turmeric powder is made from the finest turmeric roots, carefully processed to maintain maximum flavor and color. Perfect for cooking, health supplements, and natural coloring.',
    image: 'https://picsum.photos/600/400?random=4',
    category: 'Spices',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '1kg, 5kg, 25kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    nutritionalInfo: {
      calories: '354 kcal/100g',
      protein: '7.8g',
      carbs: '64.9g',
      fiber: '21.1g'
    }
  },
  {
    id: 'cinnamon-sticks',
    name: 'Cinnamon Sticks',
    shortDescription: 'Premium cinnamon sticks with strong aroma and flavor.',
    description: 'Our cinnamon sticks are carefully selected for their strong aroma and flavor. Perfect for cooking, baking, and making beverages. Each stick is hand-picked to ensure quality.',
    image: 'https://picsum.photos/600/400?random=5',
    category: 'Spices',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '500g, 1kg, 5kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place'
  },
  {
    id: 'fresh-mangoes',
    name: 'Fresh Mangoes',
    shortDescription: 'Sweet and juicy mangoes perfect for export.',
    description: 'Our fresh mangoes are carefully selected for their sweetness and quality. Perfect for fresh consumption, juice, and processing. Grown in optimal conditions for maximum flavor.',
    image: 'https://picsum.photos/600/400?random=6',
    category: 'Fresh Fruits',
    price: 'Contact for pricing',
    availability: 'Seasonal (Dec-Apr)',
    origin: 'Indonesia',
    certifications: ['HACCP', 'ISO 22000'],
    packaging: '10kg, 20kg boxes',
    shelfLife: '2-3 weeks',
    storage: 'Cool storage',
    nutritionalInfo: {
      calories: '60 kcal/100g',
      protein: '0.8g',
      carbs: '15g',
      fiber: '1.6g'
    }
  }
];
