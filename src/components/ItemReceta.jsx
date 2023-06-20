import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemReceta = ({ receta, setRecetas }) => {
  const borrarReceta = (id) => {
    const recetasFiltradas = recetas.filter((receta) => receta.id !== id);
    setRecetas(recetasFiltradas);
  };

  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombreReceta}</td>
      <td>
        <Link
          className="btn btn-outline-light textoVerde mb-2 mb-md-0"
          to={"/administrador/editar/" + receta.id}
        >
          Editar
        </Link>
        <Button
          className="ms-md-2 fondoVerde text-black"
          variant="outline-light"
          onClick={() => borrarReceta(receta.id)}
        >
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
