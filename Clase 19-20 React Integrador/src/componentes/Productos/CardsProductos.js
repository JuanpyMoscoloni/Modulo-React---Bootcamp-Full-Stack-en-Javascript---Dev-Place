import Card from "react-bootstrap/Card";
import "./CardsProductos.css";
import CardGroup from "react-bootstrap/CardGroup";
import { MDBIcon } from "mdb-react-ui-kit";
import { Row, Col } from "react-bootstrap";

const CardsProductos = ({ productItems , handleAddProduct }) => {
  return (
    <CardGroup className="card-group">
      <Row>
        {productItems.map((productItem) => {
          {
            return (
              <>
                <Col lg={4} sm={6} xl={2}>
                  <Card
                    key={productItem.id}
                    style={{ width: "18rem" }}
                    className="cartas-general"
                  >
                    <Card.Img variant="top" src={productItem.img} />
                    <Card.Body>
                      <Card.Title> {productItem.title} </Card.Title>
                      <Card.Text>{productItem.text}</Card.Text>
                      <button
                        className="ripple ripple-surface ripple-surface-light btn btn-dark button-cart"
                        onClick={() => handleAddProduct(productItems)}
                      >
                        <MDBIcon fas icon="cart-plus" />
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          }
        })}
      </Row>
    </CardGroup>
  );
};

export default CardsProductos;
