import { Cart } from "../../utils/Cart";

import './ProductCard.css';

export function ProductCard({ product }) {
  return (
    <div className="ProductCard">
      <div className='img-wrapper'></div>

      <div className='title'>{product.title}</div>

      <div className='price-wrapper'>
        <div className='price'>Price: {product.price}</div>

        <button onClick={() => new Cart().addBoughtRroducts(product)} className='buyBtn'>Buy</button>
      </div>
    </div>
  );
}

