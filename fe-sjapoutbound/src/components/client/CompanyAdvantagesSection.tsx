'use client';

import { motion } from 'framer-motion';
import { companyAdvantages } from '@/data/companyAdvantages';
import Link from 'next/link';

export default function CompanyAdvantagesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-text-dark mb-6">
            <span className="gradient-text">Why Choose SAJP?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to delivering excellence in every aspect of our business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyAdvantages.map((advantage, index) => (
            <motion.div 
              key={advantage.id} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <span className="text-3xl">{advantage.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-text-dark mb-4 text-center group-hover:text-primary-green transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {advantage.description}
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
            <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who trust SAJP for their spice needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-primary-green bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-primary-green"
              >
                View Products
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
