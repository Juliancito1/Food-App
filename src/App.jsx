import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./views/Menu";
import Footer from "./views/Footer";
import ContenedorRecetas from "./components/ContenedorRecetas";
import CardDestacados from "./components/CardDestacados";

function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainPage">
        <CardDestacados></CardDestacados>
        <ContenedorRecetas />
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
