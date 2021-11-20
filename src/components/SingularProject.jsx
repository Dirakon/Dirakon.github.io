import React, { useState } from "react";
import './../styles/SingularProject.css'
import LongProjectInfo from "./LongProjectInfo";
import ShortProjectInfo from "./ShortProjectInfo";
const SingularProject = function (props) {
    const { proccessedDeafultFeatures, hasStar, programmingLanguages } = proccessCriteria(props.criteriaToFeatures);
    let obj = <div className="fullProject collapsed">
        <ShortProjectInfo hasStar={hasStar} programmingLanguages={programmingLanguages} title={props.title} description={props.description} image={props.image} />
        <LongProjectInfo video={props.video}>{proccessedDeafultFeatures}<br />{props.children}</LongProjectInfo>
    </div>

    return obj
}

const maximumDefaultFeaturesPerCriterion = 100;
function proccessCriteria(criteriaToFeatures) {
    let proccessedDeafultFeatures = [];
    let hasStar = false;
    let programmingLanguages = [];
    Object.keys(criteriaToFeatures).forEach((criterion,index) => {
        switch (criterion) {
            case 'programming language':
                programmingLanguages = criteriaToFeatures[criterion];
                break;
            case '⭐': 
                hasStar = criteriaToFeatures['⭐'][0].startsWith('⭐');
                break;
            default:
                proccessedDeafultFeatures = proccessDefaultFeatures(proccessedDeafultFeatures, criteriaToFeatures, criterion, index*maximumDefaultFeaturesPerCriterion*2);
                break;
        }
    })
    return { proccessedDeafultFeatures: proccessedDeafultFeatures, hasStar: hasStar, programmingLanguages: programmingLanguages }
}

function proccessDefaultFeatures(proccessedDeafultFeatures, criteria, criterion, curIndexOffset) {
    if (proccessedDeafultFeatures.length !== 0)
        proccessedDeafultFeatures = proccessedDeafultFeatures.concat([<a key={curIndexOffset - 1}>, </a>]);
    criteria[criterion].forEach((feature, index) => {
        proccessedDeafultFeatures = proccessedDeafultFeatures.concat(<a key={curIndexOffset + index} className={"featureTag"}>{feature}</a>).concat(<a key={curIndexOffset + maximumDefaultFeaturesPerCriterion + index}>, </a>);
    });
    if (proccessedDeafultFeatures.length !== 0)
        proccessedDeafultFeatures = proccessedDeafultFeatures.slice(0, -1);
    return proccessedDeafultFeatures;
}

export default SingularProject;