import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";


function Home() {
  return (
    <body className="home">
    <Hero/>
    <div >
    {/*<img
        src="/30-days-superhero-fitness-challenge-1280x720.jpeg"
        alt="Nature"
        className="responsive"
      ></img>*/}

      <h1>Find the right one!</h1>
      <Link to="/excersiseList">
        <button className="button">Exercises</button>
      </Link>
      
      
    </div>
    </body>
  );
}

export default Home;
