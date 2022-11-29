import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AddToWorkout() {
    const [title, setTitle] = useState
    const [goal, setGoal] = useState
    const { loggedIn, user, logout } = useContext(AuthContext);

    const getWorkout = async () => {

        try{
const response = await axios.get(`http://localhost:5005/excercises`);
setTitle(response.data);
setGoal(response.data)
console.log(response.data);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getWorkout();
    }, []);
    
  return (
    <div className='Workout'>
    <h1>Workout Plan</h1>
    <h4>Title: {wo}</h4>
   
        
        
    </div>
  );
}

export default AddToWorkout