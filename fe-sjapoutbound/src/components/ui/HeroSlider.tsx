"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Leaf, Globe, Award, Truck } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const heroSlides = [
  {
    id: 1,
    title: "Indonesia Spices Supplier",
    subtitle: "Premium Quality Spices from Indonesia",
    description:
      "SAJP is Indonesia spices farm, supplier, and exporter. Supplier of cloves, vanilla beans, and many other Indonesian spices. Selected through vigorous quality control.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&h=1080&fit=crop&crop=center",
    cta: "Explore Products",
    ctaLink: "/products",
    bgOverlay: "rgba(0,0,0,0.4)",
    icon: Leaf,
    accentColor: "from-green-500 to-green-600"
  },
  {
    id: 2,
    title: "Spices Exporter",
    subtitle: "Your Finest Spices from Indonesia",
    description:
      "We ship worldwide with FOB CIF CNF shipping terms. A flexible payment terms choices of Bank Transfer or Letter of Credit.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop&crop=center",
    cta: "Contact Us",
    ctaLink: "/contact",
    bgOverlay: "rgba(0,0,0,0.4)",
    icon: Globe,
    accentColor: "from-yellow-500 to-yellow-600"
  },
  {
    id: 3,
    title: "Quality Guaranteed",
    subtitle: "Certified Indonesian Spices",
    description:
      "Representing our customer as their best Indonesian spices supplier with quality, transparency, commitment, and professional handling.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center",
    cta: "Learn More",
    ctaLink: "/about",
    bgOverlay: "rgba(0,0,0,0.4)",
    icon: Award,
    accentColor: "from-red-500 to-red-600"
  },
  {
    id: 4,
    title: "Global Shipping",
    subtitle: "Worldwide Delivery",
    description:
      "We provide reliable shipping services worldwide with professional handling and timely delivery to ensure your spices arrive in perfect condition.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&h=1080&fit=crop&crop=center",
    cta: "Shipping Info",
    ctaLink: "/contact",
    bgOverlay: "rgba(0,0,0,0.4)",
    icon: Truck,
    accentColor: "from-blue-500 to-blue-600"
  }
];

export default function HeroSlider() {
  return (
    <section className="overflow-hidden relative w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom'
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        {heroSlides.map((slide) => {
          const IconComponent = slide.icon;
          return (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={slide.id === 1}
                  className="animate-fade-in"
                />
                <div
                  className="flex absolute inset-0 items-center"
                  style={{ backgroundColor: slide.bgOverlay }}
                >
                  <div className="container-custom text-center text-white">
                    <div className="mx-auto max-w-6xl">
                      {/* Icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center mb-8"
                      >
                        <div className={`w-24 h-24 bg-gradient-to-br ${slide.accentColor} rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow`}>
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                      </motion.div>

                      {/* Subtitle */}
                      <motion.h2
                        className="mb-6 text-2xl font-semibold text-yellow-300 md:text-3xl lg:text-4xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        {slide.subtitle}
                      </motion.h2>

                      {/* Main Title */}
                      <motion.h1
                        className="mb-8 text-5xl font-bold leading-tight md:text-6xl lg:text-8xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <span className="gradient-text">{slide.title}</span>
                      </motion.h1>

                      {/* Description */}
                      <motion.p
                        className="mx-auto mb-10 max-w-4xl text-xl leading-relaxed md:text-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                      >
                        <Link
                          href={slide.ctaLink}
                          className="btn-primary text-lg px-8 py-4"
                        >
                          {slide.cta}
                          <ChevronRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                          href="/about"
                          className="btn-secondary text-lg px-8 py-4"
                        >
                          Learn More
                        </Link>
                      </motion.div>

                      {/* Floating elements */}
                      <motion.div
                        className="absolute left-10 top-20 w-20 h-20 rounded-full bg-yellow-300/20 animate-float"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                      <motion.div
                        className="absolute right-10 bottom-20 w-16 h-16 rounded-full bg-primary-green/30 animate-float"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        style={{ animationDelay: "1s" }}
                      />
                      <motion.div
                        className="absolute right-20 top-1/2 w-12 h-12 rounded-full bg-red-500/20 animate-float"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        style={{ animationDelay: "2s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-sm font-medium">Scroll to explore</span>
          <motion.div
            className="flex justify-center w-6 h-10 rounded-full border-2 border-white/50"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="mt-2 w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>

      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #2F6A26;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
