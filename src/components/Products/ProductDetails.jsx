import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./ProductList";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <img className="card-img-top" src={product.thumbnail} alt={product.title} />

      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <a href="#" className="btn btn-primary">
        Agregar al carrito ({quantity})
      </a>
    </div>
  );
};

export default ProductDetails;