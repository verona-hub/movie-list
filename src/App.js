import React, { useState } from 'react';
import './App.css';

// Components
import Login from './components/Pages/Login';


const App = () => {
    // State
    const [ loggedIn, setLog ] = useState(false);

    return (
        <div className="App">
            <Login />
        </div>
    );
};

export default App;

