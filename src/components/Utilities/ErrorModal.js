import React from 'react';


const ErrorModal = ({ closeModal }) => {

    return (
        <div className="ErrorModal">
            <div className="modal-content">
                <div className="modal-text">
                    <h5> Please fill out your email and password. </h5>
                    <button onClick={closeModal}> Close </button>
                </div>
            </div>
        </div>
    );
};


export default ErrorModal;
