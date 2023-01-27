import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default () => {
    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    mt:30,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems:'center'
                }}>
                <CircularProgress color="primary" />
            </Box>
        </Container>
    );
};