import React from "react";
import './../styles/ShortProjectInfo.css'
import ProgrammingLanguagesBox from "./ProgrammingLanguagesBox";

const ShortProjectInfo = function (props) {
    let textColor = props.textColor === undefined ? "white" : props.textColor;
    return < div className="shortProjectInfoWrapper" onClick={projectBriefClicked()}>
        <img className="projectImage" src={props.image}/>
        <a className="star">{props.hasStar ? "⭐" : " "}</a>
        <div className="shortProjectInfo">
            <strong className="projectTitle" style={{color: textColor}}>{props.title}</strong>
            <br/>
            <a className="projectDescription" style={{color: textColor}}>{props.description}</a>
        </div>
        <ProgrammingLanguagesBox programmingLanguages={props.programmingLanguages}/>
    </div>
}


export default ShortProjectInfo;

function projectBriefClicked() {
    return function (arg) {
        arg = arg.target;
        while (!arg.className.startsWith('fullProject')) {
            arg = arg.parentNode;
        }
        arg.classList.toggle("collapsed");
    };
}
