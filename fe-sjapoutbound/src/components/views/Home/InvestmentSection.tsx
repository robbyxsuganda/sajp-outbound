"use client";

import { motion } from "framer-motion";

export default function InvestmentSection() {
  return (
    <section className="overflow-hidden relative bg-gradient-to-br from-green-50 via-white to-yellow-50 section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute right-20 bottom-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Section Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-4xl font-bold text-gray-900 lg:text-6xl">
            <span className="gradient-text">Premium Spice Investment</span>
          </h2>

          <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600">
            Bali with its unique tropical climate, fertile soil, and rich cultural heritage
            makes it an ideal location for cultivating high-quality spices.
          </p>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700">
            Join the Agrio Spice Bali farming program for cloves and vanilla cultivation.
            Enjoy Balis ideal climate and sustainable practices. With expert guidance,
            transparent progress tracking, and guaranteed market access, promising returns await you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
