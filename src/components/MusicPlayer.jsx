import React, { useRef, useState } from "react";

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex items-center bg-gray-800 text-white p-4 rounded-md">
      <img
        src={song.songImage}
        alt={song.songTitle}
        className="w-16 h-16 rounded-md mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold">{song.songTitle}</h3>
        <p className="text-gray-400">{song.artistName}</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 rounded-md cursor-pointer"
          onClick={togglePlay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <audio ref={audioRef} src={song.songUrl}></audio>
    </div>
  );
};

export default MusicPlayer;
