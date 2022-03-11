import React, { useState } from 'react';

const onSubmit = e => {
    console.log('Form submitted!')
    e.preventDefault();
};


const SignIn = () => {
    return (
        <div className='SignIn'>
            <h1> Sign in </h1>
            <form onSubmit={onSubmit}>
                <input
                    placeholder='Email'
                    type='email'
                />

                <input
                    placeholder='Password'
                    type='password'
                />

                <input
                    type="checkbox"
                    name="checkbox"
                />
                <label htmlFor="checkbox"> Remember me </label>

                <input
                    className='button-login'
                    type="submit"
                    value="Login"
                />
            </form>
        </div>
    );
};

export default SignIn;
