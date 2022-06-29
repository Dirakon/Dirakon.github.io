import React from "react";
import './../styles/SingularProject.css'
import LongProjectInfo from "./LongProjectInfo";
import ShortProjectInfo from "./ShortProjectInfo";

const SingularProject = function (props) {
    const {
        processedDefaultFeatures: processedDefaultFeatures,
        hasStar,
        programmingLanguages
    } = processCriteria(props.criteriaToFeatures);
    return <div className="fullProject collapsed">
        <ShortProjectInfo textColor={props.shortDescriptionTextColor} hasStar={hasStar}
                          programmingLanguages={programmingLanguages} title={props.title}
                          description={props.description} image={props.image}/>
        <LongProjectInfo video={props.video}>{processedDefaultFeatures}<br/>{props.children}</LongProjectInfo>
    </div>
}

const maximumDefaultFeaturesPerCriterion = 100;

function processCriteria(criteriaToFeatures) {
    let processedDefaultFeatures = [];
    let hasStar = false;
    let programmingLanguages = [];
    Object.keys(criteriaToFeatures).forEach((criterion, index) => {
        switch (criterion) {
            case 'programming language':
                programmingLanguages = criteriaToFeatures[criterion];
                break;
            case '⭐':
                hasStar = criteriaToFeatures['⭐'][0].startsWith('⭐');
                break;
            default:
                processedDefaultFeatures = processDefaultFeatures(processedDefaultFeatures, criteriaToFeatures, criterion, index * maximumDefaultFeaturesPerCriterion * 2);
                break;
        }
    })
    return {
        processedDefaultFeatures: processedDefaultFeatures,
        hasStar: hasStar,
        programmingLanguages: programmingLanguages
    }
}

function processDefaultFeatures(alreadyProcessedDefaultFeatures, criteria, criterion, curIndexOffset) {
    if (alreadyProcessedDefaultFeatures.length !== 0)
        alreadyProcessedDefaultFeatures = alreadyProcessedDefaultFeatures.concat([<a key={curIndexOffset - 1}>, </a>]);
    criteria[criterion].forEach((feature, index) => {
        alreadyProcessedDefaultFeatures = alreadyProcessedDefaultFeatures.concat(<a key={curIndexOffset + index}
                                                                                    className={"featureTag"}>{feature}</a>).concat(
            <a key={curIndexOffset + maximumDefaultFeaturesPerCriterion + index}>, </a>);
    });
    if (alreadyProcessedDefaultFeatures.length !== 0)
        alreadyProcessedDefaultFeatures = alreadyProcessedDefaultFeatures.slice(0, -1);
    return alreadyProcessedDefaultFeatures;
}

export default SingularProject;