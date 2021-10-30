import React, { useState } from "react";
import ProjectList from "./components/ProjectList";
import imageTBO from "./images/The_Branch_Office.png"
import gifTBO from "./images/tbo_gp.mp4"
import imageDE from "./images/de.png"
import gifDE from "./images/de_edited.mp4"
import imagePS from "./images/ps.png"
import gifPS from "./images/ps.mp4"
import imageSD from "./images/sd.png"
import gifSD from "./images/sd.mp4"
import imageRTS from "./images/rts_wg.png"
import gifRTS from "./images/rts_wg.mp4"
import imageSKI from "./images/ski.png"
import gifSKI from "./images/ski.mp4"
import imageSITE from "./images/site.png"
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
      title: "The Branch Office", description: "Game made in a week about managing workers and not letting the office fall from the branch", image: imageTBO, video: gifTBO, criterions: {
        "programming language": ["c#"],
        "technologies": ["unity"],
        "⭐": ["⭐"]
      }, actual:
        <div>
          <p>
            A game made for game jam in a week. It presents a challange to the player, as they have to manage the workers to do their job while making sure that
            the office is not on the verge of falling. <br/><br/>
            
            I have not only coded the game, but also have drawn all the sprites and animations. <br/><br/>
            You can check out <a href={"https://dirakon.itch.io/the-office-branch"}>the game</a> and see <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>the source code.</a>
          </p>
        </div>
    },
    {
      title: "Mobile Continent Generator", description: "Mobile app that lets the user observe some randomly generated worlds and nations", video: gifDE, image: imageTBO, criterions: {
        "programming language": ["java", "c++"],
        "technologies": ["android"],
        "⭐": ["⭐"]
      }, actual:
        <div>
          <p>
            An Android application that generates continents, oceans, islands, seas, and rivers; splits the land and the water into regions, gives
            each region a terrain type and shows it to the user, who can freely scrool through the generated world. <br/><br/>
            Originally, the program has been written on C++, but it was later re-written to Java with additions and fixes. <br/><br/>
            All of the code has been done by me.<br/><br/>
            You can check out <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>the source code</a> and see <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>my video, where I go over the generation proccess in details</a>.
          </p>
        </div>
    },
    {
      title: "Scion", description: "App for programming on mobile devices with my custom visual programming language", video: gifSKI, image: imageSKI, criterions: {
        "programming language": ["c#"],
        "technologies": ["unity", "android"],
        "⭐": ["⭐"]
      }, actual:
        <div>
          <p>
            This android app implements a visual programming language that suppors such concepts as: objects, images/sprites, 3D-space, click/hold events, android
            notifications, camera movement/zoom, dynamically typed variables, lists, if statements, complex math, function calls, and much more. <br/><br/>
            In the video above you can see the implementation of Tic-Tac-Toe.<br/><br/>
            All of the code has been done by me.<br/><br/>
            You can check out <a href={"https://github.com/Dirakon/Skion"}>the source code</a> and the <a href={"https://github.com/Dirakon/Skion"}>video of the proccess of making a project in Scion</a>.
          </p>
        </div>
    },
    {
      title: "Dialog Editor", description: "Website for creating and experiencing dialogs with my custom dialog language", image: imageDE, video: gifDE, criterions: {
        "programming language": ["js"],
        "technologies": ["reactJS", "draftJS"],
        "⭐": ["⭐"]
      }, actual:
        <div>
          <p>
            Interactive dialog editor where the user can program their own dialogs using dialog writing 'scripting' language made by me.<br /><br/>
            Supports variables, tags, if statements, and more. Includes dialog example when opening the site.<br /><br/>
            I fully coded the website <br/><br/>
            You can check out <a href={"https://dirakon.github.io/Dialog-Editor/"}>the site</a> and see <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
          </p>
        </div>
    },
    /*{
      title: "Android Custom Map Pathfinder", description: "Android app for finding the shortest route on customizable multi-layered map", image: imageDE, video: gifDE, criterions: {
        "programming language": ["c#"],
        "technologies": ["unity", "android"],
        "⭐": [" "]
      }, actual:
        <div>
          <p>
            An Android application that allows the user to navigate through customizable map with multiple layers (floors) and choose two points, and the 
            program will find the shortest (optimal) path.<br /><br />
            The map can be fully customized in a special Google document, with version-based model of sending the new data to clients. The data is saved on local
            device, so this app can be useful even without Internet connection. Additionaly, the Google document even allows the customization and adittion of decorative objects
            on the map.<br /><br />
            The app is fully coded and developed by me. <br/><br />
            You can check out <a href={"https://dirakon.github.io/dialogEditor/"}>the customizable Google doc</a> and see <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
          </p>
        </div>
    },*/
    {
      title: "Minecraft Random Dungeon Generator", description: "Minecraft plugin for creation and customization of randomly generated dungeons", image: imageDE, video: gifDE, criterions: {
        "programming language": ["java"],
        "technologies": ["minecraft plugin"],
        "⭐": [" "]
      }, actual:
        <div>
          <p>
            Interactive dialog editor where the user can program their own dialogs using dialog writing 'scripting' language made by me.<br />
            Supports variables, tags, if statements, and more. Includes dialog example when opening the site.<br />
            You can check out <a href={"https://dirakon.github.io/dialogEditor/"}>the site</a> and see <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
          </p>
        </div>
    },
    {
      title: "RTS Prototype", description: "Implementaton of basic RTS mechanics in Unity", image: imageRTS, video: gifRTS, criterions: {
        "programming language": ["c#"],
        "technologies": ["unity"],
        "⭐": [" "]
      }, actual:
        <div>
          <p>
            A prototype of an RTS wargame with such mechanics being implemented as: unit selection, movements, attack, abilities, queue of orders, fog of war, minimap and many others.<br /><br />
            
            All the code and even 3D models is done by me.<br /><br />

            You can check out <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
          </p>
        </div>
    },
    {
      title: "Youtube Watchtime Controller", description: "Browser extensions that allows the user to control the time spent watching Youtube videos", image: imageDE, video: gifDE, criterions: {
        "programming language": ["js"],
        "technologies": ["browser extension"],
        "⭐": [" "]
      }, actual:
        <div>
          <p>
            The problem that I understand more that neccessary is spending too much time watching Youtube videos, so to solve it I made a this extension.<br /><br />
            It not only can block you from watching Youtube in general for more than x hours per day, but it allows you to add specific channels in the 'white list'.<br /><br />
            You can check out <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
          </p>
        </div>
    },
    {
      title: "Skeleton Deconstructor", description: "Game made in 2 days about destroying dynamically self-constructing skeletons", image: imageSD, video: gifSD, criterions: {
        "programming language": ["c#"],
        "technologies": ["unity"],
        "⭐": [""]
      }, actual:
        <div>
          <p>
            A game made for game jam in 2 days. The goal is to protect the heart for as long as possible. The skeletons dynamically construct themselves from the
            bones. The player can break skeletons apart, and if a lot of bones stay close enough for some time, skeleton will assemble from them. Skeletons 
            pick up new bones on the move.<br/><br/>

            The big amount of bones (the amount grows) required a smart approach to find the bone groups for performance purposes (WebGL Unity build (the one I was aiming for) does not support 
            multi-threading). Not only that, I had to make bone physics myself, as it would be a bad decesion performance-wise to make them all rigidbodies.<br/><br/>
            
            I have fully developed the game by myself. <br/><br/>
            You can check out <a href={"https://dirakon.itch.io/the-office-branch"}>the game</a> and see <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>the source code.</a>
          </p>
        </div>
    },
    {
      title: "2D Sideview Platformer-Slasher", description: "Game made in 2 days about revenge", image: imagePS, video: gifPS, criterions: {
        "programming language": ["c#"],
        "technologies": ["unity"],
        "⭐": [""]
      }, actual:
        <div>
          <p>
            A game made for game jam in 2 days. It has slasher and platformer controls, attacks, enemy AI that tracks the player with the A* alghoritm,
            choices that affect the final boss battle, and the final boss itself. <br/><br/>
            
            I have coded the game. The character sprite, the lore and the voice acting were made by other people in my team. <br/><br/>

            You can check out <a href={"https://github.com/Dirakon/2d-Sideview-Platformer-Slash-Slasher"}>the source code</a> and see <a href={"https://youtu.be/jQkTkQ4bVQY"}>the playthrough of the game</a>.
          </p>
        </div>
    },
    {
      title: "This website", description: "You are observing it right now", image: imageSITE, criterions: {
        "programming language": ["js"],
        "technologies": ["reactJS"],
        "⭐": [" "]
      }, actual:
        <div>
          <p>
            This website is fully developed by me <br/><br/>
            You can check out <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
          </p>
        </div>
    }
  ]

  startResolutionCourutine();
  return (
    <div className="App">
      <h1 className="header">My portfolio</h1>
      <ProjectList projects={projects} title="My projects" criterionSearch />
    </div>
  );
}

export default App;
