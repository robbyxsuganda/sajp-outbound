"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="overflow-hidden relative min-h-screen bg-gradient-to-br to-white from-neutral-light-start">
      {/* Background decorative elements */}
      <div className="overflow-hidden absolute inset-0">
        <div className="absolute left-10 top-20 w-32 h-32 rounded-full bg-primary-green/10 animate-float" />
        <div
          className="absolute right-20 top-40 w-24 h-24 rounded-full bg-warm-yellow/20 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-accent-red/10 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="flex items-center min-h-screen container-custom">
        <div className="grid grid-cols-1 gap-12 items-center w-full lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center mb-8 space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-center items-center w-16 h-16 bg-gradient-to-br rounded-xl shadow-lg from-primary-green to-secondary-green-start">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-text-dark">SAJP</h1>
                <p className="text-sm text-gray-500">Indonesian Spices</p>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl font-bold leading-tight lg:text-7xl text-text-dark"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Leverancier van Indonesische kruiden
            </motion.h1>

            {/* Description */}
            <motion.div
              className="space-y-4 text-lg leading-relaxed text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                SAJP is Indonesia spices farm, supplier, and exporter. Supplier
                of cloves, vanilla beans, and many other Indonesian spices.
                Selected through vigorous quality control.
              </p>
              <p>
                We ship worldwide with FOB CIF CNF shipping terms. A flexible
                payment terms choices of Bank Transfer or Letter of Credit.
              </p>
              <p>
                Representing our customer as their best Indonesian spices
                supplier with quality, transparency, commitment, and
                professional handling.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white rounded-lg shadow-lg transition-all duration-300 transform bg-accent-red hover:bg-accent-red-hover hover:shadow-xl hover:scale-105"
              >
                LEES MEER
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop&crop=center"
                  alt="Indonesian Spices"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/40" />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="flex absolute -top-4 -right-4 justify-center items-center w-20 h-20 rounded-full shadow-lg bg-warm-yellow"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Leaf className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="flex absolute -bottom-4 -left-4 justify-center items-center w-16 h-16 rounded-full shadow-lg bg-primary-green"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-lg font-bold text-white">S</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-col items-center text-gray-600">
          <span className="mb-2 text-sm font-medium">Scroll to explore</span>
          <motion.div
            className="flex justify-center w-6 h-10 rounded-full border-2 border-gray-300"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="mt-2 w-1 h-3 bg-gray-400 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
