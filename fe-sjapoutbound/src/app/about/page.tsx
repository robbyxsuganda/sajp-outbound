'use client';

import Image from 'next/image';
import { Award, Globe, Leaf, Package, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'SAJP was established with a vision to connect Indonesian agricultural products to global markets.',
      icon: Globe,
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'We expanded our operations to serve customers in Asia, Europe, and North America.',
      icon: Package,
    },
    {
      year: '2020',
      title: 'Sustainability Initiative',
      description: 'Launched our sustainable farming program to support environmental conservation.',
      icon: Leaf,
    },
    {
      year: '2022',
      title: 'Quality Certification',
      description: 'Achieved international quality certifications for all our product lines.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Community Impact',
      description: 'Reached over 1000 farming families through our community support programs.',
      icon: Users,
    },
  ];

  return (
    <div className="bg-neutral-light-start py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-text-dark mb-6">About SAJP</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your trusted partner for premium agricultural products from Indonesia. 
              Committed to quality, transparency, and sustainability.
            </p>
          </div>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-text-dark mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2015, SAJP began as a small family business with a simple mission: 
                to bring the finest Indonesian agricultural products to the world. What started 
                as a local operation has grown into a trusted international exporter.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, we work with over 1000 farming families across Indonesia, ensuring 
                fair trade practices and sustainable farming methods. Our commitment to quality 
                and transparency has made us a preferred partner for importers worldwide.
              </p>
              <p className="text-lg text-gray-700">
                We believe that agriculture is not just about growing crops, but about 
                nurturing communities, protecting the environment, and building a sustainable 
                future for generations to come.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop"
                alt="SAJP Company Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-text-dark mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-green"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <item.icon className="w-8 h-8 text-primary-green mr-4" />
                        <span className="text-2xl font-bold text-primary-green">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-text-dark mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="w-4 h-4 bg-primary-green rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-center text-text-dark mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">Sustainability</h3>
                <p className="text-gray-700">
                  We are committed to sustainable farming practices that protect the environment 
                  and ensure long-term agricultural viability.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">Quality</h3>
                <p className="text-gray-700">
                  We maintain the highest standards in product quality, from farm to export, 
                  ensuring customer satisfaction.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-4">Community</h3>
                <p className="text-gray-700">
                  We support local farming communities through fair trade practices and 
                  community development programs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
