import "./header.css";
import Newsletter from "../utils/newsLetter";

import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="container">
          <LinkContainer to="/">
            <Navbar.Brand id="logo">Gear Head</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="d-flex align-center justify-content-center">
              <LinkContainer to="contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <Newsletter />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
