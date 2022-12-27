import React from 'react';
import { Box } from '@mui/material';
import logo from './aeternum.png'

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
        >
        </div>
    )
}