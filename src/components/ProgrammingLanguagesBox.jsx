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
    console.log(props.programmingLanguages)
    for (let index  = 0;index < props.programmingLanguages.length;index++){
        languageSet = languageSet.concat(<div key = {index} className = "singularLanguage"> {convertLanguageNameToIcon(props.programmingLanguages[index])}</div>)
    }
    return < div className="programmingLanguagesBox">
        {languageSet}
    </div>
}


export default ProgrammingLanguagesBox;