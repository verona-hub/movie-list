import React from 'react';


const EmptyMovies = () => {

    const onClick = () => {
    };


    return (
        <div className="MyMovies">
            <h2> Your movie list is empty </h2>
            <button onClick={onClick}> Add a new movie </button>
        </div>
    );
};

export default EmptyMovies;
