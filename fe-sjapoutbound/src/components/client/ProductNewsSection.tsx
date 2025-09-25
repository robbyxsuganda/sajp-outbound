"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { newsArticles, NewsArticle } from "@/data/news";

interface ProductNewsSectionProps {
  product: Product;
}

export default function ProductNewsSection({
  product,
}: ProductNewsSectionProps) {
  // Filter news articles based on product category and tags
  const getRelatedNews = (): NewsArticle[] => {
    const productCategory = product.category.toLowerCase();
    const productName = product.name.toLowerCase();

    return newsArticles
      .filter((article) => {
        const articleTags = article.tags.map((tag) => tag.toLowerCase());
        const articleTitle = article.title.toLowerCase();
        const articleContent = article.content.toLowerCase();

        // Check if article is related to the product category or contains product name
        return (
          articleTags.some(
            (tag) =>
              tag.includes(productCategory) ||
              productCategory.includes(tag) ||
              tag.includes(productName.split(" ")[0]) // Check first word of product name
          ) ||
          articleTitle.includes(productCategory) ||
          articleTitle.includes(productName.split(" ")[0]) ||
          articleContent.includes(productCategory) ||
          articleContent.includes(productName.split(" ")[0])
        );
      })
      .slice(0, 3); // Limit to 3 articles
  };

  const relatedNews = getRelatedNews();

  if (relatedNews.length === 0) {
    return null; // Don't render if no related news
  }

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-light-start to-neutral-light-end">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            Related News & Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news and insights about {product.name}{" "}
            and related topics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
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
                      {new Date(article.publishedAt).toLocaleDateString(
                        "id-ID",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-primary-green font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All News CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-text-dark mb-4">
              Want to Read More?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our complete collection of articles about Indonesian
              spices and agricultural insights
            </p>
            <Link href="/news" className="btn-primary inline-flex items-center">
              <span>View All News</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
