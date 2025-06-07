import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h3>{props.meaning.definition}</h3>
    
      <li className="example">{props.meaning.example}
        <Synonyms synonyms={props.meaning.synonyms} />
      </li>
    </div>
  );
}