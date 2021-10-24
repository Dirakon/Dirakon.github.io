import React, { useState } from "react";
import SingularProject from "./SingularProject";
import './../styles/ProjectList.css'
const ProjectList = function (props) {
    return < div className="projectList">
        <h2>
            {props.title}
        </h2>
        {props.projects.map((project, index) =>
            <SingularProject title={project.title} description={project.description} image = {project.image} video = {project.video} key={index}> {project.actual}</SingularProject>
        )}
    </div>
}


export default ProjectList;