import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(""); // Clear error if the user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      await registerUser(formData);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.msg || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(to right, #6a11cb, #2575fc)",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              background: "linear-gradient(to right, #3b82f6, #9333ea)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Create an Account
          </h2>
          {error && (
            <p style={{ color: "red", textAlign: "center", marginBottom: "15px" }}>
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #D1D5DB",
                  backgroundColor: "#fff",
                  color: "#1F2937",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #D1D5DB",
                  backgroundColor: "#fff",
                  color: "#1F2937",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #D1D5DB",
                  backgroundColor: "#fff",
                  color: "#1F2937",
                  fontSize: "16px",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: loading ? "#b0b3b8" : "#3b82f6",
                color: "white",
                fontSize: "16px",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                fontWeight: "bold",
              }}
              disabled={loading}
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;