"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Users,
  PieChart,
  BarChart3,
  Target,
} from "lucide-react";

export default function InvestmentSection() {
  return (
    <section className="overflow-hidden relative bg-gradient-to-br to-white from-neutral-light-start section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-3xl bg-primary-green"></div>
        <div className="absolute right-20 bottom-20 w-40 h-40 rounded-full blur-3xl bg-warm-yellow"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full blur-3xl bg-accent-red"></div>
      </div>

      <div className="relative z-10 container-custom">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-text-dark">
            <span className="gradient-text">Spices Producer</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left Content - Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              Indonesia has one of the most abundant and extraordinary spices in the world, 
              which is why other countries came during the era of the Majapahit Empire. Spices 
              are a group of plants with very strong flavors and aromas, and are also great 
              healing plants. Spices are the largest export commodity after shrimp, fish and coffee. 
              The estimated amount of spices and herbs in Indonesia, most of which are not cultivated, 
              but grow wild. Indonesia is known as the Mother of Spices because of its geographical 
              advantages, and its spice products are still sought after by other countries. From USA, 
              Vietnam, India, Netherlands, Singapore, Germany, Japan, Italy, Malaysia, France, China, 
              Australia, Thailand, Belgium, South Korea, Brazil, United Kingdom, Russia, Canada and Pakistan. 
              Fertile soil with the potential to produce some of the highest quality commodities in the world, 
              we offer a wide range of products ready to ship anywhere in the world. We are committed to 
              maintaining quality and want to help small communities achieve sustainable economic growth. 
              Our products come from the best sources and we guarantee our customers will get the best supply 
              because all our products are of the best quality.
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center items-center mx-auto mb-3 w-16 h-16 bg-gradient-to-br rounded-2xl from-primary-green to-secondary-green-start">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">25%+</h3>
                <p className="text-sm text-gray-600">Annual Growth</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center items-center mx-auto mb-3 w-16 h-16 bg-gradient-to-br to-yellow-400 rounded-2xl from-warm-yellow">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">$2M+</h3>
                <p className="text-sm text-gray-600">Annual Revenue</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center items-center mx-auto mb-3 w-16 h-16 bg-gradient-to-br to-red-500 rounded-2xl from-accent-red">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">30+</h3>
                <p className="text-sm text-gray-600">Countries</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Main Card */}
            <div className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 shadow-xl">
              {/* Decorative Elements */}
              <div className="flex justify-center mb-8 space-x-6">
                <motion.div
                  className="flex justify-center items-center w-20 h-20 bg-gradient-to-br rounded-2xl shadow-lg from-primary-green to-secondary-green-start"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <PieChart className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  className="flex justify-center items-center w-20 h-20 bg-gradient-to-br to-yellow-400 rounded-2xl shadow-lg from-warm-yellow"
                  animate={{ rotate: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <BarChart3 className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  className="flex justify-center items-center w-20 h-20 bg-gradient-to-br to-red-500 rounded-2xl shadow-lg from-accent-red"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold text-text-dark">
                  Spice Investment
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Strategic investments in plantations, production facilities and export 
                  infrastructure for sustainable growth in the international spice market 
                  with transparent reporting and proven results.
                </p>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60 bg-warm-yellow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-60 bg-primary-green"></div>
              <div className="absolute -left-6 top-1/2 w-4 h-4 rounded-full opacity-60 bg-accent-red"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
