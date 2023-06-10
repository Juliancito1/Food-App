import { Nav, Navbar, Container, FormControl } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"

const Menu = () => {
  return (
    <Navbar className="fondoNegro" expand="lg">
      <Container>
        <Navbar.Brand className="" href="#home">
          <img src="../src/assets/Logo.png" className="Logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fs-4 mx-auto">
            <Nav.Link className="text-light" href="#home">
              Destacados
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Recetas
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Contacto
            </Nav.Link>
          </Nav>
          <Nav className="fs-4 ms-lg-1 align-items-lg-center">
            <div className="d-flex align-items-center contenedorSearch">
              <i className="bi bi-search"></i>
              <FormControl
                type="text"
                placeholder="Buscar"
                className="search-input"
              />
            </div>
            <Nav.Link className="text-light" href="#link">
              <i className="bi bi-person"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
