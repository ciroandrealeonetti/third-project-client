import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AddToWorkout() {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const { user } = useContext(AuthContext);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleGoal = (e) => {
    console.log(e.target.value);
    setGoal(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/workouts/create`,
        { title, goal, userId: user._id }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Workout">
      <h1>Workout Plan</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <select onChange={handleGoal} name="goal" value={goal}>
          <option value="lose weight">Lose Weight</option>
          <option value="get toned"> Get Toned</option>
          <option value="build muscle"> Build Muscle </option>
        </select>

        <button type="submit"> Create workout</button>
      </form>
    </div>
  );
}

export default AddToWorkout;
