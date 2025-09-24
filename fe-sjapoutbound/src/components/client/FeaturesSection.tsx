'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Globe, Shield, Truck, Award, Users, Leaf, Clock } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Ready Stock',
    description: 'Always available with fresh inventory and ready to ship',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Globe,
    title: 'Worldwide Shipping',
    description: 'We ship globally with FOB CIF CNF shipping terms',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Rigorous quality control and international certifications',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping worldwide with tracking',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Award,
    title: 'Certified Products',
    description: 'All products are certified organic, HACCP, and ISO 22000',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Professional team with years of experience in agriculture',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Leaf,
    title: 'Sustainable Farming',
    description: 'Committed to sustainable and environmentally friendly practices',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support and assistance',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-5xl font-bold text-text-dark">
            <span className="gradient-text">Why Choose SAJP?</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            We are committed to providing the highest quality agricultural products with exceptional service and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`${feature.bgColor} rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-4 text-center group-hover:text-primary-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-green to-secondary-green-start rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to learn more about our products and services
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-primary-green bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
