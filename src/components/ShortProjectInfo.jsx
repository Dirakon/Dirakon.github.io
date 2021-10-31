import React, { useState } from "react";
import './../styles/ShortProjectInfo.css'
import ProgrammingLanguagesBox from "./ProgrammingLanguagesBox";
const ShortProjectInfo = function (props) {
    let clickFunc = function (arg) {
        arg = arg.target
        while (!arg.className.startsWith('fullProject')) {
            arg = arg.parentNode;
        }
        arg.classList.toggle("collapsed")
    }

    let star = props.hasStar? "⭐":" ";

    return < div className="shortProjectInfoWrapper" onClick={clickFunc}>
        <img className="projectImage" src={props.image} />
        <a className = "star">{star}</a>
        <div className="shortProjectInfo">
            <strong className="projectTitle">{props.title}</strong>
            <br />
            <a className="projectDescription">{props.description}</a>
        </div>
        <ProgrammingLanguagesBox programmingLanguages = {props.programmingLanguages}/>
    </div>
}


export default ShortProjectInfo;