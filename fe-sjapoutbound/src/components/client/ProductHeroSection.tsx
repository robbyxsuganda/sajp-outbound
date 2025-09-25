"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Package, Award, Globe } from "lucide-react";
import { Product } from "@/data/products";

interface ProductHeroSectionProps {
  product: Product;
}

export default function ProductHeroSection({
  product,
}: ProductHeroSectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-light-start to-neutral-light-end">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-block px-4 py-2 text-sm font-semibold text-primary-green bg-primary-green/10 rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-text-dark mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {product.shortDescription}
                </p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">
                      Premium Quality
                    </p>
                    <p className="text-sm text-gray-500">Highest Grade</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-warm-yellow/10 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-warm-yellow" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">Export Ready</p>
                    <p className="text-sm text-gray-500">
                      International Standard
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary-green-start/10 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-secondary-green-start" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">Certified</p>
                    <p className="text-sm text-gray-500">
                      {product.certifications.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">Origin</p>
                    <p className="text-sm text-gray-500">{product.origin}</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="btn-primary flex-1">Request Quote</button>
                <button className="btn-secondary flex-1">Contact Us</button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
