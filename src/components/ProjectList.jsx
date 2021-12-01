import React, { useState } from "react";
import SingularProject from "./SingularProject";
import CriterionSearch from "./CriterionSearch";
import './../styles/ProjectList.css'
import extractCriteriaToFormattedFeaturesFromProjects from '../scripts/CriteriaExtraction'

import {loadProjectData, loadProjectVideo,loadProjectLogo} from '../scripts/FileLoader'

const ProjectList = function (props) {
    let projects = loadProjectData()
    let criteriaToFormattedFeatures = {};
    let newCriteriaToChosenFeatures = () => { };
    if (props.hasOwnProperty("criterionSearch")) {
        criteriaToFormattedFeatures = extractCriteriaToFormattedFeaturesFromProjects(projects);
        newCriteriaToChosenFeatures = initializeEmptyCriteriaToChosenFeature(criteriaToFormattedFeatures)
    }
    let [criteriaToChosenFeature, setCriteriaToChosenFeatures] = useState(() => newCriteriaToChosenFeatures);
    return < div className="projectList">
        <h2 className="header">{props.title}</h2>
        <br />
        {props.criterionSearch === undefined ? undefined :
            <CriterionSearch setCriteriaToChosenFeatures={setCriteriaToChosenFeatures} criteriaToFeatures={criteriaToFormattedFeatures}></CriterionSearch>}
        {projects
            .filter(project => fitsTheCriteria(project.criteriaToFeatures, criteriaToChosenFeature))
            .map((project, index) => <SingularProject 
                title={project.title} 
                description={project.description}
                criteriaToFeatures={project.criteriaToFeatures} 
                image={loadProjectLogo(project.abreveation)} 
                video={loadProjectVideo(project.abreveation)} 
                key={index}> 
                {project.content}
                </SingularProject>
            )}
        <br />
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
    for (const [criterion, projectFeatures] in projectCriteriaToFeatures.entries) {
        let chosenFeature = getUnformatedFeature(criteriaToChosenFeature[criterion])
        let isAnyFeatureChosen = (chosenFeature !== "");
        if (isAnyFeatureChosen && !projectFeatures.includes(chosenFeature))
            return false;
    }
    return true;
}

function getUnformatedFeature(formatedFeature) {
    return formatedFeature.substr(0, formatedFeature.lastIndexOf('(') - 1)
}