import React, { useState } from "react";
import './../styles/CriterionSearch.css'
import SingularCriterion from "./SingularCriterion";
const CriterionSearch = function (props) {
    let singularCriteria = [];

    Object.keys(props.criteria).forEach((criterion,index) =>{
        singularCriteria = singularCriteria.concat(<SingularCriterion key = {index}
            stateToChangeChosenFeatures = {props.setChosenFeatures} criterionName = {criterion} features = {props.criteria[criterion]}/>)
    })
    return < div className="criterionSearch">
        {singularCriteria}
    </div>
}


export default CriterionSearch;