import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { NewsArticle } from '@/data/news';

interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link href={`/news/${article.id}`}>
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary-green bg-primary-green/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {article.publishedAt}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-text-dark group-hover:text-primary-green transition-colors mb-3 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center text-primary-green font-medium group-hover:translate-x-1 transition-transform">
            <span className="text-sm">Read More</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}
