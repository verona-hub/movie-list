import React from 'react';


const CreateMovie = () => {

    const onCancel = () => {
        console.log('Request cancelled!')
    };

    const onSubmit = () => {
        console.log('Request submitted!')
    };


    return (
        <div className="CreateMovie">

            <section className="image-wrapper">
                <h2> Create a new movie </h2>
                <div className='drop-box'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 11V14H2V11H0V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V11H14ZM13 7L11.59 5.59L9 8.17V0H7V8.17L4.41 5.59L3 7L8 12L13 7Z"
                            fill="white"
                        />
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
                            placeholder='Title'
                            type='text'
                        />
                        <input
                            className='input-year'
                            id='publishing-year'
                            placeholder='Publishing year'
                            type='number'
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
