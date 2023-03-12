import React from "react";
import {loadProgrammingLanguageIcon, programmingLanguageTagToImageFileObject} from "../scripts/FileLoader";
import './../styles/ProgrammingLanguagesBox.css'


function convertLanguageNameToIcon(programmingLanguageTag: string) {
    let programmingLanguageIconFileName = programmingLanguageTagToImageFileObject(programmingLanguageTag)
    return <img style={{width: "100%", height: "100%"}}
                src={programmingLanguageIconFileName == null ? undefined : loadProgrammingLanguageIcon(programmingLanguageIconFileName)}
                alt={programmingLanguageTag}/>


}

function ProgrammingLanguagesBox(props: { programmingLanguages: string[]; }) {
    return < div className="programmingLanguagesBox">
        {props.programmingLanguages.map((programmingLanguageTag: string, index: number) =>
            <div key={index} className="singularLanguage"> {
                convertLanguageNameToIcon(programmingLanguageTag)
            }</div>
        )
        }
    </div>
}


export default ProgrammingLanguagesBox;