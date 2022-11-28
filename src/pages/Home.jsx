import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Wanafit</h1>
      <Link to="/excersiseList">
        <button>Exercises</button>
      </Link>
    </div>
  );
}

export default Home;
