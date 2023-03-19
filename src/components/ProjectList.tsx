import React, {PropsWithoutRef, useState} from "react";
import SingularProject from "./SingularProject";
import CriterionSearch, {VisibleFeatureSet} from "./CriterionSearch";
import './../styles/ProjectList.css'

import {loadProjectList, loadProjectLogo, loadProjectVideo} from '../scripts/FileLoader'

const ProjectList = function (props: PropsWithoutRef<{ title: string, criterionSearch: undefined | any }>) {
    let projects = loadProjectList() as Project[]
    let chosenFeatures: ChosenFeatures = new class implements ChosenFeatures {
        hasStar = null;
        programmingLanguage = null;
        tag = null;
        technology = null;
    };
    let [getChosenFeatures, setChosenFeatures] = useState(() => chosenFeatures);
    return < div className="projectList">
        <h2 className="header">{props.title}</h2>
        <br/>
        {props.criterionSearch === undefined ? undefined :
            <CriterionSearch setChosenFeatures={setChosenFeatures}
                             visibleFeaturesSets={createVisibleFeatureSets(projects)}/>}
        {projects
            .filter(project => projectsMeetsCriteria(project, getChosenFeatures))
            .map((project, index) => <SingularProject
                    title={project.title}
                    description={project.description}
                    image={loadProjectLogo(project.abreveation)}
                    video={loadProjectVideo(project.abreveation)}
                    features={project.features}
                    key={project.abreveation}>
                    {<p dangerouslySetInnerHTML={{__html: project.content}}/>}
                </SingularProject>
            )}
        <br/>
    </div>
}


export default ProjectList;

function createVisibleFeatureSets(allProjects: Project[]): VisibleFeatureSet[] {
    const uniqueStarStatuses = removeDuplicates(allProjects.map(project => project.features.hasStar))
    const uniqueTags = removeDuplicates(allProjects.flatMap(project => project.features.tags))
    const uniqueProgrammingLanguages = removeDuplicates(allProjects.flatMap(project => project.features.programmingLanguages))
    const uniqueTechnologies = removeDuplicates(allProjects.flatMap(project => project.features.technologies))

    const getFeatureWithoutProjectCount = (featureWithProjectCount: string) => featureWithProjectCount.lastIndexOf("(") == -1 ?
        null : featureWithProjectCount.substring(0, featureWithProjectCount.lastIndexOf("(") - 1)

    return [
        {
            name: "programming languages",
            settableOptions: uniqueProgrammingLanguages.map(language => language + " (" + allProjects.filter(project => project.features.programmingLanguages.includes(language)).length + ")"),
            setFeatures: (chosenFeatures, featureWithProjectCount) => {
                chosenFeatures.programmingLanguage = getFeatureWithoutProjectCount(featureWithProjectCount)
                return chosenFeatures;
            }
        },
        {
            name: "tags",
            settableOptions: uniqueTags.map(tag => tag + " (" + allProjects.filter(project => project.features.tags.includes(tag)).length + ")"),
            setFeatures: (chosenFeatures, featureWithProjectCount) => {
                chosenFeatures.tag = getFeatureWithoutProjectCount(featureWithProjectCount)
                return chosenFeatures;
            }
        },
        {
            name: "technologies",
            settableOptions: uniqueTechnologies.map(technology => technology + " (" + allProjects.filter(project => project.features.technologies.includes(technology)).length + ")"),
            setFeatures: (chosenFeatures, featureWithProjectCount) => {
                chosenFeatures.technology = getFeatureWithoutProjectCount(featureWithProjectCount)
                return chosenFeatures;
            }
        },
        {
            name: "star",
            settableOptions: uniqueStarStatuses.map(hasStar => (hasStar ? "⭐" : "") + " (" + allProjects.filter(project => project.features.hasStar == hasStar).length + ")"),
            setFeatures: (chosenFeatures, featureWithProjectCount) => {
                chosenFeatures.hasStar = featureWithProjectCount == "" ? null : Boolean(getFeatureWithoutProjectCount(featureWithProjectCount))
                return chosenFeatures;
            }
        }
    ]
}

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
    }, {} as Record<K, T[]>);

function removeDuplicates<T>(array: T[]): T[] {
    return [...new Set(array)];
}

export interface Project {
    title: string;
    description: string;
    abreveation: string;
    features: Features;
    content: string;
}

export interface Features {
    programmingLanguages: string[];
    technologies: string[];
    tags: string[];
    hasStar: boolean;
}


export interface ChosenFeatures {
    programmingLanguage: string | null;
    technology: string | null;
    tag: string | null;
    hasStar: boolean | null;


}

function projectsMeetsCriteria(project: Project, criteria: ChosenFeatures) {
    return (criteria.programmingLanguage == null || project.features.programmingLanguages.includes(criteria.programmingLanguage)) &&
        (criteria.technology == null || project.features.technologies.includes(criteria.technology)) &&
        (criteria.tag == null || project.features.tags.includes(criteria.tag)) &&
        (criteria.hasStar == null || project.features.hasStar == criteria.hasStar)
}