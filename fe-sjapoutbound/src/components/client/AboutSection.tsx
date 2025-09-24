"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Award, Users, Globe, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "5+", label: "Years Experience", icon: Award },
  { number: "100+", label: "Happy Customers", icon: Users },
  { number: "50+", label: "Countries Served", icon: Globe },
  { number: "100%", label: "Organic Products", icon: Leaf },
];

export default function AboutSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-5xl font-bold text-text-dark">
              <span className="gradient-text">About SAJP</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              SAJP was founded in 2019, we have accomplished many as cloves and
              vanilla beans farming, producer, and supplier. We are proud to be
              part of <strong>SAJP Group</strong> as spices and commodities
              sourcing from Indonesia.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              While various spices available, our main production is whole
              cloves, clove stems, and vanilla beans. Dedicated to be the most
              reliable spices supplier from Indonesia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="p-4 text-center bg-gradient-to-br to-white rounded-xl shadow-lg from-neutral-light-start"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-center items-center mx-auto mb-3 w-12 h-12 bg-gradient-to-br rounded-full from-primary-green to-secondary-green-start">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="mb-1 text-2xl font-bold text-primary-green">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <Link href="/about" className="px-8 py-4 text-lg btn-primary">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop"
                alt="SAJP Company"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="flex absolute -right-6 -bottom-6 justify-center items-center w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl animate-bounce-slow">
                <Star className="w-16 h-16 text-white" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="flex absolute -top-4 -left-4 justify-center items-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Leaf className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                className="flex absolute -right-8 top-1/2 justify-center items-center w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
