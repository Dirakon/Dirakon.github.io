import React, { useState } from "react";
import './../styles/CriterionSearch.css'
import SingularCriterion from "./SingularCriterion";
const CriterionSearch = function (props) {
    let singularCriterions = [];

    Object.keys(props.criterions).forEach((criterion,index) =>{
        singularCriterions = singularCriterions.concat(<SingularCriterion key = {index}
            stateToChangeChosenCriterions = {props.setChosenCriterions} criterionName = {criterion} features = {props.criterions[criterion]}/>)
    })
    return < div className="criterionSearch">
        {singularCriterions}
    </div>
}


export default CriterionSearch;