"use client";

import { motion } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";
import { Product } from "@/data/products";
import Image from "next/image";

interface ProductVideosSectionProps {
  product: Product;
}

export default function ProductVideosSection({
  product,
}: ProductVideosSectionProps) {
  // Sample video data - this would come from your data source
  const videos = [
    {
      id: 1,
      title: `${product.name} - Processing & Quality Control`,
      thumbnail:
        "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=225&fit=crop&crop=center",
      duration: "3:45",
      views: "2.1K",
      description:
        "See how our premium spices are processed and quality controlled",
    },
    {
      id: 2,
      title: `${product.name} - Farm to Export`,
      thumbnail:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop&crop=center",
      duration: "5:20",
      views: "1.8K",
      description: "Journey from our farms to international markets",
    },
    {
      id: 3,
      title: `${product.name} - Cultivation Process`,
      thumbnail:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=225&fit=crop&crop=center",
      duration: "2:15",
      views: "3.2K",
      description: "Traditional cultivation methods and modern techniques",
    },
    {
      id: 4,
      title: `${product.name} - Packaging & Shipping`,
      thumbnail:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=225&fit=crop&crop=center",
      duration: "1:55",
      views: "1.5K",
      description: "Professional packaging and international shipping process",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-light-start to-neutral-light-end">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-dark mb-4">
            Product Videos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch detailed videos about our {product.name} production process,
            quality control, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video">
                <Image
                  src={video.thumbnail}
                  width={400}
                  height={225}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play
                      className="w-6 h-6 text-primary-green ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-text-dark mb-2 group-hover:text-primary-green transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {video.description}
                </p>
                <div className="flex items-center text-gray-500 text-xs">
                  <Eye className="w-4 h-4 mr-1" />
                  {video.views} views
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-text-dark mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-600 mb-6">
              Request a virtual facility tour or custom product demonstration
              video
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Request Virtual Tour</button>
              <button className="btn-secondary">Custom Demo Video</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
