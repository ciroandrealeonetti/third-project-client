import axios from "axios";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Hero from "../components/Hero";

function Signup(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="SignupPage">
      <Hero />
      <Card style={{ width: "auto", height: "auto" }}>
        <Card.Body className="signupCard">
          <h1>Signup</h1>

          <form onSubmit={handleSignupSubmit}>
            <label>Name:</label>
            <br />
            <input
              className="inputName"
              type="name"
              name="name"
              value={name}
              onChange={handleName}
            />
            <br />

            <label>Email:</label>
            <br />
            <input
              className="inputEmail"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            <br />

            <label>Password:</label>
            <br />
            <input
              className="inputPassword"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />

            <button className="buttonSignup" type="submit">
              Sign Up
            </button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>Already have account?</p>
          <Link to={"/login"}> Login</Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;
