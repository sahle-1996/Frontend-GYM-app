const InputField = ({ type, name, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "12px",
        border: "1px solid #D1D5DB",
        borderRadius: "8px",
        marginBottom: "16px",
        color: "#1F2937", // Gray 800
        backgroundColor: "#FFFFFF",
        outline: "none",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease"
      }}
      placeholder={placeholder}
      required
      onFocus={(e) => e.target.style.borderColor = "#3B82F6"}  // Blue border on focus
      onBlur={(e) => e.target.style.borderColor = "#D1D5DB"}   // Gray border when focus is lost
    />
  );
};

export default InputField;
