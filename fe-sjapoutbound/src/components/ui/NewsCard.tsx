import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { NewsArticle } from "@/data/news";

interface NewsCardProps {
  article: NewsArticle;
  index?: number;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <Link href={`/news/${article.id}`}>
        <div className="relative aspect-w-16 aspect-h-9">
          <Image
            src={article.image}
            alt={article.title}
            width={400}
            height={225}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-primary-green text-white text-xs px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary-green transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          <div className="flex items-center text-primary-green font-medium group-hover:translate-x-2 transition-transform duration-300">
            <span className="text-sm">Read More</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </Link>
    </div>
  );
}
