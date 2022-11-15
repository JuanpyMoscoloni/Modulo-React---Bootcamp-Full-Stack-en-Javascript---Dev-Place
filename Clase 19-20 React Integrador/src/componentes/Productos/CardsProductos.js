import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import cartas from "../data/data";
import './CardsProductos.css';
import { MDBIcon } from 'mdb-react-ui-kit';

function CardsProductos() {
    
  return (
    <Container className="justify-content-center mx-auto container-cards-all">
        
      {cartas.map((element) => {
        {
          return (
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
          );
        }
      })}
    </Container>
  );
}

export default CardsProductos;
