import React, { Children, Component } from 'react';
import Footer from './Footer';
import MessageContainer from '../containers/MessageContainer';
class Cart extends Component {
    render() {
        var { children } = this.props;
        return (
            <div>
                <section className="ftco-section ftco-cart">
                    <MessageContainer />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ftco-animate">
                                <div className="cart-list">
                                    <table className="table">
                                        <thead className="thead-primary">
                                            <tr className="text-center">
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        {children}
                                    </table>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}
export default Cart;