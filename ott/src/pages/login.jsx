import React from 'react';
import '../App.css';

function Login() { 
   
    const moveTo = () => {
        window.location.href = "/Home";
    }

    return (
        <div className="Login">
        <div className="loginBox">
          <h2 style={{marginBottom: "20px"}}>Login</h2>
          <form>
            <div className="formGroup">
              <label htmlFor="username">ID:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="formGroup">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="button" className="login-btn" onClick={moveTo}>Login</button>
          </form>
        </div>
      </div>
    );
  }

export default Login;