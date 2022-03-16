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

    const token = localStorage.getItem('token');

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('identifier', email);
        data.append('password', password);

        // for(const [k,v] of data) {console.log(k,v)};

        const loginRequest = {
            data: data,
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            },
            method: 'POST',
            redirect: 'follow',
            url: "https://zm-movies-assignment.herokuapp.com/api/auth/local"
        };



        // Axios OK
        try {
            await axios(loginRequest)
                .then(response => {
                    console.log(response);

                    response.status === 200
                    && setLoggedIn(true)
                    && setError('')
                    && localStorage.setItem('token', response.data.jwt)

                    response.status === 400 && setError(response.statusText);
                })

        } catch (err) {
            console.log(err)
        }
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
                        <Route path='/' element={ <MovieList token={token}/> }/>
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

