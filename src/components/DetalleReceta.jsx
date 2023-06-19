import { Col, Container, Image, Row, ListGroup } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <Container className="mainPage">
      <Row className="justify-content-center my-5">
        <Col lg={8}>
          <Image
            src="https://i.blogs.es/56b4c0/pollo_chorizo/1366_2000.jpg"
            className="w-100"
            rounded
          ></Image>
          <div className="d-flex justify-content-between mt-2 text-light">
            <h4>Pollo con papas al horno</h4>
            <span>
              <i class="bi bi-clock-history"></i> 40min
            </span>
          </div>
        </Col>
        <Col
          lg={4}
          className="d-none d-lg-flex flex-column align-items-center detalle-column-imagenes"
        >
          <Image
            src="https://i.blogs.es/56b4c0/pollo_chorizo/1366_2000.jpg"
            className="w-75"
            rounded
          ></Image>
          <Image
            src="https://i.blogs.es/56b4c0/pollo_chorizo/1366_2000.jpg"
            className="w-75"
            rounded
          ></Image>
          <Image
            src="https://i.blogs.es/56b4c0/pollo_chorizo/1366_2000.jpg"
            className="w-75"
            rounded
          ></Image>
        </Col>
      </Row>
      <section className="my-5">
        <h3 className="text-center text-light mb-3">Ingredientes</h3>
        <ListGroup className="lista-ingredientes">
          <ListGroup.Item className="d-flex justify-content-between mb-1 li-ingrediente">
            Ingrediente 1 <span>500g</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between mb-1">
            Ingrediente 1 <span>500g</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between mb-1">
            Ingrediente 1 <span>500g</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between mb-1">
            Ingrediente 1 <span>500g</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between mb-1">
            Ingrediente 1 <span>500g</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between mb-1">
            Ingrediente 1 <span>500g</span>
          </ListGroup.Item>
        </ListGroup>
      </section>
      <section className="my-5 text-light">
        <h3 className="text-center text-light mb-3">Instrucciones</h3>
        <Row>
          <Col lg={7}>
            <h4 className="paso-instruccuiones-color">Paso 1</h4>
            <p className="p-instrucciones">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              laudantium rem tempore, eaque consectetur suscipit? Necessitatibus
              quis distinctio doloremque vero reprehenderit, sed maiores fugiat
              eius incidunt in explicabo repellendus? Nulla mollitia, fugit
              repellendus amet ratione architecto excepturi nisi quibusdam vero!
            </p>
            <h4 className="paso-instruccuiones-color">Paso 2</h4>
            <p className="p-instrucciones">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              laudantium rem tempore, eaque consectetur suscipit? Necessitatibus
              quis distinctio doloremque vero reprehenderit, sed maiores fugiat
              eius incidunt in explicabo repellendus? Nulla mollitia, fugit
              repellendus amet ratione architecto excepturi nisi quibusdam vero!
            </p>
            <h4 className="paso-instruccuiones-color">Paso 3</h4>
            <p className="p-instrucciones">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              laudantium rem tempore, eaque consectetur suscipit? Necessitatibus
              quis distinctio doloremque vero reprehenderit, sed maiores fugiat
              eius incidunt in explicabo repellendus? Nulla mollitia, fugit
              repellendus amet ratione architecto excepturi nisi quibusdam vero!
            </p>
            <h4 className="paso-instruccuiones-color">Paso 4</h4>
            <p className="p-instrucciones">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              laudantium rem tempore, eaque consectetur suscipit? Necessitatibus
              quis distinctio doloremque vero reprehenderit, sed maiores fugiat
              eius incidunt in explicabo repellendus? Nulla mollitia, fugit
              repellendus amet ratione architecto excepturi nisi quibusdam vero!
            </p>
          </Col>
          <Col lg={5} className="d-none d-lg-flex align-self-center">
            <Image src="https://media.baamboozle.com/uploads/images/84195/1600403085_260841" className="w-100 img-intrucciones"></Image>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default DetalleReceta;
