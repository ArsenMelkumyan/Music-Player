import React from "react";
import SongRow from "./SongRow";
import PlayAllButton from "./PlayAllButton";
import AddAllButton from "./AddAllButton";
import "../styles/SongList.css";

const SongList = ({ songs }) => {
  return (
    <div className="song-list-container">
      <h2>Song List</h2>
      <PlayAllButton />
      <AddAllButton />
      {songs.map((song) => (
        <SongRow key={song.trackNumber} song={song} />
      ))}
    </div>
  );
};

export default SongList;
