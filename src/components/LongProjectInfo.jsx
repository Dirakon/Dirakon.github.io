import React, { useState } from "react";
import './../styles/LongProjectInfo.css'
const LongProjectInfo = function (props) {
    return <div className="longProjectInfoWrapper">
        <div className="longProjectInfo">
            <video width="100%" autoPlay loop muted playsInline>
                <source src={props.video} type="video/mp4" />
            </video>
            <br />
            {props.children}
        </div>
    </div>
}


export default LongProjectInfo;