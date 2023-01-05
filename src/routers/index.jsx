import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Register from '../pages/Register';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/cadastrar" element={<Register/>}/>
                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;