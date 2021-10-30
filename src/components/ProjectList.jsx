import React, { useState } from "react";
import SingularProject from "./SingularProject";
import CriterionSearch from "./CriterionSearch";
import './../styles/ProjectList.css'
const ProjectList = function (props) {
    let criterionSearch;
    let criteria = {};
    let newChosenCriteria = {}
    if (props.hasOwnProperty("criterionSearch")) {

        props.projects.forEach(project => {
            if (project.criteria === undefined) {
                return;
            }

            Object.keys(project.criteria).forEach((criterion, index) => {
                if (!criteria.hasOwnProperty(criterion)) {
                    criteria[criterion] = {};
                }
                project.criteria[criterion].forEach(feature => {
                    if (criteria[criterion].hasOwnProperty(feature)) {
                        criteria[criterion][feature]++;
                    } else {
                        criteria[criterion][feature] = 1;
                    }
                });
            });

        });


        Object.keys(criteria).forEach((criterion, index) => {
            newChosenCriteria[criterion] = ""
            let handledFeatures = [];
            for (var feature in criteria[criterion]) {
                if (criteria[criterion].hasOwnProperty(feature)) {
                    handledFeatures = handledFeatures.concat(feature + " (" + criteria[criterion][feature].toString() + ")");
                }
            }
            criteria[criterion] = handledFeatures;
        });

    }
    let [chosenCriteria, setChosenCriteria] = useState(newChosenCriteria);
    if (props.criterionSearch !== undefined) {
        criterionSearch = <CriterionSearch
            setChosenCriteria={setChosenCriteria} criteria={criteria}></CriterionSearch>;
    }
    function fitsTheCriteria(projectCriteria){
        for (const criterion in chosenCriteria){
            if (chosenCriteria.hasOwnProperty(criterion)){
                if (chosenCriteria[criterion] === "")
                    continue;
                if (!projectCriteria.hasOwnProperty(criterion))
                    return false;
                let found = false;
                for(let index in projectCriteria[criterion]){
                    let feature = projectCriteria[criterion][index]
                    if (chosenCriteria[criterion].startsWith(feature)){
                        found = true;
                        break;
                    }
                }
                if (!found)
                    return false;
            }
        }
        return true;
    }
    return < div className="projectList">
        <h2 className = "header">
            {props.title}
        </h2>

      <br/>
        {criterionSearch}
        {props.projects.map((project, index) =>
            {if (fitsTheCriteria(project.criteria))return <SingularProject title={project.title} description={project.description} 
            criteria = {project.criteria}image={project.image} video={project.video} key={index}> {project.actual}</SingularProject>}
        )}

      <br/>
    </div>
}


export default ProjectList;