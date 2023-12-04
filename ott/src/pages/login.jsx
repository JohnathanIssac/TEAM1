import React from 'react';
import '../App.css';

function Login() {
    const movingPage = () => {
        window.location.href = "/Home";
    }
    return(
        <div className="Login">
            <form id="formmat" method="post">
                <div className="imgcontainer">
                    <h1>Login</h1>
                </div>
                <div className="con">
                    <label for="uname"><b>ID</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                        
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button className="loginButton" type="submit" onClick={movingPage}><b>Login</b></button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/><small>remember my information</small>
                    </label>
                </div>
                <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw"><a className="fp" href="#">do you forget your password?</a></span>
                </div>
            </form>
        </div>
    );
    }

export default Login;