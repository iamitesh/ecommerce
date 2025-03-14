'use client';
import { useState } from 'react';
import { products } from "../product-data";
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
    const [cartIds] = useState(['123', '345']);
    const cartProducts = cartIds.map(id => products.find((product) => product.id === id)).filter(Boolean);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cart Page</h2>
            {cartProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {cartProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="block bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-4"
                        >
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src={'/' + product.imageUrl}
                                    alt="Product image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h2 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h2>
                            <p className="text-gray-600 text-center mt-2">${product.price}</p>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
        </div>
    );
}
