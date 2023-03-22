import React, {PropsWithChildren, useEffect, useRef, useState} from "react";
import './../styles/LongProjectInfo.css'

const LongProjectInfo = function (props: PropsWithChildren<{ video: string | undefined; }>) {
    const [videoIsLoaded, setVideoLoadedStatus] = useState(false);

    let videoElement = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        let interval = setInterval(() => {
            if (videoElement != null && videoElement.current != null && videoElement.current.readyState >= 3) {
                clearInterval(interval);
                setVideoLoadedStatus(true)
            }
        }, 500);
    }, [])
    return <div className="longProjectInfoWrapper">
        <div className="longProjectInfo">
            {
                (props.video === undefined || videoIsLoaded) ?
                    undefined :
                    <a style={{display: "block", textAlign: "center"}}>...loading video...</a>
            }
            {
                props.video === undefined ?
                    undefined
                    : <video width={videoIsLoaded ? "100%" : "0%"} autoPlay loop muted ref={videoElement}
                             playsInline>
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