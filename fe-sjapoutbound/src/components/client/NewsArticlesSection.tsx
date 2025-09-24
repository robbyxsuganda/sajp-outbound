"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { formatDisplayDate } from "@/lib/utils";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Superiority of Fresh Indonesian Spices",
    excerpt:
      "Discover why fresh spices from Indonesia have superior quality compared to other sources and how this affects the global culinary industry.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop&auto=format",
    date: "2024-01-15",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Vanilla Extraction Process: From Pods to Extract",
    excerpt:
      "Dive into the complex process of making high-quality vanilla extract and modern technology used in the industry.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format",
    date: "2024-01-12",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Sustainable Agriculture in Indonesia",
    excerpt:
      "How local farmers contribute to sustainable farming practices and their impact on the environment.",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop&auto=format",
    date: "2024-01-10",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "The Power of Traditional Indonesian Spices",
    excerpt:
      "In-depth exploration of the unique properties of traditional Indonesian spices and their health benefits.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format",
    date: "2024-01-08",
    readTime: "8 min",
  },
  {
    id: 5,
    title: "Quality Control in the Spice Industry",
    excerpt:
      "High quality standards we apply to ensure the best products reach consumers.",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&auto=format",
    date: "2024-01-05",
    readTime: "4 min",
  },
  {
    id: 6,
    title: "Global Spice Export Market Trends",
    excerpt:
      "Comprehensive analysis of current trends in international spice exports and future opportunities.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop&auto=format",
    date: "2024-01-03",
    readTime: "10 min",
  },
];

export default function NewsArticlesSection() {
  return (
    <section className="overflow-hidden relative bg-gradient-to-br from-gray-50 via-white to-gray-50 section-padding">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl bg-primary-green"></div>
        <div className="absolute right-20 top-1/3 w-96 h-96 rounded-full blur-3xl bg-warm-yellow"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full blur-3xl bg-accent-red"></div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Header Section */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase bg-green-50 rounded-full text-primary-green"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            News & Articles
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-primary-green">
              Latest Insights
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Stay updated with the latest developments in the spice industry and
            discover the stories behind our quality products
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link href={`/news/${articles[0].id}`} className="block group">
            <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
              <div className="grid gap-0 lg:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden relative h-80 lg:h-96">
                  <Image
                    src={articles[0].image}
                    width={500}
                    height={500}
                    alt={articles[0].title}
                    className="object-cover absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/50"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex items-center mb-4 space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDisplayDate(articles[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 lg:text-3xl group-hover:text-primary-green">
                    {articles[0].title}
                  </h3>

                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    {articles[0].excerpt}
                  </p>

                  <div className="flex items-center space-x-2 font-semibold transition-transform duration-300 text-primary-green group-hover:translate-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/news/${article.id}`} className="block h-full">
                <div className="overflow-hidden relative h-full bg-white rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="overflow-hidden relative h-48">
                    <Image
                      width={500}
                      height={500}
                      src={article.image}
                      alt={article.title}
                      className="object-cover absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/30"></div>
                    <div className="absolute top-4 right-4">
                      <div className="p-2 rounded-full backdrop-blur-sm bg-white/20">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDisplayDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-green line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mb-4 leading-relaxed text-gray-600 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-sm font-semibold transition-transform duration-300 text-primary-green group-hover:translate-x-1">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/news"
            className="inline-flex items-center px-8 py-4 space-x-3 text-lg font-semibold text-white bg-gradient-to-r to-green-600 rounded-full transition-all duration-300 from-primary-green hover:from-green-600 hover:to-primary-green hover:shadow-lg hover:scale-105"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
