'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[]}) {
  const [cartProducts, setCartProducts] = useState([])
  

  
  return (
    <div className="">
      {products.map(product => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className=""
        >
          <div className=""> {/* Added height and relative positioning */}
            <Image
              src={'/' + product.imageUrl}
              alt="Product image"
              // fill // Fill the container
              className="" // Cover the container, maintaining aspect ratio
              width={150}
              height={150}
            />
          </div>
          <h2 className="">{product.name}</h2>
          <p className="">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}