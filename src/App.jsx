import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        

      </Routes>
    </>
  );
}

export default App;
