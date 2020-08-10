import React from "react";

export const ProductContext = React.createContext();

export default class ProductProvider extends React.Component {
  constructor(props) {
    super(props);

    this.products = [{
      src: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
      alt: "test",
      name: "11111",
      available: "AVAILABLE"
    }, {
      src: "https://source.unsplash.com/aob0ukAYfuI/400x300",
      alt: "test",
      name: "11112",
      available: "SOLD"
    },
    {
      src: "https://source.unsplash.com/EUfxH-pze7s/400x300",
      alt: "test",
      name: "11113",
      available: "SOLD"
    }, {
      src: "https://source.unsplash.com/M185_qYH8vg/400x300",
      alt: "test",
      name: "11114",
      available: "SOLD"
    },
    {
      src: "https://source.unsplash.com/sesveuG_rNo/400x300",
      alt: "test",
      name: "11115",
      available: "AVAILABLE"
    }, {
      src: "https://source.unsplash.com/AvhMzHwiE_0/400x300",
      alt: "test",
      name: "11116",
      available: "SOLD"
    },
    {
      src: "https://source.unsplash.com/2gYsZUmockw/400x300",
      alt: "test",
      name: "11117",
      available: "AVAILABLE"
    }, {
      src: "https://source.unsplash.com/EMSDtjVHdQ8/400x300",
      alt: "test",
      name: "11118",
      available: "AVAILABLE"
    }, {
      src: "https://source.unsplash.com/8mUEy0ABdNE/400x300",
      alt: "test",
      name: "11119",
      available: "AVAILABLE"
    }, {
      src: "https://source.unsplash.com/G9Rfc1qccH4/400x300",
      alt: "test",
      name: "11110",
      available: "SOLD"
    }, {
      src: "https://source.unsplash.com/aJeH0KcFkuc/400x300",
      alt: "test",
      name: "11121",
      available: "AVAILABLE"
    }, {
      src: "https://source.unsplash.com/p2TQ-3Bh3Oo/400x300",
      alt: "test",
      name: "11122",
      available: "SOLD"
    }]

  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          products: this.products,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
export const ProductConsumer = ProductContext.Consumer;
