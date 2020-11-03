import React, { Component } from 'react';
import * as Message from './../constants/Message';
class CartItem extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }

    render() {
        var { item } = this.props;
        var { quantity } = item.quantity > 0 ? item : this.state;
        return (     
            <tbody>
                    <tr className="text-center" >
                        <td className="product-remove"><button type="button" className="btn btn-outline-secondary" data-toggle="tooltip" data-placement="top"  title=""   data-original-title="Remove item"
                         onClick={() => this.onDelete(item.product)}>
                                X
                        </button>
                        </td>
                        <td className="image-prod"><div className="img" style={{ backgroundImage: 'url(images/dish-2.jpg)' }} /></td>
                        <td className="product-name">
                            <h3>{item.product.name}</h3>
                            <p>{item.product.description}</p>
                        </td>
                        <td className="price">${item.product.price}</td>
                        <td className="center-on-small-only">
                            <span className="quantity">{quantity}</span>
                            <div className="btn-group radio-group" data-toggle="buttons">
                                <label
                                    onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                                    className="btn btn-outline-secondary py-3" style={{lineHeight:1}}
                                >—</label>
                                <label
                                    onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                                    className="btn btn-outline-secondary py-3" style={{lineHeight:1}}
                                >+</label>
                            </div>
                        </td>
                        <td className="total">{this.showSubTotal(item.product.price, item.quantity)}</td>
                    </tr> 
            </tbody>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart, onChangeMessage } = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }

    onDelete = (product) => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
    
}
export default CartItem;