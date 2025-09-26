"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductPhotosSectionProps {
  product: Product;
}

export default function ProductPhotosSection({
  product,
}: ProductPhotosSectionProps) {
  // Sample photos - in real app, this would come from product data
  const photos = [
    {
      id: 1,
      url: product.image,
      title: `${product.name} - Main View`,
      description: "High quality product image",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
      title: `${product.name} - Close Up`,
      description: "Detailed view of the product",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      title: `${product.name} - Packaging`,
      description: "Product packaging and presentation",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
      title: `${product.name} - Processing`,
      description: "Product processing and quality control",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop&crop=center",
      title: `${product.name} - Origin`,
      description: "Source and origin of the product",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop&crop=center",
      title: `${product.name} - Quality`,
      description: "Quality assurance and testing",
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
            Product Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive photo gallery showcasing our {product.name} from
            various angles and stages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-sm mb-1">{photo.title}</h3>
                  <p className="text-xs text-gray-200">{photo.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
