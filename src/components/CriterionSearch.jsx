import React, { useState } from "react";
import './../styles/CriterionSearch.css'
import SingularCriterion from "./SingularCriterion";
const CriterionSearch = function (props) {
    let singularCriteria = [];

    Object.keys(props.criteria).forEach((criterion,index) =>{
        singularCriteria = singularCriteria.concat(<SingularCriterion key = {index}
            stateToChangeChosenCriteria = {props.setChosenCriteria} criterionName = {criterion} features = {props.criteria[criterion]}/>)
    })
    return < div className="criterionSearch">
        {singularCriteria}
    </div>
}


export default CriterionSearch;