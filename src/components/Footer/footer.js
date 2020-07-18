import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="d-flex flex-row justify-content-around">

        <div className="p-2">
          <a href="https://www.facebook.com/Middle-Lake-Industries-104515494669235/" target="_blank"><i className="fa fa-facebook-square"></i> MLI</a>
        </div>
        <div className="p-2">
          <a href="https://instagram.com/middle_lake_industries?igshid=hlydb1g4s71n" target="_blank"><i className="fa fa-instagram"></i> MLI</a>
        </div>
        <div className="p-2">
          <a href="https://www.facebook.com/Middle-Lake-Industries-104515494669235/" target="_blank"><i className="fa fa-facebook-square"></i> MLI</a>
        </div>
      </div>
      <div className="copy d-flex align-items-center justify-content-center">
        <h6>Middle lake industries &copy;</h6>
      </div>
    </footer>
  );
}

export default Footer;
