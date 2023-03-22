import React, {ChangeEvent} from "react";
import './../styles/SingularCriterion.css'
import {ChosenFeatures} from "./ProjectList";

export interface SingularCriterionProps {
    stateToChangeChosenFeatures: React.Dispatch<React.SetStateAction<ChosenFeatures>>;
    criterionName: string;
    setFeature: (chosenFeatures: ChosenFeatures, chosenFeature: string) => ChosenFeatures;
    features: string[];
}

function SingularCriterion(props: SingularCriterionProps) {
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