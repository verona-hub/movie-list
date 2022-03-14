import React, { useState } from 'react';


const CreateMovie = () => {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const onTitleChange = e => {
        setTitle(e.target.value);
    };

    const onYearChange = e => {
        setYear(e.target.value);
    };

    const onCancel = () => {
        setTitle('');
        setYear('');
        console.log('Request cancelled!');
    };

    const onSubmit = () => {

        const formdata = new FormData();
        formdata.append("data", title);
        // formdata.append("data", year);
        formdata.append("files.poster", image, "file");


        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://zm-movies-assignment.herokuapp.com/api/movies", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        console.log('Request submitted!')
    };

    const onDragOver = e => {
        e.preventDefault();
    };

    const onDragEnter = e => {
        e.preventDefault();
    };

    const onDragLeave = e => {
        e.preventDefault();
    };

    const onDrop = e => {
        e.preventDefault();

        const file = e.dataTransfer.files;
        checkFileType(file);
        setImage(file[0]);

        console.log(file[0].name);
    };

    const checkFileType = file => {
        const validType = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        return validType.indexOf(file.type) !== -1;
    };

    return (
        <div className="CreateMovie">

            <section
                className="image-wrapper"
                onDragOver={onDragOver}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <h2> Create a new movie </h2>
                <div className='drop-box'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z" fill="white" />
                    </svg>
                    <p className='body-small'> Drop an image here </p>
                </div>
            </section>

            <section className='text-wrapper'>
                <form>

                    <div className='input-wrapper'>
                        <input
                            className='input-title'
                            id='title'
                            onChange={onTitleChange}
                            placeholder='Title'
                            type='text'
                            value={title}
                            required
                        />
                        <input
                            className='input-year'
                            id='publishing-year'
                            maxLength={4}
                            onChange={onYearChange}
                            placeholder='Publishing year'
                            type='text'
                            value={year}
                            required
                        />
                    </div>

                    <div className='buttons-wrapper'>
                        <input
                            className='button cancel-button body-regular'
                            onClick={ onCancel }
                            type='button'
                            value='Cancel'
                        />
                        <input
                            className='button submit-button'
                            onClick={ onSubmit }
                            type='button'
                            value='Submit'
                        />
                    </div>

                </form>
            </section>

        </div>
    );
};


export default CreateMovie;
