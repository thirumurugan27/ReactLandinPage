import React from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login">
      <div className="loginbox">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input className="inputbox" type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input className="inputbox" type="password" placeholder="Enter your password" required />
          </div>
          <button className="libutton" type="submit">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
