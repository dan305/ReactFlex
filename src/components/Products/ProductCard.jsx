import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({ id, title, price, description }) => {
  return (
    <div className="card">
      <img className="card-img-top" src="https://via.placeholder.com/150" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        <p className="card-text">id: {id}</p>
        <Link to={`/Componentes/productos/${id}`} className="card-link btn btn-danger">
              Más detalles
        </Link>


        <a href="#" className="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>
  );
};

export default ProductCard;