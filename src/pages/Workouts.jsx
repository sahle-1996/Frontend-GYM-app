import { useState, useEffect } from "react";
import { getWorkouts, deleteWorkout, createWorkout, updateWorkout } from "../api/workout";
import WorkoutCard from "../components/WorkoutCard";
import AddWorkout from "../components/AddWorkout";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showAddWorkout, setShowAddWorkout] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [workoutToEdit, setWorkoutToEdit] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getUserIdFromToken = () => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.id || null;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchWorkouts();
  }, [token, navigate]);

  const fetchWorkouts = async () => {
    try {
      const userId = getUserIdFromToken();
      if (userId) {
        const workoutsData = await getWorkouts(userId);
        setWorkouts(workoutsData);
      } else {
        setError("Invalid token. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      setError("Failed to load workouts. Please check your connection.");
      console.error("Error fetching workouts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteWorkout(id);
      setWorkouts((prevWorkouts) =>
        prevWorkouts.filter((workout) => workout._id !== id)
      );
    } catch (error) {
      setError("Failed to delete workout.");
    }
  };

  const handleAddWorkout = async (newWorkout) => {
    try {
      const addedWorkout = await createWorkout(newWorkout);
      setWorkouts((prevWorkouts) => [...prevWorkouts, addedWorkout]);
      setShowAddWorkout(false);
    } catch (error) {
      setError("Failed to add workout.");
    }
  };

  const handleEditWorkout = async (updatedWorkout) => {
    try {
      const workoutId = workoutToEdit._id;
      const response = await updateWorkout(workoutId, updatedWorkout);

      setWorkouts((prevWorkouts) =>
        prevWorkouts.map((workout) =>
          workout._id === workoutId ? response : workout
        )
      );
      setShowAddWorkout(false);
      setWorkoutToEdit(null);
    } catch (error) {
      setError("Failed to update workout.");
    }
  };

  const handleEditClick = (workout) => {
    setWorkoutToEdit(workout);
    setShowAddWorkout(true);
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom, #6610f2, #6f42c1)",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Loading Workouts...
        </h2>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #6610f2, #6f42c1)",
        padding: "40px",
        color: "white",
      }}
    >
      <Logout />
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>
        My Workouts
      </h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setShowAddWorkout(true)}
          className="btn btn-warning"
          style={{
            fontWeight: "600",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          }}
        >
          Add Workout
        </button>
      </div>

      {showAddWorkout && (
        <div style={{ marginBottom: "20px" }}>
          <AddWorkout
            onAdd={handleAddWorkout}
            workoutToEdit={workoutToEdit}
            onEdit={handleEditWorkout}
          />
        </div>
      )}

      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row">
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <div className="col-md-6 col-lg-4 mb-4" key={workout._id}>
              <WorkoutCard
                workout={workout}
                onDelete={handleDelete}
                onEdit={handleEditClick}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-light">No workouts found. Please add one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workouts;
