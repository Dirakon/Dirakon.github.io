import React, { useState } from "react";
import './../styles/App.css'
const SingularProject = function (props) {
    let clickFunc = function (arg) {
        arg = arg.target
        while (!arg.className.startsWith('projectFather')) {
            arg = arg.parentNode;
        }
        arg.classList.toggle("collapsed")
    }
    let obj = <div className="projectFather collapsed">
        < div className="project" onClick={clickFunc}>
            <img className="projectImage" src={props.image} />
            <div className="total">
                <strong className="projectTitle">{props.title}</strong>
                <br />
                <a className="projectDescription">{props.description}</a>
            </div>
        </div>
        <div className="theRealProjectWrapper">
            <div className="theRealProject">
                {props.children}
            </div>
        </div>
    </div>

    return obj
}


export default SingularProject;