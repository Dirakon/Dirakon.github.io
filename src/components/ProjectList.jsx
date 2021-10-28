import React, { useState } from "react";
import SingularProject from "./SingularProject";
import CriterionSearch from "./CriterionSearch";
import './../styles/ProjectList.css'
const ProjectList = function (props) {
    let criterionSearch;
    let criterions = {};
    let newChosenCriterions = {}
    if (props.hasOwnProperty("criterionSearch")) {

        props.projects.forEach(project => {
            if (project.criterions == undefined) {
                return;
            }

            Object.keys(project.criterions).forEach((criterion, index) => {
                if (!criterions.hasOwnProperty(criterion)) {
                    criterions[criterion] = {};
                }
                project.criterions[criterion].forEach(feature => {
                    if (criterions[criterion].hasOwnProperty(feature)) {
                        criterions[criterion][feature]++;
                    } else {
                        criterions[criterion][feature] = 1;
                    }
                });
            });

        });


        Object.keys(criterions).forEach((criterion, index) => {
            newChosenCriterions[criterion] = ""
            let handledFeatures = [];
            for (var feature in criterions[criterion]) {
                if (criterions[criterion].hasOwnProperty(feature)) {
                    handledFeatures = handledFeatures.concat(feature + " (" + criterions[criterion][feature].toString() + ")");
                }
            }
            criterions[criterion] = handledFeatures;
        });

    }
    let [chosenCriterions, setChosenCriterions] = useState(newChosenCriterions);
    if (props.criterionSearch != undefined) {
        criterionSearch = <CriterionSearch
            setChosenCriterions={setChosenCriterions} criterions={criterions}></CriterionSearch>;
    }
    function fitsTheCriterions(projectCriterions){
        for (const criterion in chosenCriterions){
            if (chosenCriterions.hasOwnProperty(criterion)){
                if (chosenCriterions[criterion] == "")
                    continue;
                if (!projectCriterions.hasOwnProperty(criterion))
                    return false;
                let found = false;
                for(let index in projectCriterions[criterion]){
                    let feature = projectCriterions[criterion][index]
                    if (chosenCriterions[criterion].startsWith(feature)){
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
        <h2>
            {props.title}
        </h2>
        {criterionSearch}
        {props.projects.map((project, index) =>
            {if (fitsTheCriterions(project.criterions))return <SingularProject title={project.title} description={project.description} 
            criterions = {project.criterions}image={project.image} video={project.video} key={index}> {project.actual}</SingularProject>}
        )}
    </div>
}


export default ProjectList;