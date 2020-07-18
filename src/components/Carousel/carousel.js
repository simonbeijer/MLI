import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.scss'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className=" carouselDiv container col-lg-8 col-lg-offset-8  ">

        {/* <div className="container-fluid"> */}

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="activ d-block img-fluid w-100"
                    src="https://images.unsplash.com/photo-1521580397241-726a6e0e21cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80"
                    alt="First slide"
                    />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid w-100"
                    src="https://images.unsplash.com/photo-1498654200943-1088dd4438ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="Second slide"
                    />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid w-100"
                    src="https://images.unsplash.com/photo-1531012278403-e5db3b774373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="Third slide"
                    />
            </Carousel.Item>
        </Carousel>
                    {/* </div> */}
                    </div>
    );
}


export default ControlledCarousel;
