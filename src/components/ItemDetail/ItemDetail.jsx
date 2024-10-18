import React, { useState } from "react";
import "./itemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [numero, setNumero] = useState(1);

  const handleSumar = () => {
    if (numero < item.stock) {
      setNumero(numero + 1);
    }
  };

  const handleRestar = () => {
    if (numero > 1) {
      setNumero(numero - 1);
    }
  };

  const handleAgregar = () => {
    console.log({...item, cantidad:numero});
  };

  return (
    <div className="producto-detalle">
      <div className="producto-imagen-descripcion">
        <img src={item.imagen} alt={item.nombre} />
        
      </div>

      <div>
        <h3 className="title-producto-detalle">{item.nombre}</h3>
        <p className="precio-producto-detalle">${item.precio}</p>
        {item.precio > 10000 ? (
          <p className="descuento-item">{item.descuento}</p>
        ) : (
          <p className="descuento-item">10% de descuento por transferencia</p>
        )}
        <ItemCount
          stock={item.stock}
          initial={1}
          numero={numero}
          onAdd={(cantidad) => console.log(`cantidad agregada: ${cantidad}`)}
          handleRestar={handleRestar}
          handleSumar={handleSumar}
          handleAgregar={handleAgregar}
        />
        
        <p className="categoria">Categoría: {item.categoria}</p>
        <p className="descripcion">{item.descripcion}</p>
        <div className="return">
          <Link to="/">
            <i className="bi bi-arrow-return-left"></i> Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
