
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductsContainer from './components/ProductsContainer';
import ProductDetailContainer from './components/ProductDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import CartContainer from './components/CartContainer';
import WishListContainer from './components/WishListContainer';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <NavBarContainer /> */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/products" component={ProductsContainer}></Route>
        <Route path="/product/:id" component={ProductDetailContainer}></Route>
        <Route path="/cart" component={CartContainer} />
        <Route path="/wishlist" component={WishListContainer}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
