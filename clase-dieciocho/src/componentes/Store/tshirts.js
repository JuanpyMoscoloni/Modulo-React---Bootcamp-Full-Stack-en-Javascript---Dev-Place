import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Tshirts() {
  let cartas = [
    {
      id: 1,
      img: 'https://n.nordstrommedia.com/id/sr3/80379c73-bee5-437b-a59b-6f6118a2ba08.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
      title: "Essentials Oversize Long Sleeve Logo Graphic Tee",
      text: "USD$300",
    },
    {
      id: 2,
      img: 'https://n.nordstrommedia.com/id/sr3/c526c0cc-e644-4c9a-8784-53e88075938d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
      title: "Long Sleeve Logo Graphic Tee",
      text: "USD$200",
    },
    {
      id: 3,
      img: 'https://n.nordstrommedia.com/id/sr3/a55f31b9-b029-4471-8e74-cc3b2b71a282.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',
      title: "Cotton Blend Crewneck Sweatshirt",
      text: "USD$250",
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

export default Tshirts;
