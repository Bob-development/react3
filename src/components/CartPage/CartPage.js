import { ProductCard } from "../ProductCard/ProductCard";
import { productData } from "../../utils/ProductData";
import { Cart } from "../../utils/Cart";

import './CartPage.css';

export function CartPage() {
  const productsToCart = new Cart().getBoughtRroducts();

  return (
    <div className="cart-wrapper">
      {
        productsToCart.map((product, i) => {
          return <ProductCard key={i} product={product}/>
        })
      }
    </div>
  );
}

