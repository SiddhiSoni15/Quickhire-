// src/api/omdbApi.js
import axios from 'axios';

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=12445';

export const searchMovies = async (query) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    return response.data.Search;
};
