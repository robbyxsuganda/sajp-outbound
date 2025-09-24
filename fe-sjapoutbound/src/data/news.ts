export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "ultimate-guide-indonesian-nutmeg",
    title: "The Ultimate Guide to Indonesian Nutmeg: Flavor, Benefits, and Beyond",
    excerpt: "Nutmeg is a versatile spice that has been cherished for its warm and slightly sweet flavor for centuries. Originating from the Banda Islands in Indonesia...",
    content: "Nutmeg is a versatile spice that has been cherished for its warm and slightly sweet flavor for centuries. Originating from the Banda Islands in Indonesia, this aromatic spice has become a staple in kitchens worldwide. In this comprehensive guide, we'll explore everything you need to know about Indonesian nutmeg, from its cultivation to its culinary and medicinal uses.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=533&fit=crop&crop=center",
    category: "Spice Guide",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-20",
    tags: ["nutmeg", "indonesia", "spices", "guide"],
    featured: true
  },
  {
    id: "ultimate-guide-clove-trees",
    title: "The Ultimate Guide to Clove Trees: Cultivation, Benefits, and More",
    excerpt: "Welcome to our comprehensive guide on clove trees! In this article, we'll delve into everything you need to know about cultivating and benefiting from clove trees...",
    content: "Welcome to our comprehensive guide on clove trees! In this article, we'll delve into everything you need to know about cultivating and benefiting from clove trees. From their historical significance to modern cultivation techniques, we'll cover all aspects of these remarkable trees.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=533&fit=crop&crop=center",
    category: "Cultivation",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-18",
    tags: ["cloves", "cultivation", "trees", "farming"],
    featured: true
  },
  {
    id: "sweet-sour-tamarind-indonesia",
    title: "Sweet and Sour Tamarind Indonesia",
    excerpt: "Tamarind Indonesia is a unique fruit that is widely used in various parts of the world. It is known for its sweet and sour taste, which makes it a popular ingredient...",
    content: "Tamarind Indonesia is a unique fruit that is widely used in various parts of the world. It is known for its sweet and sour taste, which makes it a popular ingredient in many cuisines. This versatile fruit offers numerous health benefits and culinary applications.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=533&fit=crop&crop=center",
    category: "Fruits",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-15",
    tags: ["tamarind", "fruits", "indonesia", "culinary"],
    featured: false
  },
  {
    id: "sweet-aromatic-vanilla-beans-indonesia",
    title: "The Sweet and Aromatic Vanilla Beans of Indonesia",
    excerpt: "Indonesia is one of the largest producers of vanilla beans in the world, with a rich history and tradition of cultivating this prized spice. Known for its exceptional quality...",
    content: "Indonesia is one of the largest producers of vanilla beans in the world, with a rich history and tradition of cultivating this prized spice. Known for its exceptional quality and aromatic properties, Indonesian vanilla beans are highly sought after by chefs and food manufacturers worldwide.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=533&fit=crop&crop=center",
    category: "Vanilla",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-12",
    tags: ["vanilla", "beans", "indonesia", "aromatic"],
    featured: true
  },
  {
    id: "global-vanilla-bean-market-trends",
    title: "The Global Vanilla Bean Market: Trends, Opportunities, and Challenges",
    excerpt: "Vanilla is a popular flavor and fragrance ingredient that is widely used in the food and beverage industry, as well as in perfumes, cosmetics, and pharmaceuticals...",
    content: "Vanilla is a popular flavor and fragrance ingredient that is widely used in the food and beverage industry, as well as in perfumes, cosmetics, and pharmaceuticals. The global vanilla bean market continues to evolve with changing consumer preferences and market dynamics.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=533&fit=crop&crop=center",
    category: "Market Analysis",
    author: "Market Research Team",
    publishedAt: "2024-01-10",
    tags: ["vanilla", "market", "trends", "global"],
    featured: false
  },
  {
    id: "best-indonesian-cloves-aromatic-kitchen",
    title: "The Best Indonesian Cloves for Your Aromatic Kitchen",
    excerpt: "If you're looking to add some depth and richness to your cooking, look no further than Indonesian cloves. With their warm, sweet, and slightly pungent flavor...",
    content: "If you're looking to add some depth and richness to your cooking, look no further than Indonesian cloves. With their warm, sweet, and slightly pungent flavor, Indonesian cloves are perfect for enhancing both sweet and savory dishes.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=533&fit=crop&crop=center",
    category: "Culinary",
    author: "Culinary Expert",
    publishedAt: "2024-01-08",
    tags: ["cloves", "culinary", "cooking", "aromatic"],
    featured: false
  }
];

export const newsCategories = [
  'All',
  'Spice Guide',
  'Cultivation', 
  'Fruits',
  'Vanilla',
  'Market Analysis',
  'Culinary'
];
