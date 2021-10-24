import React, { useState } from "react";
import './../styles/ShortProjectInfo.css'
const ShortProjectInfo = function (props) {
    let clickFunc = function (arg) {
        arg = arg.target
        while (!arg.className.startsWith('fullProject')) {
            arg = arg.parentNode;
        }
        arg.classList.toggle("collapsed")
    }

    return < div className="shortProjectInfoWrapper" onClick={clickFunc}>
        <img className="projectImage" src={props.image} />
        <div className="shortProjectInfo">
            <strong className="projectTitle">{props.title}</strong>
            <br />
            <a className="projectDescription">{props.description}</a>
        </div>
    </div>
}


export default ShortProjectInfo;