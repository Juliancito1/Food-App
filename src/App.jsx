import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./views/Menu";
import Footer from "./views/Footer";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RutasAdministrador from "./routes/RutasAdministrador";
import RutasProtegidas from "./routes/RutasProtegidas"
function App() {
  const usuarioStorage = JSON.parse(sessionStorage.getItem("user")) || null;
  const [usuario, setUsuario] = useState(usuarioStorage);

  return (
    <BrowserRouter>
      <Menu usuario={usuario}></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuario={setUsuario}></Login>}
        ></Route>
        <Route exact path="/administrador/*" element={
        <RutasProtegidas>
          <RutasAdministrador></RutasAdministrador>
        </RutasProtegidas>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
