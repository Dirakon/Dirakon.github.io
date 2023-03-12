import React, {ChangeEvent} from "react";
import './../styles/SingularCriterion.css'
import {ChosenFeatures} from "./ProjectList";

function SingularCriterion(props: { stateToChangeChosenFeatures: React.Dispatch<React.SetStateAction<ChosenFeatures>>; criterionName: string; setFeature: (chosenFeatures: ChosenFeatures, chosenFeature: string) => ChosenFeatures; features: string[]; }) {
    let onChangeFunc = function (event: ChangeEvent) {
        const target = event.target as typeof event.target & {
            value: string
        };
        props.stateToChangeChosenFeatures(chosenFeatures => {
            return {...props.setFeature(chosenFeatures, target.value)}
        })
    }
    return <select onChange={onChangeFunc} className={'SingularCriterion'} defaultValue={''}>
        <option value={''}>{'Any ' + props.criterionName}</option>
        {props.features.map((feature, index) => {
            return <option key={index} value={feature}>{feature}</option>;
        })}
    </select>
}


export default SingularCriterion;