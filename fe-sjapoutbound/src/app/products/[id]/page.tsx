'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { Package, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCarousel from '@/components/client/ProductCarousel';
import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params: paramsPromise }: ProductPageProps) {
  const [params, setParams] = useState<{ id: string } | null>(null);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    paramsPromise.then(setParams);
  }, [paramsPromise]);

  useEffect(() => {
    if (params) {
      const foundProduct = products.find((p) => p.id === params.id);
      if (!foundProduct) {
        notFound();
      }
      setProduct(foundProduct);
    }
  }, [params]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="bg-neutral-light-start py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-text-dark mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.category}</p>
              <div className="prose max-w-none text-text-dark mb-8">
                <p className="text-lg leading-relaxed">{product.description}</p>
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center text-primary-green">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center text-primary-green">
                  <Package className="w-5 h-5 mr-2" />
                  <span className="font-medium">Export Ready</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-primary-green hover:bg-secondary-green-start text-white font-bold py-3 px-8 rounded-full transition-colors">
                  Request Quote
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ProductCarousel 
                products={relatedProducts} 
                title="Related Products" 
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
