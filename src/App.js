import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

        const config = {
            method: 'post',
            url: 'https://zm-movies-assignment.herokuapp.com/api/auth/local',
            headers: {},
            data : data,
            redirect: 'follow'
        };

        const config2 = {
            method: 'get',
            url: 'https://zm-movies-assignment.herokuapp.com/api/movies?populate=*',
            headers: { },
            redirect: 'follow'
        };

        try {
            const response = await axios.all([
                axios(config)
                    .then(function (response) {
                        console.log(response.data.jwt);
                        response.status === 200 && setLoggedIn(true) && setError('');
                        response.status === 400 && setError(response.statusText);
                    }),
                axios(config2)
                    .then(function (response) {
                        // console.log(JSON.stringify(response.data));
                        console.log(response);
                    })
            ]);
        } catch (error) {
            console.log(error);
        }


        // const formdata = new FormData();
        // formdata.append("identifier", email);
        // formdata.append("password", password);
        //
        // const requestOptions = {
        //     method: 'POST',
        //     body: formdata,
        //     redirect: 'follow',
        //     url: "https://zm-movies-assignment.herokuapp.com/api/auth/local"
        // };
        //
        // await fetch(requestOptions.url, requestOptions)
        // .then( (response) => {
        //     console.log(response)
        //     response.status === 200 && setLoggedIn(true) && setError('');
        //     response.status === 400 && setError(response.statusText);
        // })
        // .catch(error => console.log('error', error));


        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));



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

                    { /*Display Error message if wrong password and if not logged in */
                        error && !loggedIn && <LoginError error={ error }/>
                    }
                </Routes>
                <footer>
                    <div className='vector-wrapper'>

                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
};

export default App;

