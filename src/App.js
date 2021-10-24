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

        <video width="100%" autoPlay loop muted playsInline>
          <source src={gifTBO} type="video/mp4" />
        </video>
        <br />

        <br />
        <p>
          A game made for game jam in a week. It presents a challange to the player, as they have to manage the workers to do their job and make sure that 
          the office is not on the verge of falling. I have not only coded the game, but also have drawn all the sprites and animations.
          You can check out <a href={"https://dirakon.itch.io/the-office-branch"}>the game</a> and see <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>the source code.</a>
        </p>
      </div>
    },
    { title: "Mobile Continent Generator", description: "Mobile app that lets the user observe some randomly generated worlds and nations", image: imageTBO },
    {
      title: "DialogEditor", description: "Website for creating and experiencing dialogs with my custom dialog language", image: imageDE, actual: <div>

        <video width="100%" autoPlay loop muted playsInline>
          <source src={gifDE} type="video/mp4" />
        </video>

        <br />
        <p>
          Interactive dialog editor where the user can program their own dialogs using dialog writing 'scripting' language made by me.<br />
          Supports variables, tags, if statements, and more. Includes dialog example when opening the site.<br />
          You can check out <a href={"https://dirakon.github.io/dialogEditor/"}>the site</a> and see <a href={"https://github.com/Dirakon/dialogEditor"}>the source code.</a>
        </p>
      </div>
    }
  ]);
  return (
    <div className="App">
      <h1>My portfolio</h1>
      <ProjectList projects={projects} title="My projects" />
    </div>
  );
}

export default App;
