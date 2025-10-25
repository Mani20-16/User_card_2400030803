import React from "react";

function UserCard({ name, age, bio }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px",
    width: "250px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const nameStyle = { fontSize: "20px", fontWeight: "bold", marginBottom: "10px" };
  const ageStyle = { fontSize: "16px", marginBottom: "10px" };
  const bioStyle = { fontSize: "14px", color: "#555" };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={ageStyle}>Age: {age}</div>
      <div style={bioStyle}>{bio}</div>
    </div>
  );
}

export default UserCard;