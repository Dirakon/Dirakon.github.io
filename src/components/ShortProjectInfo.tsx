import React, {SyntheticEvent} from "react";
import './../styles/ShortProjectInfo.css'
import ProgrammingLanguagesBox from "./ProgrammingLanguagesBox";

export type ShortProjectInfoProps = { image: string | undefined; hasStar: boolean; title: string; description: string; programmingLanguages: string[]; };
const ShortProjectInfo = function (props: ShortProjectInfoProps) {
    return < div className="shortProjectInfoWrapper" onClick={projectBriefClicked()}>
        <img className="projectImage" src={props.image} alt={props.title}/>
        <a className="star">{props.hasStar ? "⭐" : " "}</a>
        <div className="shortProjectInfo">
            <strong className="projectTitle">{props.title}</strong>
            <br/>
            <a className="projectDescription">{props.description}</a>
        </div>
        <ProgrammingLanguagesBox programmingLanguages={props.programmingLanguages}/>
    </div>
}


export default ShortProjectInfo;

function projectBriefClicked() {
    return function (event: SyntheticEvent) {
        let target: (typeof event.target & SimplifiedDomNode) | SimplifiedDomNode = event.target as typeof event.target & SimplifiedDomNode;
        while (!target.className.startsWith('fullProject')) {
            target = target.parentNode;
        }
        target.classList.toggle("collapsed");
    };
}

interface SimplifiedDomNode {
    classList: DOMTokenList,
    className: string,
    parentNode: SimplifiedDomNode
}
