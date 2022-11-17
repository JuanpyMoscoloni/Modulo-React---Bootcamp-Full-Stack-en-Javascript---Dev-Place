import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cartas from "../data/data"
import { MDBIcon } from 'mdb-react-ui-kit';
import { Titulo } from "../Titulos/Titulo";
import BotonFiltro from "../Productos/BotonFiltro";
export function IWatch() {
  return (
    <>
      <Titulo />
        <BotonFiltro/>
        <CardGroup className="card-group">
          <Row className="justify-content-lg-around">
            {cartas.map((element) => {
              if(element.categoria === "iwatch")
              {
                return(
                  <>
                  
                  <Col lg={4} sm={6} xl={2} >
            <Card
              key={element.id}
              style={{ width: "18rem" }}
              className="cartas-general"
            >
              <Card.Img variant="top" src={element.img} />
              <Card.Body>
                <Card.Title> {element.title} </Card.Title>
                <Card.Text>{element.text}</Card.Text>
                <button className="ripple ripple-surface ripple-surface-light btn btn-dark button-cart">
                <MDBIcon fas icon="cart-plus" />
                </button>
              </Card.Body>
            </Card>
            </Col>  
                </>               
                )

              }
})}
          </Row>
        </CardGroup>
      
    </>
  );
}