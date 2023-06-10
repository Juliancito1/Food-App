const CardRecetas = () => {
  return (
    <>
      <div className="card-receta d-flex flex-column flex-wrap justify-content-between text-center">
        <div className="card-img">
          <img
            src="../src/assets/img-receta.png"
            className="w-100"
            alt="Imagen de receta"
          />
        </div>
        <div className="card-desc">
          <p className="mb-0">Categoría</p>
          <h5 className="mb-0">Título</h5>
        </div>
        <a href="#">Ver receta</a>
      </div>
    </>
  );
};

export default CardRecetas;
