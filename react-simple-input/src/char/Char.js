import React from 'react';

const Char = (props) => {

    const style = {

        display: "inline-block",
        padding: "16px",
        textAlighn: "center",
        margin: "16px",
        border:"1px solid black"

    };

    return(
        <div style={style} onClick={props.click}>
            {props.characrter}
        </div>
    );

};

export default Char;