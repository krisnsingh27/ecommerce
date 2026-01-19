import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) return <p style={{ textAlign: "center", marginTop: "50px" }}>Cart is empty!</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={item.image} alt={item.title} style={{ height: "60px" }} />
            <div>
              <p style={{ fontWeight: "bold" }}>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) }))}
              style={{ width: "50px", padding: "5px" }}
            />
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
