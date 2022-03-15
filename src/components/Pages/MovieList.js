import React from 'react';
import { useNavigate } from "react-router-dom";


const MovieList = () => {
    const navigate = useNavigate();


    // const requestMovieList = {
    //     method: 'GET',
    //     redirect: 'follow',
    //     url: "https://zm-movies-assignment.herokuapp.com/api/movies?populate=*"
    // };
    //
    // fetch(requestMovieList.url, requestMovieList)
    //     // .then(response => response.text())
    //     // .then(result => console.log(result))
    //     // .catch(error => console.log('error', error));
    //     .then(response => {
    //         console.log(response);
    //         // return response;
    //     })
    //     .catch(error => console.log('error', error));

    return (
        <div>
            <h2> My Movies </h2>
            <button onClick={() => navigate('/create-movie')}> Add a new movie </button>
        </div>
    );
};


export default MovieList;
