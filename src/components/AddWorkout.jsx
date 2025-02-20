import React, { useState, useEffect } from "react";

const AddWorkout = ({ onAdd, workoutToEdit, onEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  // Populate the form with the workout data if editing
  useEffect(() => {
    if (workoutToEdit) {
      setTitle(workoutToEdit.title);
      setDescription(workoutToEdit.exercises[0]?.description || "");
      setLoad(workoutToEdit.exercises[0]?.load || "");
      setReps(workoutToEdit.exercises[0]?.reps || "");
    }
  }, [workoutToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate form fields
    if (!title || isNaN(load) || isNaN(reps)) {
      setError("Please fill in all fields correctly.");
      return;
    }

    const workoutData = {
      title,
      exercises: [{ description, load: Number(load), reps: Number(reps) }],
    };

    if (workoutToEdit) {
      onEdit(workoutData); // Update the workout if we're editing
    } else {
      onAdd(workoutData); // Add the workout if it's a new one
    }
  };

  return (
    <div style={{ backgroundColor: "#fff", padding: "32px", borderRadius: "10px", boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", maxWidth: "600px", margin: "40px auto" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#4F46E5", textAlign: "center", marginBottom: "24px" }}>
        {workoutToEdit ? "Edit Workout" : "Add New Workout"}
      </h2>

      {error && <p style={{ color: "#EF4444", textAlign: "center", marginBottom: "20px" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "24px", marginBottom: "24px" }}>
        <div>
          <input
            type="text"
            placeholder="Workout Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "2px solid #D1D5DB",
              borderRadius: "8px",
              fontSize: "1rem",
              color: "#374151",
              backgroundColor: "#F9FAFB",
              transition: "border-color 0.3s ease, background-color 0.3s ease",
            }}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Workout Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "2px solid #D1D5DB",
              borderRadius: "8px",
              fontSize: "1rem",
              color: "#374151",
              backgroundColor: "#F9FAFB",
              transition: "border-color 0.3s ease, background-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          <div>
            <input
              type="number"
              placeholder="Load (kg)"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #D1D5DB",
                borderRadius: "8px",
                fontSize: "1rem",
                color: "#374151",
                backgroundColor: "#F9FAFB",
                transition: "border-color 0.3s ease, background-color 0.3s ease",
              }}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #D1D5DB",
                borderRadius: "8px",
                fontSize: "1rem",
                color: "#374151",
                backgroundColor: "#F9FAFB",
                transition: "border-color 0.3s ease, background-color 0.3s ease",
              }}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#3B82F6",
              color: "white",
              fontSize: "1rem",
              fontWeight: "600",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {workoutToEdit ? "Update Workout" : "Add Workout"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWorkout;
