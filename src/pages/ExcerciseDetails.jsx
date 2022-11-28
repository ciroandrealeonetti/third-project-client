import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ExcerciseDetails() {
  const [excersise, setExcercise] = useState(null);
  const {name} = useParams();
  const getExcerciseDetails = async () =>{
    try{
  const response = await axios.get(`http://localhost:5005/api/excercises/details/${name}`);
      setExcercise(response.data);
      console.log(response.data);
}catch (error){
console.log(error);
}
};

useEffect(() =>{
  getExcerciseDetails();
}, []);

  return (
    <div className='ExcerciseDetails'>
    <h1>Exercise Details</h1>
    {excersise && (
        <div key={excersise._id} className="ExcerciseCardDetails">
        <Link to={`/excerciseDetails/${excersise._id}`}>
          <h3>{excersise.name}</h3>
        </Link>
        <h4>{excersise.type}</h4>
        <h4>{excersise.muscle}</h4>
        <h4>{excersise.equipment}</h4>
        <h4>{excersise.difficulty}</h4>
        <h4>{excersise.instructions}</h4>
        </div>
      )
    }

    </div>
  );
}

export default ExcerciseDetails