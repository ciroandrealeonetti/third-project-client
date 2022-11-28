import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <div key={excersise._id} className="ExcersiseCard card">
            <Link to={`/excersiseList/${excersise._id}`}>
              <h3>{excersise.name}</h3>
            </Link>
            <h4>{excersise.type}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default ExcerciseList;
