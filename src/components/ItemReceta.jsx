import { Button } from "react-bootstrap";
const ItemReceta = () => {
    return (
        <tr>
          <td>1</td>
          <td>Milanesa con Papas Fritas</td>
          <td><Button className='btn textoVerde mb-2 mb-md-0' variant="outline-light">Editar</Button>
          <Button className='ms-md-2 fondoVerde text-black' variant='outline-light'>Borrar</Button></td>
        </tr>
    );
};

export default ItemReceta;