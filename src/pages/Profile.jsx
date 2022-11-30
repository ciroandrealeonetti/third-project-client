import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import AddToWorkout from "../components/AddToWorkout.jsx";
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

  return (
    <div className="UserProfile">
      <Hero />
      {profile && (
        <>
          <h3>profile Profile</h3>
          <p>{profile.name}</p>
          <p>{profile.age}</p>
          <p>{profile.weight}</p>
          <p>{profile.height}</p>
          <p>{profile.level}</p>
        </>
      )}
      <AddToWorkout />
      {profile &&
        profile.workouts.map((workout) => {
          return (
            <div>
            <p>{workout.title} </p>
            {workout &&
            
            workout.excercises.map(excercise =>{
              return(<p>{excercise.name}</p>)
            })}
            </div>
            );
        })}
      {profile && (
        <>
          <Link to={`/editprofile`}>
            <button type="submit">Edit Profile</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Profile;
