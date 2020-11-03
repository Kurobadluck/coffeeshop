import React, {Component} from 'react';
import AboutSlider from './AboutSlider';
import CustomerSay from './CustomerSay';
import Introduce from './Introduce';
class About extends Component {
    render() {
	    return (
            <div>
                <AboutSlider/>
                <Introduce />
                <CustomerSay />
            </div>
	     );
    }
}
export default About;