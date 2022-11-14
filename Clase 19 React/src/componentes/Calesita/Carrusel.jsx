import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carrousel.css";

function Carrusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="light" className="carousel-pro">
      <Carousel.Item className="">
        <img
          className="d-block w-100 "
          src="./images/applePortada1.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <img
          className="d-block w-100 "
          src="./images/applePortada2.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <img
          className="d-block w-100 "
          src="./images/applePortada3.jpg"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
