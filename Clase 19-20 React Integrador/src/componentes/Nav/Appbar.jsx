import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Appbarr.css";
import { MDBIcon } from 'mdb-react-ui-kit';

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
            <Form className="d-flex container-form me-2 input-search">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 input-search"
                aria-label="Search"
              />
              
            </Form>
            </div>
            <Nav
              className="d-flex flex-end"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
              <Nav.Link href='/productos'>Products</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
              <Nav.Link href='/signin'>Log In</Nav.Link>

              <Nav.Link className="navbar-logo-cart" href="/cart">
              <MDBIcon fas icon="shopping-cart" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Appbar;
