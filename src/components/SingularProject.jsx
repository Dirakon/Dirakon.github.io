import React, { useState } from "react";
import './../styles/SingularProject.css'
import LongProjectInfo from "./LongProjectInfo";
import ShortProjectInfo from "./ShortProjectInfo";
const SingularProject = function (props) {
    const { proccessedDeafultCriteria, hasStar, programmingLanguages } = proccessCriteria(props.criteria)
    let obj = <div className="fullProject collapsed">
        <ShortProjectInfo hasStar={hasStar} programmingLanguages={programmingLanguages} title={props.title} description={props.description} image={props.image} />
        <LongProjectInfo video={props.video}>{proccessedDeafultCriteria}<br />{props.children}</LongProjectInfo>
    </div>

    return obj
}

function proccessCriteria(criteria) {

    let proccessedDeafultCriteria = [];
    let hasStar = false;
    let programmingLanguages = [];
    for (const criterion in criteria) {
        if (criteria.hasOwnProperty(criterion)) {
            switch (criterion) {
                case 'programming language':
                    programmingLanguages = criteria[criterion];
                    break;
                case '⭐': if (criteria['⭐'][0].startsWith('⭐')) {
                    hasStar = true;
                }
                    break;
                default:
                    proccessedDeafultCriteria = proccessDefaultCriteria(proccessedDeafultCriteria, criteria, criterion);
                    break;
            }
        }
    }
    return { proccessedDeafultCriteria: proccessedDeafultCriteria, hasStar: hasStar, programmingLanguages: programmingLanguages }
}


function proccessDefaultCriteria(proccessedDeafultCriteria, criteria, criterion) {
    {
        if (proccessedDeafultCriteria.length !== 0)
            proccessedDeafultCriteria = [<a key={-1}>, </a>];
        criteria[criterion].forEach((feature, index) => {
            proccessedDeafultCriteria = proccessedDeafultCriteria.concat(<a key={index} className={"featureTag"}>{feature}</a>).concat(<a key={100 + index}>, </a>);
        });
        if (proccessedDeafultCriteria.length !== 0)
            proccessedDeafultCriteria = proccessedDeafultCriteria.slice(0, -1);
    }
    return proccessedDeafultCriteria;
}

export default SingularProject;