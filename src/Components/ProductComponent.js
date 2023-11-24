import React from "react";
import "./css/ProductComponent.css";
import { Link } from "react-router-dom";

function ProductComponent({ product }) {
  const { id, title, image, price, category } = product;
  return (
    <div className="card h-100" key={id}>
      <Link to={`/product/${id}`}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-price">$ {price}</div>
          <p className="card-text">{category}</p>
        </div>
      </Link>
    </div>
  );
}

export { ProductComponent };
