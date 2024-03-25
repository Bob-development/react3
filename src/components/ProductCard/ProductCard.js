import './ProductCard.css';

export function ProductCard({title , price}) {
  return (
    <div className="ProductCard">
      <div className='img-wrapper'></div>

      <div className='title'>{title}</div>

      <div className='price-wrapper'>
        <div className='price'>Price: {price}</div>

        <button className='buyBtn'>Buy</button>
      </div>
    </div>
  );
}

