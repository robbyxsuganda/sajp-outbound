"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProductShowcaseSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Cloves Showcase */}
          <motion.div
            className="overflow-hidden relative rounded-2xl group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/products?category=cloves" className="block">
              <div className="overflow-hidden relative h-80">
                {/* Background Image */}
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Cloves farming in Bali"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Simple Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Main Content */}
                <div className="flex relative z-10 flex-col justify-center items-center p-6 h-full text-center text-white">
                  <motion.h3
                    className="mb-4 text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Cloves
                  </motion.h3>
                  <motion.p
                    className="text-lg font-medium leading-relaxed text-white/90 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Clove cultivation in Selemadeg village, Buleleng region, Bali.
                    AB6 grade for tobacco companies and Lal Pari grade for culinary use
                  </motion.p>

                  {/* Simple CTA Button */}
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
                      View Products
                    </span>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Vanilla Showcase */}
          <motion.div
            className="overflow-hidden relative rounded-2xl group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link href="/products?category=vanilla" className="block">
              <div className="overflow-hidden relative h-80">
                {/* Background Image */}
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Vanilla farming in Bali"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Simple Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Main Content */}
                <div className="flex relative z-10 flex-col justify-center items-center p-6 h-full text-center text-white">
                  <motion.h3
                    className="mb-4 text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Vanilla
                  </motion.h3>
                  <motion.p
                    className="text-lg font-medium leading-relaxed text-white/90 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Vanilla cultivation throughout the Buleleng region of Bali has
                    reached the peak of agricultural trends in Bali with high selling prices
                    and profits
                  </motion.p>

                  {/* Simple CTA Button */}
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-white/20 rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300">
                      View Products
                    </span>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
