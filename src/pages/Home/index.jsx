import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';

import Rule from '../../component/Rule';
import Patron from '../../component/Patron';
import Accordion from '../../component/Accordion';

import './index.css';

const theme = createTheme();

const faqLeft = [
    {
        title: "Qual será o formato do campeonato?", 
        content: `Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt 
                mollit anim id est laborum.`
    },
    {
        title: "Two", 
        content: `Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt 
                mollit anim id est laborum.`
    }
]

const faqRight = [
    {
        title: "O que é permitido no Campeonato?", 
        html:<div style={{marginTop:10, display:'flex', flexDirection:'column'}}><span>Para mais informações, consulte o manual de regras:</span></div>,
        rule:<a style={{color:'#db4d53'}}>Acessar manual de regras e conduta</a>,
        content: `Consumíveis, poções, revestimento, redistribuição dos atributos, redistribuição das habilidades, alternar equipamentos das mesmas armas registradas no campeonato, alternar equipamentos como acessórios e armaduras, alternar entre médio/leve/pesado.`
    },
    {
        title: "O que é NÃO permitido no Campeonato?", 
        html:<div style={{marginTop:10, display:'flex', flexDirection:'column'}}><span>Para mais informações, consulte o manual de regras:</span></div>,
        rule:<a style={{color:'#db4d53'}}>Acessar manual de regras e conduta</a>,
        content: `Utilizar armas que não foram cadastras, ultrapassar limite da área estabelecido pela organização, manter grupo durante o duelo,`
    },
];

const Home = () => {
    const [rule, setRule] = React.useState(false)
    
    const handleRule = () => {
        setRule(true)
    }

    const handleCloseRule = () => {
        setRule(false)
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="relative" sx={{backgroundColor:'transparent', boxShadow: 'none'}}>
                <Toolbar sx={{display:'flex', justifyContent:'space-evenly'}}>
                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', gap:1}}>
                        <Avatar src="./aeternum.png"/>
                        <Box sx={{width:'60px', lineHeight:'15px'}}>
                                Arena Aeternum
                        </Box>
                    </Box>

                    <Box sx={{ display:'flex', justifyContent:'space-between'}}>
                        <Link to="/cadastrar">
                            <Button fullWidth  variant="contained">ALISTAR-SE</Button>
                        </Link>
                    </Box>
               
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    paddingLeft:3,
                    paddingRight:3
                }}
            >
                    
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around'
                    }}
                >
                    <Box
                        sx={{
                            display:'flex',
                            width:'100%',
                            flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'},
                            color:'white',
                            justifyContent:'center'
                        }}
                    >
                        

                        <Box>
                            <Box sx={{fontWeight:'bold', fontSize:'32px'}}>CAMPEONATOS ORGANIZADOS</Box>
                            <Box sx={{fontWeight:'bold', fontSize:'32px'}}>& COMPETITIVOS</Box>
                            <Box sx={{maxWidth:'500px'}}>
                                Todos os registros e estatísticas do Campeonato serão salvos e compartilhados com a comunidade, assim iremos manter um ranqueamento entre os competidores e posteriormente criando o "Championship Invitation", uma liga mais competitiva com mais recompensas e com os melhores jogadores selecionados de acordo com suas estatísticas dos campeonatos.
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <Box className="nw" sx={{height:'400px', width:'300px'}}/>
                        </Box>
                    </Box>

                    <Box 
                        sx={{
                            mt:10,
                            display:'flex',
                            flexDirection:{lg:'row', md:'row', sm:'column', xs:'column'},
                            color:'white',
                            justifyContent:'space-evenly',
                            gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'},
                        }}
                    >
                        <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'}}}>
                            <Box
                                sx={{
                                    padding: '15px 35px 15px 35px',
                                    background: 'rgb(255 255 255 / 7%)',
                                    boxShadow: '0px 13px 23px -13px rgb(0 0 0 / 50%)',
                                    borderRadius: '10px',
                                    textAlign:'center,',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box sx={{fontWeight:'bold', fontSize:'18px'}}>Servidor</Box>
                                <Box sx={{fontSize:'12px'}}>Artorious</Box>
                            </Box>
                            <Box
                                sx={{
                                    padding: '15px 35px 15px 35px',
                                    background: 'rgb(255 255 255 / 7%)',
                                    boxShadow: '0px 13px 23px -13px rgb(0 0 0 / 50%)',
                                    borderRadius: '10px',
                                    textAlign:'center,',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box sx={{fontWeight:'bold', fontSize:'18px'}}>Data do Evento</Box>
                                <Box sx={{fontSize:'12px'}}>Sábado</Box>
                                <Box sx={{fontSize:'12px'}}>07 de Janeiro de 2023 às 17:30</Box>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'}}}>
                            <Box
                                sx={{
                                    padding: '15px 35px 15px 35px',
                                    background: 'rgb(255 255 255 / 7%)',
                                    boxShadow: '0px 13px 23px -13px rgb(0 0 0 / 50%)',
                                    borderRadius: '10px',
                                    textAlign:'center,',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box sx={{fontWeight:'bold', fontSize:'18px'}}>Transmissão</Box>
                                <Box sx={{fontWeight:'bold', fontSize:'12px'}}>Twitch.tv/sinehtv</Box>
                            </Box>
                            <Box
                                sx={{
                                    padding: '15px 35px 15px 35px',
                                    background: 'rgb(255 255 255 / 7%)',
                                    boxShadow: '0px 13px 23px -13px rgb(0 0 0 / 50%)',
                                    borderRadius: '10px',
                                    textAlign:'center,',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                
                                <Box sx={{fontWeight:'bold', fontSize:'18px'}}>Premiação</Box>
                                <Box sx={{display:'flex', flexDirection:"row", justifyContent:'space-around', alignItems:'center'}}>
                                    <Box className="gold" sx={{height:'30px', width:'30px'}}/>
                                    <Typography align='center' sx={{fontSize:'18px'}}>150.000,00</Typography>
                                </Box>
                            </Box>
                            
                        </Box>

                    </Box>

                    <Box 
                        sx={{
                            mt:{lg:10, md:10, sm:10, xs:15},
                            display:{lg:'flex', md:'flex', sm:'flex', xs:'none'},
                            height:'350px',
                            flexDirection:{lg:'row', md:'row', sm:'column', xs:'column'},
                            color:'white',
                            justifyContent:'space-evenly',
                            gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'},
                        }}
                    >
                        <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'}}}>
                            <Box>
                                <Accordion handleRule={handleRule} data={faqLeft}/>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:{lg:'row', md:'row', sm:'row', xs:'column'}, gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'}}}>
                            <Box>
                                <Accordion handleRule={handleRule} data={faqRight}/>
                            </Box>
                        </Box>
                    </Box>

                    <Box 
                        sx={{
                            mb:10,
                            display:'flex',
                            height:'300px',
                            flexDirection:{lg:'row', md:'row', sm:'column', xs:'column'},
                            color:'white',
                            justifyContent:'flex-end',
                            gap:{lg:'2vw', md:'2vw', sm:'4vw', xs:'4vw'},
                        }}
                    >
                        <Patron justifyContent={'flex-end'}/>
                    </Box>
                </Box>
            </Box>
            <Rule open={rule} handleCloseRule={handleCloseRule}/>
        </ThemeProvider>
    );
};

export default Home;