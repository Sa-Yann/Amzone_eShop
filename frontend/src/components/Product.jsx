import React from 'react';
import Rating from './Rating';

function Product(propsProduct) {

    const { product } = propsProduct
    
    return (
        <div key={product._id} className="card">
                {/* linking the targeted product to its specific description page */}
                    <a href={`/product./${product._id}`}>
                        <img className="medium" src={product.images} alt={product.name}/>
                    </a>
                <div className="card__Body rating">
                    <a href={`/product./${product._id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <Rating 
                        rating={product.rating} 
                        numReviews={product.numReviews} 
                    />
                    <div className="price">€{product.price}</div>
                </div>
            </div>
    )
}

export default Product
