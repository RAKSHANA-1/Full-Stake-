import React from "react";

function CabBookingSuperStyle() {
  const handleCabBooking = () => {
    alert("🚖 Welcome to CityRide Cab Services");

    const riderName = prompt("Enter Rider Name:");
    const pickup = prompt("Enter Pickup Location:");
    const drop = prompt("Enter Drop Location:");
    const distance = prompt("Enter Distance (in km):");

    if (!riderName || !pickup || !drop || !distance) {
      alert("❌ Cab Booking Cancelled!");
      return;
    }

    const pricePerKm = 20;
    const totalFare = distance * pricePerKm;

    const confirmRide = confirm(
      "🚕 Confirm Your Ride Details\n\n" +
        "Rider Name: " + riderName + "\n" +
        "Pickup: " + pickup + "\n" +
        "Drop: " + drop + "\n" +
        "Distance: " + distance + " km\n" +
        "Total Fare: ₹" + totalFare
    );

    if (confirmRide) {
      alert("✅ Cab Booked Successfully!\nDriver will arrive shortly 🚗");
    } else {
      alert("⚠️ Cab Booking Not Confirmed.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000, #434343)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: "440px",
          padding: "35px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 25px 45px rgba(0,0,0,0.6)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "10px", fontSize: "28px" }}>
          CityRide Cab Booking
        </h1>

        <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "25px" }}>
          Fast • Safe • Reliable Rides
        </p>

        <div
          style={{
            padding: "18px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.2)",
            marginBottom: "22px",
          }}
        >
          <p style={{ margin: "8px 0" }}>🚕 Instant Cab</p>
          <p style={{ margin: "8px 0" }}>📍 Live Tracking</p>
          <p style={{ margin: "8px 0" }}>💳 Cashless Payment</p>
        </div>

        <button
          onClick={handleCabBooking}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "30px",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#000",
            background: "linear-gradient(90deg, #ffeb3b, #ffc107)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.06)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Book a Cab 🚖
        </button>
      </div>
    </div>
  );
}

export default CabBookingSuperStyle;
