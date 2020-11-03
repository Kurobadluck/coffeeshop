import React, {Component} from 'react';

import Slider from './Slider';
import Introduce from './Introduce';
import Appointment from './Appointment';
import BestSellerProductsContainer from './../containers/BestSellerProductsContainer';
import Gallery from './Gallery';
import CustomerSay from './CustomerSay';
import Intro from './Intro';
class Home extends Component {
    render() {
	    return (
            <div className="myContainer">
                <Slider />
                <Intro />
                <Introduce />
                <BestSellerProductsContainer />
                <Gallery />
                <CustomerSay />
                <Appointment />

            </div>
  
	     );
    }
}
export default Home;