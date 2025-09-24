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
  grade?: string;
  nutritionalInfo?: {
    calories?: string;
    protein?: string;
    carbs?: string;
    fiber?: string;
  };
}

export const categories = [
  'All',
  'Cloves',
  'Vanilla Beans', 
  'Nutmeg',
  'Mace',
  'Betel Nut',
  'Cardamom',
  'Cinnamon',
  'Turmeric',
  'Black Pepper'
];

export const products: Product[] = [
  {
    id: 'premium-cloves',
    name: 'Premium Cloves Indonesia',
    shortDescription: 'High-quality dried whole cloves from Indonesia with strong aroma and flavor.',
    description: 'Our premium cloves are carefully selected from the best farms in Indonesia. Known for their strong aroma and flavor, these cloves are perfect for culinary and medicinal purposes. Each clove is hand-picked to ensure maximum quality and freshness.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop&crop=center',
    category: 'Cloves',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia (Bali, Sulawesi, Maluku)',
    certifications: ['Organic', 'HACCP', 'ISO 22000'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Lal Pari and AB6 Grade',
    nutritionalInfo: {
      calories: '274 kcal/100g',
      protein: '6g',
      carbs: '65g',
      fiber: '34g'
    }
  },
  {
    id: 'vanilla-beans-premium',
    name: 'Vanilla Beans Indonesia',
    shortDescription: 'Premium vanilla beans with excellent flavor and aroma, perfect for gourmet cooking.',
    description: 'Our vanilla beans are harvested from the finest vanilla plantations in Indonesia. Available in both Vanilla Planifolia and Vanilla Tahitensis varieties, these beans offer exceptional flavor and aroma for gourmet cooking and extraction.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center',
    category: 'Vanilla Beans',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia (Bali region)',
    certifications: ['Organic', 'HACCP'],
    packaging: '1kg, 5kg, 25kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Grade A Premium Gourmet, Grade B Extraction',
    nutritionalInfo: {
      calories: '288 kcal/100g',
      protein: '3.2g',
      carbs: '12.7g',
      fiber: '0g'
    }
  },
  {
    id: 'nutmeg-whole',
    name: 'Whole Nutmeg Indonesia',
    shortDescription: 'Premium whole nutmeg with warm, sweet flavor perfect for cooking and baking.',
    description: 'Our whole nutmeg is carefully selected for its warm, sweet flavor and aromatic properties. Perfect for cooking, baking, and making beverages. Each nutmeg is hand-picked to ensure quality and freshness.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center',
    category: 'Nutmeg',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Premium Grade',
    nutritionalInfo: {
      calories: '525 kcal/100g',
      protein: '5.8g',
      carbs: '49g',
      fiber: '20.8g'
    }
  },
  {
    id: 'mace-flower',
    name: 'Mace Flower Indonesia',
    shortDescription: 'Premium mace flower with delicate flavor and beautiful color.',
    description: 'Our mace flower is carefully harvested and processed to maintain its delicate flavor and beautiful color. Perfect for culinary use and natural coloring applications.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&crop=center',
    category: 'Mace',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Premium Grade'
  },
  {
    id: 'betel-nut',
    name: 'Betel Nut Indonesia',
    shortDescription: 'High-quality betel nut with traditional uses and medicinal properties.',
    description: 'Our betel nut is carefully selected for its quality and traditional uses. Known for its medicinal properties and cultural significance, this betel nut meets the highest quality standards.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&crop=center',
    category: 'Betel Nut',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['HACCP', 'ISO 22000'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '6-12 months',
    storage: 'Cool, dry place',
    grade: 'Premium Grade'
  },
  {
    id: 'cardamom-green',
    name: 'Green Cardamom Indonesia',
    shortDescription: 'Premium green cardamom with strong aroma and flavor.',
    description: 'Our green cardamom is carefully selected for its strong aroma and flavor. Perfect for cooking, baking, and making beverages. Each pod is hand-picked to ensure quality.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&crop=center',
    category: 'Cardamom',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Premium Grade'
  },
  {
    id: 'cinnamon-sticks',
    name: 'Cinnamon Sticks Indonesia',
    shortDescription: 'Premium cinnamon sticks with strong aroma and flavor.',
    description: 'Our cinnamon sticks are carefully selected for their strong aroma and flavor. Perfect for cooking, baking, and making beverages. Each stick is hand-picked to ensure quality.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&crop=center',
    category: 'Cinnamon',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Premium Grade'
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder Indonesia',
    shortDescription: 'Pure turmeric powder with excellent color and flavor.',
    description: 'Our turmeric powder is made from the finest turmeric roots, carefully processed to maintain maximum flavor and color. Perfect for cooking, health supplements, and natural coloring.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&crop=center',
    category: 'Turmeric',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Premium Grade'
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper Indonesia',
    shortDescription: 'Premium black pepper with strong flavor and aroma.',
    description: 'Our black pepper is carefully selected for its strong flavor and aroma. Perfect for cooking and seasoning. Each peppercorn is hand-picked to ensure quality.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&crop=center',
    category: 'Black Pepper',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Premium Grade'
  },
  {
    id: 'white-pepper',
    name: 'White Pepper Indonesia',
    shortDescription: 'Premium white pepper with mild flavor and aroma.',
    description: 'Our white pepper is carefully processed to maintain its mild flavor and aroma. Perfect for light-colored dishes and gourmet cooking.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop&crop=center',
    category: 'Black Pepper',
    price: 'Contact for pricing',
    availability: 'Year-round',
    origin: 'Indonesia',
    certifications: ['Organic', 'HACCP'],
    packaging: '25kg bags, 50kg bags',
    shelfLife: '2-3 years',
    storage: 'Cool, dry place',
    grade: 'Premium Grade'
  }
];
