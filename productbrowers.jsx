import React, { useState } from "react";

function ProductBrowser() {
  const [category, setCategory] = useState("all");

  const products = [
    { id: 1, name: "iPhone", category: "electronics", price: "₹70,000" },
    { id: 2, name: "Laptop", category: "electronics", price: "₹55,000" },
    { id: 3, name: "T-Shirt", category: "fashion", price: "₹799" },
    { id: 4, name: "Jeans", category: "fashion", price: "₹1,499" },
    { id: 5, name: "Cooking Pan", category: "home", price: "₹1,200" },
    { id: 6, name: "Sofa Cushion", category: "home", price: "₹999" },
  ];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🛒 Product Browser</h1>

      {/* CATEGORY NAVIGATION */}
      <div style={navStyle}>
        <button style={navBtn(category === "all")} onClick={() => setCategory("all")}>
          All
        </button>
        <button
          style={navBtn(category === "electronics")}
          onClick={() => setCategory("electronics")}
        >
          Electronics
        </button>
        <button
          style={navBtn(category === "fashion")}
          onClick={() => setCategory("fashion")}
        >
          Fashion
        </button>
        <button
          style={navBtn(category === "home")}
          onClick={() => setCategory("home")}
        >
          Home
        </button>
      </div>

      {/* PRODUCT LIST */}
      <div style={productGrid}>
        {filteredProducts.map((p) => (
          <div key={p.id} style={productCard}>
            <h3 style={{ color: "#ffeb3b" }}>{p.name}</h3>
            <p>Category: {p.category}</p>
            <p style={{ fontWeight: "bold" }}>{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- INLINE STYLES ---------------- */

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  padding: "30px",
  fontFamily: "Arial",
  color: "white",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "30px",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "30px",
};

const navBtn = (active) => ({
  padding: "12px 18px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  background: active ? "#ff9800" : "#37474f",
  color: "white",
});

const productGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const productCard = {
  background: "#263238",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.6)",
  textAlign: "center",
};

export default ProductBrowser;
