import React, { useState } from "react";

function WorkshopRegistrationLivePreview() {
  const [form, setForm] = useState({
    name: "Alex Johnson",
    email: "alex@mail.com",
    workshop: "React Basics",
    mode: "Online",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) {
      alert("❌ Please fill all required fields!");
      return;
    }

    alert(
      "✅ Registration Successful!\n\n" +
        "Name: " + form.name + "\n" +
        "Email: " + form.email + "\n" +
        "Workshop: " + form.workshop + "\n" +
        "Mode: " + form.mode
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #42275a, #734b6d)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
          maxWidth: "950px",
          width: "100%",
        }}
      >
        {/* FORM SECTION */}
        <div
          style={{
            flex: 1,
            padding: "35px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(15px)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
            color: "white",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>
            📝 Workshop Registration
          </h2>
          <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "25px" }}>
            Fill the form — preview updates live
          </p>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            style={inputStyle}
          />

          <select
            name="workshop"
            value={form.workshop}
            onChange={handleChange}
            style={inputStyle}
          >
            <option>React Basics</option>
            <option>Advanced JavaScript</option>
            <option>UI/UX Design</option>
            <option>Full Stack Development</option>
          </select>

          <select
            name="mode"
            value={form.mode}
            onChange={handleChange}
            style={inputStyle}
          >
            <option>Online</option>
            <option>Offline</option>
          </select>

          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "30px",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              background: "linear-gradient(90deg, #ffffff, #e3dfff)",
              color: "#42275a",
              boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Register Now 🚀
          </button>
        </div>

        {/* LIVE PREVIEW SECTION */}
        <div
          style={{
            flex: 1,
            padding: "35px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
            color: "#333",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>
            👀 Live Preview
          </h2>

          <div style={previewRow}>
            <span>Name:</span>
            <b>{form.name}</b>
          </div>

          <div style={previewRow}>
            <span>Email:</span>
            <b>{form.email}</b>
          </div>

          <div style={previewRow}>
            <span>Workshop:</span>
            <b>{form.workshop}</b>
          </div>

          <div style={previewRow}>
            <span>Mode:</span>
            <b>{form.mode}</b>
          </div>

          <div
            style={{
              marginTop: "30px",
              padding: "15px",
              borderRadius: "12px",
              background: "#f5f5f5",
              fontSize: "14px",
            }}
          >
            🔴 Changes appear instantly as you type
          </div>
        </div>
      </div>
    </div>
  );
}

/* INLINE REUSABLE STYLES */
const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  marginBottom: "15px",
  fontSize: "15px",
  outline: "none",
};

const previewRow = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
  borderBottom: "1px solid #ddd",
};

export default WorkshopRegistrationLivePreview;
