import React from 'react';
import '../App.css';

function Login() { 
   
    const moveTo = () => {
        window.location.href = "/Home";
    }

    return (
      <div className="Login">
        <div className="loginBox">
          <h2>Login</h2>
          <form>
            <div className="formGroup">
              <label htmlFor="userId">ID:</label>
              <input type="text" id="userId" name="userId" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input type="text" id="password" name="password" />
            </div>
            <button type="submit" className="login-btn" onClick={moveTo}>Login</button>
          </form>
        </div>
      </div>
    );
  }

export default Login;