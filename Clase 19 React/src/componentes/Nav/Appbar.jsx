import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Appbarr from "./Appbarr.css";

function Appbar() {
  return (
    <>
      <Navbar expand="lg" className="container-navbar">
        <Container fluid>
          <a className="navbar-logo" href="#">
            <img src="./images/apple.png"></img>
          </a>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-flex justify-content-between"
          >
            <div className="container-botton-form">
            <Form className="d-flex container-form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 input-search"
                aria-label="Search"
              />
              <a className="navbar-logo-lupa" href="#">
            <img src="./images/lupa.png"/>
          </a>
            </Form>
            </div>
            <Nav
              className="d-flex flex-end"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action2">Iniciar Sesion</Nav.Link>

              <a className="navbar-logo-cart" href="#">
                <img src="./images/carrito-de-compras.png"></img>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
