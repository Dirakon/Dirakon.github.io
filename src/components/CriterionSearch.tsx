import React from "react";
import './../styles/CriterionSearch.css'
import SingularCriterion from "./SingularCriterion";
import {ChosenFeatures} from "./ProjectList";

const CriterionSearch = function (props: { visibleFeaturesSets: VisibleFeatureSet[]; setChosenFeatures: React.Dispatch<React.SetStateAction<ChosenFeatures>> }) {
    return < div className="criterionSearch">
        {props.visibleFeaturesSets.map((featureSet, index) => <SingularCriterion key={index}
                                                                                 stateToChangeChosenFeatures={props.setChosenFeatures}
                                                                                 criterionName={featureSet.name}
                                                                                 features={featureSet.settableOptions}
                                                                                 setFeature={featureSet.setFeatures}/>)
        }
    </div>
}
export type VisibleFeatureSet = {
    name: string,
    settableOptions: string[],
    setFeatures: (chosenFeatures: ChosenFeatures, selectedOption: string) => ChosenFeatures;
}

export default CriterionSearch;