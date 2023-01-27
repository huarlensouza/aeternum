import React from 'react';

export default ({width, height}) => {
    return (
        <div
            style={{
                width:width,
                height:height,
                backgroundImage:'URL("aeternum.png")',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize: 'cover'
            }} 
            alt="Logo"
        />
    );
};