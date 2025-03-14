import ProductsList from "../ProductsList";
import {products} from '../product-data'

export default function ProductsPage() {
    return (
        <div className="">
            <h2>Products Page</h2>
            <ProductsList products={products}/>
        </div>
    );
}