import React from 'react';
import './home.scss';
import ControlledCarousel from '../Carousel/carousel'



function Home() {

  return (
    <main className="App-home container-fluid">
      <ControlledCarousel />
      <div className="row">

        <div className="col-4 d-flex justify-content-center text-center ">
          <h2>Middle Lake Industries</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae optio eveniet facilis error reiciendis quas molestias culpa aliquid quo tenetur, dolore, quis itaque eius ratione ea iusto omnis fugiat recusandae.         </p>
        </div>
      </div>
    </main>
  );
}

export default Home;



