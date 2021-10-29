import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import imageTBO from "./images/The_Branch_Office.png"
import gifTBO from "./images/tbo_gp.mp4"
import imageDE from "./images/de.png"
import gifDE from "./images/de_edited.mp4"
import './styles/App.css'

function startResolutionCourutine() {

  const root = document.querySelector(':root');
  let previousHeightToWidthRatio = 1;
  const autoResultionChanger = () => {
    let heightToWidthRatio = window.innerHeight / window.innerWidth;
    if (heightToWidthRatio < 1)
      heightToWidthRatio = 1;
    if (heightToWidthRatio > 1.5)
      heightToWidthRatio = 1.5;
    if (previousHeightToWidthRatio !== heightToWidthRatio)
      root.style.setProperty('--scaleFactor', heightToWidthRatio);
    previousHeightToWidthRatio = heightToWidthRatio;
  }
  autoResultionChanger()
  setInterval(autoResultionChanger, 1000);
}

function App() {
  const projects = [
    {
      title: "Scion", description: "App for programming on mobile devices with my custom visual programming language", video: gifDE, image: imageTBO, criterions: {
        "programming language": ["c#"],
        "technologies": ["unity", "android"],
        "⭐": ["⭐"]
      }, actual:
        <div>
          <p>
            A game made for game jam in a week. It presents a challange to the player, as they have to manage the workers to do their job while making sure that
            the office is not on the verge of falling. I have not only coded the game, but also have drawn all the sprites and animations.
            You can check out <a href={"https://dirakon.itch.io/the-office-branch"}>the game</a> and see <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>the source code.</a>
          </p>
        </div>
    },
    {
      title: "The Branch Office", description: "Game made in a week about managing workers and not letting the office fall from the branch", image: imageTBO, video: gifTBO, criterions: {
        "programming language": ["c#"],
        "technologies": ["unity"],
        "⭐": ["⭐"]
      }, actual:
        <div>
          <p>
            A game made for game jam in a week. It presents a challange to the player, as they have to manage the workers to do their job while making sure that
            the office is not on the verge of falling. I have not only coded the game, but also have drawn all the sprites and animations.
            You can check out <a href={"https://dirakon.itch.io/the-office-branch"}>the game</a> and see <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>the source code.</a>
          </p>
        </div>
    },
    {
      title: "Mobile Continent Generator", description: "Mobile app that lets the user observe some randomly generated worlds and nations", video: gifDE, image: imageTBO, criterions: {
        "programming language": ["c++", "java"],
        "technologies": ["android"],
        "⭐": ["⭐"]
      }, actual:
        <div>
          <p>
            A game made for game jam in a week. It presents a challange to the player, as they have to manage the workers to do their job while making sure that
            the office is not on the verge of falling. I have not only coded the game, but also have drawn all the sprites and animations.
            You can check out <a href={"https://dirakon.itch.io/the-office-branch"}>the game</a> and see <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>the source code.</a>
          </p>
        </div>
    },
    {
      title: "DialogEditor", description: "Website for creating and experiencing dialogs with my custom dialog language", image: imageDE, video: gifDE, criterions: {
        "programming language": ["js"],
        "technologies": ["reactJS", "draftJS"],
        "⭐": ["⭐"]
      }, actual:
        <div>
          <p>
            Interactive dialog editor where the user can program their own dialogs using dialog writing 'scripting' language made by me.<br />
            Supports variables, tags, if statements, and more. Includes dialog example when opening the site.<br />
            You can check out <a href={"https://dirakon.github.io/dialogEditor/"}>the site</a> and see <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
          </p>
        </div>
    }
  ]

  startResolutionCourutine();
  return (
    <div className="App">
      <h1 className = "header">My portfolio</h1>
      <ProjectList projects={projects} title="My projects" criterionSearch />
    </div>
  );
}

export default App;
