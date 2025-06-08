import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./LoginSignup.css";
import validator from "validator";

const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateName =(e)=>{
localStorage.setItem("Name",e.target.value);
  }

  const validateEmail = (e) => {
    const email = e.target.value;
localStorage.setItem("Email",email);
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const validatePassword = (e) => {
    const value = e.target.value;
    localStorage.setItem("Password", value);
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
    } else {
      setErrorMessage("Password must be of min 8 characters");
    }
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <input type="text" placeholder="Name" required onChange={(e)=>validateName(e)} />
        </div>
        <div className="input">
          <input
            type="email"
            placeholder="Email Id"
            onChange={(e) => validateEmail(e)}
            required
          />
        </div>
        {emailError === "" ? null : (
          <span style={{ fontWeight: "bold", color: "red", paddingLeft: 50 }}>
            {emailError}
          </span>
        )}
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => validatePassword(e)}
            required
          />
        </div>
        {errorMessage === "" ? null: (
          <span style={{ fontWeight: "bold", color: "red", paddingLeft: 50 }}>
            {errorMessage}
          </span>
        ) }
      </div>

      <div className="submit-container">
        <Link to="/signup" className="submit">
          Sign Up
        </Link>
        <Link to="/login" className="submit gray">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
