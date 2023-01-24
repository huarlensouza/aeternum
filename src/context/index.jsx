import React, { createContext, useContext, useEffect } from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import api from '../api';

import Background from '../assets/background.png'

const AuthContext = createContext({});

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [championship, setChampionship] = React.useState([]);
    const [reload, setReload] = React.useState(false)
    
    const Logout = () => {
        setUser(null);
        localStorage.removeItem('@aeternum');
    };

    const handleReload = () => setReload(true);

    const handleLogin = async(code) => {
        const response = await api.AuthDiscord(code);

        if(response.data.auth && response.data.verified) {
            setUser(response.data)
            localStorage.setItem('@aeternum', JSON.stringify(response.data))
            return {auth:response.data.auth, verified:response.data.verified};
        };
        
        return {auth:response.data.auth, verified:response.data.verified};
    };

    const validToken = async() => {
        const storaged = localStorage.getItem('@aeternum');
        if(storaged) {
            const response = await api.validToken(JSON.parse(localStorage.getItem('@aeternum')).access_token, JSON.parse(localStorage.getItem('@aeternum')).refresh_token);

            if(response.data.auth) {
                localStorage.setItem('@aeternum', JSON.stringify(response.data));
                setUser(response.data);
            };

            if(!response.data.auth) {
                localStorage.removeItem('@aeternum');
            };
        };

        const responseChampionship = await api.getChampionship();
        setChampionship(responseChampionship.data);

        setLoading(false);
    }

    useEffect(() => {
        (async() => {
            await validToken();
        })();
    }, []);

    useEffect(() => {
        (async() => {
            if(reload) {
                setLoading(true);
                await validToken();
                setLoading(false);
            }
            setReload(false)
        })();
    }, [reload]);

    const Loading = () => {
        return (
            <Box
                sx={{
                    backgroundImage:`url(${Background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                    zIndex: '9999',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: loading ? 'flex' : 'none'
                }}
            >
                <CircularProgress sx={{marginTop:'5%', position:'absolute', top:'30%', left:'50%', marginLeft:'auto', marginRight:'auto', transform:'translate(-50%, -50%)'}} size={80}/>
            </Box>
        );
    };

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, handleLogin, Logout, championship, loading: Boolean(loading), handleReload}}>
            {loading &&
                <Loading/>
            }
            
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContext;