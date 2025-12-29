import React, { useState } from "react";

function BlogWithComments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (!comment) {
      alert("⚠️ Please write a comment!");
      return;
    }

    setComments([
      ...comments,
      { id: Date.now(), text: comment },
    ]);

    setComment("");
  };

  return (
    <div style={containerStyle}>
      <div style={blogCard}>
        <h1 style={{ marginBottom: "10px" }}>
          📘 Understanding React Hooks
        </h1>

        <p style={blogText}>
          React Hooks allow functional components to manage state and lifecycle
          methods. Hooks make code simpler, reusable, and more readable in
          modern React applications.
        </p>

        <hr style={{ opacity: 0.3 }} />

        <h3>💬 Comments</h3>

        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={inputStyle}
        />

        <button onClick={addComment} style={btnStyle}>
          Post Comment
        </button>

        <div style={commentBox}>
          {comments.length === 0 && (
            <p style={{ opacity: 0.6 }}>No comments yet</p>
          )}

          {comments.map((c) => (
            <div key={c.id} style={commentItem}>
              {c.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- INLINE STYLES ---------------- */

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1c92d2, #f2fcfe)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Segoe UI, sans-serif",
  padding: "20px",
};

const blogCard = {
  width: "100%",
  maxWidth: "700px",
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
};

const blogText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  height: "80px",
  marginTop: "10px",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const btnStyle = {
  marginTop: "10px",
  padding: "12px 20px",
  border: "none",
  borderRadius: "25px",
  background: "#1976d2",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

const commentBox = {
  marginTop: "20px",
};

const commentItem = {
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "8px",
  background: "#f1f1f1",
  fontSize: "14px",
};

export default BlogWithComments;
