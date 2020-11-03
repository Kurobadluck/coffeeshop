import React, {Component} from 'react';
class BestSellerProduct extends Component {
    render() {
        var { bestseller } = this.props;
	    return (
            <div className="col-md-3">
                <div className="menu-entry">
                <a href="/" className="img" style={{backgroundImage: 'url(images/menu-1.jpg)'}} />
                <div className="text text-center pt-4">
                    <h3><a href="/">{bestseller.name}</a></h3>
                    <p>{bestseller.description}</p>
                    <p className="price"><span>${bestseller.price}</span></p>
                    <p><a href="/" className="btn btn-primary btn-outline-primary">Add to Cart</a></p>
                </div>
                </div>
            </div>
         );
    }
}
export default BestSellerProduct;