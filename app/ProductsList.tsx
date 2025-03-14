'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <div className="relative w-full h-96">
            <Image
              src={'/' + product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}