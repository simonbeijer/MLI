import React from 'react';
import './about.scss';

function About() {
  return (
      <main className="App-about">
        <h2>About</h2>
        <div className="row h-50">
        <div className="col-lg-6 bg-info h-25%">Hej</div>
        <div className="col-lg-6 bg-dark text-white">Hej</div>
        </div>
        <div className="row h-50">
        <div className="col-lg-6 bg-info h-25%">Hej</div>
        <div className="col-lg-6 bg-dark text-white">Hej</div>
        </div>
      </main>
  );
}

export default About;
