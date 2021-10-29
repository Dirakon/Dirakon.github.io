import React, { useState } from "react";
import './../styles/SingularCriterion.css'
const SingularCriterion = function (props) {
    let onChangeFunc = function (obj) {
        props.stateToChangeChosenCriterions(chosenCriterions => {
            chosenCriterions[props.criterionName] = obj.target.value;
            return { ...chosenCriterions }
        })
    }
    return <select onChange={onChangeFunc} className={'SingularCriterion'} defaultValue={''} >
        <option value={''}>{'Any ' + props.criterionName}</option>
        {props.features.map((feature, index) => {
            return <option key={index} value={feature}>{feature}</option>;
        })}
    </select>
}


export default SingularCriterion;