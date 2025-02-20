import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "2rem",
          background: "linear-gradient(135deg, #7b2ff7, #5a1cff, #3a0df6)",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
            marginBottom: "1rem",
          }}
        >
          Welcome to Gym Workout Tracker
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            marginBottom: "2rem",
            opacity: "0.9",
          }}
        >
          Track your workouts and achieve your fitness goals! Whether you're lifting
          weights, running, or doing bodyweight exercises, we help you stay on track.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link
            to="/register"
            style={{
              padding: "12px 24px",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "8px",
              textDecoration: "none",
              backgroundColor: "#ffcc00",
              color: "black",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              display: "inline-block",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#e6b800")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#ffcc00")
            }
          >
            Get Started
          </Link>
          <Link
            to="/login"
            style={{
              padding: "12px 24px",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "8px",
              textDecoration: "none",
              backgroundColor: "#f1f1f1",
              color: "#333",
              transition: "all 0.3s ease-in-out",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              display: "inline-block",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#ddd")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#f1f1f1")
            }
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
