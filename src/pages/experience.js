import React from 'react';

const Experience  = () => {
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

    <h1>Experience</h1>
    <br />

<div className="card">
    <div className="card-header">
    Sakkara Tours (2010)
    </div>
    <div className="card-body">
        <h5 className="card-title">Tourist Tour Guide </h5>
        <p className="card-text">Direct and accompany passengers on multi-day tours.</p>
        <p className="card-text">Manage arrangements and services and provide relevant information and commentary.
            Provide general knowledge of attractions and destinations.</p>
         <p className="card-text">Prepare for tour by planning and confirming reservations.
            Complete tour reports, daily logs, and expense reports.</p>
    </div>
</div>
<br />

<div className="card">
    <div className="card-header">
    IBM - Eygpt (2015 - 2022)
    </div>
    <div className="card-body">
        <h5 className="card-title">Senior Remote Technical Support</h5>
        <p className="card-text">Providing voice support to IBM and Lenovo Internal End Users and External Commercial Account End Users across France, Belgium & Switzerland.</p>
        <p className="card-text">Handling outbound calls / emails / chats regarding technical issues for users.</p>
        <p className="card-text">Remote Infrastructure support delivery. Perform problem cause analysis.</p>
        <p className="card-text">Ability to Identify Opportunity & Implement Process Improvements.</p> 
    </div>
</div>

<br/>
<br />
<br />

    <div className="container body-content">
        <footer className="footer">
            <p>&copy; {currentYear} - Karim Mahmoud - <a href="https://www.linkedin.com/in/karim-mahmoud-580a56b6/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </footer>
     </div>
    </>
};

export default Experience;