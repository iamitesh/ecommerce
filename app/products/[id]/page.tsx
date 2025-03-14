import NotFoundPage from '@/app/not-found';
import { products } from '../../product-data';
import Image from 'next/image';

export default function ProductsDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((product) => product.id === params.id);
  if (!product) {
    return <NotFoundPage />;
  }
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Product Details</h2>
      <div className="relative w-full h-96 mb-6">
        <Image
          src={'/' + product.imageUrl}
          alt="Product image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-xl font-semibold text-gray-700 text-center">{product?.name}</p>
      <h3 className="text-lg font-medium text-gray-600 mt-4">Description</h3>
      <p className="text-gray-600 mt-2 leading-relaxed">{product?.description}</p>
    </div>
  );
}
