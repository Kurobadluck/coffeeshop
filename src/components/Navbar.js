import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Coffee<small>Blend</small></Link>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><Link to='/' className="nav-link myLink">Home</Link></li>
                            <li className="nav-item"><Link to='/menu' className="nav-link myLink">Menu</Link></li>
                            <li className="nav-item"><Link to='/blog' className="nav-link myLink">Blog</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link myLink">About</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle myLink" to='/login' id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdown04">
                                    <Link className="dropdown-item myLink" to='/login'>Log In</Link>
                                    <Link className="dropdown-item myLink" to='/register'>Sign Up</Link>
                                </ul>
                            </li>
                            <li className="nav-item"><Link to='/contact' className="nav-link">Contact</Link></li>
                            <li className="nav-item cart">
                                <Link to='/cart' className="nav-link myLink">
                                    <span className="icon icon-shopping_cart" /><span className="bag d-flex justify-content-center align-items-center"><small>1</small></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar;