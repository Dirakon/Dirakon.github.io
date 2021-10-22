import React, { useState } from "react";
import SingularProject from "./SingularProject";

const ProjectList = function (props) {
    return < div className="projectList">
        <h1>
            {props.title}
        </h1>
        {props.projects.map((project, index) =>
            <SingularProject title={project.title} description={project.description} image = {project.image} key={index} />
        )}
    </div>
}


export default ProjectList;