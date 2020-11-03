import React, {Component} from 'react';
import { connect } from 'react-redux';
import BestSellerProducts from './../components/BestSellerProducts';
import BestSellerProduct from './../components/BestSellerProduct';

class BestSellerProductsContainer extends Component {
    render() {
        var {bestsellers} = this.props;
	    return (
            <BestSellerProducts>
                {this.showBestSellers(bestsellers)}
            </BestSellerProducts>
	     );
    }
    showBestSellers(bestsellers){
        var result = null;
            if(bestsellers.length > 0){
                    result = bestsellers.map((bestseller, index) =>{
                            return <BestSellerProduct key = {index} bestseller={bestseller}/>
                });
            }     
        return result;
    }
   
}
const mapStatetoProps = state => {
    return {
        bestsellers : state.bestsellers //gọi bestsellers từ reducers
    }
}
export default connect(mapStatetoProps, null)(BestSellerProductsContainer);