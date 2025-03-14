import {products} from '../../product-data'
import Image from 'next/image'

export default function ProductsDetailsPage({params}:{params:{id:string}}) {
  const product=products.find(product=>product.id===params.id)
    return (
      <div className="">
  <h2>Products Details Page</h2>
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

  <p>{product?.name}</p>
  <h3>Description</h3>
  <p>{product?.description}</p>
      </div>
    );
  }