import React, { useState } from "react";

function EventRegistrationSuperStyle() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("Workshop");

  const handleRegister = () => {
    if (!name || !email) {
      alert("❌ Please fill all required details!");
      return;
    }

    const confirmRegistration = confirm(
      "🎉 Confirm Your Registration\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Event Type: " + eventType
    );

    if (confirmRegistration) {
      alert("✅ Registration Successful!\nSee you at the event 🎊");
      setName("");
      setEmail("");
    } else {
      alert("⚠️ Registration Cancelled.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff512f, #dd2476)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: "450px",
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "8px", fontSize: "28px" }}>
          🎉 Event Registration
        </h1>

        <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "30px" }}>
          Register now and be part of something amazing!
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            marginBottom: "15px",
            fontSize: "15px",
            outline: "none",
          }}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            marginBottom: "15px",
            fontSize: "15px",
            outline: "none",
          }}
        />

        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            marginBottom: "25px",
            fontSize: "15px",
            outline: "none",
          }}
        >
          <option>Workshop</option>
          <option>Seminar</option>
          <option>Conference</option>
          <option>Webinar</option>
        </select>

        <button
          onClick={handleRegister}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "30px",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#dd2476",
            background: "linear-gradient(90deg, #fff, #ffe6ee)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.06)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Register Now 🎊
        </button>
      </div>
    </div>
  );
}

export default EventRegistrationSuperStyle;
