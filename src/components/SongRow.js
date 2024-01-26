import React from "react";
import "../styles/SongRow.css";

const SongRow = ({ song }) => {
  return (
    <div className="song-row">
      <p>{`${song.trackNumber}. ${song.songName} - ${song.artistName}`}</p>
    </div>
  );
};

export default SongRow;
