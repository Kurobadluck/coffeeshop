import React, {Component} from 'react';
import MenuSlider from './MenuSlider';
import ProductsContainer from './../containers/ProductsContainer';
import Intro from './Intro';
import DoUongsContainer from './../containers/DoUongsContainer';
import TrangMiengsContainer from './../containers/TrangMiengsContainer';
class Menu extends Component {
    render() {
	    return (
            
            <div>
                <MenuSlider/>
                <Intro />
                <TrangMiengsContainer />
                <DoUongsContainer />
                <ProductsContainer />
            </div>
            
	     );
    }
}
export default Menu;