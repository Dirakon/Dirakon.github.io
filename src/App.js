import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import SingularProject from "./components/SingularProject";
import image from "./images/The_Branch_Office.png"
import './styles/App.css'
function App() {
  const [projects,setProjects] = useState([
    {title : "Scion", description : "App for programming on mobile devices with my custom visual programming language", image: image},
    {title : "The Branch Office", description : "Game made in a week about managing workers and not letting the office fall from the branch", image: image},
    {title : "Mobile Continent Generator", description : "Mobile app that lets the user observe some randomly generated worlds and nations", image: image},
    {title : "DialogEditor", description : "Website for creating and experiencing dialogs with my custom dialog language", image: image}
  ]);
  return (
    <div className="App">
      <ProjectList projects = {projects} title = "MY PROJECTS"/>
    </div>
  );
}

export default App;
