import React, { useState } from "react";
import './../styles/ProgrammingLanguagesBox.css'




let proccessedImportedLanguages = {
    cpp:require('./../images/cpp.png'),
    java:require('./../images/java.png'),
    js:require('./../images/js.png'),
    cs:require('./../images/cs.png'),
    python:require('./../images/python.png'),
}

function convertLanguageNameToIcon(name){
    let handledName = name.toLowerCase().replaceAll('+','p').replaceAll('#','s')
    if (handledName in proccessedImportedLanguages){
        return <img style = {{width:"100%", height:"100%"}} src = {proccessedImportedLanguages[handledName].default}></img>
    }
    return <a>{name}</a>

}

const ProgrammingLanguagesBox = function (props) {
    let languageSet = []
    let globalIndex = 0;
    for (let index  = 0;index < props.programmingLanguages.length;index+=2){
        let ourPair = []
        for (let localIndex = index;localIndex < Math.min(props.programmingLanguages.length,index+2);++localIndex){
            ourPair = ourPair.concat(<div key = {globalIndex++} className = "singularLanguage"> {convertLanguageNameToIcon(props.programmingLanguages[localIndex])}</div>);
        }
        languageSet = languageSet.concat(<div key = {globalIndex++} className = "programmingLanguagePair">{ourPair}</div>)
    }
    return < div className="programmingLanguagesBox">
        {languageSet}
    </div>
}


export default ProgrammingLanguagesBox;