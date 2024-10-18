import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './PaginaNoEncontrada.css'; 

const PaginaNoEncontrada = () => {
  return (
    <div className="pagina-no-encontrada-container">
      <h1 className="pagina-no-encontrada-title">Pagina no encontrada</h1>
      <p className="pagina-no-encontrada-text">404 Not Found</p>
      {/* Reemplazar <a> con <Link> */}
      <Link to="/" className="pagina-no-encontrada-link">
        Volver a la página principal
      </Link>
    </div>
  );
}

export default PaginaNoEncontrada;
