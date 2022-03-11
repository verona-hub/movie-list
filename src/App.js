import React, { useState } from 'react';
import './App.css';

// Components
import SignIN from './components/Pages/SignIN';
import MyMovies from './components/Pages/MyMovies';


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
            // .then(response => response.text())
            .then(response => console.log(response.status))
            .then( () => { setLoggedIn(true); })
            // .then(result => console.log(result))
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
            {
                loggedIn
                    ? <MyMovies/>
                    : <SignIN
                        onSubmit={ onSubmit }
                        onEmailChange={ onEmailChange }
                        onPasswordChange={ onPasswordChange }
                        email={ email }
                        password={ password }
                    />
            }

        </div>
    );
};

export default App;

