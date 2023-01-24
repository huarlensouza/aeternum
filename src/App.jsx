import React from 'react';
import Routers from './routers';
import { AuthProvider } from './context/index';

function App () {
    return (
        <AuthProvider>
            <Routers />
        </AuthProvider>
    )
}

export default App;