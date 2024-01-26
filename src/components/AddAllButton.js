import React from "react";
import "../styles/AddAllButton.css";

const AddAllButton = () => {
  const handleClick = () => {
    //console.log("Add All clicked");
  };

  return (
    <button className="add-all-button" onClick={handleClick}>
      Add All
    </button>
  );
};

export default AddAllButton;
