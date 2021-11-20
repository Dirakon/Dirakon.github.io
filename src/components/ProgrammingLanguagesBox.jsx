import React, { useState } from "react";
import './../styles/ProgrammingLanguagesBox.css'

let proccessedImportedLanguages = {
    cpp: require('./../images/cpp.png'),
    java: require('./../images/java.png'),
    js: require('./../images/js.png'),
    cs: require('./../images/cs.png'),
    python: require('./../images/python.png'),
}

function convertLanguageNameToIcon(name) {
    let formattedName = name.toLowerCase().replaceAll('+', 'p').replaceAll('#', 's')
    if (formattedName in proccessedImportedLanguages) {
        return <img style={{ width: "100%", height: "100%" }} src={proccessedImportedLanguages[formattedName].default}></img>
    }
    return <a>{name}</a>

}

function ProgrammingLanguagesBox(props) {
    return < div className="programmingLanguagesBox">
        {props.programmingLanguages.map((programmingLanguage, index) =>
            <div key={index} className="singularLanguage"> {convertLanguageNameToIcon(programmingLanguage)}</div>
            )
        }
    </div>
}


export default ProgrammingLanguagesBox;