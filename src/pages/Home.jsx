import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";


function Home() {
  return (
    <body className="home">
    {/*<Hero/>*/}
    <div >
   <img
        src="/CHRIS HEMSWORTH WORKOUT.jpeg"
        alt="Nature"
        className="responsive"
      ></img>

      <h1>WanaFit</h1>
      <Link to="/excersiseList">
        <button className="button">Exercises</button>
      </Link>
      
    </div>
    </body>
  );
}


export default Home;
