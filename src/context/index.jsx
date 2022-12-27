import React, { createContext, useContext, useEffect } from 'react';

import api from '../api';

const AuthContext = createContext({});

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    const Logout = () => {
        setUser(null);
        localStorage.removeItem('@App:data');
    }

    useEffect(() => {
        (async() => {
            // const response = await api.AuthDiscord();
            // setUser(response)
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;