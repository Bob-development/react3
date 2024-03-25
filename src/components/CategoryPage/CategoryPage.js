import { ProductCard } from "../ProductCard/ProductCard";
import { productData } from "../../utils/ProductData";

import './CategoryPage.css';

export function CategoryPage() {
  let categories = productData.map((product) => product.category);

  categories = Array.from(new Set(categories));

  return (
    <div className="category-wrapper">
      {
        categories.map((category, i) => {
          return <div key={i} className="category">
            <div className="groupTitle">{category}</div>

            {
              productData.map((product, i) => {
                return product.category === category ? <ProductCard product={product} key={i} /> : false
                // return <ProductCard key={i} />
              })
            }
          </div>
        })
      }
    </div>
  );
}

