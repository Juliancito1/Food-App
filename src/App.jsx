import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./views/Menu";
import Footer from "./views/Footer";
import ContenedorRecetas from "./components/ContenedorRecetas";
import BannerMain from "./components/BannerMain";
import { Container } from "react-bootstrap";
import CardDestacados from "./components/CardDestacados";
import Administrador from "./components/Administrador";
import Login from "./components/Login";
import FormularioReceta from "./components/FormularioReceta";
import DetalleReceta from "./components/DetalleReceta";

function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainPage">
        {/* <Container>
          <BannerMain></BannerMain>
        </Container>
        <CardDestacados></CardDestacados>
        <ContenedorRecetas />
        <FormularioReceta></FormularioReceta> */}
        {/* <Login /> */}
        <DetalleReceta></DetalleReceta>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
