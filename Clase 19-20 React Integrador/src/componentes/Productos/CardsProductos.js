import Card from "react-bootstrap/Card";
import "./CardsProductos.css";
import CardGroup from "react-bootstrap/CardGroup";
import { MDBIcon } from "mdb-react-ui-kit";
import { Row, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";
import cartas from "../data/data";

export default function CardsProductos() {
  return (
    <CardGroup className="card-group">
      <Row>
        {cartas.map((productItem) => {
          {
            return (
              <CreateCard
                key={productItem.id}
                img={productItem.img}
                title={productItem.title}
                price={productItem.price}
                item={productItem}
              />
            );
          }
        })}
      </Row>
    </CardGroup>
  );
}

export  function CreateCard(props) {
  const { addItem } = useCart();
  return (
    <>
      <Col lg={4} sm={6} xl={2}>
        <Card
          key={props.key}
          style={{ width: "18rem" }}
          className="cartas-general"
        >
          <div className="contenedor-imagenes">
          <Card.Img variant="top" src={props.img} />
          </div>
          <Card.Body>
            <Card.Title> {props.title} </Card.Title>
            <Card.Text><b>USD$</b> {props.price}</Card.Text>
            <button
              onClick={() => {
                addItem(props.item);
              }}
              className="ripple ripple-surface ripple-surface-light btn btn-dark button-cart"
            >
              <MDBIcon fas icon="cart-plus" />
            </button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
