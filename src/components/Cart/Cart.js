import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;

    /* get item total */
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    /* shipping */
    const shipping = (total / 100) * 2;

    /* tax */
    const tax = (total + shipping) / 10;

    /*  */
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart-box">
            <h3>Order Summary</h3>
            <h4>Items Ordered: {totalQuantity}</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Items: </td>
                        <td>{total.toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>Shipping: </td>
                        <td>{shipping.toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td>Tax: </td>
                        <td>{tax.toFixed(2)}</td>
                    </tr>

                    <tr>
                        <td><h2>Order Total:</h2> </td>
                        <td><h2>{grandTotal.toFixed(2)}</h2></td>
                    </tr>
                </tbody>
            </table>
            {props.children}
        </div>
    );
};

export default Cart;