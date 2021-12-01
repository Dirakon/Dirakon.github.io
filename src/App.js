import React, { useState } from "react";

import './styles/App.css'

import ProjectList from "./components/ProjectList";
import ContactLine from "./components/ContactLine";
import ContactForm from "./components/ContactForm";


import startResolutionCourutine from "./scripts/ResolutionCourutine";

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
      <ContactLine ></ContactLine>
      <br />
      <ProjectList title="My projects" criterionSearch />
      <ContactLine ></ContactLine>
      <br />
      <h2 className="header">Contact me!</h2>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
