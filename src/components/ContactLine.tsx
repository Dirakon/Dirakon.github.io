import React from "react";
import {getAllSocialMediaImagePaths, loadSocialMediaIcon, socialMediaImagePathToUrl} from "../scripts/FileLoader";
import './../styles/ContactLine.css'

const ContactLine = function () {
    return < div className="contactLine">
        {getAllSocialMediaImagePaths().map((iconFileName, index) => (
            <a href={socialMediaImagePathToUrl(iconFileName)} key={index}>
                <img className="contactIcon" src={loadSocialMediaIcon(iconFileName)}/>
            </a>)
        )}
    </div>
}


export default ContactLine;