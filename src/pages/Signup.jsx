import axios from "axios";

import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

function Signup() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const handlePassword = (e) => setPassword(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);

    const handleSignupSubmit = async (e) => {

        e.preventDefault();
        try{
            await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {email, password});
            navigate("/")
        }catch(error){
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        }
    };

  return (
    <div className="SignupPage">
    <h1>Signup</h1>

    <form onSubmit={handleSignupSubmit}>
    <label>Name:</label>
    <input type="email" name="email" value={email} onChange={handleEmail} />

    <label>Password:</label>
    <input type="password" name="password" value={password} onChange={handlePassword} />

    <button type="submit">Sign Up</button>
    </form>

    {errorMessage && <p className="error-message">{errorMessage}</p>}

    <p>Already have account?</p>
      <Link to={'/login'}> Login</Link>


    </div>
  )
}

export default Signup