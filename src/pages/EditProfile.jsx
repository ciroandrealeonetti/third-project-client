import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function EditProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [level, setLevel] = useState("");
  const [workouts, setWorkouts] = useState("");
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleWeight = (e) => setWeight(e.target.value);
  const handleHeight = (e) => setHeight(e.target.value);
  const handleLevel = (e) => setLevel(e.target.value);
  const handleWorkouts = (e) => setWorkouts(e.target.value);

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `{$process.env.REACT_APP_API_URL}/profile/${user._id}`
      );
      setName(response.data.name);
      setAge(response.data.age);
      setWeight(response.data.weight);
      setHeight(response.data.height);
      setLevel(response.data.level);
      setWorkouts(response.data.workouts);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/profile/${user._id}`, {
        name,
        age,
        weight,
        height,
        level,
        workouts,
      });
      setName("");
      setAge(0);
      setWeight(0);
      setHeight(0);
      setLevel("");
      setWorkouts("");

      navigate(`/profile/${user._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditProfile">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <label htmlFor="age">Age</label>
        <input type="text" name="age" value={age} onChange={handleAge} />
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={handleWeight}
        />
        <label htmlFor="height">Height</label>
        <input
          type="number"
          name="height"
          value={height}
          onChange={handleHeight}
        />
        <label htmlFor="level">Level</label>
        <input type="text" name="level" value={level} onChange={handleLevel} />
        <label htmlFor="workouts">Workouts</label>
        <input
          type="text"
          name="workouts"
          value={workouts}
          onChange={handleWorkouts}
        />

        <button type="submit">Edit Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
