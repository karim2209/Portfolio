import React from 'react';

const Education  = () => {
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

 <h1>Education</h1>
 <br />

 <div className="card">
    <div className="card-header">
    triOS College - Toronto Campus (Dec/2022 - June/2024)
    </div>
    <div className="card-body">
        <h5 className="card-title">Entreprise Web and Mobile Development</h5>
        <p className="card-text">First and foremost I am learning to be a developer. I am reveiving constant practive and reinforcement of general
    skills such as logic, design, debugging, structurs and object oriented skills.</p>
        <p className="card-text">I am getting work with many technologies such as adobe products, HTML, CSS and JavaScript.
    I am also being exposed to C++, Java, PHP and Python. There is also a focus on Microsoft technologies such as
    C# and ASP.NET</p>
    <p className="card-text">I am learning Mobile App development for Android and IOS becoming familiar with Android Studio and XCode.</p>
        <a href="https://trios.com/trios-difference/?campaignid=1063&gad_source=1&gclid=EAIaIQobChMIn_bZp7eYhQMVWzHUAR0aGgDREAAYASAAEgIVefD_BwE" target="_blank" rel="noopener noreferrer" className="btn btn-primary">triOS College</a>
    </div>
</div>

<br/>

<div className="card">
    <div className="card-header">
    Helwan University - Cairo - Eygpt (2005 - 2010)
    </div>
    <div className="card-body">
        <h5 className="card-title">French Departement</h5>
        <p className="card-text">I stied the French Language. I have a Bachelor Degree of French Atrs.</p>
    </div>
</div>
<br/>

<div className="card">
    <div className="card-header">
    Completed Courses
    </div>
    <div className="card-body">
        
        <p className="card-text">Linux Red hat Admin I, II, III  -  2018 <a href="https://www.redhat.com/en/services/certification/rhcsa" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Linux Admin</a></p>
        <p className="card-text">CCNA Training  - 2016 <a href="https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Cisco</a></p>
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

export default Education;