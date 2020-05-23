import React from 'react';

const Validation = (props) => {

    let vlidationMessage = 'text longer then 5 chars';

    if (props.inputLenght <= 5) {
        vlidationMessage = 'test shorter then 5 chars';
    }

    return (

        <p>{vlidationMessage}</p>
    
    );

};

export default Validation;