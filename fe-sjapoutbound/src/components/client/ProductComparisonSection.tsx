"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Product } from "@/data/products";

interface ProductComparisonSectionProps {
  product: Product;
}

export default function ProductComparisonSection({
  product,
}: ProductComparisonSectionProps) {
  // Sample comparison data - this would come from your data source
  const variants = [
    {
      name: "Grade A Premium",
      quality: "Premium",
      moisture: "≤ 12%",
      admixture: "≤ 1%",
      broken: "≤ 2%",
      size: "Large (>14mm)",
      color: "Brown",
      aroma: "Very Strong",
      price: "Premium",
      recommended: true,
    },
    {
      name: "Grade B Standard",
      quality: "Standard",
      moisture: "≤ 14%",
      admixture: "≤ 2%",
      broken: "≤ 5%",
      size: "Medium (12-14mm)",
      color: "Brown",
      aroma: "Strong",
      price: "Standard",
      recommended: false,
    },
    {
      name: "Grade C Commercial",
      quality: "Commercial",
      moisture: "≤ 16%",
      admixture: "≤ 3%",
      broken: "≤ 8%",
      size: "Small (<12mm)",
      color: "Light Brown",
      aroma: "Medium",
      price: "Economic",
      recommended: false,
    },
  ];

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
            Grade Comparison
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare different grades and varieties of our {product.name} to find
            the best fit for your needs
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block min-w-full"
          >
            <div className="bg-gradient-to-r from-neutral-light-start to-white rounded-2xl shadow-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-primary-green to-secondary-green-start text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                      Specifications
                    </th>
                    {variants.map((variant, index) => (
                      <th
                        key={index}
                        className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider relative"
                      >
                        {variant.name}
                        {variant.recommended && (
                          <div className="absolute -top-2 right-2">
                            <div className="bg-warm-yellow text-text-dark text-xs px-2 py-1 rounded-full flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              Recommended
                            </div>
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      Quality Level
                    </td>
                    {variants.map((variant, index) => (
                      <td key={index} className="px-6 py-4 text-sm text-center">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            variant.quality === "Premium"
                              ? "bg-primary-green/10 text-primary-green"
                              : variant.quality === "Standard"
                              ? "bg-warm-yellow/10 text-warm-yellow"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {variant.quality}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      Moisture Content
                    </td>
                    {variants.map((variant, index) => (
                      <td
                        key={index}
                        className="px-6 py-4 text-sm text-center text-gray-600"
                      >
                        {variant.moisture}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      Admixture
                    </td>
                    {variants.map((variant, index) => (
                      <td
                        key={index}
                        className="px-6 py-4 text-sm text-center text-gray-600"
                      >
                        {variant.admixture}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      Broken/Defects
                    </td>
                    {variants.map((variant, index) => (
                      <td
                        key={index}
                        className="px-6 py-4 text-sm text-center text-gray-600"
                      >
                        {variant.broken}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      Size
                    </td>
                    {variants.map((variant, index) => (
                      <td
                        key={index}
                        className="px-6 py-4 text-sm text-center text-gray-600"
                      >
                        {variant.size}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      Aroma Strength
                    </td>
                    {variants.map((variant, index) => (
                      <td
                        key={index}
                        className="px-6 py-4 text-sm text-center text-gray-600"
                      >
                        {variant.aroma}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      Price Range
                    </td>
                    {variants.map((variant, index) => (
                      <td key={index} className="px-6 py-4 text-sm text-center">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            variant.price === "Premium"
                              ? "bg-primary-green/10 text-primary-green"
                              : variant.price === "Standard"
                              ? "bg-warm-yellow/10 text-warm-yellow"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {variant.price}
                        </span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
