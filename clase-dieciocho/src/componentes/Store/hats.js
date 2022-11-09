import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Gorras() {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Container className="d-flex gap-4 justify-content-center">
        {cartas.map((element) => (
          <Card key={element.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={element.img} />
            <Card.Body>
              <Card.Title> {element.title} </Card.Title>
              <Card.Text>{element.text}</Card.Text>
              
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
            <Modal.Title>Nuestras Gorras</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cartas.map((element) => (
              <div key={element.id}>
                <h5 className="text-center">{element.title}</h5>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Seguir viendo
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Container className="d-flex justify-content-center mt-4">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="email" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
              <Form.Label>Fecha de Compra</Form.Label>
          <Form.Control
            type="date"
            name="datepic"
            placeholder="DateRange"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          </Form.Group>
          
          <Container
            className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="mt-3">
              Comprar
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
}

export default Gorras;
