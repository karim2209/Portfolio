
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Education from "./pages/education";
import Project from "./pages/project";
import Experience from "./pages/experience";
import Skill from "./pages/skill";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Layout />} />
        <Route path="/home" element={<Home />} />
       <Route path="/education" element={<Education />} />
       <Route path="/project" element={<Project />} />
       <Route path="/experience" element={<Experience />} />
       <Route path="/skill" element={<Skill />} />
      </Routes>
    </BrowserRouter>
    
  );
}
