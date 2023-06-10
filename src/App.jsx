import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./views/Menu";
import Footer from "./views/Footer";
import ContenedorRecetas from "./components/ContenedorRecetas";
import BannerMain from "./components/BannerMain";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainPage">
        <Container>
        <BannerMain></BannerMain>
        </Container>
        <ContenedorRecetas />
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
