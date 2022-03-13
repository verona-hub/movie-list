import React from 'react';
import { useNavigate } from "react-router-dom";


const MovieList = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2> My Movies </h2>
            <button onClick={() => navigate('/create-movie')}> Add a new movie </button>
        </div>
    );
};


export default MovieList;
