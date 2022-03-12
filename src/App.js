import React, { useState } from 'react';
import './App.css';

// Components
import SignIN from './components/Pages/SignIN';
import MovieList from './components/Pages/EmptyMovies';
import LoginError from './components/Utilities/LoginError';


const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        console.log('Form submitted!');
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("identifier", email);
        formdata.append("password", password);

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        await fetch("https://zm-movies-assignment.herokuapp.com/api/auth/local", requestOptions)

            .then(response => {
                console.log(response)
                return response
            })
            .then( (response) => {
                response.status === 200 && setLoggedIn(true) && setError('');
                response.status === 400 && setError(response.statusText);
            })
            .catch(error => console.log('error', error));
    };

    const onEmailChange = e => {
        setEmail(e.target.value);
    };

    const onPasswordChange = e => {
        setPassword(e.target.value);
    };

    return (
        <div className="App">
            { !loggedIn
                ? <SignIN
                    onSubmit={ onSubmit }
                    onEmailChange={ onEmailChange }
                    onPasswordChange={ onPasswordChange }
                    email={ email }
                    password={ password } />
                : <MovieList />
            }

            {
                error && !loggedIn && <LoginError error={error} />
            }
        </div>
    );
};

export default App;

