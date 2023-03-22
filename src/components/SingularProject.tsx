import React, {PropsWithChildren} from "react";
import './../styles/SingularProject.css'
import LongProjectInfo from "./LongProjectInfo";
import ShortProjectInfo from "./ShortProjectInfo";
import {Features} from "./ProjectList";

export type SingularProjectProps = PropsWithChildren<{ features: Features, video: string | undefined, title: string, description: string, image: string | undefined }>;

const SingularProject = function (props: SingularProjectProps) {
    const visualizedTags = visualizeKeywords(props.features.tags.concat(props.features.technologies))
    return <div className="fullProject collapsed">
        <ShortProjectInfo hasStar={props.features.hasStar}
                          programmingLanguages={props.features.programmingLanguages} title={props.title}
                          description={props.description} image={props.image}/>
        <LongProjectInfo video={props.video}>{visualizedTags}<br/>{props.children}</LongProjectInfo>
    </div>
}

const startingIndex = 100;

function visualizeKeywords(tags: string[]) {
    let processedTags = tags.flatMap((tag, index) => [<a key={startingIndex + index * 2}
                                                         className={"featureTag"}>{tag}</a>,
        <a key={startingIndex + index * 2 + 1}>, </a>]);
    if (processedTags.length !== 0)
        processedTags = processedTags.slice(0, -1);
    return processedTags;
}


export default SingularProject;