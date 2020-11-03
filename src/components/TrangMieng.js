import React, {Component} from 'react';
import * as message from '../constants/Message';
class TrangMieng extends Component {
    render() {
        var { trangmieng } = this.props;
	    return (
        <div className="col-md-4 text-center">
            <div className="menu-wrap">
            <img className="menu-img img mb-4 mx-auto" src={trangmieng.image} alt="product-img" />
            <div className="text">
                <h3>
                    <p className="price"><span>{trangmieng.name}</span></p>
                </h3>
                <p>{trangmieng.description}</p>
                <p className="price"><span>{trangmieng.price}</span></p>
                <p>
                    <button type="button" className="btn btn-primary btn-outline-primary"
                            onClick={() => this.onAddToCart(trangmieng)}>
                        Add to cart        </button>
                </p>
            </div>
            </div>
        </div>     
	     );
    }
    
    onAddToCart = (trangmieng) =>{
        this.props.onAddToCart(trangmieng);
        this.props.onChangeMessage(message.MSG_ADD_TO_CART_SUCCESS);
    }
}
export default TrangMieng;