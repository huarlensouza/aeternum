import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { styled } from '@mui/material/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Register from '../pages/Register';
import Ranking from '../pages/Ranking';
import Bracket from '../pages/Bracket'
import Home from '../pages/Home';

import Nav from '../component/Nav'
import Patron from '../component/Patron';

import { useAuth } from '../context'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

const Routers = () => {
    const { signed, championship, user } = useAuth();

    return (
        <BrowserRouter>
            <ThemeProvider theme={darkTheme}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                    }}
                >
                    <CssBaseline />
                    <Nav/>
                    <Container component="main" maxWidth="lg">
                        <Routes forceRefresh={true}>
                            <Route exact path="/" element={<Home/>}/>
                            {signed && championship.register == 1 && !user.enrollment && <Route path="/cadastrar" element={<Register/>}/>}
                            <Route path="/classificacao" element={<Ranking/>}/>
                            <Route path="/chaveamento" element={<Bracket/>}/>
                            <Route path="*" element={<Navigate to="/" />}/>
                        </Routes>
                    </Container>
                    <Box
                        component="footer"
                        sx={{
                            py: 3,
                            px: 2,
                            mt: 'auto',
                        }}
                    >
                        <Container maxWidth="md" sx={{mt:15}}>
                            <Patron/>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Routers;