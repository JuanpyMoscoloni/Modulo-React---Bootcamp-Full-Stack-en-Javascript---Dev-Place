import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import Container from "react-bootstrap/Container";
import Carruse from "../componentes/styles/Carruse.css";

export const Vuelta = () => {
  let cartas = [
    {
      id: 1,
      img: "https://n.nordstrommedia.com/id/sr3/80379c73-bee5-437b-a59b-6f6118a2ba08.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      title: "Essentials Oversize Long Sleeve Logo Graphic Tee",
      text: "USD$300",
    },
    {
      id: 2,
      img: "https://n.nordstrommedia.com/id/sr3/c526c0cc-e644-4c9a-8784-53e88075938d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      title: "Long Sleeve Logo Graphic Tee",
      text: "USD$200",
    },
    {
      id: 3,
      img: "https://n.nordstrommedia.com/id/sr3/a55f31b9-b029-4471-8e74-cc3b2b71a282.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
      title: "Cotton Blend Crewneck Sweatshirt",
      text: "USD$250",
    },
  ];
  return (
    <Container className="d-flex gap-4 justify-content-center flex-column">
      {cartas.map((element) => (
        <Card key={element.id} style={{ width: "18rem" }}>
            <Container className="d-flex align-items-center row-reverse">
          <Card.Img variant="top" src={element.img} />
          <Card.Body>
            <Card.Title> {element.title} </Card.Title>
            <Card.Text>{element.text}</Card.Text>
            <div className="container-button-card">
              <Button variant="primary">Comprar</Button>
            </div>
          </Card.Body>
          </Container>
        </Card>
      ))}
    </Container>
  );
};

export const Vuelta2 = () => {
  let cartas = [
    {
      id: 1,
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/799/097/products/1-211-fa2aeba4204b3adb7b16403101139033-320-0.jpg",
      title: "Air Jordan 1 Mid Aqua",
      text: "43.000",
    },
    {
      id: 2,
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/799/097/products/air-jordan-1-mid-se-sesame-w-productsesame1111-f4208cc9dd7214c4ed16373446618049-320-0.png",
      title: "AIR JORDAN 1 'SESAME'",
      text: "$39.999",
    },
    {
      id: 3,
      img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/799/097/products/img011-6b5eb9680eaf7bca7316297596774289-320-0.png",
      title: "Jordan 1 Mid Barely Rose (W)",
      text: "$49.999",
    },
  ];

  return (
    <Container className="d-flex gap-4 justify-content-center flex-column">
    {cartas.map((element) => (
      <Card key={element.id} style={{ width: "18rem" }}>
          <Container className="d-flex align-items-center row-reverse">
        <Card.Img variant="top" src={element.img} />
        <Card.Body>
          <Card.Title> {element.title} </Card.Title>
          <Card.Text>{element.text}</Card.Text>
          <div className="container-button-card">
            <Button variant="primary">Comprar</Button>
          </div>
        </Card.Body>
        </Container>
      </Card>
    ))}
  </Container>
  );
};

export const Vuelta3 = () => {
  let cartas = [
    {
      id: 1,
      img: "https://grid0.vtexassets.com/arquivos/ids/611879-500-auto?v=1754199509&width=500&height=auto&aspect=true",
      title: "Gorra CapsLab LOO2",
      text: "USD$120",
    },
    {
      id: 2,
      img: "https://grid0.vtexassets.com/arquivos/ids/612372-500-auto?v=1754193830&width=500&height=auto&aspect=true",
      title: "Gorra CapsLab BAT",
      text: "USD$150",
    },
    {
      id: 3,
      img: "https://grid0.vtexassets.com/arquivos/ids/611880-500-auto?v=1753956821&width=500&height=auto&aspect=true",
      title: "Gorra CapsLab TAZ",
      text: "USD$100",
    },
  ];

  return (
    <Container className="d-flex gap-4 justify-content-center flex-column">
      {cartas.map((element) => (
        <Card key={element.id} style={{ width: "18rem" }}>
            <Container className="d-flex align-items-center row-reverse">
          <Card.Img variant="top" src={element.img} />
          <Card.Body>
            <Card.Title> {element.title} </Card.Title>
            <Card.Text>{element.text}</Card.Text>
            <div className="container-button-card">
              <Button variant="primary">Comprar</Button>
            </div>
          </Card.Body>
          </Container>
        </Card>
      ))}
    </Container>
  );
};

function Carrusel() {
  return (
    <>
    <body>
    <div className="d-flex justify-content-center">
    <h1> Nuestros Productos</h1>
    </div>
    <Container className="d-flex row-reverse flex-start align-items-center">
    <Carousel variant="dark" style={{width: "30rem", height: "auto"}}>
      <Carousel.Item>
        <Vuelta2 />
      </Carousel.Item>
      <Carousel.Item>
        <Vuelta2 />
      </Carousel.Item>
     
    </Carousel>
   
    </Container>
    <div className="d-flex justify-content-center">
        <h1>Preguntas Frecuentes</h1>
    </div>
    
    </body>
   
  
    </>
  );
}

export default Carrusel;
