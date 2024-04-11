import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../hooks/firebaseconfig"; // Import auth from your Firebase configuration

import "./Login.css";

const Login = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value); // Use auth to create user with email and password
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    return <Navigate to="/MainPage" />;
  }

  return (
    <div className="signup-container">
      <h1 className="heade">Login</h1>
      <form onSubmit={handleSubmit} className="signup">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
        <p>Already have an account? <a href="/Login">Login</a></p>
      </form>
    </div>
  );
};

export default Login;
