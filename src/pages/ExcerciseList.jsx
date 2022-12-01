import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context.js";

import Hero from "../components/Hero.jsx";

function ExcerciseList() {
  const [excerciseList, setExcerciseList] = useState([]);
  const { loggedIn, user, logout } = useContext(AuthContext);

  const getExcercises = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/excercises`);
      setExcerciseList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExcercises();
  }, []);

  return (
    <div className="ExcerciseListPage">
      <Hero />
      <h1>Exercises</h1>
      
      <div className="AllCards">
        {excerciseList.map((excersise) => {
          return (
            <Card style={{ width: "auto", height: "auto" }}>
              <Card.Body>
                <div key={excersise._id} className="ExcerciseCard card">
                  <Link to={`/excersiseList/${excersise._id}`}>
                    <h3 className="exerciseName">{excersise.name}</h3>
                  </Link>
                  <h4>Type: {excersise.type}</h4>
                  {loggedIn && (
                    <Link to={`/excerciseDetails/${excersise.name}`}>
                      <Button variant="primary" className="button">Details</Button>
                    </Link>
                  )}
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ExcerciseList;
