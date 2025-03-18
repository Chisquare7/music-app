import React from "react";

const MusicCard = ({ song, onplay }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md text-white">
      <img
        src={song.songImage}
        alt={song.songTitle}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{song.songTitle}</h2>
      <p className="text-sm">{song.artistName}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
        onClick={() => onplay(song)}
      >
        ▶ Play
      </button>
    </div>
  );
};

export default MusicCard;
