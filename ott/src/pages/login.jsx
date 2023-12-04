import React from 'react';
import Nav from '../Nav';

function login() {

    const movingPage = () => {
        window.location.href("/Home");
    }
    return (
        <div>
            <Nav />
            <div className="Home">
        <h1>Welcome to OTT-service Platform</h1>
        <p>This is the home page content.</p>
        <button type="submit" onClick={movingPage}>Login</button>
        </div>
        </div>
    );
    }

export default login;
background: url('./assets/background_login.avif');