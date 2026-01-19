import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductById(id).then(data => setProduct(data));
  }, [id]);

  if (!product) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  return (
    <div style={{ display: "flex", padding: "20px", justifyContent: "center", gap: "20px" }}>
      <img src={product.image} alt={product.title} style={{ height: "300px", objectFit: "contain" }} />
      <div style={{ maxWidth: "400px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{product.title}</h1>
        <p style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>${product.price}</p>
        <p>{product.description}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
