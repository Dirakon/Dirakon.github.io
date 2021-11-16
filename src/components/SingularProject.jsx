import React, { useState } from "react";
import './../styles/SingularProject.css'
import LongProjectInfo from "./LongProjectInfo";
import ShortProjectInfo from "./ShortProjectInfo";
const SingularProject = function (props) {
    const { proccessedDeafultCriteria, hasStar, programmingLanguages } = proccessCriteria(props.criteria);
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
    let curIndexOffset = 0;
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
                    proccessedDeafultCriteria = proccessDefaultCriteria(proccessedDeafultCriteria, criteria, criterion, curIndexOffset);
                    break;
            }
            curIndexOffset += 200;
        }
    }
    return { proccessedDeafultCriteria: proccessedDeafultCriteria, hasStar: hasStar, programmingLanguages: programmingLanguages }
}

function proccessDefaultCriteria(proccessedDeafultCriteria, criteria, criterion, curIndexOffset) {
    if (proccessedDeafultCriteria.length !== 0)
        proccessedDeafultCriteria = proccessedDeafultCriteria.concat([<a key={curIndexOffset - 1}>, </a>]);
    criteria[criterion].forEach((feature, index) => {
        proccessedDeafultCriteria = proccessedDeafultCriteria.concat(<a key={curIndexOffset + index} className={"featureTag"}>{feature}</a>).concat(<a key={curIndexOffset + 100 + index}>, </a>);
    });
    if (proccessedDeafultCriteria.length !== 0)
        proccessedDeafultCriteria = proccessedDeafultCriteria.slice(0, -1);
    return proccessedDeafultCriteria;
}

export default SingularProject;