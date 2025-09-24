'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';

const spiceCategories = [
  { 
    name: 'Cloves', 
    icon: '🌿', 
    color: 'from-red-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center',
    description: 'Premium quality cloves from Indonesia'
  },
  { 
    name: 'Vanilla Beans', 
    icon: '🌱', 
    color: 'from-yellow-500 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center',
    description: 'Aromatic vanilla beans for gourmet cooking'
  },
  { 
    name: 'Nutmeg', 
    icon: '🥜', 
    color: 'from-amber-500 to-amber-600',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
    description: 'Warm and sweet nutmeg from Indonesia'
  },
  { 
    name: 'Mace Flower', 
    icon: '🌸', 
    color: 'from-pink-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center',
    description: 'Delicate mace flower with beautiful color'
  },
  { 
    name: 'Betel Nut', 
    icon: '🌰', 
    color: 'from-orange-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center',
    description: 'Traditional betel nut with medicinal properties'
  },
  { 
    name: 'Cardamom', 
    icon: '🌿', 
    color: 'from-green-500 to-green-600',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center',
    description: 'Aromatic green cardamom pods'
  },
  { 
    name: 'Cinnamon', 
    icon: '🪵', 
    color: 'from-amber-600 to-amber-700',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center',
    description: 'Premium cinnamon sticks with strong aroma'
  },
  { 
    name: 'Turmeric', 
    icon: '🟡', 
    color: 'from-yellow-600 to-yellow-700',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center',
    description: 'Pure turmeric powder with excellent color'
  }
];

export default function SpiceCategoriesSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-light-start to-white">
      <div className="container-custom">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-5xl font-bold text-text-dark">
            <span className="gradient-text">Indonesian Spices</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Discover the finest selection of premium Indonesian spices, carefully sourced and processed for global markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="spice-categories-swiper"
          >
            {spiceCategories.map((spice, index) => (
              <SwiperSlide key={spice.name}>
                <motion.div
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-48">
                      <Image
                        src={spice.image}
                        alt={spice.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${spice.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl">{spice.icon}</span>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="mb-2 text-xl font-bold text-text-dark group-hover:text-primary-green transition-colors">
                        {spice.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {spice.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/products"
            className="btn-primary text-lg px-8 py-4"
          >
            View All Products
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .spice-categories-swiper .swiper-button-next,
        .spice-categories-swiper .swiper-button-prev {
          color: #2F6A26;
          background: white;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .spice-categories-swiper .swiper-button-next:hover,
        .spice-categories-swiper .swiper-button-prev:hover {
          background: #2F6A26;
          color: white;
          transform: scale(1.1);
        }
        
        .spice-categories-swiper .swiper-button-next:after,
        .spice-categories-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
