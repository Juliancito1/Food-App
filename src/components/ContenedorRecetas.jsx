import CardRecetas from "./CardRecetas";

const ContenedorRecetas = () => {
  return (
    <article className="container">
      <div className="contenedor-recetas d-flex flex-wrap justify-content-center justify-content-md-between mt-3">
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
        <CardRecetas />
      </div>
    </article>
  );
};

export default ContenedorRecetas;
