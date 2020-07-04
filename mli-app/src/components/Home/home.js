import React from 'react';
import './home.scss';

function Home() {
  return (
      <main className="container-fluid">
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

export default Home;
