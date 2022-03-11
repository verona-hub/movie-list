import React, { useState } from 'react';

const SignIN = ({ onSubmit, onEmailChange, onPasswordChange, email, password }) => {

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

export default SignIN;
