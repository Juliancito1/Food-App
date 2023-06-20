import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./views/Menu";
import Footer from "./views/Footer";
import Administrador from "./components/Administrador";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioReceta from "./components/FormularioReceta";
import { useState } from "react";

function App() {
  const usuarioStorage = JSON.parse(sessionStorage.getItem("user")) || {};
  const [usuario, setUsuario] = useState(usuarioStorage);

  return (
    <BrowserRouter>
      <Menu usuario={usuario}></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/crear"
          element={<FormularioReceta></FormularioReceta>}
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id"
          element={<FormularioReceta></FormularioReceta>}
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuario={setUsuario}></Login>}
        ></Route>
        {/* <FormularioReceta></FormularioReceta>
        <DetalleReceta></DetalleReceta> */}
        {/* <Login /> */}
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
