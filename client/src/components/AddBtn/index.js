import React, { useState } from "react";
import "./style.css";

function AddBtn(props) {
  const [bookState, setbookState] = useState("Add to Library");

  return (
    <span className="add-btn"
      role="button"
      tabIndex="0"
      onClick={props.onClick}>
      {bookState}
    </span>
  );
}

export default AddBtn;
