"use client";

import { motion } from "framer-motion";
import { Leaf, Shield, Award, Truck, Clock, Globe } from "lucide-react";
import { Product } from "@/data/products";

interface ProductDetailsSectionProps {
  product: Product;
}

export default function ProductDetailsSection({
  product,
}: ProductDetailsSectionProps) {
  const features = [
    {
      icon: Leaf,
      title: "Natural & Organic",
      description:
        "Grown using sustainable farming practices without harmful chemicals",
      color: "text-primary-green bg-primary-green/10",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Rigorous quality control and testing at every stage of production",
      color: "text-warm-yellow bg-warm-yellow/10",
    },
    {
      icon: Award,
      title: "Certified Product",
      description:
        "International certifications ensuring highest quality standards",
      color: "text-secondary-green-start bg-secondary-green-start/10",
    },
    {
      icon: Truck,
      title: "Worldwide Shipping",
      description: "Fast and secure delivery to destinations around the globe",
      color: "text-primary-green bg-primary-green/10",
    },
    {
      icon: Clock,
      title: "Fresh & Long-lasting",
      description:
        "Optimal processing and storage to maintain freshness and quality",
      color: "text-warm-yellow bg-warm-yellow/10",
    },
    {
      icon: Globe,
      title: "Export Ready",
      description:
        "Packaging and documentation prepared for international trade",
      color: "text-secondary-green-start bg-secondary-green-start/10",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Cultivation",
      description:
        "Careful cultivation using traditional and modern farming techniques",
    },
    {
      step: "02",
      title: "Harvesting",
      description:
        "Hand-picked at optimal maturity for maximum quality and flavor",
    },
    {
      step: "03",
      title: "Processing",
      description:
        "Professional processing and drying using state-of-the-art facilities",
    },
    {
      step: "04",
      title: "Quality Control",
      description:
        "Rigorous testing and quality assurance at multiple checkpoints",
    },
    {
      step: "05",
      title: "Packaging",
      description:
        "Professional packaging to maintain freshness during transport",
    },
    {
      step: "06",
      title: "Export",
      description:
        "Secure shipping with full documentation for international trade",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
              Why Choose Our {product.name}?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the exceptional qualities that make our products stand
              out in the global market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-neutral-light-start to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`inline-flex p-3 rounded-2xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-primary-green/5 to-warm-yellow/5 p-8 lg:p-12 rounded-3xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
              Our Production Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From farm to export, every step is carefully managed to ensure the
              highest quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-green to-secondary-green-start text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-text-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-green to-warm-yellow"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-green to-secondary-green-start p-8 lg:p-12 rounded-3xl text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get in touch with our experts for pricing, samples, and custom
              requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-green font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Request Quote
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary-green transition-colors duration-300">
                Download Catalog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
