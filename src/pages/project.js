import React from 'react';
import Game from './Game.png';
import NewsApp from './NewsApp.png';
import EStore from './EStore.png';

const Project = () => {
    const currentYear = new Date().getFullYear();

    return <>
<nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'lightgray', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/project">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/skill">Skill</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<br />

<h1>Projects</h1>
    <br />

<div className="row justify-content-center">
    <div className="col-md-4">
        <div className="card" style={{ width: '20rem' }}>
            <img src={NewsApp} width={300} height={200} className="card-img-top" alt="..." />
            <div className="card mx-3 mb-4" style={{ width: '18rem' }}>
                <div className="card-body" >
                <h5 className="card-title">News Application</h5>
                <h6 className="card-subtitle mb-2 text-muted">Android App</h6>
                <p className="card-text">I have created using Android Studio to deliver news articles, videos, and other content to users in a convenient and accessible manner.
                It uses JavaScript and CSS.</p>
                <a href="https://github.com/karim2209/NewsApp.git" target="_blank" rel="noopener noreferrer">NewsApp Repository</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-md-4">
         <div className="card" style={{ width: '20rem' }}>
            <img src={EStore} width={300} height={200} className="card-img-top" alt="..." />
                <div className="card mx-3 mb-4" style={{ width: '18rem' }}>
                <div className="card-body" >
                <h5 className="card-title">Electronic E-Store Website</h5>
                <h6 className="card-subtitle mb-2 text-muted">C#</h6>
                <p className="card-text">I have created using Visual Studio application to create a Electronic E-Store Website.
                It uses C#, CSS, and HTML.</p>
                <a href="https://github.com/karim2209/E-Store-Final.git" target="_blank" rel="noopener noreferrer">E-Store Repository</a>
                </div>
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card" style={{ width: '20rem' }}>
            <img src={Game} width={300} height={200} className="card-img-top" alt="..." />
                <div className="card mx-3 mb-4" style={{ width: '18rem' }}>
                <div className="card-body" >
                <h5 className="card-title">Paython Game</h5>
                <h6 className="card-subtitle mb-2 text-muted">Simple game using Paython.</h6>
                <p className="card-text">The game, the objective is to control the spaceship (player) using the left and right arrow keys, dodging falling stars. 
                The longer you survive without colliding with a star, the higher your score becomes. Different levels have different score goals for winning the game.</p>
                <a href="https://github.com/karim2209/SpaceDodgeGame.git" target="_blank" rel="noopener noreferrer">Game Repository</a>
                </div>
            </div>
        </div>
    </div>
</div>
<br />
<br />
<br />
<br />


<div className="container body-content">
        <footer className="footer">
            <p>&copy; {currentYear} - Karim Mahmoud - <a href="https://www.linkedin.com/in/karim-mahmoud-580a56b6/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </footer>
     </div>
    </>
};

export default Project;