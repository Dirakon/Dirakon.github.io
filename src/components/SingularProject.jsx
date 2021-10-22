import React, { useState } from "react";
import image from './../images/airship.jpg'
import './../styles/App.css'
const SingularProject = function (props) {
    
    return < div className="project" >
    <img src={props.image} />
        <div className = "total">
            <strong className="projectTitle">{props.title}</strong>
            <br/>
            <a className="projectDescription">{props.description}</a>
        </div>
    </div>
}


export default SingularProject;