import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import SingularProject from "./components/SingularProject";
import './styles/App.css'
function App() {
  const [projects,setProjects] = useState([
    {title : "Scion", description : "App for programming on mobile devices with my custom visual programming language"},
    {title : "The Branch Office", description : "Game made in a week about managin workers and not letting the office fall from the branch"},
    {title : "Mobile Continent Generator", description : "Mobile app that lets the user observe some randomly generated worlds and nations"},
    {title : "DialogEditor", description : "Website for creating and experiencing dialogs with my custom dialog language"}
  ]);
  return (
    <div className="App">
      <ProjectList projects = {projects} title = "MY PROJECTS"/>
    </div>
  );
}

export default App;
