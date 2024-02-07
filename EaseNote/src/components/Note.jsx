import React from "react";
//import Notes from "../notes";


function Note(props) {
  return (
    <div className="note">
      <h1>{props.topic}</h1>
      <p>{props.question}</p>
    </div>
  );
}

export default Note;
