import React from "react";
import {loadProgrammingLanguageIcon, loadProgrammingLanguageTagToImageFileObject} from "../scripts/FileLoader";
import './../styles/ProgrammingLanguagesBox.css'


function convertLanguageNameToIcon(programmingLanguageTag, programmingLanguagesTagToImage) {
    if (!programmingLanguagesTagToImage.hasOwnProperty(programmingLanguageTag)) {
        return <a>{programmingLanguageTag}</a>
    }
    let programmingLanguageIconFileName = programmingLanguagesTagToImage[programmingLanguageTag]
    return <img style={{width: "100%", height: "100%"}}
                src={loadProgrammingLanguageIcon(programmingLanguageIconFileName)}></img>


}

function ProgrammingLanguagesBox(props) {
    let programmingLanguagesTagToImage = loadProgrammingLanguageTagToImageFileObject()
    return < div className="programmingLanguagesBox">
        {props.programmingLanguages.map((programmingLanguageTag, index) =>
            <div key={index} className="singularLanguage"> {
                convertLanguageNameToIcon(programmingLanguageTag, programmingLanguagesTagToImage)
            }</div>
        )
        }
    </div>
}


export default ProgrammingLanguagesBox;