import { ProductCard } from "../ProductCard/ProductCard";
import { productData } from "../../utils/ProductData";

import './CartPage.css';

export function CartPage() {
  return (
    <div className="cart-wrapper">
      {
        productData.map((pet, i) => {
          return <ProductCard key={i} src={pet.src} title={pet.title}/>
        })
      }
    </div>
  );
}

