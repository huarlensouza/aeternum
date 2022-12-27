import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAuth } from '../context/index';

import Home from '../pages/Home';
import Register from '../pages/Register';

const Routers = () => {
    const { signed } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastrar" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;