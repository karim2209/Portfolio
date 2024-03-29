import {Outlet} from "react-router-dom";
import React from 'react';

const Layout = () => {
    const currentYear = new Date().getFullYear();
    return(
        <>
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
       

<div className="container body-content">
        <footer className="footer">
            <p>&copy; {currentYear} - Karim Mahmoud - <a href="https://www.linkedin.com/in/karim-mahmoud-580a56b6/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </footer>
     </div>
         
<Outlet />
        
        </>
    )
};
export default Layout;