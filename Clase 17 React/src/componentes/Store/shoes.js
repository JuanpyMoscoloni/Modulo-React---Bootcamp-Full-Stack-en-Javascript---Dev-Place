import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Shoes() {
  let cartas = [
    {
      id: 1,
      img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/799/097/products/1-211-fa2aeba4204b3adb7b16403101139033-320-0.jpg',
      title: "Air Jordan 1 Mid Aqua",
      text: "43.000",
    },
    {
      id: 2,
      img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/799/097/products/air-jordan-1-mid-se-sesame-w-productsesame1111-f4208cc9dd7214c4ed16373446618049-320-0.png',
      title: "AIR JORDAN 1 'SESAME'",
      text: "$39.999",
    },
    {
      id: 3,
      img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/799/097/products/img011-6b5eb9680eaf7bca7316297596774289-320-0.png',
      title: "Jordan 1 Mid Barely Rose (W)",
      text: "$49.999",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="d-flex gap-4 justify-content-center">
        {cartas.map((element) => (
          <Card key={element.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={element.img} />
            <Card.Body>
              <Card.Title> {element.title} </Card.Title>
              <Card.Text>{element.text}</Card.Text>
              <div className="container-button-card">
              <Button variant="primary">Comprar</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Container className="d-flex justify-content-center mt-3">
      <Button variant="primary" onClick={handleShow}>
        Resumen
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex" closeButton>
          <Modal.Title >Nuestras Gorras</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cartas.map((element)=>(
          <div key={element.id}>
            <h5 className="text-center">{element.title}</h5>
          </div>
        ))}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Seguir viendo
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  );
}

export default Shoes;
