import React from "react";
import "../styles/PlayAllButton.css";

const PlayAllButton = () => {
  const handleClick = () => {
    //console.log("Play All clicked");
  };

  return (
    <button className="play-all-button" onClick={handleClick}>
      Play All
    </button>
  );
};

export default PlayAllButton;
