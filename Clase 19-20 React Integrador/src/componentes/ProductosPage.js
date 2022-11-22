import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/react-fontawesome";
import "bootstrap-css-only/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import BotonFiltro from "./Productos/BotonFiltro";
import CardsProductos from "./Productos/CardsProductos";
import { Titulo } from "./Titulos/Titulo";
import Form from "react-bootstrap/Form";
import { CreateCard } from "./Productos/CardsProductos";
import { Row, Col } from "react-bootstrap";
import {useState} from "react";
import CardGroup from "react-bootstrap/CardGroup";
import cartas from "../componentes/data/data"


function ProductosPage({}) {
  let productosFiltrados = [];
  const [busqueda, setBusqueda] = useState("");
  const productos = cartas;

 function buscarProduct(e) {
    setBusqueda(e.target.value.toLowerCase());
  }

  if (busqueda) {
    productosFiltrados = productos.filter((a) =>
      a.title.toLowerCase().includes(busqueda)
    );
  }
  return (
    <>
      <Titulo />
      <Row>
        <Col></Col>
        <Col>
      <Form className="d-flex container-form me-2 input-search">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 input-search"
          aria-label="Search"
          onChange={buscarProduct}
        />
      </Form>
      </Col>
      <Col></Col>
      </Row>
      <BotonFiltro />
      <CardGroup className="card-group">
      <Row>
        {busqueda
          ? productosFiltrados.map((productItem, index) => {
              return (
                <CreateCard
                  key={productItem.id}
                  img={productItem.img}
                  title={productItem.title}
                  price={productItem.price}
                  item={productItem}
                />
              );
            })
          : cartas.map((productItem, index) => {
              return (
                <CreateCard
                  key={productItem.id}
                  img={productItem.img}
                  title={productItem.title}
                  price={productItem.price}
                  item={productItem}
                />
              );
            })}
      </Row>
    </CardGroup>
    </>
  );
}

export default ProductosPage;
