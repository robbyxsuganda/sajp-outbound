import { Metadata } from 'next';
import { Suspense } from 'react';
import NewsCard from '@/components/ui/NewsCard';
import { newsArticles, newsCategories } from '@/data/news';
import { Search, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Stay updated with the latest news, industry insights, and updates from SAJP agricultural export company.',
};

interface NewsPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
}

function NewsGrid({ category, search }: { category?: string; search?: string }) {
  let filteredNews = newsArticles;

  if (category && category !== 'all') {
    filteredNews = newsArticles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    filteredNews = filteredNews.filter(article =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredNews.map((article, index) => (
        <NewsCard key={article.id} article={article} index={index} />
      ))}
    </div>
  );
}

export default async function NewsPage({ searchParams: searchParamsPromise }: NewsPageProps) {
  const searchParams = await searchParamsPromise;
  const category = searchParams?.category || 'all';
  const search = searchParams?.search || '';

  return (
    <div className="min-h-screen bg-neutral-light-start">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-green to-secondary-green-start py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Stay informed with the latest news, industry insights, and updates from the agricultural sector.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-green text-white rounded-lg whitespace-nowrap">
                <Filter className="w-4 h-4" />
                All News
              </button>
              {newsCategories.slice(1).map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-green hover:text-white transition-colors whitespace-nowrap"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-12">Loading news...</div>}>
            <NewsGrid category={category} search={search} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
