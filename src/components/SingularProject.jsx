import React, { useState } from "react";
import './../styles/SingularProject.css'
import LongProjectInfo from "./LongProjectInfo";
import ShortProjectInfo from "./ShortProjectInfo";
const SingularProject = function (props) {
    const criterions = props.criterions;
    let proccessedCriterions = [];
    let hasStar = false;
    let programmingLanguages = [];
    for (const criterion in criterions) {
        if (criterions.hasOwnProperty(criterion)) {
            switch (criterion) {
                case 'programming language': {
                    programmingLanguages = criterions[criterion];
                }
                    break;
                case '⭐': if(criterions['⭐'][0].startsWith('⭐')){
                    hasStar = true;
                }
                    break;
                default: {
                    if (proccessedCriterions.length !== 0)
                        proccessedCriterions = [<a key = {-1}>, </a>]
                    criterions[criterion].forEach((feature,index) => {
                        proccessedCriterions = proccessedCriterions.concat(<a key = {index} className = {"featureTag"}>{feature}</a>).concat(<a key = {100 + index}>, </a>);
                    });
                    if (proccessedCriterions.length !== 0)
                        proccessedCriterions = proccessedCriterions.slice(0,-1)
                }
                    break;
            }
        }
    }
    let obj = <div className="fullProject collapsed">
        <ShortProjectInfo hasStar = {hasStar} programmingLanguages = {programmingLanguages} title={props.title} description={props.description} image={props.image} />
        <LongProjectInfo video={props.video}>{proccessedCriterions}<br />{props.children}</LongProjectInfo>
    </div>

    return obj
}


export default SingularProject;