import React, { useState } from "react";

import github from "./images/github2.png"
import linkedin from "./images/linkedin2.png"
import youtube from "./images/youtube2.png"
import twitter from "./images/twitter2.png"
import itch from "./images/itch2.png"

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
import gifMCG from "./images/mcg.mp4"
import imageMCG from "./images/mcg.png"

import './styles/App.css'

import ProjectList from "./components/ProjectList";
import ContactLine from "./components/ContactLine";
import ContactForm from "./components/ContactForm";

import startResolutionCourutine from "./components/ResolutionCourutine";

const projects = [
  {
    title: "The Branch Office", description: "Game made in a week about managing workers and not letting the office fall from the branch", image: imageTBO, video: gifTBO, criteriaToFeatures: {
      "programming language": ["c#"],
      "technologies": ["unity"],
      "tags": ["game", "jam"],
      "⭐": ["⭐"]
    }, actual:
        <p>
          A game made for a game jam in a week. It presents a challenge to the player, as they have to manage the workers to do their job while making sure that the office is not on the verge of falling. <br /><br />

          I have not only coded the game but also have drawn all the sprites and animations. <br /><br />

          You can check out <a href={"https://dirakon.itch.io/the-office-branch"}>the game</a> and see <a href={"https://github.com/Dirakon/The-Branch-Office-Game"}>the source code.</a>
        </p>
  },
  {
    title: "Mobile Continent Generator", description: "Mobile app that lets the user observe some randomly generated worlds and nations", video: gifMCG, image: imageMCG, criteriaToFeatures: {
      "programming language": ["java", "c++"],
      "technologies": ["android"],
      "⭐": ["⭐"],
      "tags": ["simulation"]
    }, actual:
        <p>
          An Android application that generates continents, oceans, islands, seas, and rivers; splits the land and the water into regions, gives each region a terrain type, and shows it to the user, who can freely scroll through the generated world. <br /><br />

          Originally, the program has been written in C++, but it was later re-written to Java with additions and fixes. <br /><br />

          All of the code has been done by me.<br /><br />

          You can check out <a href={"https://github.com/Dirakon/Mobile-Continent-Generator"}>the source code</a> and see <a href={" https://youtu.be/IfCc4-T-fxI "}>my video, where I go over the generation proccess in details</a>.
        </p>
  },
  {
    title: "Scion", description: "App for programming on mobile devices with my custom visual programming language", video: gifSKI, image: imageSKI, criteriaToFeatures: {
      "programming language": ["c#"],
      "technologies": ["unity", "android"],
      "⭐": ["⭐"]
    }, actual:
        <p>
          This android app implements a visual programming language that supports such concepts as objects, images/sprites, 3D-space, click/hold events, android notifications, camera movement/zoom, dynamically typed variables, lists, if statements, complex math, function calls, and much more. <br /><br />

          In the video above you can see the implementation of Tic-Tac-Toe.<br /><br />

          All of the code has been done by me.<br /><br />

          You can check out <a href={"https://github.com/Dirakon/Skion"}>the source code</a> and the <a href={" https://youtu.be/IfCc4-T-fxI "}>video of the proccess of making a project in Scion</a>.
        </p>
  },
  {
    title: "Dialog Editor", description: "Website for creating and experiencing dialogs with my custom dialog language", image: imageDE, video: gifDE, criteriaToFeatures: {
      "programming language": ["js"],
      "technologies": ["reactJS"],
      "⭐": ["⭐"]
    }, actual:
        <p>
          Interactive dialog editor where the user can program their own dialogs using dialog writing 'scripting' language made by me.<br /><br />

          Supports variables, tags, if statements, and more. Includes dialog example when opening the site.<br /><br />

          I fully coded the website <br /><br />

          You can check out <a href={"https://dirakon.github.io/Dialog-Editor/"}>the site</a> and see <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
        </p>
  },
  /*
    Commented because the plugins used were out of date, which made it impossible for me to get fresh footage of this app.
  {
    title: "Android Custom Map Pathfinder", description: "Android app for finding the shortest route on a customizable multi-layered map", image: imageDE, video: gifDE, criteriaToFeatures: {
      "programming language": ["c#"],
      "technologies": ["unity", "android"],
      "⭐": [" "]
    }, actual:
        <p>
          An Android application that allows the user to navigate through a customizable map with multiple layers (floors) and choose two points, and the 
          program will find the shortest (optimal) path with A* algorithm.<br /><br />

          The map can be fully customized in a special Google document, with a version-based model of sending the new data to clients. The data is saved on the local device, so this app can be useful even without an Internet connection. Additionally, the Google document even allows the customization and addition of decorative objects on the map.<br /><br />

          The app is fully coded and developed by me. <br/><br />
          You can check out <a href={"https://dirakon.github.io/dialogEditor/"}>the customizable Google doc</a> and see <a href={"https://github.com/Dirakon/Dialog-Editor"}>the source code.</a>
        </p>
  },*/
  /*{
    title: "Minecraft Random Dungeon Generator", description: "Minecraft plugin for creation and customization of randomly generated dungeons", image: imageDE, video: gifDE, criteriaToFeatures: {
      "programming language": ["java"],
      "technologies": ["minecraft plugin"],
      "⭐": [" "]
    }, actual:
        <p>
          A Minecraft plugin that allows for dungeon creation. It eases the process of creating the rooms of the dungeon, lets the player set the walls,
          makes different types of doors between the rooms and has the ability to generate the dungeon with these rooms.<br /><br />

          All the code was done by me. <br /><br />

          You can check out <a href={"https://github.com/Dirakon/Minecraft-Random-Dungeon-Generator"}>the source code</a>.
        </p>
  },*/
  {
    title: "RTS Prototype", description: "Implementaton of basic RTS mechanics in Unity", image: imageRTS, video: gifRTS, criteriaToFeatures: {
      "programming language": ["c#"],
      "technologies": ["unity"],
      "⭐": [" "],
      "tags": ["game"]
    }, actual:
        <p>
          A prototype of an RTS wargame with such mechanics being implemented as unit selection, movements, attack, abilities, a queue of orders, the fog of war, minimap, and many others.<br /><br />

          All the code and even 3D models are done by me.<br /><br />

          You can check out <a href={"https://github.com/Dirakon/RTS-Wargame"}>the source code.</a>
        </p>
  },
  /*{
    title: "Youtube Watchtime Controller", description: "Browser extension that allows the user to control the time spent watching Youtube videos", image: imageDE, video: gifDE, criteriaToFeatures: {
      "programming language": ["js"],
      "technologies": ["browser extension"],
      "⭐": [" "]
    }, actual:
        <p>
          The problem that I understand more than necessary is spending too much time watching Youtube videos, so to solve it I made this extension.<br /><br />

          It not only can block you from watching Youtube in general for more than x hours per day, but it allows you to add specific channels to the 'white list'.<br /><br />

          You can check out <a href={"https://github.com/Dirakon/Youtube-Watchtime-Controller"}>the source code.</a>
        </p>
  },*/
  {
    title: "Skeleton Deconstructor", description: "Game made in 2 days about destroying dynamically self-constructing skeletons", image: imageSD, video: gifSD, criteriaToFeatures: {
      "programming language": ["c#"],
      "technologies": ["unity"],
      "⭐": [" "],
      "tags": ["game", "jam"]
    }, actual:
        <p>
          A game made for a game jam in 2 days. The goal is to protect the heart for as long as possible. The skeletons dynamically construct themselves from the bones. The player can break skeletons apart, and if a lot of bones stay close enough for some time, a skeleton will assemble from them. Skeletons pick up new bones on the move.<br /><br />

          The big amount of bones (the amount grows) required a smart approach to find the bone groups for performance purposes (WebGL Unity build (the one I was aiming for) does not support multithreading). Not only that, I had to make bone physics myself, as it would be a bad decision performance-wise to make them all rigidbodies.<br /><br />

          I have fully developed the game by myself. <br /><br />

          You can check out <a href={"https://dirakon.itch.io/skeleton-destructor"}>the game</a> and see <a href={"https://github.com/Dirakon/Skeleton-Destructor"}>the source code.</a>
        </p>
  },
  {
    title: "2D Sideview Platformer-Slasher", description: "Game made in 2 days about revenge", image: imagePS, video: gifPS, criteriaToFeatures: {
      "programming language": ["c#"],
      "technologies": ["unity"],
      "⭐": [" "],
      "tags": ["game", "jam"]
    }, actual:
        <p>
          A game made for a game jam in 2 days. It has slasher and platformer controls, attacks, enemy AI that tracks the player with the A* algorithm,
          choices that affect the final boss battle, and the final boss itself. <br /><br />

          I have coded the game. The character sprite, the lore, and the voice acting were made by other people in my team. <br /><br />

          You can check out <a href={"https://github.com/Dirakon/2d-Sideview-Platformer-Slash-Slasher"}>the source code</a> and see <a href={"https://youtu.be/jQkTkQ4bVQY"}>the playthrough of the game</a>.
        </p>
  },
  {
    title: "This website", description: "You are observing it right now", image: imageSITE, criteriaToFeatures: {
      "programming language": ["js"],
      "technologies": ["reactJS"],
      "⭐": [" "]
    }, actual:
        <p>
          This website is fully developed by me <br /><br />

          You can check out <a href={"https://github.com/Dirakon/Dirakon.github.io"}>the source code.</a>
        </p>
  }
]

const contactLinkToIcon = {
  'https://www.linkedin.com/in/dmitry-bannikov-438974224/': linkedin,
  'https://twitter.com/DirakonD': twitter,
  'https://github.com/Dirakon/': github,
  'https://www.youtube.com/channel/UCn5B_rRW6n4LYdyNpNAwSqw/': youtube,
  'https://dirakon.itch.io/': itch
}

function App() {

  startResolutionCourutine();
  return (
    <div className="App">
      <h1 className="header">My portfolio</h1>
      <h2 className="header">About me</h2>
      <p className="aboutMeParagraph">
        Hi! My name is Dmitry Bannikov, and I am a programmer.<br />
        You can find me in other places:
      </p>
      <ContactLine linksToIcons={contactLinkToIcon}></ContactLine>
      <br />
      <ProjectList projects={projects} title="My projects" criterionSearch />
      <ContactLine linksToIcons={contactLinkToIcon}></ContactLine>
      <br />
      <h2 className="header">Contact me!</h2>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
