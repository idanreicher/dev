import React from 'react';

const Input = (props) => {

    return(
       
        <input type="text" value={props.Uname} onChange={props.NamneChange}/>
    )
    
};

export default Input;