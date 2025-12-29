import React, { useState } from "react";

function StudentFeedback() {
  const [feedback, setFeedback] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!feedback.name || !feedback.rating || !feedback.comment) {
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    alert("✅ Feedback submitted successfully!");
    setSubmittedData(feedback);
    setFeedback({ name: "", rating: "", comment: "" });
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: "10px" }}>📋 Student Feedback</h1>
        <p style={{ opacity: 0.8, marginBottom: "25px" }}>
          Share your experience
        </p>

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={feedback.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          name="rating"
          value={feedback.rating}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="">Select Rating</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐  Excellent</option>
          <option value="⭐⭐⭐">⭐⭐⭐ Good</option>
          <option value="⭐⭐">⭐⭐ Average</option>
          <option value="⭐">⭐ Poor</option>
        </select>

        <textarea
          name="comment"
          placeholder="Enter your comments"
          value={feedback.comment}
          onChange={handleChange}
          style={{ ...inputStyle, height: "90px" }}
        />

        <button onClick={handleSubmit} style={submitBtn}>
          Submit Feedback
        </button>

        {submittedData && (
          <div style={previewBox}>
            <h3>📝 Submitted Feedback</h3>
            <p>
              <b>Name:</b> {submittedData.name}
            </p>
            <p>
              <b>Rating:</b> {submittedData.rating}
            </p>
            <p>
              <b>Comment:</b> {submittedData.comment}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- INLINE STYLES ---------------- */

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #283c86, #45a247)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Segoe UI, sans-serif",
};

const cardStyle = {
  width: "450px",
  padding: "40px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
  color: "white",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  fontSize: "15px",
};

const submitBtn = {
  width: "100%",
  padding: "15px",
  borderRadius: "30px",
  border: "none",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  background: "linear-gradient(90deg, #ffffff, #e3f2fd)",
  color: "#1a237e",
  boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
};

const previewBox = {
  marginTop: "25px",
  padding: "20px",
  borderRadius: "15px",
  background: "rgba(0,0,0,0.4)",
  textAlign: "left",
};

export default StudentFeedback;
