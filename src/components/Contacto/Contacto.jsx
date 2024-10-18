import React from "react";
import { Link } from "react-router-dom"; 
import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="contacto-title">PÁGINA EN CONSTRUCCIÓN</h1>
      <p className="contacto-message">
        Estamos trabajando para ofrecerte una mejor experiencia...
      </p>
      <div className="icon-container">
        <i className="bi bi-tools"></i>
      </div>
     
      <Link to="/" className="contacto-home-btn">
        Volver a Inicio
      </Link>
    </div>
  );
};

export default Contacto;
