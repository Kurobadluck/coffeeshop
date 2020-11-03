import React, { Component } from 'react';
import { Link } from "react-router-dom";
class CartResult extends Component {
    render() {
        var { cart } = this.props;
        return (
            <tbody >    
                    <tr className="col col-lg-3 col-md-6 mt-5 cart-wrap ftco-animate">
                        <td colSpan="4"></td>
                        <th className="cart-total mb-3">
                            <h3> Tổng Cộng Giỏ Hàng</h3>
                            <p className="d-flex">
                                <span>Subtotal</span>
                                <span>${this.showTotalAmount(cart)}</span>
                            </p>
                            <p className="d-flex">
                                <span>Delivery</span>
                                <span>$0.00</span>
                            </p>
                            <p className="d-flex">
                                <span>Discount</span>
                                <span>$0.00</span>
                            </p>
                            <hr />
                            <p className="d-flex total-price">
                                <span>Total</span>
                                <span>${this.showTotalAmount(cart)}</span>
                            </p>
                        </th>
                    </tr>
                    <tr className="col col-lg-3 col-md-6 mt-5 cart-wrap ftco-animate">
                        <td colSpan="4"></td>
                        <td className="cart-total mb-3"><Link to='/checkout' className="btn btn-primary py-3 px-4">Đặt hàng</Link>
                        </td>
                    </tr>
            </tbody>
        );
    }

    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }
        }
        return total;
    }

}

export default CartResult;
