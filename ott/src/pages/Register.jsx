import React from 'react';
import '../App.css';

function Register() {

    const registeringUser = () => {
        alert('Welcome!');
        window.location.href = "/Home";
    }

    return (
        <div className="Register">
        <div className="signUpForm">
            <h2 style={{marginBottm: '20px'}}>Sign Up</h2>
            <div className="userInput">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            </div>
            <div className="userInput">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" />
            </div>
            <div className="userInput">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            </div>
            <div className="userInput">
            <label htmlFor="check-password">Check Password:</label>
            <input type="password" id="check-password" name="check-password" />
            </div>
            <div className="userInput">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" />
            </div>
            <div className="userInput">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
            </div>
            <button className="register-btn" onClick={registeringUser}>Register!</button>
        </div>
        </div>
    );
}

export default Register;