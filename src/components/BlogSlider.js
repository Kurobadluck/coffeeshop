import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class BlogSlider extends Component {
    render() {
	    return (
        <section className="home-slider owl-carousel">
          <div className="slider-item" style={{backgroundImage:'url(images/bg_3.jpg)'}} data-stellar-background-ratio="0.5">
            <div className="overlay" />
            <div className="container">
              <div className="row slider-text justify-content-center align-items-center">
                <div className="col-md-7 col-sm-12 text-center ftco-animate">
                  <h1 className="mb-3 mt-5 bread">Blog</h1>
                  <p className="breadcrumbs"><span className="mr-2"><Link to='/'>Home</Link></span> <span>Blog</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

	     );
    }
}
export default BlogSlider;