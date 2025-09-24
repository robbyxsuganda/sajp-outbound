"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Vanilla Beans Indonesia",
    description:
      "Vanilla Beans or Vanilla Pods\nVanilla Planifolia and Vanilla Tahitensis\nGrade A Premium Gourmet\nGrade B Extraction\nVanilla Beans Indonesia from Bali region",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&h=800&fit=crop&q=80",
    href: "/products?category=vanilla",
    buttonColor: "bg-white text-text-dark hover:bg-gray-100",
  },
  {
    id: 2,
    name: "Cloves Farm",
    description:
      "Directly sourced from our farmers\nLocated in north of Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&h=800&fit=crop&q=80",
    href: "/products?category=cloves",
    buttonColor: "bg-warm-yellow text-text-dark hover:bg-yellow-400",
  },
  {
    id: 3,
    name: "Vanilla Farm",
    description: "Company owned farmland\nLocated in Bali regions of Indonesia",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&h=800&fit=crop&q=80",
    href: "/products?category=vanilla",
    buttonColor: "bg-primary-green text-white hover:bg-secondary-green-start",
  },
];

export default function ProductHighlightsSection() {
  return (
    <section className="bg-gradient-to-br to-white from-neutral-light-start section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-text-dark">
            Our <span className="gradient-text">Premium Products</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Discover our extensive collection of authentic Indonesian spices,
            directly from the best plantations in Indonesia.
          </p>
        </motion.div>

        {/* Simplified Grid Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Product */}
          <motion.div
            className="lg:col-span-1 group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href={products[0].href} className="block">
              <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl card-hover">
                <Image
                  src={products[0].image}
                  alt={products[0].name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80"></div>
                <div className="absolute right-0 bottom-0 left-0 p-8 text-white">
                  <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
                    {products[0].name}
                  </h3>
                  <div className="mb-6 text-sm leading-relaxed whitespace-pre-line text-white/95">
                    {products[0].description}
                  </div>
                  <div
                    className={`inline-flex items-center px-6 py-3 font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${products[0].buttonColor}`}
                  >
                    <span>DETAIL</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary Products */}
          <div className="space-y-8 lg:col-span-2">
            {products.slice(1).map((product, index) => (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={product.href} className="block">
                  <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-2xl card-hover">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/80"></div>
                    <div className="absolute right-0 bottom-0 left-0 p-6 text-white lg:p-8">
                      <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
                        {product.name}
                      </h3>
                      <div className="mb-6 text-sm leading-relaxed whitespace-pre-line text-white/95">
                        {product.description}
                      </div>
                      <div
                        className={`inline-flex items-center px-6 py-3 font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${product.buttonColor}`}
                      >
                        <span>DETAIL</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
