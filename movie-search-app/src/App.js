// src/App.js
import React from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import { searchMovies } from './api/omdbApi';
import './App.css';

const App = () => {
    const [movies, setMovies] = React.useState([]);

    const handleSearch = async (query) => {
        const movies = await searchMovies(query);
        setMovies(movies);
    };

    return (
        <div className="app">
            <h1>Movie Search App</h1>
            <SearchBar onSearch={handleSearch} />
            <MovieList movies={movies} />
        </div>
    );
};

export default App;
