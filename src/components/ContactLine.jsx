import React, { useState } from "react";
import './../styles/ContactLine.css'
const ContactLine = function (props) {
    let singularIcons = [];

    Object.keys(props.linksToIcons).forEach((link, index) => {
        singularIcons = singularIcons.concat(<a href={link} key={index}><img className="contactIcon" src={props.linksToIcons[link]}
        /></a>)
    })
    return < div className="contactLine">
        {singularIcons}
    </div>
}


export default ContactLine;