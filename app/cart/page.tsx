'use client';
import { useState } from 'react'
import { products } from "../product-data";
import Image from 'next/image'
import Link from 'next/link'
export default function CartPage() {
    const [cartIds] = useState(['123', '345'])
    const cartProducts = cartIds.map(id => products.find((product) => product.id === id))
    return (
        <div className="">
            <h2>Cart  Page</h2>
            {cartProducts.length > 0 && cartProducts.map((product) => (
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
