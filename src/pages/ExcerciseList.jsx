import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function ExcerciseList() {
  const [excerciseList, setExcerciseList] = useState([]);

  const getExcercises = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/excercises`);
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
      <h1>Exercises</h1>
      {excerciseList.map((excersise) => {
        return (
          <Card style={{ width: 'auto', backgroundColor: 'white', height: 'auto' }}>
          <Card.Body>
          <div key={excersise._id} className="ExcerciseCard card">
            <Link to={`/excersiseList/${excersise._id}`}>
              <h3>{excersise.name}</h3>
            </Link>
            <h4>{excersise.type}</h4>
            <Link to={`/excerciseDetails/${excersise.name}`}>
        <Button variant="primary">Details</Button>
      </Link>
          </div>
          </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default ExcerciseList;

