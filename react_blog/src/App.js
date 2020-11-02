import React from 'react';
import About from './Views/About';
import Home from './Views/Home';
import Product from './Views/Product';
import Products from './Views/Products';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Products">
              <Products />
            </Route>
            <Route path="/Product/:id">
              <Product />
            </Route>
            <Route path="/about">
              {' '}
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
