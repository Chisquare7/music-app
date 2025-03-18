import React, { useEffect, useState } from "react";
import MusicCard from "../components/MusicCard";
import fetchMusicSongs from "../api/musicApi";

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const data = await fetchMusicSongs();
      setSongs(data);
    };

    getSongs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Music Player</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {songs.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Home;
