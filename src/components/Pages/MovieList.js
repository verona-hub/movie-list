import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const MovieList = ({ token }) => {
    const navigate = useNavigate();
    console.log(token)

    const checkMovies = async () => {

        const data = new FormData();
        data.append('populate', '*');

        const listRequest = {
            data: data,
            method: 'GET',
            url: 'https://zm-movies-assignment.herokuapp.com/api/movies?populate=*',
            headers: {
                'content-type': 'application/json',
                'Authorization': { token }
            },
            redirect: 'follow'
        };

        // Axios
        await axios(listRequest)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });


        //Fetch
        // await fetch("https://zm-movies-assignment.herokuapp.com/api/movies?populate=*", listRequest)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

        // try {
        //     await axios(listRequest)
        //         .then( (response) => {
        //             console.log(response);
        //         })
        // } catch (error) {
        //     console.log(error)
        // }

    };

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
            <button onClick={ checkMovies }> Check movies </button>
        </div>
    );
};


export default MovieList;
