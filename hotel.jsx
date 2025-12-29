import React from "react";

function HotelReservationSuperStyle() {
  const handleReservation = () => {
    alert("✨ Welcome to Royal Crown Hotel ✨");

    const name = prompt("Enter Guest Name:");
    const room = prompt("Enter Room Type (Single / Double / Deluxe):");
    const nights = prompt("Enter Number of Nights:");

    if (!name || !room || !nights) {
      alert("❌ Reservation Cancelled!");
      return;
    }

    const pricePerNight = 3500;
    const total = nights * pricePerNight;

    const confirmReservation = confirm(
      "🏨 Please Confirm Your Reservation\n\n" +
        "Guest Name: " + name + "\n" +
        "Room Type: " + room + "\n" +
        "Nights: " + nights + "\n" +
        "Total Amount: ₹" + total
    );

    if (confirmReservation) {
      alert("✅ Reservation Successful!\nEnjoy Your Luxury Stay 🌟");
    } else {
      alert("⚠️ Reservation Not Confirmed.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "35px",
          borderRadius: "18px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "26px",
            letterSpacing: "1px",
          }}
        >
          Royal Crown Hotel
        </h1>

        <p
          style={{
            fontSize: "14px",
            opacity: 0.9,
            marginBottom: "25px",
          }}
        >
          Experience comfort • luxury • elegance
        </p>

        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.2)",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: "8px 0" }}>✔ Deluxe Rooms</p>
          <p style={{ margin: "8px 0" }}>✔ 24/7 Service</p>
          <p style={{ margin: "8px 0" }}>✔ Free Wi-Fi</p>
        </div>

        <button
          onClick={handleReservation}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "30px",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#1e3c72",
            background: "linear-gradient(90deg, #ffdd00, #ffb300)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Reserve Your Room 🏨
        </button>
      </div>
    </div>
  );
}

export default HotelReservationSuperStyle;
