// src/components/ProductCard.tsx
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  link: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ul className="list-disc list-inside mb-4">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-700">{feature}</li>
          ))}
        </ul>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          商品を見る
        </a>
      </div>
    </div>
  );
}