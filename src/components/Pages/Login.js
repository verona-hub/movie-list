import React, { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const onSubmit = async (e) => {
        console.log('Form submitted!')
        e.preventDefault();
        setEmail('');
        setPassword('');
    };

    const onEmailChange = e => {
        setEmail(e.target.value);
    };

    const onPasswordChange = e => {
        setPassword(e.target.value);
    };


    return (
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
