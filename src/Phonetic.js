import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <a rel="noreferrer" href={props.phonetic.audio} target="_blank">
                Listen
            </a>
            <br />
            {props.phonetic.text}
        </div>
    );   
}
