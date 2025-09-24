"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Globe, Award } from "lucide-react";
import Link from "next/link";

export default function AboutSectionNew() {
  return (
    <section className="flex overflow-hidden relative min-h-screen">
      {/* Left Content with Container */}
      <div className="flex relative z-10 items-center w-full bg-gradient-to-br ps-20 lg:w-1/2 from-slate-800 to-slate-900">
        <div className="py-16 container-custom lg:py-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-4xl font-bold leading-tight text-white lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Indonesia{" "}
              <span className="text-warm-yellow">Spices Supplier</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              className="space-y-6 text-lg leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p>
                Worlds trustworthy and reliable spice supplier from Indonesia.
                Presenting numerous answers to Small and Medium sized spice
                companies catering their neighborhood spice marketplace needs
                for numerous qualities, grades and origin. Indonesia stands out
                as a premier spices supplier, offering a diverse array of
                high-quality options. These aromatic treasures, cultivated
                sustainably, cater to local and global needs. From cloves to
                vanilla beans, each spice narrates a story of cultural richness
                and culinary delight. The journey starts with meticulous farming
                and culminates in reliable export networks, empowering
                businesses of all sizes. These spices arent just ingredients;
                they carry cultural and healing significance too. Indonesian
                suppliers assure premium quality through rigorous checks.
                Connect with them to transform your culinary creations. Unlock a
                world of flavors and aromas.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 space-x-2 font-semibold rounded-lg transition-all duration-300 bg-warm-yellow text-slate-900 hover:bg-yellow-400 hover:scale-105"
              >
                <span>READ MORE</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Background Image with Visual Elements */}
      <div
        className="hidden relative lg:block lg:w-1/2"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&h=800&fit=crop&crop=center')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Stronger Overlay for Better Visibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/50 to-slate-900/80"></div>

        {/* Content Container - Exact same structure as other sections */}
        <div className="flex relative justify-center items-center h-full pe-20 ze-10">
          <div className="py-16 container-custom lg:py-24">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Section Title */}
              <motion.h3
                className="text-3xl font-bold text-center text-white lg:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Why Choose <span className="text-warm-yellow">Us?</span>
              </motion.h3>

              {/* Features Grid - Same structure as other sections */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Premium Quality */}
                <motion.div
                  className="flex items-center p-6 space-x-4 rounded-2xl border backdrop-blur-md transition-all duration-300 bg-white/20 border-white/30 hover:bg-white/25"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex justify-center items-center w-12 h-12 rounded-xl backdrop-blur-sm bg-warm-yellow/30">
                    <Award className="w-6 h-6 text-warm-yellow" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Premium Quality
                    </h4>
                    <p className="text-sm text-white/90">
                      Highest grade spices
                    </p>
                  </div>
                </motion.div>

                {/* Worldwide Delivery */}
                <motion.div
                  className="flex items-center p-6 space-x-4 rounded-2xl border backdrop-blur-md transition-all duration-300 bg-white/20 border-white/30 hover:bg-white/25"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex justify-center items-center w-12 h-12 rounded-xl backdrop-blur-sm bg-primary-green/30">
                    <Globe className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Worldwide Delivery
                    </h4>
                    <p className="text-sm text-white/90">
                      Global shipping network
                    </p>
                  </div>
                </motion.div>

                {/* 100% Natural */}
                <motion.div
                  className="flex items-center p-6 space-x-4 rounded-2xl border backdrop-blur-md transition-all duration-300 bg-white/20 border-white/30 hover:bg-white/25"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex justify-center items-center w-12 h-12 rounded-xl backdrop-blur-sm bg-accent-red/30">
                    <Leaf className="w-6 h-6 text-accent-red" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      100% Natural
                    </h4>
                    <p className="text-sm text-white/90">
                      Organic & sustainable
                    </p>
                  </div>
                </motion.div>

                {/* Certified */}
                <motion.div
                  className="flex items-center p-6 space-x-4 rounded-2xl border backdrop-blur-md transition-all duration-300 bg-white/20 border-white/30 hover:bg-white/25"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex justify-center items-center w-12 h-12 rounded-xl backdrop-blur-sm bg-warm-yellow/30">
                    <Award className="w-6 h-6 text-warm-yellow" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Certified
                    </h4>
                    <p className="text-sm text-white/90">Quality guaranteed</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Background */}
      <div
        className="absolute inset-0 w-full h-full lg:hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop&crop=center')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
    </section>
  );
}
