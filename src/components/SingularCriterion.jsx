import React, { useState } from "react";
import './../styles/SingularCriterion.css'

function SingularCriterion   (props) {
    let onChangeFunc = function (obj) {
        props.stateToChangeChosenFeatures(chosenFeatures => {
            chosenFeatures[props.criterionName] = obj.target.value;
            return { ...chosenFeatures }
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