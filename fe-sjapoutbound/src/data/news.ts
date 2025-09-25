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
    title:
      "The Ultimate Guide to Indonesian Nutmeg: Flavor, Benefits, and Beyond",
    excerpt:
      "Nutmeg is a versatile spice that has been cherished for its warm and slightly sweet flavor for centuries. Originating from the Banda Islands in Indonesia...",
    content:
      "Nutmeg is a versatile spice that has been cherished for its warm and slightly sweet flavor for centuries. Originating from the Banda Islands in Indonesia, this aromatic spice has become a staple in kitchens worldwide. In this comprehensive guide, we'll explore everything you need to know about Indonesian nutmeg, from its cultivation to its culinary and medicinal uses.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=533&fit=crop&crop=center",
    category: "Spice Guide",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-20",
    tags: ["nutmeg", "indonesia", "spices", "guide"],
    featured: true,
  },
  {
    id: "ultimate-guide-clove-trees",
    title: "The Ultimate Guide to Clove Trees: Cultivation, Benefits, and More",
    excerpt:
      "Welcome to our comprehensive guide on clove trees! In this article, we'll delve into everything you need to know about cultivating and benefiting from clove trees...",
    content:
      "Welcome to our comprehensive guide on clove trees! In this article, we'll delve into everything you need to know about cultivating and benefiting from clove trees. From their historical significance to modern cultivation techniques, we'll cover all aspects of these remarkable trees.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=533&fit=crop&crop=center",
    category: "Cultivation",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-18",
    tags: ["cloves", "cultivation", "trees", "farming"],
    featured: true,
  },
  {
    id: "sweet-sour-tamarind-indonesia",
    title: "Sweet and Sour Tamarind Indonesia",
    excerpt:
      "Tamarind Indonesia is a unique fruit that is widely used in various parts of the world. It is known for its sweet and sour taste, which makes it a popular ingredient...",
    content:
      "Tamarind Indonesia is a unique fruit that is widely used in various parts of the world. It is known for its sweet and sour taste, which makes it a popular ingredient in many cuisines. This versatile fruit offers numerous health benefits and culinary applications.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=533&fit=crop&crop=center",
    category: "Fruits",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-15",
    tags: ["tamarind", "fruits", "indonesia", "culinary"],
    featured: false,
  },
  {
    id: "sweet-aromatic-vanilla-beans-indonesia",
    title: "The Sweet and Aromatic Vanilla Beans of Indonesia",
    excerpt:
      "Indonesia is one of the largest producers of vanilla beans in the world, with a rich history and tradition of cultivating this prized spice. Known for its exceptional quality...",
    content:
      "Indonesia is one of the largest producers of vanilla beans in the world, with a rich history and tradition of cultivating this prized spice. Known for its exceptional quality and aromatic properties, Indonesian vanilla beans are highly sought after by chefs and food manufacturers worldwide.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=533&fit=crop&crop=center",
    category: "Vanilla",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-12",
    tags: ["vanilla", "beans", "indonesia", "aromatic"],
    featured: true,
  },
  {
    id: "global-vanilla-bean-market-trends",
    title:
      "The Global Vanilla Bean Market: Trends, Opportunities, and Challenges",
    excerpt:
      "Vanilla is a popular flavor and fragrance ingredient that is widely used in the food and beverage industry, as well as in perfumes, cosmetics, and pharmaceuticals...",
    content:
      "Vanilla is a popular flavor and fragrance ingredient that is widely used in the food and beverage industry, as well as in perfumes, cosmetics, and pharmaceuticals. The global vanilla bean market continues to evolve with changing consumer preferences and market dynamics.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=533&fit=crop&crop=center",
    category: "Market Analysis",
    author: "Market Research Team",
    publishedAt: "2024-01-10",
    tags: ["vanilla", "market", "trends", "global"],
    featured: false,
  },
  {
    id: "best-indonesian-cloves-aromatic-kitchen",
    title: "The Best Indonesian Cloves for Your Aromatic Kitchen",
    excerpt:
      "If you're looking to add some depth and richness to your cooking, look no further than Indonesian cloves. With their warm, sweet, and slightly pungent flavor...",
    content:
      "If you're looking to add some depth and richness to your cooking, look no further than Indonesian cloves. With their warm, sweet, and slightly pungent flavor, Indonesian cloves are perfect for enhancing both sweet and savory dishes.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=533&fit=crop&crop=center",
    category: "Culinary",
    author: "Culinary Expert",
    publishedAt: "2024-01-08",
    tags: ["cloves", "culinary", "cooking", "aromatic"],
    featured: false,
  },
  // Additional news articles for better coverage
  {
    id: "mace-flower-culinary-uses",
    title: "Mace Flower: The Hidden Gem of Indonesian Spices",
    excerpt:
      "Discover the unique flavor and culinary applications of mace flower, a lesser-known but incredibly versatile spice from Indonesia...",
    content:
      "Mace flower, often overshadowed by its more famous cousin nutmeg, is a remarkable spice with its own unique characteristics and culinary applications. This delicate spice offers a warm, sweet, and slightly peppery flavor that enhances both sweet and savory dishes.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=533&fit=crop&crop=center",
    category: "Spice Guide",
    author: "SAJP Editorial Team",
    publishedAt: "2024-01-25",
    tags: ["mace", "spices", "culinary", "indonesia"],
    featured: true,
  },
  {
    id: "betel-nut-traditional-uses",
    title: "Betel Nut: Traditional Uses and Modern Applications",
    excerpt:
      "Explore the traditional and modern uses of betel nut, a culturally significant plant with various applications in Indonesian society...",
    content:
      "Betel nut has been an integral part of Indonesian culture for centuries, used in traditional ceremonies and daily life. Today, it continues to play an important role in various industries and applications.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=533&fit=crop&crop=center",
    category: "Traditional Medicine",
    author: "Cultural Expert",
    publishedAt: "2024-01-22",
    tags: ["betel", "traditional", "culture", "medicine"],
    featured: false,
  },
  {
    id: "cardamom-cultivation-indonesia",
    title: "Cardamom Cultivation in Indonesia: A Complete Guide",
    excerpt:
      "Learn about the cultivation techniques and best practices for growing cardamom in Indonesia's tropical climate...",
    content:
      "Cardamom cultivation in Indonesia requires specific knowledge of soil conditions, climate, and harvesting techniques. This comprehensive guide covers everything from planting to processing.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=533&fit=crop&crop=center",
    category: "Cultivation",
    author: "Agricultural Expert",
    publishedAt: "2024-01-19",
    tags: ["cardamom", "cultivation", "agriculture", "indonesia"],
    featured: false,
  },
  {
    id: "cinnamon-health-benefits",
    title: "Cinnamon Health Benefits: Beyond the Kitchen",
    excerpt:
      "Discover the numerous health benefits of cinnamon, from its antioxidant properties to its role in traditional medicine...",
    content:
      "Cinnamon is not just a flavorful spice; it also offers numerous health benefits. From its antioxidant properties to its potential role in managing blood sugar levels, cinnamon has been valued for its medicinal properties for centuries.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=533&fit=crop&crop=center",
    category: "Health & Wellness",
    author: "Health Expert",
    publishedAt: "2024-01-16",
    tags: ["cinnamon", "health", "benefits", "medicine"],
    featured: true,
  },
  {
    id: "turmeric-production-indonesia",
    title: "Turmeric Production in Indonesia: Quality and Standards",
    excerpt:
      "Explore Indonesia's turmeric production industry, from farming practices to quality control and international standards...",
    content:
      "Indonesia is a major producer of high-quality turmeric, known for its vibrant color and potent curcumin content. The country's turmeric production follows strict quality standards to meet international market demands.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=533&fit=crop&crop=center",
    category: "Production",
    author: "Industry Expert",
    publishedAt: "2024-01-13",
    tags: ["turmeric", "production", "quality", "standards"],
    featured: false,
  },
  {
    id: "black-pepper-export-trends",
    title: "Black Pepper Export Trends: Indonesia's Global Position",
    excerpt:
      "Analyze Indonesia's position in the global black pepper market and emerging trends in international trade...",
    content:
      "Indonesia is one of the world's leading producers and exporters of black pepper. The country's strategic position and quality products make it a key player in the global spice trade.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=533&fit=crop&crop=center",
    category: "Market Analysis",
    author: "Trade Analyst",
    publishedAt: "2024-01-11",
    tags: ["black-pepper", "export", "trade", "global"],
    featured: false,
  },
];

export const newsCategories = [
  "All",
  "Spice Guide",
  "Cultivation",
  "Fruits",
  "Vanilla",
  "Market Analysis",
  "Culinary",
  "Traditional Medicine",
  "Health & Wellness",
  "Production",
];
