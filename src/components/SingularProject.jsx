import React, {useState} from "react";
import image from './../images/airship.jpg'
import './../styles/App.css'
const SingularProject = function(props){
    return < div className = "project">
        <div>
        <strong className = "projectTitle">{props.title }</strong>
        <a className = "projectDescription"><br/> {props.description}</a>
        </div>
        <img ></img>
    </div>
}


export default SingularProject;