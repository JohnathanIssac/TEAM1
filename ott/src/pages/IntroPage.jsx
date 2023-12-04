import React from 'react';
import '../App.css';

function IntroPage() {

    const moveTo = () => {
        window.location.href = "/login";
    }

  return (
    <div className="intro-container">
      <div className="login-button">
        <button className="btn btn-primary" onClick={moveTo}>Log in</button>
      </div>
      <div className="intro-content">
        <h1>want you watch interest content? use it!</h1>
        <p className="small-text">
            <div className="IntroExp">
                Welcome to our OTT streaming service, where entertainment knows no bounds. Explore a vast library of movies, series, documentaries, and more, tailored to suit every taste. Enjoy seamless access to premium content anytime, anywhere, on any device. Dive into a world of captivating stories and immersive experiences curated just for you. Join us and elevate your entertainment journey with the best of what OTT has to offer.
            </div>
        </p>
      </div>
    </div>
  );
}

export default IntroPage;