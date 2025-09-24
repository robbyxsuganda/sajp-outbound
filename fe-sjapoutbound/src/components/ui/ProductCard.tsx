import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary-green bg-primary-green/10 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-text-dark group-hover:text-primary-green transition-colors mb-3">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {product.shortDescription}
          </p>
          <div className="flex items-center text-primary-green font-medium group-hover:translate-x-1 transition-transform">
            <span className="text-sm">Learn More</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}
