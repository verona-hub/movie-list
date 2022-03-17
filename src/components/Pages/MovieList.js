import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const MovieList = ({ token }) => {
    const navigate = useNavigate();
    console.log(token)

    const checkMovies = async () => {

        const listRequest = {
            method: 'GET',
            url: 'https://zm-movies-assignment.herokuapp.com/api/movies?populate=*',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
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
        <div className='MovieList'>
            <h2> Your movies </h2>
            <div className='button-wrapper'>
                <button className='button' onClick={ () => navigate('/create-movie') }> Add a new movie</button>
                {/*<button className='button' onClick={ checkMovies }> Check movies </button>*/}
            </div>
        </div>
    );
};


export default MovieList;