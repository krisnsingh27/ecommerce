import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setLoading(false);
     
    });
  }, []);
   console.log(products)
  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading...</p>;

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "20px"
    }}>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Home;
