import React from 'react';
import './footer.scss';

function Footer() {
  return (
      <footer className="App-footer fixed-bottom d-flex flex-row justify-content-around">
                {/* <div className="row h-50"> */}
        <div className="col-lg-6 bg-info h-25%">Hej</div>
        <div className="col-lg-6 bg-dark text-white">Hej</div>
        <div className="p-2">MLI</div>
        <div className="p-2">MLI</div>
        <div className="p-2">MLI</div>
      </footer>
  );
}

export default Footer;
