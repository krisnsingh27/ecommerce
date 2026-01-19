import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      margin: "10px",
      width: "200px"
    }}>
      <img src={product.image} alt={product.title} style={{ height: "100px", objectFit: "contain" }} />
      <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
      <p style={{ color: "green", fontWeight: "bold" }}>${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button style={{
          padding: "5px 10px",
          marginTop: "5px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
