import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carrousel from "./Carrousel.css";

function Carrusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item className="">
        <img
          className="d-block w-70 mx-auto"
          src="./images/appleSerie.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <img
          className="d-block w-70 mx-auto"
          src="./images/appleSerie2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className="">
        <img
          className="d-block w-70 mx-auto"
          src="./images/appleSerie3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
