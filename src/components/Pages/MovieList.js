import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const MovieList = () => {
    const navigate = useNavigate();

    // const config2 = {
    //     method: 'get',
    //     url: 'https://zm-movies-assignment.herokuapp.com/api/movies?populate=*',
    //     headers: { }
    // };

    // axios(config2)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // const requestOptions2 = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };
    //
    // fetch("https://zm-movies-assignment.herokuapp.com/api/movies?populate=*", requestOptions2)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

        // .then(response => {
        //     console.log(response);
        //     return response;
        // })
        // .catch(error => console.log('error', error));

    return (
        <div>
            <h2> My Movies </h2>
            <button onClick={() => navigate('/create-movie')}> Add a new movie </button>
        </div>
    );
};


export default MovieList;
