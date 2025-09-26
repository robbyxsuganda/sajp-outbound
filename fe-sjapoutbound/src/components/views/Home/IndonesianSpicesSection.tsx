"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const spices = [
  {
    id: 1,
    name: "Cloves",
    description: "Premium Indonesian cloves with rich aroma and intense flavor",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Vanilla Beans",
    description: "Authentic vanilla beans from Indonesian tropical regions",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Nutmeg",
    description: "Fresh nutmeg with warm, sweet and aromatic essence",
    image:
      "https://images.unsplash.com/photo-1599582909646-2e9f8e6f8a9a?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Mace",
    description: "Premium mace spice with delicate and complex flavor",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Cardamom",
    description: "Aromatic cardamom pods with intense fragrance",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "White Pepper",
    description: "Premium white pepper with clean, sharp taste",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
];

export default function IndonesianSpicesSection() {
  return (
    <section className="bg-gradient-to-br from-neutral-light-start to-neutral-light-end section-padding">
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
            <span className="gradient-text">Indonesian Spices</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Discover the rich flavors of Indonesia with our authentic spices and
            aromatic treasures.
          </p>
        </motion.div>

        {/* Spices Grid with Background Images */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {spices.map((spice, index) => (
            <motion.div
              key={spice.id}
              className="overflow-hidden relative bg-white rounded-2xl shadow-lg group card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/products?category=${spice.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="block"
              >
                {/* Background Image */}
                <div
                  className="relative w-full h-64 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${spice.image})`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t to-transparent transition-all duration-300 from-black/70 group-hover:from-black/80" />

                  {/* Content positioned over image */}
                  <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                    <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-warm-yellow">
                      {spice.name}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-200 opacity-90">
                      {spice.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center space-x-2 font-semibold transition-transform duration-300 text-warm-yellow group-hover:translate-x-2">
                      <span className="text-sm">VIEW PRODUCT</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
