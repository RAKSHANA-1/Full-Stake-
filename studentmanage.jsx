import React, { useState } from "react";

function StudentDashboard() {
  const [activePage, setActivePage] = useState("home");

  const students = [
    { id: 1, name: "Arun", dept: "CSE", year: "3rd Year" },
    { id: 2, name: "Meena", dept: "ECE", year: "2nd Year" },
    { id: 3, name: "Rahul", dept: "IT", year: "Final Year" },
  ];

  return (
    <div style={containerStyle}>
      {/* SIDEBAR */}
      <div style={sidebarStyle}>
        <h2 style={{ color: "#ffffff" }}>🎓 Student Panel</h2>

        <button
          style={navBtn(activePage === "home")}
          onClick={() => setActivePage("home")}
        >
          🏠 Home
        </button>

        <button
          style={navBtn(activePage === "students")}
          onClick={() => setActivePage("students")}
        >
          📋 Student List
        </button>

        <button
          style={navBtn(activePage === "about")}
          onClick={() => setActivePage("about")}
        >
          ℹ️ About
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div style={contentStyle}>
        {activePage === "home" && (
          <div style={pageCard("#1e88e5")}>
            <h1>🏠 Dashboard Home</h1>
            <p>
              Welcome to the Student Management Dashboard.  
              Manage student records efficiently.
            </p>
          </div>
        )}

        {activePage === "students" && (
          <div style={pageCard("#43a047")}>
            <h1>📋 Student List</h1>

            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Department</th>
                  <th style={thStyle}>Year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td style={tdStyle}>{s.id}</td>
                    <td style={tdStyle}>{s.name}</td>
                    <td style={tdStyle}>{s.dept}</td>
                    <td style={tdStyle}>{s.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activePage === "about" && (
          <div style={pageCard("#8e24aa")}>
            <h1>ℹ️ About</h1>
            <p>
              This system helps administrators view, manage,  
              and organize student information in one dashboard.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- INLINE STYLES (DARK + COLORFUL) ---------------- */

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  fontFamily: "Segoe UI, sans-serif",
  background: "#121212",
};

const sidebarStyle = {
  width: "230px",
  background: "#0d47a1",
  padding: "20px",
};

const navBtn = (active) => ({
  width: "100%",
  padding: "14px",
  marginTop: "12px",
  background: active ? "#ff9100" : "#1e88e5",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
});

const contentStyle = {
  flex: 1,
  padding: "30px",
  background: "#121212",
  color: "#ffffff",
};

const pageCard = (color) => ({
  background: color,
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
});

const tableStyle = {
  width: "100%",
  marginTop: "20px",
  borderCollapse: "collapse",
  background: "#263238",
};

const thStyle = {
  background: "#000000",
  color: "#ffffff",
  padding: "12px",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #555",
  color: "#ffffff",
};

export default StudentDashboard;
