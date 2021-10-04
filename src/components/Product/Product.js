import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className="single-product">
            <div className="product-img">
                <img src={img} alt="Thumbnail not found!" />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <p>
                    <Rating
                        readonly
                        initialRating={star}
                        emptySymbol="fa fa-star-o fa-2x ratting-color"
                        fullSymbol="fa fa-star fa-2x ratting-color"
                    >
                    </Rating>
                </p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular"><FontAwesomeIcon icon={faCartPlus} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;