import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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
    const [token, setToken] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('identifier', email);
        data.append('password', password);

        const loginRequest = {
            auth: { identifier: email, password: password},
            data: data,
            method: 'POST',
            redirect: 'follow',
            url: "https://zm-movies-assignment.herokuapp.com/api/auth/local"
        };

        const listRequest = {
            method: 'get',
            url: 'https://zm-movies-assignment.herokuapp.com/api/movies?populate=*',
            headers: { populate: '*' },
            redirect: 'follow'
        };

        // Axios OK
        try {
            await axios(loginRequest)
                .then(response => {
                    console.log(response);

                    // if(response.status === 200){
                    //     // setLoggedIn(true) && setError('');
                    //     localStorage.setItem('token', response.data.jwt);
                    // }
                    response.status === 200
                            && setLoggedIn(true)
                            && setError('')
                            && localStorage.setItem('token', response.data.jwt);

                    response.status === 400 && setError(response.statusText);
                })
        } catch (err) {
            console.log(err)
        }


        // Not working - error 403
        // let one = loginRequest.url;
        // let two = listRequest.url;
        //
        // const requestOne = axios.post(one, data);
        // const requestTwo = axios.get(two);
        //
        // await axios
        //     .all([requestOne, requestTwo])
        //     .then(
        //         axios.spread((...responses) => {
        //             const responseOne = responses[0];
        //             const responseTwo = responses[1];
        //
        //             // responses[0].status === 200 && setLoggedIn(true) && setError('');
        //             // use/access the results
        //             console.log(responseOne, responseTwo);
        //         })
        //     )
        //     .catch(errors => {
        //         // react on errors.
        //         console.error(errors);
        //     });


        // await axios.post(loginRequest.url, data)
        //     .then(function (response){
        //         console.log(response);
        //                 response.status === 200 && setLoggedIn(true) && setError('');
        //                 response.status === 400 && setError(response.statusText);
        //     })
        //     .catch(function(error){
        //             console.log(error)
        //         }
        //     )

        // function getLogin(){
        //     return axios.post(loginRequest.url,  data )
        // }
        //
        // function getList(){
        //     return axios.get(listRequest.url);
        // }
        //
        // Promise.all([getLogin(), getList()])
        //     .then( function (results) {
        //         const axios1 = results[0];
        //         const axios2 = results[1];
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // ;


        // Multiple Axios
        // const axios1 = axios.post(loginRequest.url);
        // const axios2 = axios.get(listRequest.url);
        //
        // await Promise.all([ axios1, axios2])
        //     .then(axios.spread( (...allData) => {
        //         const data1 = allData[0];
        //         const data2 = allData[1];
        //
        //         console.log(data1);
        //         console.log(data2);
        //     }))
        //     .catch(error => {
        //         console.log(error)
        //     })


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

