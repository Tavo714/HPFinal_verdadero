import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LibrosNoDevueltos from "./pages/LibrosNoDevueltos";
import NavBar from "./components/NavBar";
import UsuariosPenalizados from "./components/UsuariosPenalizados";
import UsuariosInactivos from "./components/UsuariosInactivos";
import LibrosInactivos from "./components/LibrosInactivos";
import './styles/styles.css'

function App() {
  return (
    
    <Router>
      <div className="app-background">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/libros-no-devueltos" element={<LibrosNoDevueltos />} />
            <Route path="/libros-inactivos" element={<LibrosInactivos />} />
            <Route path="/usuarios-penalizados" element={<UsuariosPenalizados />} />
            <Route path="/usuarios-inactivos" element={<UsuariosInactivos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
