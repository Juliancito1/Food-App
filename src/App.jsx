import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./views/Menu";
import Footer from "./views/Footer";
import ContenedorRecetas from "./components/ContenedorRecetas";

function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainPage">
        <ContenedorRecetas />
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
