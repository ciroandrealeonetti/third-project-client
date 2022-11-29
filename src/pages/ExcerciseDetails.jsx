import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
function ExcerciseDetails() {
  const [excersise, setExcercise] = useState([]);
  const [added, setAdded] = useState([]);
  const { name } = useParams();

  const navigate = useNavigate();

  const getExcerciseDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/excercises/details/${name}`
      );
      setExcercise(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const resp = await axios.post(
        `http://localhost:5005/excercises/details/${name}`
      );
      setAdded(resp.data);
      console.log(resp);
      navigate("/profile/:id");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExcerciseDetails();
  }, []);

  return (
    <div className="ExcerciseDetails">
    <Hero/>
      <h1>Exercise Details</h1>
      {excersise && (
        <div key={excersise._id} className="ExcerciseCardDetails">
          <Link to={`/excerciseDetails/${excersise._id}`}>
            <h3>{excersise.name}</h3>
          </Link>
          <h4>Type: {excersise.type}</h4>
          <h4>Muscle: {excersise.muscle}</h4>
          <h4>Equipment: {excersise.equipment}</h4>
          <h4>Difficulty: {excersise.difficulty}</h4>
          <h4>Instructions: {excersise.instructions}</h4>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <button type="submit">Add to workout</button>
      </form>
    </div>
  );
}

export default ExcerciseDetails;
