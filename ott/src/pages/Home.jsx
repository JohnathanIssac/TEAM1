import React from 'react';
import Nav from '../Nav';
import Poster from '../assets/MoviePoster.jpeg';
import Poster2 from '../assets/ReadyPlayer.jpeg';
function Home() {
  return (
    <div className="Home">
      <Nav />
      <div className="upperSection">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="image-wrapper">
              <img src={Poster} class="d-block w-100 img-fluid" alt="..." style={{objectFit: "cover", height: '400px'}}/>
              </div>
            <div class="carousel-caption d-none d-md-block">
            <button className="btn btn-secondary" style={{marginBottom: "10px"}}>Watch this right now!</button>
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Poster} class="d-block w-100" alt="..." style={{objectFit: "cover", height: '400px'}}/>
          <div class="carousel-caption d-none d-md-block">
          <button className="btn btn-secondary" style={{marginBottom: "10px"}}>Watch this right now!</button>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Poster2} class="d-block w-100" alt="..." style={{objectFit: "cover", height: '400px'}}/>
        <div class="carousel-caption d-none d-md-block">
        <button className="btn btn-secondary" style={{marginBottom: "10px"}}>Watch this right now!</button>
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  <div className="videoList">
    <div className="MovieList">

    </div>
    <div className="Animation">

    </div>
    <div className="Documentary">

    </div>
  </div>
    </div>
  );
}

export default Home;
