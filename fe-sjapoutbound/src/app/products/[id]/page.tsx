"use client";

import { notFound } from "next/navigation";
import { products, Product } from "@/data/products";
import { useEffect, useState } from "react";
import ProductCarousel from "@/components/client/ProductCarousel";
import { motion } from "framer-motion";
import ProductHeroSection from "@/components/client/ProductHeroSection";
import ProductSpecificationsSection from "@/components/client/ProductSpecificationsSection";
import ProductPhotosSection from "@/components/client/ProductPhotosSection";
import ProductComparisonSection from "@/components/client/ProductComparisonSection";
import ProductVideosSection from "@/components/client/ProductVideosSection";
import ProductDetailsSection from "@/components/client/ProductDetailsSection";
import ProductNewsSection from "@/components/client/ProductNewsSection";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({
  params: paramsPromise,
}: ProductPageProps) {
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-light-start to-neutral-light-end">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Product Hero Section */}
      <ProductHeroSection product={product} />

      {/* Product Specifications */}
      <ProductSpecificationsSection product={product} />

      {/* Product Photos Gallery */}
      <ProductPhotosSection product={product} />

      {/* Grade Comparison */}
      <ProductComparisonSection product={product} />

      {/* Product Videos */}
      <ProductVideosSection product={product} />

      {/* Product Details & Features */}
      <ProductDetailsSection product={product} />

      {/* Related News Section */}
      <ProductNewsSection product={product} />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-gradient-to-br from-neutral-light-start to-neutral-light-end">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg">
                <ProductCarousel
                  products={relatedProducts}
                  title="Related Products"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
