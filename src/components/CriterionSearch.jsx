import React from "react";
import './../styles/CriterionSearch.css'
import SingularCriterion from "./SingularCriterion";
const CriterionSearch = function (props) {
    return < div className="criterionSearch">
        {Object.keys(props.criteriaToFeatures).map((criterion, index) => <SingularCriterion key={index}
            stateToChangeChosenFeatures={props.setCriteriaToChosenFeatures} criterionName={criterion} features={props.criteriaToFeatures[criterion]} />)
        }
    </div>
}


export default CriterionSearch;