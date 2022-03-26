import React from 'react';

export const Image = (props) => {
    return(
        <img src={props.src} alt={props.alt} className={props.className}/>
    );
}

