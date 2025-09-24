# SAJP Company Profile Website

A modern, professional company profile website for SAJP - an agricultural export company specializing in premium spices, fresh produce, and agricultural products from Indonesia.

## 🚀 Features

- **Modern Design**: Clean, elegant, and professional UI with custom color palette
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Server-side rendering, dynamic metadata, sitemap, and JSON-LD
- **Performance**: Optimized images, lazy loading, and smooth animations
- **Accessibility**: WCAG compliant with proper focus management
- **Animations**: Smooth Framer Motion animations throughout
- **Interactive**: Swiper.js for hero slider and product carousels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **Sliders**: Swiper.js
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel Ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── news/              # News page
│   ├── products/          # Products pages
│   │   └── [id]/         # Dynamic product detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── robots.ts         # Robots.txt
│   └── sitemap.ts        # Sitemap generation
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # UI components (Cards, Sliders)
├── data/                 # Static data (products, news)
├── lib/                  # Utility functions
│   ├── utils.ts          # Helper functions
│   └── json-ld.ts         # JSON-LD structured data
└── public/               # Static assets
    └── images/           # Image assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sajp-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add placeholder images**
   - Place images in `public/images/` following the structure in `public/images/placeholder.txt`
   - Required image sizes:
     - Hero images: 1920x900
     - Product cards: 600x400
     - News cards: 800x533

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Color Palette

The website uses a custom color palette defined in `tailwind.config.ts`:

- **Primary Green**: #2F6A26
- **Secondary Green**: #5FAF3B → #8ED175 (gradient)
- **Accent Red**: #E0222A (hover: #C51D24)
- **Warm Yellow**: #FFD700
- **Neutral Light**: #F7F7F7 → #EAEAEA
- **Text Dark**: #1A1A1A

### Content Management

#### Products
Edit `src/data/products.ts` to manage product information:
- Add new products
- Update product details
- Modify categories

#### News Articles
Edit `src/data/news.ts` to manage news content:
- Add new articles
- Update article information
- Modify categories

### SEO Configuration

#### Metadata
Update `src/app/layout.tsx` for global SEO settings:
- Site title and description
- Open Graph settings
- Twitter Card settings

#### Page-specific SEO
Each page has its own metadata configuration for optimal SEO.

## 🔧 Backend Integration

### API Endpoints

The website is designed to easily integrate with a backend API. Here are the recommended endpoints:

#### Products API
```
GET /api/products          # Get all products
GET /api/products/[id]     # Get single product
GET /api/products/categories # Get product categories
```

#### News API
```
GET /api/news              # Get all news articles
GET /api/news/[id]         # Get single article
GET /api/news/categories   # Get news categories
```

#### Contact API
```
POST /api/contact          # Submit contact form
```

### Database Schema

#### Products Table
```sql
CREATE TABLE products (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  short_description TEXT,
  image VARCHAR(500),
  images JSON,
  price VARCHAR(100),
  specifications JSON,
  benefits JSON,
  applications JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### News Table
```sql
CREATE TABLE news (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  excerpt TEXT,
  content TEXT,
  image VARCHAR(500),
  category VARCHAR(100),
  author VARCHAR(255),
  published_at DATE,
  tags JSON,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### CMS Integration

#### Strapi CMS
1. Install Strapi
2. Create content types for Products and News
3. Update data fetching in components to use Strapi API

#### Sanity CMS
1. Set up Sanity project
2. Define schemas for Products and News
3. Update components to fetch from Sanity

### Form Handling

The contact form is ready for backend integration:

```typescript
// Example API route: src/app/api/contact/route.ts
export async function POST(request: Request) {
  const formData = await request.json();
  
  // Process form data
  // Send email notification
  // Save to database
  
  return Response.json({ success: true });
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure Environment Variables**
   - Add any required environment variables in Vercel dashboard

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📊 Performance Optimization

### Image Optimization
- All images use Next.js Image component
- Automatic WebP conversion
- Lazy loading enabled
- Responsive image sizing

### SEO Features
- Server-side rendering (SSR)
- Dynamic metadata generation
- XML sitemap
- Robots.txt
- JSON-LD structured data
- Open Graph tags
- Twitter Card tags

### Performance Features
- Code splitting
- Tree shaking
- Bundle optimization
- Font optimization
- CSS optimization

## 🔍 SEO Checklist

- [x] Meta titles and descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [x] XML sitemap
- [x] Robots.txt
- [x] Alt text for images
- [x] Semantic HTML
- [x] Mobile-friendly design
- [x] Fast loading times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@sajp.com
- Website: https://sajp.com

---

**SAJP** - Premium Agricultural Products from Indonesia
