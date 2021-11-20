import React, { useState } from "react";
import SingularProject from "./SingularProject";
import CriterionSearch from "./CriterionSearch";
import './../styles/ProjectList.css'
import extractCriteriaToFormattedFeaturesFromProjects from './CriteriaExtraction'

const ProjectList = function (props) {
    let criteriaToFormattedFeatures = {};
    let newCriteriaToChosenFeatures = () => { };
    if (props.hasOwnProperty("criterionSearch")) {
        criteriaToFormattedFeatures = extractCriteriaToFormattedFeaturesFromProjects(props.projects);
        newCriteriaToChosenFeatures = initializeEmptyCriteriaToChosenFeature(criteriaToFormattedFeatures)
    }
    let [criteriaToChosenFeature, setCriteriaToChosenFeatures] = useState(() => newCriteriaToChosenFeatures);
    return < div className="projectList">
        <h2 className="header">{props.title}</h2>
        <br />
        {props.criterionSearch === undefined ? undefined :
            <CriterionSearch setCriteriaToChosenFeatures={setCriteriaToChosenFeatures} criteriaToFeatures={criteriaToFormattedFeatures}></CriterionSearch>}
        {props.projects
            .filter(project => fitsTheCriteria(project.criteriaToFeatures, criteriaToChosenFeature))
            .map((project, index) => <SingularProject title={project.title} description={project.description}
                criteriaToFeatures={project.criteriaToFeatures} image={project.image} video={project.video} key={index}> {project.actual}</SingularProject>
            )}

        <br />
    </div>
}


export default ProjectList;

function initializeEmptyCriteriaToChosenFeature(extractedCriteria) {
    let chosenFeatures = {}
    Object.keys(extractedCriteria).forEach((criterion, index) => {
        chosenFeatures[criterion] = "";
    });
    return chosenFeatures
}

function fitsTheCriteria(projectCriteriaToFeatures, criteriaToChosenFeature) {
    for (const criterion in projectCriteriaToFeatures) {
        if (projectCriteriaToFeatures.hasOwnProperty(criterion)) {
            let chosenFeature = criteriaToChosenFeature[criterion]
            let someFeatureChosen = (chosenFeature !== "");
            if (someFeatureChosen && !projectCriteriaToFeatures[criterion].includes(getUnformatedFeature(chosenFeature)))
                return false;
        }
    }
    return true;
}

function getUnformatedFeature(formatedFeature) {
    return formatedFeature.substr(0, formatedFeature.lastIndexOf('(') - 1)
}