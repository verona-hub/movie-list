import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import axios from 'axios';


// Components
import CreateMovie from "./components/Pages/CreateMovie";
import LoginError from './components/Utilities/LoginError';
import MovieList from './components/Pages/MovieList';
import SignIN from './components/Pages/SignIN';


const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('identifier', email);
        data.append('password', password);

        const loginRequest = {
            method: 'POST',
            body: data,
            redirect: 'follow',
            url: "https://zm-movies-assignment.herokuapp.com/api/auth/local"
        };

        const listRequest = {
            method: 'get',
            url: 'https://zm-movies-assignment.herokuapp.com/api/movies?populate=*',
            headers: { },
            redirect: 'follow'
        };

        const axios1 = axios(loginRequest);
        const axios2 = axios(listRequest);

        await axios.all([ axios1, axios2])
            .then(axios.spread( (...allData) => {
                const data1 = allData[0];
                const data2 = allData[1];

                console.log(data1);
                console.log(data2);
            }))
            .catch(error => {
                console.log(error)
            })

        //
        // await axios.all([ axios1, axios2]).then(
        //     axios.spread( (...allData) => {
        //         const data1 = allData[0];
        //         const data2 = allData[1];
        //
        //         console.log(data1);
        //         console.log(data);
        //     })
        // )


        // Axios OK
        // await axios
        //     .post(loginRequest.url, data)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     });


        // Fetch
        // await fetch(loginRequest.url, loginRequest)
        //     .then( (response) => {
        //         console.log(response)
        //         response.status === 200 && setLoggedIn(true) && setError('');
        //         response.status === 400 && setError(response.statusText);
        //     })
        //     .then()
        //     .catch(error => console.log('error', error));


        // Alternative Axios ALL
        // const url = "https://zm-movies-assignment.herokuapp.com/api/auth/local";
        // const url2 = "https://zm-movies-assignment.herokuapp.com/api/movies?populate=*";
        // const axios1 = axios.post(url);
        // const axios2 = axios.get(url2);
        //
        // await axios.all([ axios1, axios2]).then(
        //     axios.spread( (...allData) => {
        //         const data1 = allData[0];
        //         const data2 = allData[1];
        //
        //         console.log(data1);
        //         console.log(data);
        //     })
        // )
    };

    const onEmailChange = e => {
        setEmail(e.target.value);
    };

    const onPasswordChange = e => {
        setPassword(e.target.value);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    { !loggedIn ?
                        <Route path='/' element={
                            <SignIN
                                onSubmit={ onSubmit }
                                onEmailChange={ onEmailChange }
                                onPasswordChange={ onPasswordChange }
                                email={ email }
                                password={ password }
                            />
                        } />
                        :
                        <Route path='/' element={ <MovieList/> }/>
                    }
                    <Route path='/create-movie' element={ <CreateMovie/> } />

                </Routes>
                { /*Display Error message if wrong password and if not logged in */
                    error && !loggedIn && <LoginError error={ error }/>
                }

                <footer>
                    <div className='vector-wrapper'>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
};

export default App;

