const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2D3748", color: "#FFFFFF", textAlign: "center", padding: "16px", marginTop: "32px" }}>
      <p>&copy; {new Date().getFullYear()} Gym Tracker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
