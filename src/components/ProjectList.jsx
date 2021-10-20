import React, { useState } from "react";
import SingularProject from "./SingularProject";

const ProjectList = function (props) {
    return < div className="projectList">
        <h1 style={{ textAllign: "center" }}>
            {props.title}
        </h1>
        {props.projects.map((project, index) =>
            <SingularProject title={project.title} description={project.description} key={index} />
        )}
    </div>
}


export default ProjectList;