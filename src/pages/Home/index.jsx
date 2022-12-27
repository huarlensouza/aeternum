import React from 'react';
import api from '../../api';

const Home = () => {
    const handleGetAuthDiscord = async() => {
        const response = await api.getAuthDiscord();
        window.open(response.data)
    };

    return (
        <button onClick={handleGetAuthDiscord}>Home</button>
    );
};

export default Home;