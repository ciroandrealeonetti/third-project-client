import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    
    <div>
    
      <h1>Wanafit</h1>
      <Link to="/excersiseList">
        <button>Exercises</button>
      </Link>
      <img
        src="/30-days-superhero-fitness-challenge-1280x720.jpeg"
        alt="Nature"
        className="responsive"
      ></img>
    </div>
  );
}

export default Home;
