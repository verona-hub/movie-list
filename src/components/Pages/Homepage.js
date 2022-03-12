import React from 'react';
import SignIN from "./SignIN";
import MovieList from "./MovieList";
import LoginError from "../Utilities/LoginError";

const Homepage = ({ loggedIn, onSubmit, onEmailChange, onPasswordChange, email, password, error }) => {
    return (
        <div>
            { !loggedIn
                ? <SignIN
                    onSubmit={ onSubmit }
                    onEmailChange={ onEmailChange }
                    onPasswordChange={ onPasswordChange }
                    email={ email }
                    password={ password }
                />
                : <MovieList/>
            }

            { /*Display Error message if wrong password and if not logged in */
                error && !loggedIn && <LoginError error={ error }/>
            }
        </div>
    );
};

export default Homepage;
