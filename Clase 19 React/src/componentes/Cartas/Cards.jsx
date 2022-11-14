import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import "./Cards.css";

function Cards() {
  let cartas = [
    {
      id: 1,
      img: "https://i.ebayimg.com/images/g/z1kAAOSwQLZeQreA/s-l500.jpg",
      title: "Apple TV 4th Generation",
      text: "USD$150",
    },
    {
      id: 2,
      img: "https://i.ebayimg.com/images/g/EDMAAOSwRHNiATKO/s-l500.jpg",
      title: "Apple Watch Series 4",
      text: "USD$300",
    },
    {
      id: 3,
      img: "https://i.ebayimg.com/images/g/zk0AAOSwFjRjIINI/s-l500.jpg",
      title: "IPhone 11 Pro 128gb",
      text: "USD$700",
    },
    {
      id: 4,
      img: "https://i.ebayimg.com/images/g/48sAAOSwWApi61Hs/s-l500.jpg",
      title: "IPad Pro 256gb",
      text: "USD$999",
    },
    {
      id: 5,
      img: "https://i.ebayimg.com/images/g/x9cAAOSwuO1jW-ZT/s-l500.jpg",
      title: "MacBook Pro",
      text: "USD$1200",
    },
    {
      id: 5,
      img: "https://i.ebayimg.com/images/g/x9cAAOSwuO1jW-ZT/s-l500.jpg",
      title: "MacBook Pro",
      text: "USD$1200",
    },
    {
      id: 5,
      img: "https://i.ebayimg.com/images/g/x9cAAOSwuO1jW-ZT/s-l500.jpg",
      title: "MacBook Pro",
      text: "USD$1200",
    },
    
  ];

  return (
    <>
      <Container className="d-flex gap-4 justify-content-center mx-auto">
        {cartas.map((element) => (
          <Card key={element.id} style={{ width: "18rem" }} className="cartas-general">
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
