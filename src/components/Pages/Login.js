import React, { useState } from 'react';
import MyMovies from './MyMovies';

const Login = () => {

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
        loggedIn ? <MyMovies /> :
        <div className='SignIn'>
            <h1> Sign in </h1>
            <form onSubmit={onSubmit}>
                <input
                    id='email'
                    onChange={onEmailChange}
                    placeholder='Email'
                    type='email'
                    value={email}
                    autoFocus
                    required
                />

                <input
                    id='password'
                    onChange={onPasswordChange}
                    placeholder='Password'
                    type='password'
                    value={password}
                    required
                />

                <input
                    id='checkbox'
                    type="checkbox"
                    name="checkbox"
                />
                <label htmlFor="checkbox"> Remember me </label>

                <button className='button-login'> Login </button>
            </form>
        </div>
    );
};

export default Login;
