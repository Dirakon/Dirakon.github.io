import React, {PropsWithChildren} from "react";
import './../styles/LongProjectInfo.css'

const LongProjectInfo = function (props: PropsWithChildren<{ video: string | undefined; }>) {

    return <div className="longProjectInfoWrapper">
        <div className="longProjectInfo">
            {
                props.video === undefined ?
                    undefined
                    : <video width={"100%"} controls muted loop playsInline preload={"metadata"}
                    >
                        <source src={props.video}
                                type="video/mp4"/>
                    </video>
            }
            <br/>
            {props.children}
        </div>
        )
    </div>
}


export default LongProjectInfo;