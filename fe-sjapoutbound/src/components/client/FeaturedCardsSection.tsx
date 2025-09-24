"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedCardsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Primary Green Card - Spice Exporter */}
          <motion.div
            className="relative p-8 text-white bg-gradient-to-br rounded-3xl from-primary-green to-secondary-green-start card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Simple Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full transform translate-x-16 -translate-y-16 bg-white/10"></div>

            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-bold">Spice Exporter</h3>
              <p className="text-lg leading-relaxed text-white/90">
                SAJP, your finest spices from Indonesia. Here are our lists for
                current crop and latest update of stock available, grade, price,
                ready to ship. We ship worldwide with FOB CIF CNF shipping
                terms. A flexible payment terms choices of Bank Transfer or
                Letter of Credit.
              </p>
              <Link href="/contact" className="btn-secondary">
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Text Dark Card - Indonesian Cloves */}
          <motion.div
            className="relative p-8 text-white bg-gradient-to-br to-gray-800 rounded-3xl from-text-dark card-hover"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Simple Background Pattern */}
            <div className="absolute right-0 bottom-0 w-28 h-28 rounded-full transform translate-x-14 translate-y-14 bg-warm-yellow/20"></div>

            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-bold">Cloves Indonesia</h3>
              <p className="text-lg leading-relaxed text-white/90">
                Dried Whole Cloves Lal Pari and AB6 Grade Cloves Indonesia from
                Bali, Sulawesi, and Maluku
              </p>
              <Link
                href="/products?category=cloves"
                className="inline-flex items-center px-6 py-3 space-x-2 font-semibold rounded-lg transition-all duration-300 bg-warm-yellow text-text-dark hover:bg-yellow-400 hover:scale-105"
              >
                <span>DETAIL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
