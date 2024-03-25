import { ProductCard } from "../ProductCard/ProductCard";
import { productData } from "../../utils/ProductData";

import './ProductsPage.css';

export function ProductsPage() {
  return (
    <div className="products-wrapper">
      {
        productData.map((product, i) => {
          return <ProductCard key={i} price={product.price} title={product.title}/>
        })
      }
    </div>
  );
}

