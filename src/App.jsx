import React from 'react';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import About from './components/About/about'
import Products from './components/Products/products'
import Contact from './components/Contact/contact'
import {BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter basename="/MLI">
      <Switch>
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
// <div className="App">
//   <Header />
      {/* <Footer />
    </div> */}

{/* <Header /> */}