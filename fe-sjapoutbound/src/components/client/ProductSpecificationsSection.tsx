"use client";

import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductSpecificationsSectionProps {
  product: Product;
}

export default function ProductSpecificationsSection({
  product,
}: ProductSpecificationsSectionProps) {
  const specifications = [
    { label: "Origin", value: product.origin },
    { label: "Grade", value: product.grade || "Premium" },
    { label: "Availability", value: product.availability },
    { label: "Packaging", value: product.packaging },
    { label: "Shelf Life", value: product.shelfLife },
    { label: "Storage", value: product.storage },
    { label: "Certifications", value: product.certifications.join(", ") },
  ];

  const nutritionalInfo = product.nutritionalInfo
    ? [
        { label: "Calories", value: product.nutritionalInfo.calories },
        { label: "Protein", value: product.nutritionalInfo.protein },
        { label: "Carbohydrates", value: product.nutritionalInfo.carbs },
        { label: "Fiber", value: product.nutritionalInfo.fiber },
      ].filter((item) => item.value)
    : [];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            Product Specifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Detailed specifications and technical information about our{" "}
            {product.name}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* General Specifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-neutral-light-start to-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-text-dark mb-6 flex items-center">
              <span className="w-2 h-6 bg-primary-green rounded-full mr-3"></span>
              General Specifications
            </h3>
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-gray-700">
                    {spec.label}
                  </span>
                  <span className="text-text-dark font-semibold text-right max-w-xs">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nutritional Information */}
          {nutritionalInfo.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-primary-green/5 to-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-text-dark mb-6 flex items-center">
                <span className="w-2 h-6 bg-warm-yellow rounded-full mr-3"></span>
                Nutritional Information
              </h3>
              <div className="space-y-4">
                {nutritionalInfo.map((nutrition, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-700">
                      {nutrition.label}
                    </span>
                    <span className="text-text-dark font-semibold">
                      {nutrition.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-green/5 to-warm-yellow/5 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-text-dark mb-4">
            About This Product
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
