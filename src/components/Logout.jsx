import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { useState } from 'react';

const Logout = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Remove token from localStorage to log out
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/"); // Redirect to login page after logout (or home page)
  };

  return (
    <nav style={{ backgroundColor: "#4C51BF", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#FFFFFF" }}>
      <div style={{ fontSize: "1.125rem", fontWeight: "600" }}>Workout App</div>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#E53E3E", 
          padding: "8px 16px", 
          borderRadius: "8px", 
          color: "#FFFFFF", 
          fontWeight: "600", 
          cursor: "pointer", 
          transition: "background-color 0.2s ease"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "#C53030"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#E53E3E"}
      >
        Logout
      </button>
    </nav>
  );
};

export default Logout;
