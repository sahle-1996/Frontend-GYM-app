import React from "react";
import { formatDistanceToNow } from "date-fns";

const WorkoutCard = ({ workout, onDelete, onEdit }) => {
  const exercises = workout.exercises || []; // Default to empty array if no exercises
  const workoutDate = workout.createdAt ? new Date(workout.createdAt) : null; // Make sure the date is available
  const isValidDate = workoutDate && !isNaN(workoutDate);

  const formattedDate = isValidDate
    ? formatDistanceToNow(workoutDate, { addSuffix: true })
    : "Invalid date"; // Display a fallback message if the date is invalid

  const workoutTitle = workout.title || "Untitled Workout"; // Fallback to "Untitled Workout" if no title is provided

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        padding: "20px",
        width: "100%", // Ensures full width inside its container
        maxWidth: "500px", // Prevents it from getting too wide
        margin: "20px auto", // Centers it horizontally
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#2563eb", // Blue color
          marginBottom: "10px",
        }}
      >
        {workoutTitle}
      </h3>

      {exercises.length > 0 ? (
        exercises.map((exercise, index) => (
          <div
            key={index}
            style={{
              color: "#333",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p>
              <strong>Exercise {index + 1}:</strong> {exercise.name}
            </p>
            <p>
              <strong>Load (kg):</strong> {exercise.load}
            </p>
            <p>
              <strong>Reps:</strong> {exercise.reps}
            </p>
          </div>
        ))
      ) : (
        <p style={{ color: "#6b7280" }}>No exercises added yet.</p>
      )}

      <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>{formattedDate}</p>

      {/* Delete button */}
      <button
        onClick={() => onDelete(workout._id)}
        style={{
          color: "#dc2626", // Red
          border: "none",
          background: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
          marginRight: "10px",
        }}
        aria-label={`Delete workout: ${workoutTitle}`}
      >
        🗑️
      </button>

      {/* Edit button */}
      <button
        onClick={() => onEdit(workout)}
        style={{
          color: "#d97706", // Yellow
          border: "none",
          background: "none",
          cursor: "pointer",
          fontSize: "1.2rem",
        }}
        aria-label={`Edit workout: ${workoutTitle}`}
      >
        ✏️ Edit
      </button>
    </div>
  );
};

export default WorkoutCard;
