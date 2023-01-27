import React from 'react';
import Routers from './routers';
import { AuthProvider } from './context/index';

const App = () => {
    return (
        <AuthProvider>
            <Routers />
        </AuthProvider>
    );
};

export default App;