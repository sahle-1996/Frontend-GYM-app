import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div style={{ marginLeft: "1.5rem", fontSize: "1.5rem", fontWeight: "bold" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Gym Tracker
        </Link>
      </div>
      <div style={{ marginRight: "1.5rem", display: "flex", gap: "1rem" }}>
        <Link
          to="/workouts"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#bbbbbb")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Workouts
        </Link>
        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#bbbbbb")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#bbbbbb")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
