import React, {Component} from 'react';

class BestSellerProducts extends Component {
    render() {
	    return (    
            <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                <div className="col-md-7 heading-section ftco-animate text-center">
                    <span className="subheading">Discover</span>
                    <h2 className="mb-4">Best Coffee Sellers</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                </div>
                <div className="row">
                    {this.props.children}    
                </div>
            </div>
            </section>
	     );
    }
  
}

export default BestSellerProducts;