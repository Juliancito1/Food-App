import { Table , Button, Container } from "react-bootstrap";
import ItemReceta from "./ItemReceta";
import ItemUsuario from "./ItemUsuario";
import { Link } from "react-router-dom";

const Administrador = () => {
    return (
        <Container className="mt-5 mainPage">
            <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 text-center text-light">Recetas</h1>
          <Link className="btn text-dark fondoVerde" variant="outline-success" to={'/administrador/crear'}>
            Agregar
          </Link>
        </div>
        <hr></hr>
        <section className="table-responsive">
            <Table striped bordered hover className="table-dark">
            <thead>
        <tr>
          <th>Id</th>
          <th>Nombre de la Receta</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemReceta></ItemReceta>
        <ItemReceta></ItemReceta>
        <ItemReceta></ItemReceta>
        <ItemReceta></ItemReceta>
      </tbody>
            </Table>
        </section>

        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 text-center text-light">Usuarios</h1>
          <Button className="btn text-dark fondoVerde" variant="outline-success">
            Agregar
          </Button>
        </div>
        <hr></hr>
        <div className="table-responsive">
            <Table striped bordered hover className="table-dark">
            <thead>
        <tr>
          <th>Id</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemUsuario></ItemUsuario>
      </tbody>
            </Table>
        </div>
        </Container>
    );
};

export default Administrador;