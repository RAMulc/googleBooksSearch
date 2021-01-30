import React from "react";
import "./style.css";

function ViewBtn(props) {
  return (
    <a className="view-btn" href={props.link} target="_blank" rel="noopener noreferrer">
      View
    </a>
  );
}

export default ViewBtn; 
