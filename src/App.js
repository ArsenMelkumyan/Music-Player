// App.js
import React, { useState } from "react";
import SongList from "./components/SongList";
import MusicUploadForm from "./components/MusicUploadForm";
import "./App.css";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = () => {
    // Simulate file upload process with a timeout
    console.log("Uploading file:", selectedFile.name);
    setTimeout(() => {
      console.log("Upload complete!");
      // Update state or perform additional actions upon successful upload
    }, 2000);
  };

  return (
    <div className="app-container">
      <h1>Music App</h1>
      <SongList songs={songs} />
      <MusicUploadForm
        selectedFile={selectedFile}
        onFileSelect={(file) => setSelectedFile(file)}
        onUpload={handleUpload}
      />
    </div>
  );
};

export default App;
