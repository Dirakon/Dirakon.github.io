import React, { useState } from "react";
import SingularProject from "./SingularProject";
import CriterionSearch from "./CriterionSearch";
import './../styles/ProjectList.css'
const ProjectList = function (props) {
    let criterionSearch;
    let extractedCriteria = {};
    let newChosenFeatures = ()=>{};
    if (props.hasOwnProperty("criterionSearch")) {

        extractedCriteria = extractAllCriteraAndCountTheOccurances(props.projects);
        newChosenFeatures = initializeEmptySetOfChosenFeatures(extractedCriteria)
    }
    let [chosenFeatures, setChosenFeatures] = useState(() => newChosenFeatures);
    if (props.criterionSearch !== undefined) {
        criterionSearch = <CriterionSearch
            setChosenFeatures={setChosenFeatures} criteria={extractedCriteria}></CriterionSearch>;
    }
    function fitsTheCriteria(projectCriteria) {
        for (const criterion in chosenFeatures) {
            if (chosenFeatures.hasOwnProperty(criterion)) {
                if (chosenFeatures[criterion] === "")
                    continue;
                if (!projectCriteria.hasOwnProperty(criterion))
                    return false;
                let found = false;
                for (let index in projectCriteria[criterion]) {
                    let feature = projectCriteria[criterion][index]
                    if (chosenFeatures[criterion].startsWith(feature)) {
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
        <h2 className="header">
            {props.title}
        </h2>

        <br />
        {criterionSearch}
        {props.projects
            .filter((project, index) => fitsTheCriteria(project.criteria))
            .map((project, index) => <SingularProject title={project.title} description={project.description}
                criteria={project.criteria} image={project.image} video={project.video} key={index}> {project.actual}</SingularProject>
            )}

        <br />
    </div>
}


export default ProjectList;

function initializeEmptySetOfChosenFeatures(extractedCriteria) {
    let chosenFeatures = {}
    Object.keys(extractedCriteria).forEach((criterion, index) => {
        chosenFeatures[criterion] = "";
    });
    return chosenFeatures
}

function extractAllCriteraAndCountTheOccurances(projects) {
    let extractedCriteria = {}
    projects.forEach(project => {
        if (project.criteria === undefined) {
            return;
        }

        Object.keys(project.criteria).forEach((criterion, index) => {
            extractOneCriterionFromSingularProjectAndCountTheOccurances(extractedCriteria, criterion, project);
        });

    });


    Object.keys(extractedCriteria).forEach((criterion, index) => {
        let handledFeatures = [];
        for (var feature in extractedCriteria[criterion]) {
            if (extractedCriteria[criterion].hasOwnProperty(feature)) {
                handledFeatures = handledFeatures.concat(feature + " (" + extractedCriteria[criterion][feature].toString() + ")");
            }
        }
        extractedCriteria[criterion] = handledFeatures;
    });
    return extractedCriteria
}

function extractOneCriterionFromSingularProjectAndCountTheOccurances(extractedCriteria, criterion, project) {
    if (!extractedCriteria.hasOwnProperty(criterion)) {
        extractedCriteria[criterion] = {};
    }
    project.criteria[criterion].forEach(feature => {
        if (extractedCriteria[criterion].hasOwnProperty(feature)) {
            extractedCriteria[criterion][feature]++;
        } else {
            extractedCriteria[criterion][feature] = 1;
        }
    });
}
