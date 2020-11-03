import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import routes from './routes.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (

      <Router>
        <Navbar />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.main()}
            />
          ))}
        </Switch>
        <Footer />
      </Router>

    );
  }
}
export default App;