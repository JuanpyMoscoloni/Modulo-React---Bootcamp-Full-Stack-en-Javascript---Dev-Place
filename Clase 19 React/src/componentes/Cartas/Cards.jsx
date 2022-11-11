import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Cards() {
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
    {
        id: 4,
        img: "https://grid0.vtexassets.com/arquivos/ids/611880-500-auto?v=1753956821&width=500&height=auto&aspect=true",
        title: "Gorra CapsLab TAZ",
        text: "USD$100",
      },
      {
        id: 5,
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
      <Container className="d-flex gap-4 justify-content-center mx-auto m-4">
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
    </>
  );
}

export default Cards;