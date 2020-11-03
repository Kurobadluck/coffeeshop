import React, {Component} from 'react';

class Slider extends Component {
    render() {
	    return (
            <section className="home-slider owl-carousel">
            <div className="slider-item" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                    <div className="col-md-8 col-sm-12 text-center ftco-animate">
                    <span className="subheading">Welcome</span>
                    <h1 className="mb-4">The Best Coffee Testing Experience</h1>
                    <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <p><a href="/" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="/" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="slider-item" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                    <div className="col-md-8 col-sm-12 text-center ftco-animate">
                    <span className="subheading">Welcome</span>
                    <h1 className="mb-4">Amazing Taste &amp; Beautiful Place</h1>
                    <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <p><a href="/" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="/" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
                    </div>
                </div>
                </div>
            </div>
            <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
                <div className="overlay" />
                <div className="container">
                <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                    <div className="col-md-8 col-sm-12 text-center ftco-animate">
                    <span className="subheading">Welcome</span>
                    <h1 className="mb-4">Creamy Hot and Ready to Serve</h1>
                    <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <p><a href="/" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="/" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
                    </div>
                </div>
                </div>
            </div>
            </section>     
	     );
    }
}
export default Slider;