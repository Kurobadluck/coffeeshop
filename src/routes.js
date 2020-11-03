import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import Contact from './components/Contact';
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/menu",
    main: () => <Menu />
  },
  {
    path: "/blog",
    main: () => <Blog />
  },
  {
    path: "/about",
    main: () => <About />
  },
  {
    path: "/register",
    main: () => <Register />
  },
  {
    path: "/login",
    main: () => <Login />
  },
  {
    path: "/contact",
    main: () => <Contact />
  }
];

export default routes;