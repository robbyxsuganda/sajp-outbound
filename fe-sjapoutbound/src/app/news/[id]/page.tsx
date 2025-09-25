"use client";

// import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { newsArticles, NewsArticle } from "@/data/news";
import { useState, useEffect } from "react";

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

// export async function generateMetadata({
//   params: paramsPromise,
// }: NewsDetailPageProps): Promise<Metadata> {
//   const params = await paramsPromise;
//   const article = newsArticles.find((article) => article.id === params.id);

//   if (!article) {
//     return {
//       title: "Article Not Found",
//     };
//   }

//   return {
//     title: article.title,
//     description: article.excerpt,
//     openGraph: {
//       title: article.title,
//       description: article.excerpt,
//       images: [article.image],
//     },
//   };
// }

export default function NewsDetailPage({
  params: paramsPromise,
}: NewsDetailPageProps) {
  const [params, setParams] = useState<{ id: string } | null>(null);
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    paramsPromise.then(setParams);
  }, [paramsPromise]);

  useEffect(() => {
    if (params) {
      const foundArticle = newsArticles.find(
        (article) => article.id === params.id
      );
      if (!foundArticle) {
        notFound();
      }
      setArticle(foundArticle);
      setLoading(false);
    }
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-light-start to-neutral-light-end">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    notFound();
  }

  // Get related articles - improved algorithm
  const getRelatedArticles = (): NewsArticle[] => {
    const currentArticle = article;

    // First, try to find articles from the same category
    let related = newsArticles.filter(
      (a) =>
        a.id !== currentArticle.id && a.category === currentArticle.category
    );

    // If not enough articles from same category, add articles with similar tags
    if (related.length < 3) {
      const similarTags = newsArticles.filter((a) => {
        if (a.id === currentArticle.id) return false;
        if (a.category === currentArticle.category) return false; // Already included

        // Check if articles share any tags
        return a.tags.some((tag) =>
          currentArticle.tags.some(
            (currentTag) =>
              tag.toLowerCase().includes(currentTag.toLowerCase()) ||
              currentTag.toLowerCase().includes(tag.toLowerCase())
          )
        );
      });

      related = [...related, ...similarTags].slice(0, 3);
    }

    // If still not enough, add featured articles
    if (related.length < 3) {
      const featured = newsArticles.filter((a) => {
        if (a.id === currentArticle.id) return false;
        if (related.some((r) => r.id === a.id)) return false; // Already included
        return a.featured;
      });

      related = [...related, ...featured].slice(0, 3);
    }

    return related.slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-green to-secondary-green-start">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <Link
              href="/news"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white/20 text-white text-sm px-4 py-2 rounded-full font-medium">
                {article.category}
              </span>
              <div className="flex items-center text-white/80 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center text-white/80 mb-8">
              <User className="w-5 h-5 mr-2" />
              <span className="text-lg">{article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={800}
                  height={450}
                  className="w-full h-96 object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-gradient-to-r from-primary-green/5 to-warm-yellow/5 p-8 rounded-2xl mb-8">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  Article Summary
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                {article.content.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-text-dark mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-padding bg-gradient-to-br from-neutral-light-start to-neutral-light-end">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore more articles that might interest you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Link href={`/news/${relatedArticle.id}`}>
                    <div className="relative aspect-w-16 aspect-h-9">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        width={400}
                        height={225}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-green text-white text-xs px-3 py-1 rounded-full font-medium">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-text-dark mb-3 group-hover:text-primary-green transition-colors duration-300 line-clamp-2">
                        {relatedArticle.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {relatedArticle.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(
                            relatedArticle.publishedAt
                          ).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "short",
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
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Articles CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-green/5 to-warm-yellow/5 p-8 lg:p-12 rounded-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
                Want to Read More?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover more articles about Indonesian spices, agriculture, and
                industry insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/news" className="btn-primary text-lg px-8 py-4">
                  View All Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/products"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
