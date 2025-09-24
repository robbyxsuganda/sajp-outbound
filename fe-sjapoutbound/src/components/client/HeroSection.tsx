"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex overflow-hidden relative items-center min-h-screen bg-gradient-to-br from-neutral-light-start to-neutral-light-end">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-20 w-32 h-32 rounded-full blur-3xl bg-primary-green"></div>
        <div className="absolute right-10 bottom-20 w-40 h-40 rounded-full blur-3xl bg-warm-yellow"></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <motion.h1
              className="text-5xl font-bold leading-tight lg:text-6xl text-text-dark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Indonesia Spices Supplier
            </motion.h1>

            {/* Description */}
            <motion.div
              className="space-y-4 text-lg leading-relaxed text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                SAJP is Indonesia spices farm, supplier, and exporter. Supplier
                of cloves, vanilla beans, and many other Indonesian spices.
                Selected through rigorous quality control.
              </p>
              <p>
                We ship worldwide with FOB CIF CNF shipping terms. A flexible
                payment terms choices of Bank Transfer or Letter of Credit.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 space-x-2 text-lg btn-primary"
              >
                <span>VIEW PRODUCTS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative p-12 bg-gradient-to-br rounded-3xl shadow-2xl from-primary-green to-warm-yellow">
              {/* Simple Spice Icon */}
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-32 h-32 rounded-full backdrop-blur-sm bg-white/20">
                  <span className="text-6xl">🌶️</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
