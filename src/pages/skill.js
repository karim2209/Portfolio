import React from 'react';

const Skill  = () => {
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

    <h1>Skills</h1>
    <br/>

<div className="card">
    <div className="card-header">
    Adobe Products
    </div>
    <div className="card-body">
        <p className="card-text">Proficient in Photoshop and Illustrator. Capabilities include
    color correction, complex selections, optimization of images
    for use on the web using Photoshop.</p>
        <p className="card-text">Using Illustrator I am proficient with vector graphics for logos and compay baranding
as well as creating storyboard or wireframes.</p>
    </div>
</div>
<br />

<div className="card">
    <div className="card-header">
    HTML, CSS, JavaScript, C#, C++, and SQL
    </div>
    <div className="card-body">
        <p className="card-text">Proficient in Visual Studio developing interactive websites using HTML, 
    CSS, JavaScript, C#, and C++. Familliar with HTML5, CSS3 and JavaScript for interactivity.</p>
        <p className="card-text">Proficient in Microsoft SQL Server Manager designing Databases.</p>
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

export default Skill;