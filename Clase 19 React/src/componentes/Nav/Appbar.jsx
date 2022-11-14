import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Appbarr.css";

function Appbar() {
  return (
    <>
      <Navbar expand="lg" className="container-navbar position-fixed">
        <Container fluid>
          <Nav.Link className="navbar-logo" href="/">
            <img src="./images/apple.png"></img>
          </Nav.Link>
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
              <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

              <Nav.Link href='/register'>Register</Nav.Link>
              <Nav.Link href='/signin'>Log In</Nav.Link>

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
