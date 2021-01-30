import React, { useState } from "react";
import "./style.css";

function AddBtn(props) {
  const [bookStatus, setBookStatus] = useState("Add to Library");

  function updateStatus() {
    setBookStatus("Added to Library");
  }

  return (
    <span className="add-btn" {...props}
      role="button"
      tabIndex="0"
      onClick={updateStatus}>
      {bookStatus}
    </span>
  );
}

export default AddBtn;
