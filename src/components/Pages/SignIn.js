import React from 'react';


const SignIn = () => {
    return (
        <div className='SignIn'>
            <h1> Sign in </h1>
            <form>

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
                    id="vehicle3"
                    name="vehicle3"
                    value="Boat"
                />
                <label htmlFor="vehicle3"> Remember me </label>

                <input
                    className='button-login'
                    type="button"
                    value="Login"
                />

            </form>
        </div>
    );
};

export default SignIn;
