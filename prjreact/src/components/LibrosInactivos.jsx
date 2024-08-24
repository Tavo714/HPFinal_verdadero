import React, { useState, useEffect } from "react";
import { librosInactivos } from "../services/libroService";

const LibrosInactivos = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    librosInactivos()
      .then(response => {
        console.log("Datos recibidos desde el API:", response.data);
        setLibros(response.data);
      })
      .catch(error => {
        console.error("Error al obtener libros inactivos:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Libros Inactivos</h1>
      {libros.length === 0 ? (
        <div className="alert alert-info text-center">
          No hay libros inactivos.
        </div>
      ) : (
        <div className="table-responsive pt-4">
          <table className="table table-striped table-bordered border-primary text-center align-middle">
            <thead className="table-primary">
              <tr>
                <th>Libros ID</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Año de Publicacion</th>
                <th>Stock</th>
                
              </tr>
            </thead>
            <tbody>
              {libros.map((libro) => (
                <tr key={libro.libroId}>
                  <td>{libro.libroId || "No disponible"}</td>
                  <td>{libro.titulo || "No disponible"}</td>
                  <td>{libro.autor?.nombre || "No disponible"}</td>
                  <td>{libro.añoPublicacion || "No disponible"}</td>
                  <td>{libro.stock || "No disponible"}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="text-center">
        <p>
          Cantidad de libros Inactivos: <strong>{libros.length}</strong>
        </p>
      </div>
    </div>
  );
};

export default LibrosInactivos;