import { Col, Container, Image, Row } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col lg={8} >
          <Image src="https://i.blogs.es/56b4c0/pollo_chorizo/1366_2000.jpg" className="w-100" rounded></Image>
          <div className="d-flex justify-content-between mt-2 text-light">
            <h4>Pollo con papas al horno</h4>
            <span><i class="bi bi-clock-history"></i> 40min</span>
          </div>
        </Col>
        <Col lg={4} className="d-flex flex-column align-items-center">
        <Image src="https://i.blogs.es/56b4c0/pollo_chorizo/1366_2000.jpg" className="w-75" rounded></Image>
          <Image src="https://i.blogs.es/56b4c0/pollo_chorizo/1366_2000.jpg" className="w-75" rounded></Image>
          <Image src="https://i.blogs.es/56b4c0/pollo_chorizo/1366_2000.jpg" className="w-75" rounded></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleReceta;
