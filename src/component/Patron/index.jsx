import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Twitch from '../../assets/patron/twitch.png';
import Modern from '../../assets/patron/modern.png';
import Ninjabet from '../../assets/patron/ninjabet.png';

export default ({justifyContent}) => {
    const handleTwitch = () => window.open('https://www.twitch.tv/sinehtv');
    const handleNinjabet = () => window.open('https://www.n1nja.bet/');

    return (
        <Container maxWidth="sm" sx={{padding: 0, display:'flex', flexDirection:'column', gap:3, justifyContent:justifyContent}}>
            <Box sx={{display:'flex', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:2, justifyContent: 'center'}}>
                <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                    <Box
                        sx={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap:1,
                            cursor:'pointer'
                        }}
                        onClick={handleNinjabet}
                    >
                        <img width={100} height={40} src={Ninjabet}/>
                    </Box>
                    <Box
                        sx={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap:1,
                            cursor:'pointer'
                        }}
                        onClick={handleTwitch}
                    >
                        <img width={100} height={40} src={Twitch}/>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', gap:2}}>
                    <Box
                        sx={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img width={100} height={40} src={Modern} style={{borderRadius:'10px'}}/>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
