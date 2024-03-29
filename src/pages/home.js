import React from 'react';
import Image from './Image.jpg';

const Home = () => {
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

<div className='App'>
    <img src={Image} alt="" width={160} height={160} style={{ float: 'left', marginRight: '20px' }} />
</div>
<div className="card">
    <div className="card-header">
     <h4>Who I am</h4>
    </div>
    <div className="card-body">
        <p className="card-text">I am Karim Mahmoud. I was born on June 2nd, 1987. I can speak (Arabic, French and English).</p>
        <p className="card-text">I finished high school in 2005. I stied the French language at school and at universty.</p>
        <p className="card-text">As hobbies, I love cars, especially Mercedes. </p>
        <p className="card-text">Just moved to Canada on Sep 2022 with my familly coming from Eygpt.</p>
        <p className="card-text">I enrolled myself in ENTERPRISE WEB AND MODILE DEVELOPER course at triOS college
    to enhanse my professional skills.</p>
    </div>
</div>
<br />

<div className="card">
    <div className="card-header">
    <h4>Why you want to hire me</h4>
    </div>
    <div className="card-body">
        <p className="card-text">Dealing with people from a wide variety of culture background. Excellent communication skills.</p>
        <p className="card-text">Strong multi-cultural awareness. Good adaptability to multinational environment, with wide exposure to various cultures.</p>
        <p className="card-text">Qualities of a team player. </p>
        <p className="card-text">Great ability of surfing the internet specially in making research.</p>
        <p className="card-text">Positive and upbeat personality with a desire to deliver outstanding customer service to guests.</p>
        <p className="card-text">Ability to multi-task, be detail-oriented, and be able to problem solve to effectively deal with customers.</p>
        <p className="card-text">Ability to work independently and with minimal supervision, also able to problem solves and troubleshoots to resolve guest issues that may arrive and respond to emergency situations.</p>
    </div>
</div>
<br />

<div className="card">
    <div className="card-header">
    <h4>How to find me</h4>
    </div>
    <div className="card-body">
        <p className="card-text">Phone: 674-778-0493</p>
        <p className="card-text">Email: karim.mahmoud@studenttrios.com</p>
        <a href="https://www.linkedin.com/in/karim-mahmoud-580a56b6/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
        <a href="https://github.com/karim2209?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a>
    </div>
</div>

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

export default Home;