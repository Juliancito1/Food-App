import { Nav, Navbar, Container, FormControl } from "react-bootstrap";
import {Link, NavLink, useNavigate} from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"

const Menu = () => {
  return (
    <Navbar className="fondoNegro" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'} >
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
            <NavLink end className="text-light nav-item nav-link" to={'/contacto'}>
              Contacto
            </NavLink>
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
            <NavLink end className="text-light nav-item nav-link" to={'/login'}>
              <i className="bi bi-person"></i>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
