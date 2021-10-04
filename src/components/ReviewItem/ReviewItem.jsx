import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="single-product">
            <div className="product-details">
                <h2>{name}</h2>
                <h3>Price: {price}</h3>
                <h4>Qty: {quantity}</h4>
                <button onClick={() => { handleRemove(key) }} className="btn-regular"> Remove </button>
            </div>
        </div>
    );
};

export default ReviewItem;