import React from 'react';
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import About from './components/About/about'
import Products from './components/Products/products'
import Contact from './components/Contact/contact'
import { HashRouter, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter basename="/">
    <div className="App ">
      <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
      <Footer />
    </div>
    </ HashRouter>
  );
}

export default App;
