import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
class Introduce extends Component {
    render() {
	    return (
    <div >   
        <section className="ftco-about d-md-flex">
            <div className="one-half img" style={{backgroundImage: 'url(images/about.jpg)'}} />
            <div className="one-half ftco-animate">
            <div className="overlap">
            <div className="heading-section ftco-animate">
                <span className="subheading">Discover</span>
                <h2 className="mb-4">Our Story</h2>
            </div>
            <div>
                <p>
                On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little
                Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and
                Parole and dragged her into their agency, where they abused her for their.
                </p>
            </div>
            </div>
        </div>
        </section>
        <section className="ftco-section ftco-services">
        <div className="container">
            <div className="row">
            <div className="col-md-4 ftco-animate">
                <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                    <span className="flaticon-choices" />
                </div>
                <div className="media-body">
                    <h3 className="heading">Easy to Order</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 ftco-animate">
                <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                    <span className="flaticon-delivery-truck" />
                </div>
                <div className="media-body">
                    <h3 className="heading">Fastest Delivery</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 ftco-animate">
                <div className="media d-block text-center block-6 services">
                <div className="icon d-flex justify-content-center align-items-center mb-5">
                    <span className="flaticon-coffee-bean" />
                </div>
                <div className="media-body">
                    <h3 className="heading">Quality Coffee</h3>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="ftco-section">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-md-6 pr-md-5">
                <div className="heading-section text-md-right ftco-animate">
                <span className="subheading">Discover</span>
                <h2 className="mb-4">Our Menu</h2>
                <p className="mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                </p>
                <p><Link to='/menu'  className="btn btn-primary btn-outline-primary px-4 py-3">View Full Menu</Link></p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                <div className="col-md-6">
                    <div className="menu-entry">
                        <span  className="img" style={{backgroundImage: 'url(images/menu-1.jpg)'}} ></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="menu-entry mt-lg-4">
                        <span className="img" style={{backgroundImage: 'url(images/menu-2.jpg)'}} ></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="menu-entry">
                        <span  className="img" style={{backgroundImage: 'url(images/menu-3.jpg)'}} ></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="menu-entry mt-lg-4">
                        <span className="img" style={{backgroundImage: 'url(images/menu-4.jpg)'}} ></span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="ftco-counter ftco-bg-dark img" id="section-counter" style={{backgroundImage: 'url(images/bg_2.jpg)'}} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                    <div className="text">
                        <div className="icon"><span className="flaticon-coffee-cup" /></div>
                        <strong className="number" data-number={100}>0</strong>
                        <span>Coffee Branches</span>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                    <div className="text">
                        <div className="icon"><span className="flaticon-coffee-cup" /></div>
                        <strong className="number" data-number={85}>0</strong>
                        <span>Number of Awards</span>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                    <div className="text">
                        <div className="icon"><span className="flaticon-coffee-cup" /></div>
                        <strong className="number" data-number={10567}>0</strong>
                        <span>Happy Customer</span>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                    <div className="text">
                        <div className="icon"><span className="flaticon-coffee-cup" /></div>
                        <strong className="number" data-number={900}>0</strong>
                        <span>Staff</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
	     );
    }
}
export default Introduce;