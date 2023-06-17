import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./views/Menu";
import Footer from "./views/Footer";
import Administrador from "./components/Administrador";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import FormularioReceta from "./components/FormularioReceta";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/administrador/crear" element={<FormularioReceta></FormularioReceta>}></Route>
        <Route exact path="/administrador/editar" element={<FormularioReceta></FormularioReceta>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        {/* <FormularioReceta></FormularioReceta>
        <DetalleReceta></DetalleReceta> */}
        {/* <Login /> */}
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
