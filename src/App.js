import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import imageTBO from "./images/The_Branch_Office.png"
import gifTBO from "./images/tbo_gp.mp4"
import imageDE from "./images/de.png"
import gifDE from "./images/de_edited.mp4"
import './styles/App.css'
function App() {
  const [projects, setProjects] = useState([
    { title: "Scion", description: "App for programming on mobile devices with my custom visual programming language", image: imageTBO },
    {
      title: "The Branch Office", description: "Game made in a week about managing workers and not letting the office fall from the branch", image: imageTBO, actual: <div>

<video width="100%"  autoPlay loop muted playsInline>
          <source src={gifTBO} type="video/mp4" />
        </video>
        <br />
        <a>You can check it out on Github _here_, or on itch.io _here_</a>

      </div>
    },
    { title: "Mobile Continent Generator", description: "Mobile app that lets the user observe some randomly generated worlds and nations", image: imageTBO },
    {
      title: "DialogEditor", description: "Website for creating and experiencing dialogs with my custom dialog language", image: imageDE, actual: <div>

<video width="100%"  autoPlay loop muted playsInline>
          <source src={gifDE} type="video/mp4" />
        </video>

        <br />
        <a>You can check it out on Github _here_, or on itch.io _here_</a>

      </div>
    }
  ]);
  return (
    <div className="App">
      <ProjectList projects={projects} title="MY PROJECTS" />
    </div>
  );
}

export default App;
