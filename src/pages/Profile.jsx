import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import AddToWorkout from "../components/AddToWorkout.jsx";
import Card from "react-bootstrap/Card";

function Profile() {
  const [profile, setProfile] = useState(null);

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
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  const deleteWorkout = async (id) => {
    try{
await axios.delete(`${process.env.REACT_APP_API_URL}/workouts/${id}`)
getProfile();
    }catch(error){
        console.log(error)
    }
}

  return (
    <div className="UserProfile">
      <Hero />
      <Card style={{ width: "auto", height: "auto" }}>
        <Card.Body className="profileCard">
          {profile && (
            <>
              <h2>Profile</h2>
              <p>Name: {profile.name}</p>
              <p>Age: {profile.age}</p>
              <p>Weight: {profile.weight}</p>
              <p>Height: {profile.height}</p>
              <p>Level: {profile.level}</p>
            </>
          )}
          {profile && (
            <>
              <Link to={`/editprofile`}>
                <button className="button" type="submit">Edit Profile</button>
              </Link>
            </>
          )}
          </Card.Body>
          </Card>
         
          <Card style={{ width: "auto", height: "auto" }}>
          <Card.Body className="addWorkoutCard">
          <AddToWorkout getProfile={getProfile}/>
          {profile &&
            profile.workouts.map((workout) => {
              return (
                <Card style={{ width: "auto", height: "auto" }}>
          <Card.Body className="eachWorkout">
                <div>
                  <h4>{workout.title} </h4>
                  {workout &&
                    workout.excercises.map((excercise) => {
                      return <p>{excercise.name}</p>;
                    })}
                    <button className="button" onClick={() => deleteWorkout(workout._id)}> Delete Workout </button>
                </div>
                </Card.Body>
                 </Card>
              );
            })}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
