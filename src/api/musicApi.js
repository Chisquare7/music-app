import axios from "axios";

const API_URL = "https://robo-music-api.onrender.com/music/my-api";

const fetchMusicSongs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error encountered when fetching songs:", error)
        return [];
    }
}

export default fetchMusicSongs;
