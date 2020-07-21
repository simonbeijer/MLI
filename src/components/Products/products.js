import React from 'react';
import './products.scss';

function Products() {

  const images = [
    {
      src: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
      alt: "test",
      available: "BUY"
    }, {
      src: "https://source.unsplash.com/aob0ukAYfuI/400x300",
      alt: "test",
      available: "SOLD"
    },
    {
      src: "https://source.unsplash.com/EUfxH-pze7s/400x300",
      alt: "test",
      available: "SOLD"
    }, {
      src: "https://source.unsplash.com/M185_qYH8vg/400x300",
      alt: "test",
      available: "SOLD"
    },
    {
      src: "https://source.unsplash.com/sesveuG_rNo/400x300",
      alt: "test",
      available: "BUY"
    }, {
      src: "https://source.unsplash.com/AvhMzHwiE_0/400x300",
      alt: "test",
      available: "SOLD"
    },
    {
      src: "https://source.unsplash.com/2gYsZUmockw/400x300",
      alt: "test",
      available: "BUY"
    }, {
      src: "https://source.unsplash.com/EMSDtjVHdQ8/400x300",
      alt: "test",
      available: "BUY"
    }, {
      src: "https://source.unsplash.com/8mUEy0ABdNE/400x300",
      alt: "test",
      available: "BUY"
    }, {
      src: "https://source.unsplash.com/G9Rfc1qccH4/400x300",
      alt: "test",
      available: "SOLD"
    }, {
      src: "https://source.unsplash.com/aJeH0KcFkuc/400x300",
      alt: "test",
      available: "BUY"
    }, {
      src: "https://source.unsplash.com/p2TQ-3Bh3Oo/400x300",
      alt: "test",
      available: "SOLD"
    }
  ]

  return (
    <main className="App-products container-fluid">

      <h2 className="font-weight-light text-center text-lg-left mt-4 mb-0">Products</h2>

      <hr className="mt-2 mb-5" />

      <div className="row text-center text-lg-left">

        {images.map((images) =>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div href="" className="d-block mb-4 h-100">
              <img className="img-fluid img-thumbnail" src={images.src} alt={images.alt} />
              <div className="product-info">
                <p>Namn</p>
                <p className={images.available === "BUY" ? "greenProduct" : "redProduct" }>{images.available}</p>
              </div>
            </div>
          </div>
        )}


      </div>
    </main >
  );
}

export default Products;
