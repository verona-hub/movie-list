import React from 'react';


const LoginError = ({ error }) => {
    return (
        <div className="LoginError">
            <h3> { error } </h3>
            <h3> Wrong username or password </h3>
        </div>
    );
};


export default LoginError;
