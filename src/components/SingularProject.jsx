import React, { useState } from "react";
import './../styles/SingularProject.css'
import LongProjectInfo from "./LongProjectInfo";
import ShortProjectInfo from "./ShortProjectInfo";
const SingularProject = function (props) {
    const criteria = props.criteria;
    let proccessedCriteria = [];
    let hasStar = false;
    let programmingLanguages = [];
    for (const criterion in criteria) {
        if (criteria.hasOwnProperty(criterion)) {
            switch (criterion) {
                case 'programming language': {
                    programmingLanguages = criteria[criterion];
                }
                    break;
                case '⭐': if(criteria['⭐'][0].startsWith('⭐')){
                    hasStar = true;
                }
                    break;
                default: {
                    if (proccessedCriteria.length !== 0)
                        proccessedCriteria = [<a key = {-1}>, </a>]
                    criteria[criterion].forEach((feature,index) => {
                        proccessedCriteria = proccessedCriteria.concat(<a key = {index} className = {"featureTag"}>{feature}</a>).concat(<a key = {100 + index}>, </a>);
                    });
                    if (proccessedCriteria.length !== 0)
                        proccessedCriteria = proccessedCriteria.slice(0,-1)
                }
                    break;
            }
        }
    }
    let obj = <div className="fullProject collapsed">
        <ShortProjectInfo hasStar = {hasStar} programmingLanguages = {programmingLanguages} title={props.title} description={props.description} image={props.image} />
        <LongProjectInfo video={props.video}>{proccessedCriteria}<br />{props.children}</LongProjectInfo>
    </div>

    return obj
}


export default SingularProject;