import React, {useState} from "react";

const SingularProject = function(props){
    return < div className = "project" style = {{ backgroundColor : "cyan"}}>
        <strong>{props.title}</strong>
        <br/>
        <a>{props.description}</a>
    </div>
}


export default SingularProject;