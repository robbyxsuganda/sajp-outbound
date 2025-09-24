"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const spiceCategories = [
  {
    id: 1,
    name: "Whole Spices",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "Fresh Aromatics",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "Dried Herbs",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "Home & Kitchen",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "Ground Spices",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "Dried Spices",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 7,
    name: "Extracts",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: 8,
    name: "Peppers",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
  },
];

export default function SpiceManufacturerSection() {
  return (
    <section className="overflow-hidden relative bg-gradient-to-br to-white from-neutral-light-start section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl bg-primary-green"></div>
        <div className="absolute right-20 bottom-20 w-40 h-40 rounded-full blur-3xl bg-warm-yellow"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full blur-3xl bg-accent-red"></div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-text-dark">
            Spices Manufacturer
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            From raw materials to finished products - we master the entire
            production process
          </p>
        </motion.div>

        {/* Spice Categories Grid - Clean Layout */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {spiceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Container */}
              <div className="overflow-hidden relative mb-4 rounded-2xl aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/40 group-hover:opacity-100"></div>

                {/* Title Overlay */}
                <div className="absolute right-0 bottom-0 left-0 p-4 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 from-black/60 group-hover:opacity-100">
                  <h3 className="text-lg font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Title Below Image */}
              <h3 className="text-lg font-bold text-center transition-colors duration-300 text-text-dark group-hover:text-primary-green">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
