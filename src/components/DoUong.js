import React, {Component} from 'react';
import * as message from '../constants/Message';
class DoUong extends Component {
    render() {
        var { douong } = this.props;
	    return (
        <div className="col-md-4 text-center">
            <div className="menu-wrap">
            <img className="menu-img img mb-4 mx-auto" src={douong.image} alt="product-img" />
            <div className="text">
                <h3>
                    <p className="price"><span>{douong.name}</span></p>
                </h3>
                <p>{douong.description}</p>
                <p className="price"><span>{douong.price}</span></p>
                <p>
                    <button type="button" className="btn btn-primary btn-outline-primary"
                            onClick={() => this.onAddToCart(douong)}>
                        Add to cart        </button>
                </p>
            </div>
            </div>
        </div>     
	     );
    }
    
    onAddToCart = (douong) =>{
        this.props.onAddToCart(douong);
        this.props.onChangeMessage(message.MSG_ADD_TO_CART_SUCCESS);
    }
}
export default DoUong;