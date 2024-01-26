import React from "react";
import "../styles/MusicUploadForm.css";

const MusicUploadForm = ({ selectedFile, onFileSelect, onUpload }) => {
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return (
    <div className="music-upload-form-container">
      <h2>Music Upload Form</h2>
      <input type="file" accept=".mp3, .wav" onChange={handleFileSelect} />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      <button onClick={onUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default MusicUploadForm;
