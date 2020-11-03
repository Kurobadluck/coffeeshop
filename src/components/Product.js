import React, { Component } from 'react';

import * as message from '../constants/Message';
class Product extends Component {
    render() {
        var { product } = this.props;
        return (
            <div className="col-md-4 text-center">
                <div className="menu-wrap">
                    <img className="menu-img img mb-4 mx-auto" src={product.image} alt="product-img" />
                    <div className="text">
                        <h3>
                            <p className="price"><span>{product.name}</span></p>
                        </h3>
                        <p><span>{product.description}</span></p>
                        <p className="price"><span>{product.price}</span></p>
                        <p>
                            <button type="button" className="btn btn-primary btn-outline-primary"
                                onClick={() => this.onAddToCart(product)}>
                                Add to cart        </button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(message.MSG_ADD_TO_CART_SUCCESS);
    }
}
export default Product;