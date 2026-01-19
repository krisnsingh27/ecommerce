import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#333",
      color: "#fff",
      
    }}>
      <Link to="/" style={{ color: "#fff", fontSize: "24px", textDecoration: "none" }}>E-Shop</Link>
       

      <Link to="/cart" style={{ color: "#fff", textDecoration: "none", position: "relative" }}>
        Cart
        <span style={{
          position: "absolute",
          top: "-10px",
          right: "-15px",
          backgroundColor: "red",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px"
        }}>
          {cartItems.length}
        </span>
      </Link>
    </div>
  );
};

export default Header;
