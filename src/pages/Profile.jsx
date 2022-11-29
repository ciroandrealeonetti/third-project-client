import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context.js";
import Hero from "../components/Hero.jsx";
function Profile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);
  

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
    <Hero/>
      {user && (
        <>
          <h3>User Profile</h3>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.weight}</p>
          <p>{user.height}</p>
          <p>{user.level}</p>
          <p>{user.workouts}</p>
        </>
      )}

      {user && (
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
