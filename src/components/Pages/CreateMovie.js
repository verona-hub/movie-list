import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";


const CreateMovie = () => {

    const [file, setFile] = useState(null);

    const handleChange = (file) => {
        setFile(file);
    };

    const onDrop = () => {
        console.log('File successfully dropped')
    };

    return (
        <div>
            <h2> Create a new movie </h2>

            <FileUploader
                classes='test'
                handleChange={handleChange}
                label='Drop an image here'
                multiple={true}
                name='my-form'
                onDrop={onDrop}
            />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="white"/>
            </svg>

            <form>
                <input type='text'/>
                <input type='number'/>
            </form>
        </div>
    );
};


export default CreateMovie;
