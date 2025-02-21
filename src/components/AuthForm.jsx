import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const AuthForm = ({ formData, handleChange, handleSubmit, buttonText, error }) => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <form 
        onSubmit={handleSubmit} 
        className="container bg-light p-4 rounded shadow-sm"
        style={{ maxWidth: "400px", border: "1px solid #ddd" }}
      >
        {error && (
          <div className="alert alert-danger p-2 mb-3 text-center" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <InputField 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={handleChange} 
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <InputField 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange} 
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <InputField 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={handleChange} 
            className="form-control"
          />
        </div>

        <div className="d-grid">
          <Button text={buttonText} type="submit" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
