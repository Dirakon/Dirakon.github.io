import React, { useState } from "react";
import './../styles/ContactLine.css'
const ContactLine = function (props) {
    return < div className="contactLine">
        {Object.keys(props.linksToIcons).map((link, index) => (<a href={link} key={index}>
            <img className="contactIcon" src={props.linksToIcons[link]} />
        </a>)
        )}
    </div>
}


export default ContactLine;