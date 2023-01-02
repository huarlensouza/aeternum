import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Setima from '../../assets/patron/setima.png';
import Twitch from '../../assets/patron/twitch.png';
import Modern from '../../assets/patron/modern.jpg';

export default ({justifyContent}) => {
    return (
        <Container maxWidth="sm" sx={{padding: 0, display:'flex', flexDirection:'column', gap:3, justifyContent:justifyContent}}>
            <Box sx={{display:'flex', flexDirection:'row', gap:2, justifyContent: 'center'}}>
                <span className={"text-discord"}>Patrocinadores</span>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', gap:3, justifyContent: 'center'}}>
                <Box
                    sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap:1
                    }}
                >
                    <Typography sx={{fontSize:'10px', color:'#c9c9c9', textAlign:'center'}}>
                        Sétima Expedição
                    </Typography>
                    <img width={24} height={24} src={Setima}/>
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
                    // onClick={handleTwitch}
                >
                    <Typography sx={{fontSize:'10px', color:'#c9c9c9', textAlign:'center'}}>
                        Twitch.tv/sinehtv
                    </Typography>
                    <img width={24} height={24} src={Twitch}/>
                </Box>
                <Box
                    sx={{
                        display:'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap:1
                    }}
                >
                    <Typography sx={{fontSize:'10px', color:'#c9c9c9', textAlign:'center'}}>
                        Espaço Modern
                    </Typography>
                    <img width={24} height={24} src={Modern} style={{borderRadius:'10px'}}/>
                </Box>
            </Box>
        </Container>
    )
}
