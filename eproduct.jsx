import React, { useState } from "react";

function EcommerceApp() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 2999 },
    { id: 2, name: "Smart Watch", price: 4999 },
    { id: 3, name: "Bluetooth Speaker", price: 1999 },
    { id: 4, name: "Gaming Mouse", price: 1499 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    alert(product.name + " added to cart");
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>🛍️ Online Store</h1>

      <div style={layoutStyle}>
        {/* PRODUCTS */}
        <div style={productGrid}>
          {products.map((product) => (
            <div key={product.id} style={productCard}>
              <h3 style={{ color: "#1a237e" }}>{product.name}</h3>
              <p style={{ color: "#2e7d32", fontWeight: "bold" }}>
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                style={addBtn}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* CART */}
        <div style={cartBox}>
          <h2 style={{ color: "#b71c1c" }}>🧾 Cart</h2>

          {cart.length === 0 && (
            <p style={{ color: "#333" }}>Cart is empty</p>
          )}

          {cart.map((item, index) => (
            <div key={index} style={cartItem}>
              {item.name} – ₹{item.price}
            </div>
          ))}

          <hr />

          <h3 style={{ color: "#004d40" }}>
            Total: ₹{total}
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ---------------- INLINE STYLES (HIGH CONTRAST) ---------------- */

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  padding: "30px",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  color: "#0d47a1",
  marginBottom: "25px",
};

const layoutStyle = {
  display: "flex",
  gap: "25px",
  flexWrap: "wrap",
};

const productGrid = {
  flex: 2,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const productCard = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  textAlign: "center",
};

const addBtn = {
  marginTop: "10px",
  padding: "10px 18px",
  background: "#ff6f00",
  color: "#ffffff",
  border: "none",
  borderRadius: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};

const cartBox = {
  flex: 1,
  background: "#fffde7",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
};

const cartItem = {
  padding: "8px",
  marginBottom: "6px",
  background: "#e3f2fd",
  borderRadius: "6px",
  color: "#000",
  fontSize: "14px",
};

export default EcommerceApp;
