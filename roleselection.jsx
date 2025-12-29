import React, { useState } from "react";

function RoleBasedLogin() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    role: "User",
  });

  const [loggedInRole, setLoggedInRole] = useState(null);

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (!login.username || !login.password) {
      alert("❌ Please enter username and password!");
      return;
    }

    alert("✅ Login Successful!");

    // ROLE-BASED REDIRECTION
    setLoggedInRole(login.role);
  };

  /* ------------------ REDIRECTED SCREENS ------------------ */

  if (loggedInRole === "Admin") {
    return (
      <div style={dashboardStyle("#1a237e")}>
        <h1>👑 Admin Dashboard</h1>
        <p>Welcome Admin, you have full access.</p>
      </div>
    );
  }

  if (loggedInRole === "User") {
    return (
      <div style={dashboardStyle("#2e7d32")}>
        <h1>👤 User Dashboard</h1>
        <p>Welcome User, enjoy your services.</p>
      </div>
    );
  }

  /* ------------------ LOGIN SCREEN ------------------ */

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000428, #004e92)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>🔐 Login</h1>

        <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "30px" }}>
          Login & get redirected based on role
        </p>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={login.username}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={login.password}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="role"
          value={login.role}
          onChange={handleChange}
          style={inputStyle}
        >
          <option>User</option>
          <option>Admin</option>
        </select>

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "30px",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            background: "linear-gradient(90deg, #ffffff, #e3f2fd)",
            color: "#004e92",
            boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Login 🚀
        </button>
      </div>
    </div>
  );
}

/* ------------------ INLINE STYLES ------------------ */

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  marginBottom: "15px",
  fontSize: "15px",
  outline: "none",
};

const dashboardStyle = (color) => ({
  minHeight: "100vh",
  background: `linear-gradient(135deg, ${color}, #000)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontFamily: "Segoe UI, sans-serif",
  textAlign: "center",
});

export default RoleBasedLogin;
