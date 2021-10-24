import React, { useState } from "react";
import './../styles/SingularProject.css'
import LongProjectInfo from "./LongProjectInfo";
import ShortProjectInfo from "./ShortProjectInfo";
const SingularProject = function (props) {
    let obj = <div className="fullProject collapsed">
        <ShortProjectInfo title = {props.title} description = {props.description} image = {props.image}/>
        <LongProjectInfo video = {props.video}>{props.children}</LongProjectInfo>
    </div>

    return obj
}


export default SingularProject;