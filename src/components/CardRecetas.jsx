import { obtenerRecetas } from "./helpers/helpers";
import { useEffect, useState } from "react";

const CardRecetas = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerRecetas().then((data) => {
      setRecetas(data);
    });
  }, []);

  return (
    <>
      {recetas?.map((receta) => (
        <div
          className="card-receta d-flex flex-column flex-wrap justify-content-between text-center"
          key={receta.id}
        >
          <div className="card-img">
            <img
              src={receta.imagen}
              className="w-100 h-100"
              alt={receta.nombreReceta}
            />
          </div>
          <div className="card-desc">
            <p className="mb-0">Categoría</p>
            <h5 className="mb-0 text-truncate">{receta.nombreReceta}</h5>
          </div>
          <a href="#">Ver receta</a>
        </div>
      ))}
    </>
  );
};

export default CardRecetas;
