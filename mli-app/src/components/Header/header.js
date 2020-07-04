import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";

function Home() {
  return (
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <h1>MLI</h1>
      </header>
  );
}

export default Home;
