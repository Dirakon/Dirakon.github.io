import React from "react";
import {loadSocialMediaFileNameToURLObject, loadSocialMediaIcon} from "../scripts/FileLoader";
import './../styles/ContactLine.css'

const ContactLine = function (props) {
    let iconsToLinks = loadSocialMediaFileNameToURLObject()
    return < div className="contactLine">
        {Object.keys(iconsToLinks).map((iconFileName, index) => (<a href={iconsToLinks[iconFileName]} key={index}>
                <img className="contactIcon" src={loadSocialMediaIcon(iconFileName)}/>
            </a>)
        )}
    </div>
}


export default ContactLine;