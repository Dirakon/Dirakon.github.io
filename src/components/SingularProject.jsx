import React, { useState } from "react";
import image from './../images/airship.jpg'
import './../styles/App.css'
const SingularProject = function (props) {
    let isCurExpanded = false;
    let clickFunc = function (arg) {
        arg = arg.target
        while (!arg.className.startsWith('projectFather')) {
            arg = arg.parentNode;
        }
        arg.classList.toggle("expanded")
        /*
        if (isCurExpanded){
            collapceFunc(arg);
        }else{
            expandFunc(arg);
        }*/
        isCurExpanded = ! isCurExpanded;
    }

    let obj = <div className="projectFather">
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
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        </div>
    </div>

    return obj
}


export default SingularProject;