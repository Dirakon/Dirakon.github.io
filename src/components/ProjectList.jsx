import React, {useState} from "react";
import SingularProject from "./SingularProject";
import CriterionSearch from "./CriterionSearch";
import './../styles/ProjectList.css'
import extractCriteriaToFormattedFeaturesFromProjects from '../scripts/CriteriaExtraction'

import {loadProjectList, loadProjectLogo, loadProjectVideo} from '../scripts/FileLoader'
import {BackgroundCanvas} from "./BackgroundCanvas";

const ProjectList = function (props) {
    let projects = loadProjectList()
    let criteriaToFormattedFeatures = {};
    let newCriteriaToChosenFeatures = {};
    if (props.hasOwnProperty("criterionSearch")) {
        criteriaToFormattedFeatures = extractCriteriaToFormattedFeaturesFromProjects(projects);
        newCriteriaToChosenFeatures = initializeEmptyCriteriaToChosenFeature(criteriaToFormattedFeatures)
    }
    let [criteriaToChosenFeature, setCriteriaToChosenFeatures] = useState(() => newCriteriaToChosenFeatures);
    return < div className="projectList">
        <h2 className="header">{props.title}</h2>
        <br/>
        {props.criterionSearch === undefined ? undefined :
            <CriterionSearch setCriteriaToChosenFeatures={setCriteriaToChosenFeatures}
    criteriaToFeatures={criteriaToFormattedFeatures}/>}
        {projects
            .filter(project => fitsTheCriteria(project.criteriaToFeatures, criteriaToChosenFeature))
            .map((project, index) => <SingularProject
                    title={project.title}
                    description={project.description}
                    shortDescriptionTextColor={project.shortDescriptionTextColor}
                    criteriaToFeatures={project.criteriaToFeatures}
                    image={loadProjectLogo(project.abreveation)}
                    video={loadProjectVideo(project.abreveation)}
                    key={index}>
                    {<p dangerouslySetInnerHTML={{__html: project.content}}/>}
                </SingularProject>
            )}
        <br/>
    </div>
}


export default ProjectList;

function initializeEmptyCriteriaToChosenFeature(extractedCriteria) {
    let chosenFeatures = {}
    Object.keys(extractedCriteria).forEach(criterion => {
        chosenFeatures[criterion] = "";
    });
    return chosenFeatures
}

function fitsTheCriteria(projectCriteriaToFeatures, criteriaToChosenFeature) {
    let projectCriteria = Object.keys(projectCriteriaToFeatures)
    for (const index in projectCriteria) {
        let projectCriterion = projectCriteria[index]
        let projectFeatures = projectCriteriaToFeatures[projectCriterion]
        let chosenFeature = getUnformatedFeature(criteriaToChosenFeature[projectCriterion])
        let isAnyFeatureChosen = (chosenFeature !== "");
        if (isAnyFeatureChosen && !projectFeatures.includes(chosenFeature))
            return false;
    }
    return true;
}

function getUnformatedFeature(formatedFeature) {
    return formatedFeature.substr(0, formatedFeature.lastIndexOf('(') - 1)
}