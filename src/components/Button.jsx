const Button = ({ text, onClick, type = "button", variant = "primary" }) => {
  const styles = variant === "primary"
    ? {
        backgroundColor: "#3B82F6", 
        hoverBackgroundColor: "#2563EB", 
        color: "#FFFFFF"
      }
    : {
        backgroundColor: "#E5E7EB", 
        hoverBackgroundColor: "#D1D5DB", 
        color: "#000000"
      };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: "8px",
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        cursor: "pointer",
        transition: "background-color 0.3s ease"
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = styles.hoverBackgroundColor}
      onMouseOut={(e) => e.target.style.backgroundColor = styles.backgroundColor}
    >
      {text}
    </button>
  );
};

export default Button;
