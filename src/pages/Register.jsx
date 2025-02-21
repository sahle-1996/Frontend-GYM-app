import { useState } from "react";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Navbar from "../components/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-primary text-light">
        <h2 
          className="text-center fw-bold mb-4"
          style={{
            background: "linear-gradient(to right, #3498db, #e74c3c)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          Create an Account
        </h2>

        <div className="container d-flex justify-content-center">
          <div className="col-md-6 bg-white p-4 rounded shadow-lg">
            <h3 className="text-center fw-semibold text-dark mb-3">Register</h3>

            {error && <div className="alert alert-danger text-center">{error}</div>}

            <AuthForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              buttonText="Register"
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
