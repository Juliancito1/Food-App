import { Nav , Navbar , Container, Button } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'
const Menu = () => {
    return (
        <Navbar className="fondoNegro" expand="lg">
      <Container>
        <Navbar.Brand className="" href="#home"><img src="../src/assets/Logo.png" className="rounded Logo" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fs-4 mx-auto">
            <Nav.Link className="text-light" href="#home">Destacados</Nav.Link>
            <Nav.Link className="text-light" href="#link">Recetas</Nav.Link>
            <Nav.Link className="text-light" href="#link">Contacto</Nav.Link>
          </Nav>
          <Nav className="fs-4 ms-lg-1">
            <Nav.Link className="text-light" href="#link"><i className="btn btn-primary bi bi-person-circle"></i></Nav.Link>
            <Nav.Link className="text-light" href="#link">Buscar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;