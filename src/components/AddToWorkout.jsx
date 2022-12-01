import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AddToWorkout(props) {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("lose weight");
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
      props.getProfile()
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="Workout">
      
      <Card style={{ width: "auto", height: "auto" }}>
      <Card.Body className="workoutCard">
      <h2>Workouts</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" name="title" value={title} onChange={handleTitle} />
        <br />
        <select onChange={handleGoal} name="goal" value={goal}>
          <option value="lose weight">Lose Weight</option>
          <option value="get toned"> Get Toned</option>
          <option value="build muscle"> Build Muscle </option>
        </select>

        <button className="button" type="submit"> Create workout</button>
       
      </form>
      </Card.Body>
      </Card>
    </div>
  );
}

export default AddToWorkout;
