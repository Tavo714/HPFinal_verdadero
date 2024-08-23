import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LibrosNoDevueltos from "./pages/LibrosNoDevueltos";
import NavBar from "./components/NavBar";
// JSX
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/libros-no-devueltos"
              element={<LibrosNoDevueltos />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
