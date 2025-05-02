
import React from "react";

const Playlist = () => {
  const songs = [
    "Converse high - BTS",
    "Singularity - V",
    "Red Lights - Bangchan",
    "Hyunjin",
    "Beautiful - BTS"
  ];
  
  return (
    <div className="pastel-card bg-pastel-pink p-4">
      <h3 className="text-white font-medium mb-2">Playlist:</h3>
      <ul className="text-white text-sm space-y-1">
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
