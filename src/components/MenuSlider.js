import React, {Component} from 'react';
class MenuSlider extends Component {
    render() {
	    return (
        <section className="home-slider owl-carousel">
          <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}} data-stellar-background-ratio="0.5">
            <div className="overlay" />
            <div className="container">
              <div className="row slider-text justify-content-center align-items-center">
                <div className="col-md-7 col-sm-12 text-center ftco-animate">
                  <h1 className="mb-3 mt-5 bread">Our Menu</h1>
                  <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Menu</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
	     );
    }
}
export default MenuSlider;