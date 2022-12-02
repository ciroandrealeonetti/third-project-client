import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Card from "react-bootstrap/Card";

function ExcerciseDetails() {
  const [excersise, setExcercise] = useState([]);
  const [workout, setWorkout] = useState("");
  const [profile, setProfile] = useState(null);
  const { name } = useParams();

  const navigate = useNavigate();

  const handleWorkout = (e) => setWorkout(e.target.value);

  const getProfile = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setProfile(response.data);
      setWorkout(response.data.workouts[0])
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getExcerciseDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/excercises/details/${name}`
      );
      setExcercise(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
e.preventDefault()
      const resp = await axios.post(
        `${process.env.REACT_APP_API_URL}/excercises/details/${name}`, {workoutId:workout}
      );
      
      console.log(resp.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExcerciseDetails();
    getProfile();
  }, []);

  return (
    <div className="ExcerciseDetails">
      <Hero />
      <h1>Exercise Details</h1>
      <Card style={{ width: "auto", height: "auto" }}>
      <Card.Body className="detailsCard">
      {excersise && (
        <div key={excersise._id} className="ExcerciseCardDetails">
          <Link to={`/excerciseDetails/${excersise._id}`}>
            <h3 className="exerciseName">{excersise.name}</h3>
          </Link>
          <h4>Type: {excersise.type}</h4>
          <h4>Muscle: {excersise.muscle}</h4>
          <h4>Equipment: {excersise.equipment}</h4>
          <h4>Difficulty: {excersise.difficulty}</h4>
          <h4>Instructions: {excersise.instructions}</h4>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <select value={workout} onChange={handleWorkout} name="workout">
          {profile &&
            profile.workouts.map((workout) => {
              return <option value={workout._id}>{workout.title} </option>;
            })}
        </select>
        <button className="button" type="submit">Add to workout</button>
      </form>
      </Card.Body>
      </Card>
    </div>
  );
}

export default ExcerciseDetails;
